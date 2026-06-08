import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { ArrowLeft, LogOut, CheckCircle, XCircle } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { reasoningTopics } from '@/data/reasoningQuestions';

const topicData = reasoningTopics;

type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

export default function ReasoningTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  const topic = topicData[topicId || ''];

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const getQuestionDifficulty = (question: any) => {
    if (question.id <= 20) return 'easy';
    if (question.id <= 40) return 'medium';
    return 'hard';
  };

  const filteredQuestions = difficulty === 'all'
    ? topic.questions
    : topic.questions.filter((q: any) => getQuestionDifficulty(q) === difficulty);

  const question = filteredQuestions[currentQuestion];
  const progress = filteredQuestions.length > 0 ? ((currentQuestion + 1) / filteredQuestions.length) * 100 : 0;

  const handleDifficultyChange = (value: Difficulty) => {
    setDifficulty(value);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    setShowExplanation(true);
    const newAnswered = [...answeredQuestions];
    
    if (!newAnswered[currentQuestion]) {
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
      
      if (selectedAnswer === question.correct) {
        setScore(score + 1);
        toast({
          title: "Correct! 🎉",
          description: "Great job!",
        });
      } else {
        toast({
          title: "Incorrect",
          description: "Check the explanation below",
          variant: "destructive",
        });
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/reasoning')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {topic.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={handleSignOut}
              className="rounded-full"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Theory Section */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Theory & Key Points</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{topic.theory}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Important Points:</h3>
                <ul className="space-y-2">
                  {topic.keyPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm text-muted-foreground flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Difficulty Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {(['all', 'easy', 'medium', 'hard'] as Difficulty[]).map((value) => (
              <Button
                key={value}
                onClick={() => handleDifficultyChange(value)}
                variant={difficulty === value ? 'default' : 'outline'}
                className={difficulty === value ? 'bg-primary text-primary-foreground' : ''}
                size="sm"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
                <span className="ml-1 text-xs opacity-80">
                  ({value === 'all' ? topic.questions.length : topic.questions.filter((q: any) => getQuestionDifficulty(q) === value).length})
                </span>
              </Button>
            ))}
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Question {currentQuestion + 1} of {filteredQuestions.length}</span>
              <span>Score: {score}/{answeredQuestions.filter(Boolean).length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          {filteredQuestions.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No questions available for this difficulty level.
              </CardContent>
            </Card>
          ) : (
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg">
                  Q{currentQuestion + 1}. {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {question.options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? showExplanation
                            ? index === question.correct
                              ? 'border-green-500 bg-green-50 dark:bg-green-950'
                              : 'border-red-500 bg-red-50 dark:bg-red-950'
                            : 'border-primary bg-primary/10'
                          : showExplanation && index === question.correct
                          ? 'border-green-500 bg-green-50 dark:bg-green-950'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showExplanation && index === question.correct && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showExplanation && selectedAnswer === index && index !== question.correct && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="bg-muted p-4 rounded-lg animate-fade-in">
                    <h4 className="font-semibold mb-2">Explanation:</h4>
                    <p className="text-sm text-muted-foreground">{question.explanation}</p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  {!showExplanation ? (
                    <Button onClick={handleCheckAnswer} className="flex-1">
                      Check Answer
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={currentQuestion === filteredQuestions.length - 1}
                        className="flex-1"
                      >
                        Next Question
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
