import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, LogOut, ChevronLeft, ChevronRight, CheckCircle, XCircle, Code2 } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { generalPseudocodeQuestions } from '@/data/generalPseudocodeQuestions';

export default function GeneralPseudocodeTopic() {
  const { pseudocodeId } = useParams();
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const questionIndex = parseInt(pseudocodeId || '1') - 1;
  const question = generalPseudocodeQuestions[questionIndex];

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [questionIndex]);

  useEffect(() => {
    const loadProgress = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from('user_progress')
        .select('question_id, is_correct')
        .eq('user_id', user.id)
        .eq('category', 'pseudocodes')
        .eq('topic', 'general');
      
      if (data) {
        const answered = new Set(data.map(p => parseInt(p.question_id) - 1));
        setAnsweredQuestions(answered);
        const correctCount = data.filter(p => p.is_correct).length;
        setScore(correctCount);
      }
    };
    
    loadProgress();
  }, [user]);

  if (!question || questionIndex < 0 || questionIndex >= generalPseudocodeQuestions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Pseudocode not found</h2>
          <Button onClick={() => navigate('/pseudocodes-general')}>Back to General Pseudocodes</Button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleCheckAnswer = async () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "Choose one of the options before checking.",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === question.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: "Well done!",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Review the explanation below.",
        variant: "destructive",
      });
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(questionIndex));
    setShowExplanation(true);

    // Save progress to database
    if (user) {
      await supabase.from('user_progress').upsert({
        user_id: user.id,
        category: 'pseudocodes',
        topic: 'general',
        question_id: String(questionIndex + 1),
        is_correct: isCorrect,
      }, {
        onConflict: 'user_id,category,topic,question_id'
      });
    }
  };

  const handleNext = () => {
    if (questionIndex < generalPseudocodeQuestions.length - 1) {
      navigate(`/pseudocodes-general/${questionIndex + 2}`);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      navigate(`/pseudocodes-general/${questionIndex}`);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const progress = (answeredQuestions.size / generalPseudocodeQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/pseudocodes-general')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium">
              Score: {score}
            </div>
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {questionIndex + 1} of {generalPseudocodeQuestions.length}</span>
              <span>{answeredQuestions.size} Answered ({Math.round(progress)}%)</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <div className="mb-4">
                <CardTitle className="text-2xl mb-2">{question.title}</CardTitle>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Pseudocode</h3>
                </div>
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {question.pseudocode}
                </pre>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">{question.question}</h3>
                <div className="space-y-3">
                  {question.options.map((option: string, index: number) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showResult = showExplanation;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          isSelected
                            ? showResult
                              ? isCorrect
                                ? 'border-green-500 bg-green-500/10'
                                : 'border-red-500 bg-red-500/10'
                              : 'border-primary bg-primary/10'
                            : showResult && isCorrect
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-border hover:border-primary/50'
                        } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showResult && isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!showExplanation ? (
                <Button onClick={handleCheckAnswer} className="w-full" size="lg">
                  Check Answer
                </Button>
              ) : (
                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Explanation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={questionIndex === 0}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={questionIndex === generalPseudocodeQuestions.length - 1}
                  className="flex-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}