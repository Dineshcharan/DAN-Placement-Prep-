import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, LogOut, CheckCircle2, XCircle } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { verbalTopics } from '@/data/verbalQuestions';

const verbalData = verbalTopics;

export default function VerbalTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const topic = verbalData[topicId || ''];

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Topic not found</h2>
          <Button onClick={() => navigate('/verbal-ability')}>Back to Verbal Ability</Button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (index: number) => {
    if (!answeredQuestions.has(currentQuestion)) {
      setSelectedAnswer(index);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "Choose one of the options before checking.",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === topic.questions[currentQuestion].correctAnswer;
    
    if (!answeredQuestions.has(currentQuestion)) {
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
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const progress = ((currentQuestion + 1) / topic.questions.length) * 100;
  const question = topic.questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/verbal-ability')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium">
              Score: {score}/{answeredQuestions.size}
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
              <span>Question {currentQuestion + 1} of {topic.questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">{topic.description}</CardTitle>
              {question.passage && (
                <CardDescription className="text-base leading-relaxed mt-4 p-4 bg-muted rounded-lg">
                  {question.passage}
                </CardDescription>
              )}
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
                        disabled={answeredQuestions.has(currentQuestion)}
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
                        } ${answeredQuestions.has(currentQuestion) ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
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
                      <CheckCircle2 className="h-5 w-5" />
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
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentQuestion === topic.questions.length - 1}
                  className="flex-1"
                >
                  Next
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
