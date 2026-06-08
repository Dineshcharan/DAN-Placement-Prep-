import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { z } from 'zod';
import { PhoneInputWithSearch } from '@/components/PhoneInputWithSearch';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Watermark } from '@/components/Watermark';
import { DANLogo } from '@/components/DANLogo';
import { Eye, EyeOff } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';


const signUpSchema = z.object({
  email: z.string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .refine((email) => email.endsWith('@gmail.com'), {
      message: 'Please use a valid Gmail account',
    }),
  firstName: z.string()
    .trim()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
  lastName: z.string()
    .trim()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name can only contain letters'),
  collegeName: z.string()
    .trim()
    .min(1, 'College name is required')
    .max(200, 'College name must be less than 200 characters'),
  yearOfStudy: z.string()
    .min(1, 'Year of study is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const signInSchema = z.object({
  email: z.string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  password: z.string()
    .min(1, 'Password is required')
    .max(100, 'Password must be less than 100 characters'),
});

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usePhoneAuth, setUsePhoneAuth] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    otp: '',
    collegeName: '',
    yearOfStudy: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { user, signUp, signIn, signInWithGoogle, signInWithOTP, signInWithPhone, verifyOTP, verifyPhoneOTP, resetPassword } = useAuth();
  const navigate = useNavigate();

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // If OAuth finishes and we have a session, move the user into the app.
  useEffect(() => {
    if (user) navigate('/dashboard', { replace: true });
  }, [user, navigate]);

  // Check for password reset hash in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('access_token')) {
      setShowResetPassword(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      if (isSignUp) {
        const result = signUpSchema.safeParse(formData);
        const fieldErrors: Record<string, string> = {};
        if (!result.success) {
          result.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as string] = err.message;
            }
          });
        }

        // Validate phone: extract local digits (after country code prefix)
        if (formData.phone) {
          if (!isValidPhoneNumber(formData.phone)) {
            fieldErrors.phone = 'Please enter a valid phone number';
          }
        }

        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
          setLoading(false);
          return;
        }

        const { error } = await signUp(
          formData.email.trim(),
          formData.password,
          formData.firstName.trim(),
          formData.lastName.trim(),
          formData.phone,
          formData.collegeName.trim(),
          formData.yearOfStudy
        );

        if (error) {
          if (error.message.includes('already registered') || error.message.includes('User already registered')) {
            toast.error('This email is already registered. Please sign in instead.');
            setIsSignUp(false);
          } else if (error.message.includes('Invalid email')) {
            toast.error('Please enter a valid Gmail address');
          } else {
            toast.error(error.message || 'Registration failed. Please try again.');
          }
        } else {
          toast.success('🎉 Registered successfully! Welcome to DAN Placement Prep!');
          // Reset form
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            otp: '',
            collegeName: '',
            yearOfStudy: '',
          });
          navigate('/dashboard');
        }
      } else {
        const result = signInSchema.safeParse(formData);
        if (!result.success) {
          const fieldErrors: Record<string, string> = {};
          result.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as string] = err.message;
            }
          });
          setErrors(fieldErrors);
          setLoading(false);
          return;
        }

        const { error } = await signIn(formData.email.trim(), formData.password);

        if (error) {
          if (error.message.includes('Invalid login credentials') || error.message.includes('invalid_credentials')) {
            toast.error('Invalid email or password. Please check your credentials and try again.');
          } else if (error.message.includes('Email not confirmed')) {
            toast.error('Please confirm your email address before signing in.');
          } else {
            toast.error(error.message || 'Sign in failed. Please try again.');
          }
        } else {
          toast.success(`Welcome back to DAN Placement Prep! 👋`);
          // Reset form
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            otp: '',
            collegeName: '',
            yearOfStudy: '',
          });
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  const handleOTPRequest = async () => {
    setLoading(true);
    try {
      if (usePhoneAuth) {
        const { error } = await signInWithPhone(formData.phone.trim());
        if (error) {
          toast.error('Failed to send OTP. Please check your phone number.');
        } else {
          toast.success('OTP sent to your phone!');
          setOtpSent(true);
        }
      } else {
        const { error } = await signInWithOTP(formData.email.trim());
        if (error) {
          toast.error('Failed to send OTP. Please check your email.');
        } else {
          toast.success('OTP sent to your email!');
          setOtpSent(true);
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerify = async () => {
    setLoading(true);
    try {
      if (usePhoneAuth) {
        const { error } = await verifyPhoneOTP(formData.phone.trim(), formData.otp);
        if (error) {
          toast.error('Invalid OTP. Please try again.');
        } else {
          toast.success('Successfully signed in!');
          navigate('/dashboard');
        }
      } else {
        const { error } = await verifyOTP(formData.email.trim(), formData.otp);
        if (error) {
          toast.error('Invalid OTP. Please try again.');
        } else {
          toast.success('Successfully signed in!');
          navigate('/dashboard');
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      // Supabase will redirect automatically, so this won't return
    } catch (error) {
      setLoading(false);
      console.error('Google sign in exception:', error);
      toast.error(`Google sign in failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast.error('Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      const { error } = await resetPassword(formData.email.trim());
      if (error) {
        toast.error('Failed to send reset email. Please try again.');
      } else {
        toast.success('Password reset email sent! Check your inbox.');
        setShowForgotPassword(false);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!formData.password) {
      toast.error('Please enter a new password');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      toast.error('Password must contain uppercase, lowercase, and number');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: formData.password
      });

      if (error) {
        toast.error('Failed to update password. Please try again.');
      } else {
        toast.success('Password updated successfully! Please sign in with your new password.');
        setShowResetPassword(false);
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          phone: '',
          otp: '',
          collegeName: '',
          yearOfStudy: '',
        });
        // Clear the hash from URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4 relative overflow-hidden">
      {/* Background Watermark with Parallax */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="absolute -inset-[50%] w-[200%] h-[200%] flex flex-col items-center justify-center gap-8 opacity-[0.04] transition-transform duration-500 ease-out"
          style={{ 
            transform: `rotate(-15deg) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` 
          }}
        >
          {Array.from({ length: 12 }).map((_, row) => (
            <div key={row} className="flex gap-12 whitespace-nowrap">
              {Array.from({ length: 5 }).map((_, col) => (
                <span 
                  key={col} 
                  className="text-5xl md:text-7xl lg:text-8xl font-watermark text-foreground tracking-wider animate-fade-in"
                  style={{ animationDelay: `${(row * 5 + col) * 0.03}s`, animationFillMode: 'both' }}
                >
                  DAN PLACEMENT PREP
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Watermark />
      <Card className="w-full max-w-md shadow-glow animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <DANLogo className="h-16 w-auto" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {showResetPassword ? 'Reset Password' : 'DAN Placement Prep'}
          </CardTitle>
          <CardDescription className="text-base">
            {showResetPassword ? 'Enter your new password' : isSignUp ? 'Create your account to get started' : 'Welcome back! Please sign in'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showResetPassword ? (
            /* Reset Password Flow */
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter new password"
                    disabled={loading}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters with uppercase, lowercase, and number.
                </p>
              </div>
              <Button
                type="button"
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={handleResetPassword}
                disabled={loading || !formData.password}
              >
                {loading ? 'Updating...' : 'Update Password'}
              </Button>
              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setShowResetPassword(false);
                    setFormData({ ...formData, password: '' });
                    window.history.replaceState({}, document.title, window.location.pathname);
                  }}
                  className="text-primary hover:underline"
                  disabled={loading}
                >
                  Back to sign in
                </button>
              </div>
            </div>
          ) : showForgotPassword ? (
            /* Forgot Password Flow */
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@gmail.com"
                  disabled={loading}
                />
              </div>
              <Button
                type="button"
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={handleForgotPassword}
                disabled={loading || !formData.email}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </Button>
              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="text-primary hover:underline"
                  disabled={loading}
                >
                  Back to sign in
                </button>
              </div>
            </div>
          ) : usePhoneAuth ? (
            /* Phone Authentication Flow */
            <div className="space-y-4">
              {!otpSent ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <PhoneInputWithSearch
                      value={formData.phone}
                      onChange={(value) => setFormData({ ...formData, phone: value })}
                      disabled={loading}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <Button
                    type="button"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={handleOTPRequest}
                    disabled={loading || !formData.phone || !isValidPhoneNumber(formData.phone)}
                  >
                    {loading ? 'Sending OTP...' : 'Send OTP'}
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      placeholder="123456"
                      disabled={loading}
                      maxLength={6}
                    />
                  </div>
                  <Button
                    type="button"
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={handleOTPVerify}
                    disabled={loading || !formData.otp}
                  >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => setOtpSent(false)}
                    disabled={loading}
                  >
                    Resend OTP
                  </Button>
                </>
              )}
              
              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => { setUsePhoneAuth(false); setOtpSent(false); }}
                  className="text-primary hover:underline"
                  disabled={loading}
                >
                  Use email instead
                </button>
              </div>
            </div>
          ) : (
            /* Email/Password & Google Authentication Flow */
            <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      disabled={loading}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-destructive">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      disabled={loading}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-destructive">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="collegeName">College Name</Label>
                  <Input
                    id="collegeName"
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    placeholder="Enter your college name"
                    disabled={loading}
                  />
                  {errors.collegeName && (
                    <p className="text-xs text-destructive">{errors.collegeName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="yearOfStudy">Year of Study</Label>
                  <Select
                    value={formData.yearOfStudy}
                    onValueChange={(value) => setFormData({ ...formData, yearOfStudy: value })}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st Year">1st Year</SelectItem>
                      <SelectItem value="2nd Year">2nd Year</SelectItem>
                      <SelectItem value="3rd Year">3rd Year</SelectItem>
                      <SelectItem value="4th Year">4th Year</SelectItem>
                      <SelectItem value="Final Year">Final Year</SelectItem>
                      <SelectItem value="Graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.yearOfStudy && (
                    <p className="text-xs text-destructive">{errors.yearOfStudy}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <PhoneInputWithSearch
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    disabled={loading}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@gmail.com"
                disabled={loading}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {!isSignUp && (
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-xs text-primary hover:underline"
                    disabled={loading}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  disabled={loading}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-destructive">{errors.password}</p>
              )}
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    disabled={loading}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    disabled={loading}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-destructive">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <Button
              type="button"
              className="w-full border border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text font-bold text-base">
                G
              </span>
              Continue with Google
            </Button>

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              disabled={loading}
            >
              {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>

            <div className="text-center text-sm">
                <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrors({});
                  setOtpSent(false);
                  setUsePhoneAuth(false);
                  setFormData({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    otp: '',
                    collegeName: '',
                    yearOfStudy: '',
                  });
                }}
                className="text-primary hover:underline transition-colors"
                disabled={loading}
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
          )}
          
        </CardContent>
      </Card>
    </div>
  );
}
