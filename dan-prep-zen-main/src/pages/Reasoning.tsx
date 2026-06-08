import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, LogOut } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';

const topics = [
  { id: 'blood-relations', title: 'Blood Relations', description: 'Understand family relationships and solve related problems' },
  { id: 'coding-decoding', title: 'Coding-Decoding', description: 'Master pattern recognition and decoding techniques' },
  { id: 'puzzles', title: 'Puzzles', description: 'Solve logical puzzles and arrangement problems' },
  { id: 'syllogisms', title: 'Syllogisms', description: 'Learn deductive reasoning and logical conclusions' },
  { id: 'series', title: 'Series Completion', description: 'Practice number and letter series patterns' },
  { id: 'direction-sense', title: 'Direction Sense', description: 'Navigate direction-based logical problems' },
  { id: 'seating-arrangement', title: 'Seating Arrangement', description: 'Solve circular and linear arrangement problems' },
  { id: 'ranking-order', title: 'Ranking & Order', description: 'Determine positions in sequences' },
  { id: 'data-sufficiency', title: 'Data Sufficiency', description: 'Identify if given data is sufficient' },
  { id: 'statement-conclusion', title: 'Statement & Conclusion', description: 'Draw logical conclusions from statements' },
  { id: 'cause-effect', title: 'Cause & Effect', description: 'Identify relationships between events' },
  { id: 'logical-venn', title: 'Logical Venn Diagrams', description: 'Represent relationships using Venn diagrams' },
  { id: 'input-output', title: 'Input-Output', description: 'Trace operations through machine logic' },
  { id: 'analogy', title: 'Analogy', description: 'Find similar relationships between pairs' },
  { id: 'classification', title: 'Classification', description: 'Identify odd one out from group' },
];

export default function Reasoning() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Reasoning</h1>
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
          <h2 className="text-3xl font-bold mb-2">Choose a Topic</h2>
          <p className="text-muted-foreground">Select a topic to view theory and practice questions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {topics.map((topic, index) => (
            <Card
              key={topic.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate(`/reasoning/${topic.id}`)}
                >
                  Start Practice
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
