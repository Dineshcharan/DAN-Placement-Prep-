import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ExternalLink, Target, Copy, Check } from 'lucide-react';
import { getBlind75ProblemById, getBlind75CategoryById } from '@/data/blind75Problems';
import { toast } from 'sonner';

export default function Blind75Problem() {
  const { categoryId, problemId } = useParams();
  const navigate = useNavigate();
  const [copiedLang, setCopiedLang] = useState<string | null>(null);
  
  const problem = getBlind75ProblemById(problemId || '');
  const category = getBlind75CategoryById(categoryId || '');

  if (!problem || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Problem Not Found</h1>
          <Button onClick={() => navigate('/blind-75')}>Back to Blind 75</Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Hard': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return '';
    }
  };

  const copyCode = (code: string, lang: string) => {
    navigator.clipboard.writeText(code);
    setCopiedLang(lang);
    toast.success(`${lang} code copied to clipboard!`);
    setTimeout(() => setCopiedLang(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(`/blind-75/${categoryId}`)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold line-clamp-1">{problem.title}</h1>
              <p className="text-sm text-muted-foreground">{category.name} • Blind 75</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getDifficultyColor(problem.difficulty)}>
              {problem.difficulty}
            </Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem Description */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Problem Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-3 mb-2 font-mono text-sm">
                      <div><span className="text-muted-foreground">Input:</span> {example.input}</div>
                      <div><span className="text-muted-foreground">Output:</span> {example.output}</div>
                      {example.explanation && (
                        <div className="text-muted-foreground text-xs mt-1">
                          {example.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Constraints:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Online Compilers */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Online</CardTitle>
                <CardDescription>
                  Copy the solution and run it in an online compiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(problem.compilerLinks.cpp, '_blank')}
                  >
                    <span className="font-bold">C++</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(problem.compilerLinks.java, '_blank')}
                  >
                    <span className="font-bold">Java</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex flex-col h-auto py-4 gap-2"
                    onClick={() => window.open(problem.compilerLinks.python, '_blank')}
                  >
                    <span className="font-bold">Python</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solutions */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Solutions</CardTitle>
              <CardDescription>
                Complete solutions in C++, Java, and Python
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="java" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="cpp">C++</TabsTrigger>
                  <TabsTrigger value="java">Java</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                
                <TabsContent value="cpp">
                  <div className="relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyCode(problem.cppSolution, 'C++')}
                    >
                      {copiedLang === 'C++' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                      <code>{problem.cppSolution}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="java">
                  <div className="relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyCode(problem.javaSolution, 'Java')}
                    >
                      {copiedLang === 'Java' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                      <code>{problem.javaSolution}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="python">
                  <div className="relative">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 z-10"
                      onClick={() => copyCode(problem.pythonSolution, 'Python')}
                    >
                      {copiedLang === 'Python' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm max-h-[500px] overflow-y-auto">
                      <code>{problem.pythonSolution}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
