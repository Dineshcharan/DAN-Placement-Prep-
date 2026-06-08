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
import { numericalTopics } from '@/data/numericalQuestions';

const topicFormulas: Record<string, { formulas: string[]; theory: string }> = {
  'profit-loss': {
    formulas: [
      'Profit = Selling Price (SP) - Cost Price (CP)',
      'Loss = Cost Price (CP) - Selling Price (SP)',
      'Profit% = (Profit / CP) × 100',
      'Loss% = (Loss / CP) × 100',
      'SP = CP × (100 + Profit%) / 100',
      'CP = SP × 100 / (100 + Profit%)',
    ],
    theory: 'Profit and Loss deals with calculating gains or losses in business transactions. Understanding the relationship between cost price, selling price, and profit/loss percentage is crucial for solving these problems.',
  },
  'time-work': {
    formulas: [
      'Work = Time × Efficiency',
      'If A can do work in x days, work done in 1 day = 1/x',
      'If A and B together can do work in x days, (1/A + 1/B) = 1/x',
      'If A is twice as efficient as B, A does work in half the time',
      'Total work = LCM of individual days (for easier calculation)',
    ],
    theory: 'Time and Work problems deal with the rate at which work is completed. The key is to find the work done per unit time and use ratios to solve problems.',
  },
  'averages': {
    formulas: [
      'Average = Sum of observations / Number of observations',
      'Sum = Average × Number of observations',
      'New Average when one value added = (Old Sum + New Value) / (n + 1)',
      'Weighted Average = (w₁x₁ + w₂x₂ + ...) / (w₁ + w₂ + ...)',
    ],
    theory: 'Average represents the central value of a set of numbers. It\'s the sum of all values divided by the count of values.',
  },
  'ratios': {
    formulas: [
      'If a:b = c:d, then ad = bc (Cross multiplication)',
      'Compound ratio of a:b and c:d is ac:bd',
      'If a:b = c:d, then (a+b):(c+d) = (a-b):(c-d) (Componendo-Dividendo)',
      'Fourth proportional: If a:b = c:d, then d is fourth proportional',
      'Third proportional: If a:b = b:c, then c is third proportional',
    ],
    theory: 'Ratio is the comparison of two quantities. Proportion shows that two ratios are equal. Understanding ratios helps in solving problems involving comparisons and divisions.',
  },
  'percentages': {
    formulas: [
      'Percentage = (Value / Total) × 100',
      'Value = (Percentage / 100) × Total',
      'Percentage Increase = [(New - Old) / Old] × 100',
      'Percentage Decrease = [(Old - New) / Old] × 100',
      'Successive change: If a% then b%, final = a + b + ab/100',
    ],
    theory: 'Percentage means per hundred. It\'s a way of expressing a number as a fraction of 100. Percentages are widely used in profit-loss, discounts, and comparisons.',
  },
  'simple-interest': {
    formulas: [
      'Simple Interest (SI) = (P × R × T) / 100',
      'Amount = Principal + Simple Interest',
      'Principal (P) = (SI × 100) / (R × T)',
      'Rate (R) = (SI × 100) / (P × T)',
      'Time (T) = (SI × 100) / (P × R)',
    ],
    theory: 'Simple Interest is calculated only on the principal amount throughout the loan period. The interest remains constant for each time period.',
  },
  'compound-interest': {
    formulas: [
      'Compound Interest (CI) = P(1 + R/100)^T - P',
      'Amount = P(1 + R/100)^T',
      'Effective Rate = (1 + R/100)^n - 1 for n compounding periods',
      'CI - SI for 2 years = P(R/100)²',
    ],
    theory: 'Compound Interest is calculated on the principal plus accumulated interest. Interest is compounded at regular intervals.',
  },
  'time-speed-distance': {
    formulas: [
      'Speed = Distance / Time',
      'Distance = Speed × Time',
      'Time = Distance / Speed',
      'Average Speed = Total Distance / Total Time',
      'Relative Speed (same direction) = |S1 - S2|',
      'Relative Speed (opposite direction) = S1 + S2',
    ],
    theory: 'Time, Speed, and Distance problems involve calculating one quantity when the other two are given.',
  },
  'probability': {
    formulas: [
      'Probability = Favorable Outcomes / Total Outcomes',
      'P(A or B) = P(A) + P(B) - P(A and B)',
      'P(A and B) = P(A) × P(B) for independent events',
      'P(not A) = 1 - P(A)',
    ],
    theory: 'Probability measures the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain).',
  },
  'permutation-combination': {
    formulas: [
      'nPr = n! / (n-r)!',
      'nCr = n! / (r! × (n-r)!)',
      'nC0 = nCn = 1',
      'nCr = nC(n-r)',
    ],
    theory: 'Permutation deals with arrangement where order matters, while combination deals with selection where order doesn\'t matter.',
  },
  'pipes-cisterns': {
    formulas: [
      'If pipe fills in x hours, part filled in 1 hour = 1/x',
      'If pipe empties in y hours, part emptied in 1 hour = 1/y',
      'Net work = Inlet rate - Outlet rate',
    ],
    theory: 'Pipes and Cisterns problems are similar to Time and Work, dealing with filling/emptying tanks.',
  },
  'boats-streams': {
    formulas: [
      'Downstream Speed = Boat Speed + Stream Speed',
      'Upstream Speed = Boat Speed - Stream Speed',
      'Boat Speed = (Downstream + Upstream) / 2',
      'Stream Speed = (Downstream - Upstream) / 2',
    ],
    theory: 'Boats and Streams problems involve calculating speeds when moving with or against a current.',
  },
  'alligation-mixture': {
    formulas: [
      'Cheaper quantity / Dearer quantity = (Mean price - Cheaper price) / (Dearer price - Mean price)',
      'Final quantity = (Quantity₁ × Concentration₁ + Quantity₂ × Concentration₂) / (Quantity₁ + Quantity₂)',
    ],
    theory: 'Alligation is used to find the ratio in which two or more ingredients at different prices must be mixed.',
  },
  'calendar': {
    formulas: [
      'Odd days = Total days % 7',
      'Ordinary year = 365 days = 52 weeks + 1 odd day',
      'Leap year = 366 days = 52 weeks + 2 odd days',
      'Century not divisible by 400 = 0 odd days',
    ],
    theory: 'Calendar problems involve finding the day of the week for a given date.',
  },
  'clocks': {
    formulas: [
      'Angle of hour hand = 0.5° × (60H + M)',
      'Angle of minute hand = 6° × M',
      'Angle between hands = |11M - 60H| / 2',
      'Hands coincide 11 times in 12 hours',
    ],
    theory: 'Clock problems involve calculating angles between clock hands and positions at given times.',
  },
};

