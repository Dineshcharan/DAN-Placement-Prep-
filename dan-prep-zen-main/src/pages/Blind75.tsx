import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, LayoutList, Binary, TrendingUp, Share2, CalendarRange, Link, Grid3X3, Type, GitBranch, Layers } from 'lucide-react';
import { blind75Categories } from '@/data/blind75Problems';

const iconMap: Record<string, any> = {
  LayoutList,
  Binary,
  TrendingUp,
  Share2,
  CalendarRange,
  Link,
  Grid3X3,
  Type,
  GitBranch,
  Layers,
};

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-blue-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
  'from-pink-500 to-rose-500',
  'from-emerald-500 to-green-500',
  'from-cyan-500 to-blue-500',
];

export default function Blind75() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-yellow-500 to-orange-500 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="bg-white/20 rounded-full p-2">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Blind 75</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Master the Blind 75</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The most important 75 LeetCode problems curated for coding interviews. 
            Each problem includes solutions in C++, Java, and Python with online compiler links.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="secondary" className="text-lg px-4 py-1">
              75 Problems
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-1">
              {blind75Categories.length} Categories
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {blind75Categories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Target;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => navigate(`/blind-75/${category.id}`)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                    {category.name}
                    <Badge variant="outline">{category.problems.length} problems</Badge>
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {category.problems.slice(0, 3).map(problem => (
                      <Badge 
                        key={problem.id} 
                        variant={problem.difficulty === 'Easy' ? 'secondary' : problem.difficulty === 'Medium' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {problem.difficulty}
                      </Badge>
                    ))}
                    {category.problems.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.problems.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Button variant="secondary" className="w-full">
                    View Problems
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
