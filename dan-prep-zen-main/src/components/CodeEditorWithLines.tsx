import { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Terminal } from 'lucide-react';

interface CodeEditorWithLinesProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  minHeight?: string;
  className?: string;
}

interface ErrorInfo {
  line?: number;
  column?: number;
  type: 'SyntaxError' | 'ReferenceError' | 'TypeError' | 'RuntimeError' | 'CompilationError' | 'Error';
  message: string;
  fullMessage: string;
}

export function parseError(errorMessage: string): ErrorInfo | null {
  if (!errorMessage) return null;
  
  // Try to extract line number from various error formats
  let line: number | undefined;
  let column: number | undefined;
  let type: ErrorInfo['type'] = 'Error';
  let message = errorMessage;

  // Common patterns for line numbers
  const linePatterns = [
    /line\s*(\d+)/i,
    /at\s*line\s*(\d+)/i,
    /:(\d+):(\d+)/,
    /\((\d+):(\d+)\)/,
    /Line\s*(\d+)/i,
    /error\s*at\s*(\d+)/i,
  ];

  for (const pattern of linePatterns) {
    const match = errorMessage.match(pattern);
    if (match) {
      line = parseInt(match[1], 10);
      if (match[2]) {
        column = parseInt(match[2], 10);
      }
      break;
    }
  }

  // Detect error type
  if (errorMessage.includes('SyntaxError') || errorMessage.includes('Unexpected')) {
    type = 'SyntaxError';
  } else if (errorMessage.includes('ReferenceError') || errorMessage.includes('is not defined')) {
    type = 'ReferenceError';
  } else if (errorMessage.includes('TypeError')) {
    type = 'TypeError';
  } else if (errorMessage.includes('Compilation') || errorMessage.includes('compile')) {
    type = 'CompilationError';
  } else if (errorMessage.includes('Runtime')) {
    type = 'RuntimeError';
  }

  // Clean up message
  message = errorMessage
    .replace(/^Error:\s*/i, '')
    .replace(/at\s+.*$/gm, '')
    .trim();

  return {
    line,
    column,
    type,
    message,
    fullMessage: errorMessage,
  };
}

interface OutputDisplayProps {
  output: string;
  isError?: boolean;
  isRunning?: boolean;
}

export function OutputDisplay({ output, isError = false, isRunning = false }: OutputDisplayProps) {
  const errorInfo = isError ? parseError(output) : null;

  if (isRunning) {
    return (
      <div className="bg-secondary/50 rounded-lg p-4 animate-pulse">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="h-4 w-4 text-muted-foreground animate-spin" />
          <p className="text-sm font-medium text-muted-foreground">Running code...</p>
        </div>
      </div>
    );
  }

  if (!output) return null;

  if (isError && errorInfo) {
    return (
      <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-destructive">
                {errorInfo.type}
              </span>
              {errorInfo.line && (
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full font-mono">
                  Line {errorInfo.line}{errorInfo.column ? `:${errorInfo.column}` : ''}
                </span>
              )}
            </div>
            <pre className="text-sm font-mono whitespace-pre-wrap text-destructive/90 bg-destructive/5 p-3 rounded border border-destructive/20">
              {errorInfo.message}
            </pre>
            {errorInfo.line && (
              <p className="text-xs text-muted-foreground">
                💡 Check line {errorInfo.line} in your code for the issue.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary/50 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <p className="text-sm font-medium text-muted-foreground">Output</p>
      </div>
      <pre className="text-sm font-mono whitespace-pre-wrap bg-background/50 p-3 rounded border">
        {output || 'No output'}
      </pre>
    </div>
  );
}

export default function CodeEditorWithLines({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  minHeight = '250px',
  className,
}: CodeEditorWithLinesProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(1);
  const [currentLine, setCurrentLine] = useState(1);

  // Calculate line count
  useEffect(() => {
    const text = value || placeholder;
    const lines = text.split('\n').length;
    setLineCount(Math.max(lines, 10)); // Minimum 10 lines for better UX
  }, [value, placeholder]);

  // Sync scroll between textarea and line numbers
  const handleScroll = useCallback(() => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  }, []);

  // Track current line
  const handleSelect = useCallback(() => {
    if (textareaRef.current) {
      const cursorPosition = textareaRef.current.selectionStart;
      const textBeforeCursor = value.substring(0, cursorPosition);
      const lineNumber = textBeforeCursor.split('\n').length;
      setCurrentLine(lineNumber);
    }
  }, [value]);

  // Handle keyboard events for tab
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = value.substring(0, start) + '    ' + value.substring(end);
        onChange(newValue);
        // Set cursor position after the tab
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 4;
        }, 0);
      }
    }
  }, [value, onChange]);

  return (
    <div 
      className={cn(
        "relative flex rounded-lg border bg-muted/30 overflow-hidden font-mono text-sm",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{ minHeight }}
    >
      {/* Line Numbers */}
      <div
        ref={lineNumbersRef}
        className="flex-shrink-0 bg-muted/50 border-r border-border/50 overflow-hidden select-none"
        style={{ width: '3.5rem' }}
      >
        <div className="py-2 px-2 text-right">
          {Array.from({ length: lineCount }, (_, i) => (
            <div
              key={i + 1}
              className={cn(
                "leading-6 text-xs transition-colors",
                currentLine === i + 1
                  ? "text-primary font-semibold bg-primary/10 -mx-2 px-2 rounded-l"
                  : "text-muted-foreground"
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Code Editor */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        onSelect={handleSelect}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        onKeyUp={handleSelect}
        placeholder={placeholder}
        disabled={disabled}
        spellCheck={false}
        className={cn(
          "flex-1 bg-transparent py-2 px-3 resize-none focus:outline-none leading-6",
          "placeholder:text-muted-foreground/50",
          disabled && "cursor-not-allowed"
        )}
        style={{ 
          minHeight,
          tabSize: 4,
        }}
      />
    </div>
  );
}