const getTopicData = (topicId: string) => {
  const questionData = numericalTopics[topicId];
  const formulaData = topicFormulas[topicId];
  if (!questionData || !formulaData) return null;
  return {
    title: questionData.title,
    formulas: formulaData.formulas,
    theory: formulaData.theory,
    questions: questionData.questions,
  };
};

type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

export default function NumericalTopic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  const topic = getTopicData(topicId || '');

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const filteredQuestions = difficulty === 'all'
    ? topic.questions
    : topic.questions.filter((q: any) => q.difficulty === difficulty);

  const question = filteredQuestions[currentQuestion];
  const progress = filteredQuestions.length > 0 ? ((currentQuestion + 1) / filteredQuestions.length) * 100 : 0;

  const handleDifficultyChange = (d: Difficulty) => {
    setDifficulty(d);
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

  const difficultyButtons: { label: string; value: Difficulty; color: string }[] = [
    { label: 'All', value: 'all', color: 'bg-primary text-primary-foreground' },
    { label: 'Easy', value: 'easy', color: 'bg-green-500 text-white' },
    { label: 'Medium', value: 'medium', color: 'bg-yellow-500 text-white' },
    { label: 'Hard', value: 'hard', color: 'bg-red-500 text-white' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/numerical-ability')}
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
          {/* Difficulty Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {difficultyButtons.map((btn) => (
              <Button
                key={btn.value}
                onClick={() => handleDifficultyChange(btn.value)}
                variant={difficulty === btn.value ? 'default' : 'outline'}
                className={difficulty === btn.value ? btn.color : ''}
                size="sm"
              >
                {btn.label}
                {btn.value !== 'all' && (
                  <span className="ml-1 text-xs opacity-80">
                    ({topic.questions.filter((q: any) => q.difficulty === btn.value).length})
                  </span>
                )}
                {btn.value === 'all' && (
                  <span className="ml-1 text-xs opacity-80">
                    ({topic.questions.length})
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Theory Section */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Theory & Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{topic.theory}</p>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Important Formulas:</h3>
                <ul className="space-y-2">
                  {topic.formulas.map((formula: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <code className="bg-muted px-2 py-1 rounded text-sm flex-1">
                        {formula}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {filteredQuestions.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No questions available for this difficulty level.
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Question {currentQuestion + 1} of {filteredQuestions.length}</span>
                  <span>Score: {score}/{answeredQuestions.filter(Boolean).length}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question Card */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Q{currentQuestion + 1}. {question.question}
                    </CardTitle>
                    {question.difficulty && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        question.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                        question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                      </span>
                    )}
                  </div>
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
                    {!showExplanation && (
                      <Button onClick={handleCheckAnswer} className="flex-1">
                        Check Answer
                      </Button>
                    )}
                    {showExplanation && (
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
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
