import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { Watermark } from '@/components/Watermark';
import { DANLogo } from '@/components/DANLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calculator, 
  Brain, 
  BookOpen, 
  Code, 
  Cpu, 
  Users, 
  LogOut,
  Target,
  User,
  Building2,
  ClipboardList
} from 'lucide-react';

const modules = [
  {
    title: 'Numerical Ability',
    description: 'Master aptitude questions on numbers, percentages, and more',
    icon: Calculator,
    path: '/numerical-ability',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Reasoning',
    description: 'Sharpen your logical and analytical thinking skills',
    icon: Brain,
    path: '/reasoning',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Verbal Ability',
    description: 'Improve vocabulary, grammar, and comprehension',
    icon: BookOpen,
    path: '/verbal-ability',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Coding Round',
    description: 'Practice coding problems and improve problem-solving',
    icon: Code,
    path: '/coding-round',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Technical Questions',
    description: 'Test your knowledge in OOPS, DBMS, OS, and Networks',
    icon: Cpu,
    path: '/technical-questions',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Pseudocodes',
    description: 'Learn 100 essential algorithm pseudocodes',
    icon: Code,
    path: '/pseudocodes',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Blind 75',
    description: 'Master 75 essential DSA problems for interviews',
    icon: Target,
    path: '/blind-75',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Company Based Questions',
    description: 'Practice coding questions asked by top companies',
    icon: Building2,
    path: '/company-questions',
    gradient: 'from-slate-600 to-slate-400',
  },
  {
    title: 'Practice Tests',
    description: 'Take comprehensive mock tests to evaluate your skills',
    icon: ClipboardList,
    path: '/tests',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'HR Interview',
    description: 'Prepare for common HR questions with best answers',
    icon: Users,
    path: '/hr-interview',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Dashboard() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const getDefaultAvatar = () => {
    if (profile?.gender === 'male') {
      return 'https://api.dicebear.com/7.x/avataaars/svg?seed=boy&backgroundColor=b6e3f4';
    } else if (profile?.gender === 'female') {
      return 'https://api.dicebear.com/7.x/avataaars/svg?seed=girl&backgroundColor=ffd5dc';
    }
    return 'https://api.dicebear.com/7.x/avataaars/svg?seed=default&backgroundColor=c0aede';
  };

  const getInitials = () => {
    if (profile?.first_name || profile?.last_name) {
      return `${profile?.first_name?.[0] || ''}${profile?.last_name?.[0] || ''}`.toUpperCase();
    }
    return profile?.email?.[0]?.toUpperCase() ?? '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Watermark />
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DANLogo className="h-12 w-auto" />
            <h1 className="text-xl font-bold text-foreground">DAN Placement Prep</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Signed in as <span className="font-medium text-foreground">{profile?.email}</span>
            </span>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/profile')}
              className="rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={profile?.profile_photo_url || getDefaultAvatar()} />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-2">
            Welcome, {profile?.first_name}! 👋
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose a module below to start your placement preparation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card
              key={module.path}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer hover:-translate-y-2 animate-fade-in"
              onClick={() => navigate(module.path)}
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Start Learning
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
