import { useParams, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Target } from 'lucide-react';
import { getBlind75CategoryById } from '@/data/blind75Problems';

export default function Blind75Topic() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = getBlind75CategoryById(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => navigate('/blind-75')}>Back to Blind 75</Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Hard': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/blind-75')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{category.name}</h1>
              <p className="text-sm text-muted-foreground">{category.problems.length} Problems</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        <div className="grid gap-4">
          {category.problems.map((problem, index) => (
            <Card
              key={problem.id}
              className="group hover:shadow-md transition-all duration-200 cursor-pointer hover:border-primary/50"
              onClick={() => navigate(`/blind-75/${categoryId}/${problem.id}`)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {problem.title}
                    </CardTitle>
                  </div>
                  <Badge className={getDifficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-2 mb-3">
                  {problem.description}
                </CardDescription>
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    C++ • Java • Python
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
