import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TestCase {
  input: string;
  expectedOutput: string;
}

interface ExecuteRequest {
  code: string;
  language: 'sql' | 'python' | 'c' | 'cpp' | 'java';
  testCases: TestCase[];
  sampleInput?: string;
}

interface TestResult {
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  error?: string;
  lineNumber?: number;
  errorType?: string;
}

// Helper function to extract line number and error type from error message
function parseErrorDetails(error: string): { lineNumber?: number; errorType: string; cleanMessage: string } {
  let lineNumber: number | undefined;
  let errorType = 'Error';
  let cleanMessage = error;

  // Try to extract line number from various patterns
  const linePatterns = [
    /at\s+line\s+(\d+)/i,
    /line\s+(\d+)/i,
    /:(\d+):/,
    /\((\d+):\d+\)/,
  ];

  for (const pattern of linePatterns) {
    const match = error.match(pattern);
    if (match) {
      lineNumber = parseInt(match[1], 10);
      break;
    }
  }

  // Detect error type
  if (error.includes('SyntaxError') || error.includes('Unexpected')) {
    errorType = 'SyntaxError';
  } else if (error.includes('ReferenceError') || error.includes('is not defined')) {
    errorType = 'ReferenceError';
  } else if (error.includes('TypeError')) {
    errorType = 'TypeError';
  } else if (error.includes('Missing main') || error.includes('Missing')) {
    errorType = 'CompilationError';
  }

  return { lineNumber, errorType, cleanMessage };
}

// Execute C code (simulated - transpiles simple patterns to JS)
function executeC(code: string, input: string): { output: string; error?: string } {
  try {
    const inputLines = input.trim().split('\n');
    const outputs: string[] = [];
    
    // Check for basic C syntax
    if (!code.includes('main') && !code.includes('int main')) {
      return { output: '', error: 'Missing main function' };
    }
    
    // Simple C to JS transpilation for common patterns
    let jsCode = code
      // Remove includes and macros
      .replace(/#include\s*<[^>]+>/g, '')
      .replace(/#include\s*"[^"]+"/g, '')
      .replace(/#define\s+.*/g, '')
      // Handle printf
      .replace(/printf\s*\(\s*"([^"]*?)\\n"\s*,?\s*([^)]*)\)/g, (_, format, args) => {
        if (args.trim()) {
          return `console.log(${args})`;
        }
        return `console.log("${format}")`;
      })
      .replace(/printf\s*\(\s*"([^"]*?)"\s*,?\s*([^)]*)\)/g, (_, format, args) => {
        if (args.trim()) {
          return `console.log(${args})`;
        }
        return `console.log("${format}")`;
      })
      // Handle scanf - simplified
      .replace(/scanf\s*\(\s*"%d"\s*,\s*&(\w+)\)/g, '$1 = parseInt(readline())')
      .replace(/scanf\s*\(\s*"%s"\s*,\s*(\w+)\)/g, '$1 = readline()')
      .replace(/scanf\s*\(\s*"%f"\s*,\s*&(\w+)\)/g, '$1 = parseFloat(readline())')
      // Variable declarations
      .replace(/int\s+(\w+)\s*;/g, 'let $1;')
      .replace(/int\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = $2;')
      .replace(/float\s+(\w+)\s*;/g, 'let $1;')
      .replace(/double\s+(\w+)\s*;/g, 'let $1;')
      .replace(/char\s+(\w+)\s*\[\d*\]\s*;/g, 'let $1 = "";')
      .replace(/char\s+(\w+)\s*;/g, 'let $1 = "";')
      // Main function
      .replace(/int\s+main\s*\([^)]*\)\s*{/, '')
      .replace(/return\s+0\s*;?\s*}?\s*$/, '');
    
    const wrappedCode = `
      const inputLines = ${JSON.stringify(inputLines)};
      let inputIndex = 0;
      const readline = () => inputLines[inputIndex++] || '';
      const outputs = [];
      const console = { log: (...args) => outputs.push(args.map(String).join(' ')) };
      ${jsCode}
      return outputs.join('\\n');
    `;
    
    const fn = new Function(wrappedCode);
    const result = fn();
    
    return { output: result?.trim() || '' };
  } catch (error: unknown) {
    return { output: '', error: error instanceof Error ? error.message : 'Compilation error' };
  }
}

