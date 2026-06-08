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
  { id: 'reading-comprehension', title: 'Reading Comprehension', description: 'Practice understanding and analyzing passages' },
  { id: 'sentence-correction', title: 'Sentence Correction', description: 'Improve grammar and sentence structure skills' },
  { id: 'vocabulary', title: 'Vocabulary', description: 'Build and enhance your word knowledge' },
  { id: 'synonyms-antonyms', title: 'Synonyms & Antonyms', description: 'Master word relationships and opposites' },
  { id: 'para-jumbles', title: 'Para Jumbles', description: 'Practice arranging sentences logically' },
  { id: 'fill-blanks', title: 'Fill in the Blanks', description: 'Complete sentences with appropriate words' },
];

export default function VerbalAbility() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-green-500 to-teal-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Verbal Ability</h1>
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
                  onClick={() => navigate(`/verbal-ability/${topic.id}`)}
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
