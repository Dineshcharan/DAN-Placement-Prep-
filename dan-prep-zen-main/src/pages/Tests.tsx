import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, LogOut, ClipboardList } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';

const testCategories = [
  {
    id: 'numerical',
    title: 'Numerical Ability Tests',
    description: '5 comprehensive tests with 20 questions each',
    icon: '🔢',
    tests: [
      { id: 1, name: 'Numerical Test 1', duration: '30 min' },
      { id: 2, name: 'Numerical Test 2', duration: '30 min' },
      { id: 3, name: 'Numerical Test 3', duration: '30 min' },
      { id: 4, name: 'Numerical Test 4', duration: '30 min' },
      { id: 5, name: 'Numerical Test 5', duration: '30 min' },
    ]
  },
  {
    id: 'reasoning',
    title: 'Reasoning Tests',
    description: '5 comprehensive tests with 20 questions each',
    icon: '🧠',
    tests: [
      { id: 1, name: 'Reasoning Test 1', duration: '30 min' },
      { id: 2, name: 'Reasoning Test 2', duration: '30 min' },
      { id: 3, name: 'Reasoning Test 3', duration: '30 min' },
      { id: 4, name: 'Reasoning Test 4', duration: '30 min' },
      { id: 5, name: 'Reasoning Test 5', duration: '30 min' },
    ]
  },
  {
    id: 'technical',
    title: 'Technical Tests',
    description: '5 comprehensive tests with 20 questions each',
    icon: '💻',
    tests: [
      { id: 1, name: 'Technical Test 1', duration: '30 min' },
      { id: 2, name: 'Technical Test 2', duration: '30 min' },
      { id: 3, name: 'Technical Test 3', duration: '30 min' },
      { id: 4, name: 'Technical Test 4', duration: '30 min' },
      { id: 5, name: 'Technical Test 5', duration: '30 min' },
    ]
  },
  {
    id: 'pseudocode',
    title: 'Pseudocode Tests',
    description: '5 comprehensive tests with 20 questions each',
    icon: '📝',
    tests: [
      { id: 1, name: 'Pseudocode Test 1', duration: '30 min' },
      { id: 2, name: 'Pseudocode Test 2', duration: '30 min' },
      { id: 3, name: 'Pseudocode Test 3', duration: '30 min' },
      { id: 4, name: 'Pseudocode Test 4', duration: '30 min' },
      { id: 5, name: 'Pseudocode Test 5', duration: '30 min' },
    ]
  },
  {
    id: 'verbal',
    title: 'Verbal Ability Tests',
    description: '5 comprehensive tests with 20 questions each',
    icon: '📚',
    tests: [
      { id: 1, name: 'Verbal Test 1', duration: '30 min' },
      { id: 2, name: 'Verbal Test 2', duration: '30 min' },
      { id: 3, name: 'Verbal Test 3', duration: '30 min' },
      { id: 4, name: 'Verbal Test 4', duration: '30 min' },
      { id: 5, name: 'Verbal Test 5', duration: '30 min' },
    ]
  },
];

export default function Tests() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('easy');

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-primary';
    }
  };

  const getDifficultyDescription = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Basic concepts & straightforward calculations';
      case 'medium': return 'Multi-step problems requiring deeper understanding';
      case 'hard': return 'Complex problems with tricky logic & advanced concepts';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Practice Tests</h1>
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
          <h2 className="text-3xl font-bold mb-2">Mock Tests</h2>
          <p className="text-muted-foreground">
            Take comprehensive tests to evaluate your preparation
          </p>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Difficulty Level</h3>
          <Tabs value={selectedDifficulty} onValueChange={setSelectedDifficulty} className="mb-4">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="easy" className="data-[state=active]:text-green-500">Easy</TabsTrigger>
              <TabsTrigger value="medium" className="data-[state=active]:text-yellow-500">Medium</TabsTrigger>
              <TabsTrigger value="hard" className="data-[state=active]:text-red-500">Hard</TabsTrigger>
            </TabsList>
          </Tabs>
          <p className={`text-sm ${getDifficultyColor(selectedDifficulty)}`}>
            {getDifficultyDescription(selectedDifficulty)}
          </p>
        </div>

        <div className="space-y-8">
          {testCategories.map((category, catIndex) => (
            <div key={category.id} className="animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.tests.map((test, index) => (
                  <Card
                    key={test.id}
                    className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <ClipboardList className="h-5 w-5 text-primary" />
                        <span className="text-xs text-muted-foreground">{test.duration}</span>
                      </div>
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <CardDescription>
                        20 Questions • <span className={getDifficultyColor(selectedDifficulty) + ' font-medium capitalize'}>{selectedDifficulty}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="secondary" 
                        className="w-full"
                        onClick={() => navigate(`/tests/${category.id}/${test.id}?difficulty=${selectedDifficulty}`)}
                      >
                        Start Test
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