// Execute C++ code (simulated - transpiles simple patterns to JS)
function executeCpp(code: string, input: string): { output: string; error?: string } {
  try {
    const inputLines = input.trim().split('\n');
    
    // Check for basic C++ syntax
    if (!code.includes('main') && !code.includes('int main')) {
      return { output: '', error: 'Missing main function' };
    }
    
    // Simple C++ to JS transpilation for common patterns
    let jsCode = code
      // Remove includes and using namespace
      .replace(/#include\s*<[^>]+>/g, '')
      .replace(/using\s+namespace\s+\w+\s*;/g, '')
      // Handle cout
      .replace(/cout\s*<<\s*([^<;]+)(?:\s*<<\s*endl)?;/g, 'console.log($1);')
      .replace(/cout\s*<<\s*([^<;]+)\s*<<\s*([^<;]+)(?:\s*<<\s*endl)?;/g, 'console.log($1, $2);')
      // Handle cin
      .replace(/cin\s*>>\s*(\w+)\s*;/g, '$1 = readline();')
      // Variable declarations
      .replace(/int\s+(\w+)\s*;/g, 'let $1;')
      .replace(/int\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = parseInt($2) || $2;')
      .replace(/string\s+(\w+)\s*;/g, 'let $1 = "";')
      .replace(/double\s+(\w+)\s*;/g, 'let $1;')
      .replace(/float\s+(\w+)\s*;/g, 'let $1;')
      // Main function
      .replace(/int\s+main\s*\([^)]*\)\s*{/, '')
      .replace(/return\s+0\s*;?\s*}?\s*$/, '');
    
    const wrappedCode = `
      const inputLines = ${JSON.stringify(inputLines)};
      let inputIndex = 0;
      const readline = () => inputLines[inputIndex++] || '';
      const outputs = [];
      const console = { log: (...args) => outputs.push(args.map(String).join(' ')) };
      ${jsCode}
      return outputs.join('\\n');
    `;
    
    const fn = new Function(wrappedCode);
    const result = fn();
    
    return { output: result?.trim() || '' };
  } catch (error: unknown) {
    return { output: '', error: error instanceof Error ? error.message : 'Compilation error' };
  }
}

// Execute Java code (simulated - transpiles simple patterns to JS)
function executeJava(code: string, input: string): { output: string; error?: string } {
  try {
    const inputLines = input.trim().split('\n');
    
    // Check for basic Java syntax
    if (!code.includes('main') && !code.includes('public static void main')) {
      return { output: '', error: 'Missing main method' };
    }
    
    // Simple Java to JS transpilation for common patterns
    let jsCode = code
      // Remove imports and package
      .replace(/import\s+[^;]+;/g, '')
      .replace(/package\s+[^;]+;/g, '')
      // Remove class declaration
      .replace(/public\s+class\s+\w+\s*{/, '')
      // Handle System.out.println
      .replace(/System\.out\.println\s*\(([^)]*)\)\s*;/g, 'console.log($1);')
      .replace(/System\.out\.print\s*\(([^)]*)\)\s*;/g, 'console.log($1);')
      // Handle Scanner
      .replace(/Scanner\s+\w+\s*=\s*new\s+Scanner\s*\([^)]+\)\s*;/g, '')
      .replace(/(\w+)\.nextLine\s*\(\)/g, 'readline()')
      .replace(/(\w+)\.nextInt\s*\(\)/g, 'parseInt(readline())')
      .replace(/(\w+)\.next\s*\(\)/g, 'readline()')
      // Variable declarations
      .replace(/int\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = $2;')
      .replace(/int\s+(\w+)\s*;/g, 'let $1;')
      .replace(/String\s+(\w+)\s*=\s*([^;]+);/g, 'let $1 = $2;')
      .replace(/String\s+(\w+)\s*;/g, 'let $1 = "";')
      .replace(/double\s+(\w+)\s*;/g, 'let $1;')
      .replace(/float\s+(\w+)\s*;/g, 'let $1;')
      // Main method
      .replace(/public\s+static\s+void\s+main\s*\([^)]*\)\s*{/, '')
      // Remove trailing braces
      .replace(/}\s*}\s*$/, '')
      .replace(/}\s*$/, '');
    
    const wrappedCode = `
      const inputLines = ${JSON.stringify(inputLines)};
      let inputIndex = 0;
      const readline = () => inputLines[inputIndex++] || '';
      const outputs = [];
      const console = { log: (...args) => outputs.push(args.map(String).join(' ')) };
      ${jsCode}
      return outputs.join('\\n');
    `;
    
    const fn = new Function(wrappedCode);
    const result = fn();
    
    return { output: result?.trim() || '' };
  } catch (error: unknown) {
    return { output: '', error: error instanceof Error ? error.message : 'Compilation error' };
  }
}

