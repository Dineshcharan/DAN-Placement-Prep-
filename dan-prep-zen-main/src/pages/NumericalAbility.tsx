import { useState } from 'react';
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
  { id: 'profit-loss', title: 'Profit & Loss', description: 'Learn about cost price, selling price, and profit calculations' },
  { id: 'time-work', title: 'Time & Work', description: 'Master problems related to work efficiency and time management' },
  { id: 'averages', title: 'Averages', description: 'Understand mean, median, and weighted averages' },
  { id: 'ratios', title: 'Ratios & Proportions', description: 'Practice ratio, proportion, and variation problems' },
  { id: 'percentages', title: 'Percentages', description: 'Calculate percentage increase, decrease, and applications' },
  { id: 'simple-interest', title: 'Simple Interest', description: 'Learn principal, rate, time, and interest calculations' },
  { id: 'compound-interest', title: 'Compound Interest', description: 'Calculate compound interest and effective rates' },
  { id: 'time-speed-distance', title: 'Time, Speed & Distance', description: 'Solve problems on relative speed and motion' },
  { id: 'probability', title: 'Probability', description: 'Learn basic probability and expected outcomes' },
  { id: 'permutation-combination', title: 'Permutation & Combination', description: 'Master arrangement and selection problems' },
  { id: 'pipes-cisterns', title: 'Pipes & Cisterns', description: 'Solve problems on filling and emptying tanks' },
  { id: 'boats-streams', title: 'Boats & Streams', description: 'Calculate speed in still water and stream' },
  { id: 'alligation-mixture', title: 'Alligation & Mixture', description: 'Mix different quantities at different prices' },
  { id: 'calendar', title: 'Calendar', description: 'Find day of the week for any date' },
  { id: 'clocks', title: 'Clocks', description: 'Angle between hands and time problems' },
];

export default function NumericalAbility() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm">
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
            <h1 className="text-xl font-bold text-white">Numerical Ability</h1>
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
          <h2 className="text-3xl font-bold mb-2">Choose a Topic</h2>
          <p className="text-muted-foreground">
            Select a topic to view theory and practice questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {topics.map((topic, index) => (
            <Card
              key={topic.id}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => navigate(`/numerical-ability/${topic.id}`)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
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
