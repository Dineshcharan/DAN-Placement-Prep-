import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, Trophy } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-glow">
              <DANLogo className="h-24 w-auto" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            DAN Placement Prep
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Your Complete Placement Preparation Kit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-card hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <BookOpen className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Comprehensive Content</h3>
              <p className="text-white/80 text-sm">Access aptitude, reasoning, verbal, coding, and technical questions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-card hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Target className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Practice & Learn</h3>
              <p className="text-white/80 text-sm">Master concepts with detailed explanations and practice questions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-card hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <Trophy className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Interview Ready</h3>
              <p className="text-white/80 text-sm">Prepare for HR interviews with common questions and best answers</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
              onClick={() => navigate('/auth')}
            >
              Get Started
            </Button>
          </div>

          <p className="text-white/70 text-sm mt-8">
            Join thousands of students preparing for their dream placements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