// Execute Python code (simulated - transpiles to JS)
function executePython(code: string, input: string): { output: string; error?: string } {
  try {
    const inputLines = input.trim().split('\n');
    const outputs: string[] = [];
    
    // Convert Python to JavaScript
    let jsCode = code
      // Handle print with multiple arguments
      .replace(/print\s*\(([^)]+)\)/g, (match, args) => {
        // Handle print with sep and end parameters
        if (args.includes('sep=') || args.includes('end=')) {
          const cleanArgs = args.replace(/,?\s*sep\s*=\s*['"][^'"]*['"]/g, '')
                                .replace(/,?\s*end\s*=\s*['"][^'"]*['"]/g, '');
          return `console.log(${cleanArgs})`;
        }
        return `console.log(${args})`;
      })
      // Handle input()
      .replace(/input\s*\(\s*['"]*[^)]*['"]?\)/g, 'readline()')
      .replace(/input\s*\(\)/g, 'readline()')
      // Handle type conversions
      .replace(/int\s*\(([^)]+)\)/g, 'parseInt($1)')
      .replace(/float\s*\(([^)]+)\)/g, 'parseFloat($1)')
      .replace(/str\s*\(([^)]+)\)/g, 'String($1)')
      // Handle len()
      .replace(/len\s*\(([^)]+)\)/g, '$1.length')
      // Handle range
      .replace(/range\s*\(\s*(\d+)\s*\)/g, '[...Array($1).keys()]')
      .replace(/range\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/g, '[...Array($2 - $1).keys()].map(i => i + $1)')
      // Handle list comprehension (basic)
      .replace(/\[([^[\]]+)\s+for\s+(\w+)\s+in\s+([^\]]+)\]/g, '($3).map($2 => $1)')
      // Handle comments
      .replace(/#.*/g, '')
      // Handle elif
      .replace(/elif\s+/g, 'else if ')
      // Handle basic Python syntax
      .replace(/True/g, 'true')
      .replace(/False/g, 'false')
      .replace(/None/g, 'null')
      .replace(/and/g, '&&')
      .replace(/or/g, '||')
      .replace(/not\s+/g, '!')
      // Handle ** power operator
      .replace(/\*\*/g, '**')
      // Handle // floor division
      .replace(/\/\//g, 'Math.floor(/')
      // Handle split
      .replace(/\.split\s*\(\)/g, '.split(" ")')
      // Handle join
      .replace(/(['"])([^'"]*)\1\.join\s*\(([^)]+)\)/g, '($3).join("$2")');
    
    // Handle indentation-based blocks (simplified)
    const lines = jsCode.split('\n');
    const processedLines: string[] = [];
    let indentStack: number[] = [0];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmed = line.trim();
      
      if (!trimmed) continue;
      
      const currentIndent = line.search(/\S/);
      if (currentIndent === -1) continue;
      
      // Close blocks when indentation decreases
      while (indentStack.length > 1 && currentIndent < indentStack[indentStack.length - 1]) {
        processedLines.push('  '.repeat(indentStack.length - 2) + '}');
        indentStack.pop();
      }
      
      // Check for block starters
      if (trimmed.endsWith(':')) {
        const withBrace = trimmed.slice(0, -1) + ' {';
        processedLines.push('  '.repeat(indentStack.length - 1) + withBrace);
        indentStack.push(currentIndent + 4);
      } else {
        processedLines.push('  '.repeat(Math.max(0, indentStack.length - 1)) + trimmed);
      }
    }
    
    // Close remaining blocks
    while (indentStack.length > 1) {
      processedLines.push('  '.repeat(indentStack.length - 2) + '}');
      indentStack.pop();
    }
    
    jsCode = processedLines.join('\n');
    
    const wrappedCode = `
      const inputLines = ${JSON.stringify(inputLines)};
      let inputIndex = 0;
      const readline = () => inputLines[inputIndex++] || '';
      const outputs = [];
      const console = { log: (...args) => outputs.push(args.map(String).join(' ')) };
      ${jsCode}
      return outputs.join('\\n');
    `;
    
    const fn = new Function(wrappedCode);
    const result = fn();
    
    return { output: result?.trim() || '' };
  } catch (error: unknown) {
    return { output: '', error: error instanceof Error ? error.message : 'Syntax error' };
  }
}

// SQL validation (check syntax patterns)
function executeSQL(code: string, _input: string): { output: string; error?: string } {
  try {
    const normalizedCode = code.trim().toUpperCase().replace(/\s+/g, ' ');
    
    // Basic SQL syntax validation
    const validPatterns = [
      /^SELECT\s+.+\s+FROM\s+/i,
      /^INSERT\s+INTO\s+/i,
      /^UPDATE\s+.+\s+SET\s+/i,
      /^DELETE\s+FROM\s+/i,
      /^CREATE\s+(TABLE|DATABASE|INDEX)/i,
      /^ALTER\s+TABLE/i,
      /^DROP\s+(TABLE|DATABASE|INDEX)/i,
    ];
    
    const isValidSyntax = validPatterns.some(pattern => pattern.test(code.trim()));
    
    if (!isValidSyntax) {
      return { output: '', error: 'Invalid SQL syntax' };
    }
    
    // For SQL, we check if key components are present
    const hasSelect = /SELECT/i.test(code);
    const hasFrom = /FROM/i.test(code);
    const hasWhere = /WHERE/i.test(code);
    const hasJoin = /JOIN/i.test(code);
    const hasGroupBy = /GROUP\s+BY/i.test(code);
    const hasOrderBy = /ORDER\s+BY/i.test(code);
    const hasHaving = /HAVING/i.test(code);
    const hasSubquery = /\(\s*SELECT/i.test(code);
    const hasDistinct = /DISTINCT/i.test(code);
    const hasLimit = /LIMIT/i.test(code);
    
    // Award points based on SQL query complexity and correctness
    let score = 0;
    if (hasSelect && hasFrom) score++;
    if (hasWhere) score++;
    if (hasJoin) score++;
    if (hasGroupBy || hasOrderBy) score++;
    if (hasSubquery || hasDistinct || hasHaving || hasLimit) score++;
    
    // Return a structured analysis
    const analysis = {
      syntax: 'valid',
      score: score,
      components: {
        select: hasSelect,
        from: hasFrom,
        where: hasWhere,
        join: hasJoin,
        groupBy: hasGroupBy,
        orderBy: hasOrderBy,
        having: hasHaving,
        subquery: hasSubquery
      }
    };
    
    return { output: JSON.stringify(analysis) };
  } catch (error: unknown) {
    return { output: '', error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Main execution function that routes to the right language
function executeCode(code: string, language: string, input: string): { output: string; error?: string } {
  switch (language) {
    case 'c':
      return executeC(code, input);
    case 'cpp':
      return executeCpp(code, input);
    case 'java':
      return executeJava(code, input);
    case 'python':
      return executePython(code, input);
    case 'sql':
      return executeSQL(code, input);
    default:
      return { output: '', error: `Unsupported language: ${language}` };
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { code, language, testCases, sampleInput }: ExecuteRequest = await req.json();
    
    console.log(`Executing ${language} code with ${testCases?.length || 0} test cases`);
    
    if (!code) {
      return new Response(
        JSON.stringify({ error: 'No code provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If just running sample (no test cases)
    if (sampleInput !== undefined && (!testCases || testCases.length === 0)) {
      const result = executeCode(code, language, sampleInput);
      
      console.log(`Sample run result: ${result.output || result.error}`);
      
      // Parse error details for better error messages
      let errorDetails = null;
      if (result.error) {
        errorDetails = parseErrorDetails(result.error);
      }
      
      return new Response(
        JSON.stringify({ 
          success: !result.error,
          output: result.output,
          error: result.error ? `${errorDetails?.errorType || 'Error'}${errorDetails?.lineNumber ? ` at line ${errorDetails.lineNumber}` : ''}: ${result.error}` : undefined,
          lineNumber: errorDetails?.lineNumber,
          errorType: errorDetails?.errorType
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Run test cases
    const results: TestResult[] = [];
    let passedCount = 0;

    for (const testCase of testCases || []) {
      const result = executeCode(code, language, testCase.input);
      
      // For SQL, we use a different comparison
      let passed = false;
      if (language === 'sql') {
        try {
          const analysis = JSON.parse(result.output);
          // SQL passes if syntax is valid and has basic components
          passed = analysis.syntax === 'valid' && analysis.score >= 1;
        } catch {
          passed = false;
        }
      } else {
        // For other languages, compare output directly
        const actualOutput = result.output.trim();
        const expectedOutput = testCase.expectedOutput.trim();
        passed = !result.error && actualOutput === expectedOutput;
      }
      
      if (passed) passedCount++;

      // Parse error details
      let errorDetails = null;
      if (result.error) {
        errorDetails = parseErrorDetails(result.error);
      }

      results.push({
        passed,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: result.output,
        error: result.error,
        lineNumber: errorDetails?.lineNumber,
        errorType: errorDetails?.errorType
      });
    }

    console.log(`Test results: ${passedCount}/${testCases?.length || 0} passed`);

    return new Response(
      JSON.stringify({
        success: true,
        passedCount,
        totalCount: testCases?.length || 0,
        results
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error executing code:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
