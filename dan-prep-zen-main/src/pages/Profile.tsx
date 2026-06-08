import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Watermark } from '@/components/Watermark';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Camera, LogOut } from 'lucide-react';
import { DANLogo } from '@/components/DANLogo';
import { toast } from 'sonner';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Profile() {
  const { profile, user, updateProfile, uploadProfilePhoto, signOut } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    first_name: string;
    last_name: string;
    mobile_number: string;
    gender: 'male' | 'female' | 'other' | '';
    college_name: string;
    year_of_study: string;
  }>({
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    mobile_number: profile?.mobile_number || '',
    gender: profile?.gender || '',
    college_name: profile?.college_name || '',
    year_of_study: profile?.year_of_study || '',
  });

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const updates = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        mobile_number: formData.mobile_number,
        gender: formData.gender || undefined,
        college_name: formData.college_name || undefined,
        year_of_study: formData.year_of_study || undefined,
      };
      
      const { error } = await updateProfile(updates);
      if (error) {
        toast.error('Failed to update profile');
        console.error('Profile update error:', error);
      } else {
        toast.success('Profile updated successfully!');
        // Force refresh profile data
        window.location.reload();
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Profile update error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }

    setLoading(true);
    try {
      const { error } = await uploadProfilePhoto(file);
      if (error) {
        toast.error('Failed to upload photo');
        console.error('Photo upload error:', error);
      } else {
        toast.success('Profile photo updated!');
        // Force refresh to show new photo
        window.location.reload();
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Photo upload error:', error);
    } finally {
      setLoading(false);
    }
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
            <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <DANLogo className="h-10 w-auto" />
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
        <Card className="max-w-2xl mx-auto shadow-glow">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={profile?.profile_photo_url || getDefaultAvatar()} />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
                >
                  <Camera className="h-4 w-4" />
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>
            <CardTitle className="text-2xl">{profile?.first_name} {profile?.last_name}</CardTitle>
            <CardDescription>{profile?.email}</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    placeholder="John"
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    placeholder="Doe"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile?.email || ''}
                  disabled
                  className="bg-muted"
                />
                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile_number">Mobile Number</Label>
                <Input
                  id="mobile_number"
                  type="tel"
                  value={formData.mobile_number}
                  onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                  placeholder="+1 234 567 8900"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="college_name">College Name</Label>
                <Input
                  id="college_name"
                  value={formData.college_name}
                  onChange={(e) => setFormData({ ...formData, college_name: e.target.value })}
                  placeholder="Enter your college name"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year_of_study">Year of Study</Label>
                <Select
                  value={formData.year_of_study}
                  onValueChange={(value) => setFormData({ ...formData, year_of_study: value })}
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => setFormData({ ...formData, gender: value as 'male' | 'female' | 'other' })}
                  disabled={loading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
