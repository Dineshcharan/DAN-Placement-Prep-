import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, LogOut } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';

const subjects = [
  { 
    id: 'oops', 
    title: 'Object-Oriented Programming', 
    description: 'Master OOP concepts, inheritance, polymorphism, and design patterns',
    count: 100 
  },
  { 
    id: 'dbms', 
    title: 'Database Management Systems', 
    description: 'Learn SQL, normalization, transactions, and database design',
    count: 100 
  },
  { 
    id: 'os', 
    title: 'Operating Systems', 
    description: 'Understand processes, threads, memory management, and scheduling',
    count: 100 
  },
  { 
    id: 'networks', 
    title: 'Computer Networks', 
    description: 'Learn TCP/IP, OSI model, routing, and network protocols',
    count: 100 
  },
  { 
    id: 'cloud', 
    title: 'Cloud Computing', 
    description: 'Learn cloud services, deployment models, AWS, Azure, containers, and DevOps',
    count: 100 
  },
];

export default function TechnicalQuestions() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-indigo-500 to-blue-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">Technical Questions</h1>
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
          <h2 className="text-3xl font-bold mb-2">Choose a Subject</h2>
          <p className="text-muted-foreground">
            Select a subject to practice MCQs with detailed explanations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-slide-up">
          {subjects.map((subject, index) => (
            <Card
              key={subject.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{subject.title}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{subject.count}+ questions</span>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate(`/technical-questions/${subject.id}`)}
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
