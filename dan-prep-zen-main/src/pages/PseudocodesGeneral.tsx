import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, LogOut, FileCode } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';

const generalPseudocodes = Array.from({ length: 100 }, (_, i) => {
  const baseTitles = [
    { title: 'Function Output Trace', difficulty: 'Easy', description: 'Trace function execution with given inputs' },
    { title: 'Loop Output Analysis', difficulty: 'Easy', description: 'Analyze nested loop outputs' },
    { title: 'Conditional Expression', difficulty: 'Easy', description: 'Evaluate conditional logic' },
    { title: 'String Manipulation', difficulty: 'Easy', description: 'Determine string operation results' },
    { title: 'Nested Loop Pattern', difficulty: 'Medium', description: 'Calculate nested loop accumulation' },
    { title: 'Array Modification', difficulty: 'Easy', description: 'Track array element changes' },
    { title: 'Recursive Sum', difficulty: 'Medium', description: 'Trace recursive summation' },
    { title: 'Boolean Logic', difficulty: 'Easy', description: 'Evaluate boolean expressions' },
    { title: 'Variable Swap', difficulty: 'Medium', description: 'Understand swap without temp variable' },
    { title: 'Modulo Operation', difficulty: 'Easy', description: 'Calculate with modulo operator' },
    { title: 'String Comparison', difficulty: 'Easy', description: 'Compare string values' },
    { title: 'Increment Operators', difficulty: 'Medium', description: 'Understand pre/post increment' },
    { title: 'Division and Type', difficulty: 'Easy', description: 'Integer vs float division' },
    { title: 'Break Statement', difficulty: 'Easy', description: 'Control flow with break' },
    { title: 'Continue Statement', difficulty: 'Easy', description: 'Skip iteration with continue' },
    { title: 'While Loop', difficulty: 'Easy', description: 'Trace while loop execution' },
    { title: 'Do-While Loop', difficulty: 'Medium', description: 'Understand do-while behavior' },
    { title: 'Array Sum', difficulty: 'Easy', description: 'Calculate array element sum' },
    { title: 'Bitwise AND', difficulty: 'Hard', description: 'Binary AND operation' },
    { title: 'Bitwise OR', difficulty: 'Hard', description: 'Binary OR operation' },
  ];
  
  return {
    id: i + 1,
    ...baseTitles[i % baseTitles.length]
  };
});

export default function PseudocodesGeneral() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const filteredProblems = selectedDifficulty === 'all' 
    ? generalPseudocodes 
    : generalPseudocodes.filter(p => p.difficulty.toLowerCase() === selectedDifficulty);

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">General Pseudocode Trace Questions</h2>
          <p className="text-muted-foreground">
            Practice 100 code execution and trace problems from real placement exams
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-6" onValueChange={setSelectedDifficulty}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All ({generalPseudocodes.length})</TabsTrigger>
            <TabsTrigger value="easy">Easy ({generalPseudocodes.filter(p => p.difficulty === 'Easy').length})</TabsTrigger>
            <TabsTrigger value="medium">Medium ({generalPseudocodes.filter(p => p.difficulty === 'Medium').length})</TabsTrigger>
            <TabsTrigger value="hard">Hard ({generalPseudocodes.filter(p => p.difficulty === 'Hard').length})</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredProblems.map((pseudocode, index) => (
            <Card
              key={pseudocode.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => navigate(`/pseudocodes-general/${pseudocode.id}`)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  <span className={`text-xs px-2 py-1 rounded ${
                    pseudocode.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                    pseudocode.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {pseudocode.difficulty}
                  </span>
                </div>
                <CardTitle className="text-lg">{pseudocode.title}</CardTitle>
                <CardDescription>{pseudocode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate(`/pseudocodes-general/${pseudocode.id}`)}
                >
                  Solve Problem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}