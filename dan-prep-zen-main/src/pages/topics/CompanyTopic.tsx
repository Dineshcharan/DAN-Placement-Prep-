import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Building2, LogOut, Code2, ExternalLink, Copy, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { getCompanyById, getCompanyProblemById } from '@/data/companyProblems';
import { toast } from 'sonner';

const defaultCompilerLinks = {
  cpp: 'https://www.programiz.com/cpp-programming/online-compiler/',
  java: 'https://www.programiz.com/java-programming/online-compiler/',
  python: 'https://www.programiz.com/python-programming/online-compiler/'
};

export default function CompanyTopic() {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedProblemId, setSelectedProblemId] = useState<number | null>(null);
  const [copiedLang, setCopiedLang] = useState<string | null>(null);

  const company = getCompanyById(companyId || '');

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleCopy = (code: string, lang: string) => {
    navigator.clipboard.writeText(code);
    setCopiedLang(lang);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopiedLang(null), 2000);
  };

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <Button onClick={() => navigate('/company-questions')}>Back to Companies</Button>
        </div>
      </div>
    );
  }

  const selectedProblem = selectedProblemId ? getCompanyProblemById(companyId || '', selectedProblemId) : null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Hard': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return '';
    }
  };

  if (selectedProblem) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b bg-card shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setSelectedProblemId(null)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className={`bg-gradient-to-r ${company.gradient} rounded-full p-2`}>
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{selectedProblem.title}</h1>
                <p className="text-sm text-muted-foreground">{company.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={getDifficultyColor(selectedProblem.difficulty)}>{selectedProblem.difficulty}</Badge>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{selectedProblem.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-1">Input</p>
                  <p className="text-sm text-muted-foreground">{selectedProblem.input}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-1">Output</p>
                  <p className="text-sm text-muted-foreground">{selectedProblem.output}</p>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-1">Example</p>
                <p className="text-sm"><span className="text-muted-foreground">Input:</span> {selectedProblem.example.input}</p>
                <p className="text-sm"><span className="text-muted-foreground">Output:</span> {selectedProblem.example.output}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice Online</CardTitle>
              <CardDescription>Open an online compiler to practice</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {Object.entries(defaultCompilerLinks).map(([lang, url]) => (
                <Button key={lang} variant="outline" onClick={() => window.open(url, '_blank')} className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {lang === 'cpp' ? 'C++' : lang === 'java' ? 'Java' : 'Python'}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solutions</CardTitle>
              <CardDescription>View solutions in C++, Java, and Python</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cpp">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cpp">C++</TabsTrigger>
                  <TabsTrigger value="java">Java</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>
                {Object.entries(selectedProblem.solutions).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => handleCopy(code, lang)}
                      >
                        {copiedLang === lang ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/company-questions')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className={`bg-gradient-to-r ${company.gradient} rounded-full p-2`}>
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{company.name}</h1>
              <p className="text-sm text-muted-foreground">{company.problems.length} Coding Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={handleSignOut} className="rounded-full">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-muted-foreground">{company.description}</p>
        </div>

        <div className="grid gap-4">
          {company.problems.map((problem, index) => (
            <Card
              key={problem.id}
              className="group hover:shadow-md transition-all duration-200 cursor-pointer hover:border-primary/50"
              onClick={() => setSelectedProblemId(problem.id)}
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
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">C++ • Java • Python</span>
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
