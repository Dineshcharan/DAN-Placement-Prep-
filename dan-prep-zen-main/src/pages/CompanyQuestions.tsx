import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Building2, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { companies } from '@/data/companyProblems';

export default function CompanyQuestions() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-gradient-to-r from-slate-600 to-slate-400 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="bg-white/20 rounded-full p-2">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">Company Based Questions</h1>
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
          <h2 className="text-3xl font-bold mb-2">Choose a Company</h2>
          <p className="text-muted-foreground">
            Practice coding questions frequently asked by top companies in placement drives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {companies.map((company, index) => (
            <Card
              key={company.id}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => navigate(`/company-questions/${company.id}`)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${company.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {company.name}
                </CardTitle>
                <CardDescription>{company.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">{company.problems.length} questions</span>
                </div>
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
