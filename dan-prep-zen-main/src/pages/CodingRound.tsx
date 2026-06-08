import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, LogOut } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { shuffleArray } from '@/utils/questionHelpers';
import { codingProblemsList } from '@/data/codingProblems';

export default function CodingRound() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [displayedProblems, setDisplayedProblems] = useState(codingProblemsList);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    const filtered = difficulty === 'all' 
      ? codingProblemsList 
      : codingProblemsList.filter(p => p.difficulty.toLowerCase() === difficulty);
    setDisplayedProblems(shuffleArray(filtered));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-orange-500 to-red-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Coding Round</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full bg-white/20 border-white/30 hover:bg-white/30">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Coding Problems</h2>
          <p className="text-muted-foreground">
            Master programming fundamentals with carefully selected problems covering arrays, strings, sorting, searching, dynamic programming, and more
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-6" onValueChange={handleDifficultyChange}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            <TabsTrigger value="all">All ({codingProblemsList.length})</TabsTrigger>
            <TabsTrigger value="easy">Easy ({codingProblemsList.filter(p => p.difficulty === 'Easy').length})</TabsTrigger>
            <TabsTrigger value="medium">Medium ({codingProblemsList.filter(p => p.difficulty === 'Medium').length})</TabsTrigger>
            <TabsTrigger value="hard">Hard ({codingProblemsList.filter(p => p.difficulty === 'Hard').length})</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          {displayedProblems.map((problem, index) => (
            <Card
              key={problem.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle>{problem.title}</CardTitle>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
                <CardDescription>{problem.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate(`/coding-round/${problem.id}`)}
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
