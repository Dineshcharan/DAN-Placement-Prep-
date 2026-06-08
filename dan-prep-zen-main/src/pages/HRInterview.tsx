import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, LogOut } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { hrQuestions } from '@/data/hrQuestions';

export default function HRInterview() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-pink-500 to-rose-500 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-white">HR Interview</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={handleSignOut}
              className="rounded-full bg-white/20 border-white/30 hover:bg-white/30"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Common HR Interview Questions</h2>
          <p className="text-muted-foreground">
            Prepare for your interview with these common questions and best practice answers
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {hrQuestions.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border rounded-lg px-6 bg-card shadow-card hover:shadow-glow transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-lg font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6">
                  <div className="prose prose-sm max-w-none dark:prose-invert space-y-1">
                    {item.answer.split('\n').map((line, i) => {
                      if (line.startsWith('💡') || line.startsWith('🎯')) {
                        return <h3 key={i} className="text-lg font-bold text-primary mt-4 mb-2">{line}</h3>;
                      }
                      if (/^\d+\./.test(line.trim())) {
                        return <p key={i} className="mb-1.5 pl-2 whitespace-pre-wrap">{line}</p>;
                      }
                      return <p key={i} className="mb-1.5 whitespace-pre-wrap">{line}</p>;
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
}
