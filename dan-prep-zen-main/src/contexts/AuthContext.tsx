import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  theme_preference: 'light' | 'dark';
  mobile_number?: string;
  phone_number?: string;
  profile_photo_url?: string;
  gender?: 'male' | 'female' | 'other';
  readiness_score?: number;
  skill_levels?: Record<string, number>;
  total_exams_taken?: number;
  average_accuracy?: number;
  college_name?: string;
  year_of_study?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string, phone?: string, collegeName?: string, yearOfStudy?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signInWithOTP: (email: string) => Promise<{ error: any }>;
  signInWithPhone: (phone: string) => Promise<{ error: any }>;
  verifyOTP: (email: string, token: string) => Promise<{ error: any }>;
  verifyPhoneOTP: (phone: string, token: string) => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateTheme: (theme: 'light' | 'dark') => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>;
  uploadProfilePhoto: (file: File) => Promise<{ error: any; url?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const parseUserName = (user: User) => {
    const metadata = user.user_metadata as Record<string, any> | undefined;
    const rawMetadata = (user as any).raw_user_meta_data as Record<string, any> | undefined;
    const combined = { ...rawMetadata, ...metadata };

    const fullName = combined?.name || combined?.full_name || combined?.given_name || combined?.givenName || combined?.first_name || '';
    const firstName = combined?.given_name || combined?.givenName || combined?.first_name || fullName.split(' ')[0] || '';
    const lastName = combined?.family_name || combined?.familyName || combined?.last_name || fullName.split(' ').slice(1).join(' ') || '';

    return {
      firstName: firstName || user.email?.split('@')[0] || '',
      lastName: lastName || '',
    };
  };

  const getProfileFromUser = (user: User) => {
    const metadata = user.user_metadata as Record<string, any> | undefined;
    const rawMetadata = (user as any).raw_user_meta_data as Record<string, any> | undefined;
    const combined = { ...rawMetadata, ...metadata };
    const { firstName, lastName } = parseUserName(user);
    const profilePhotoUrl = combined?.picture || combined?.avatar_url || combined?.profile_photo_url || combined?.picture_url || null;

    return {
      id: user.id,
      email: user.email ?? '',
      first_name: firstName,
      last_name: lastName,
      theme_preference: 'light' as const,
      mobile_number: '',
      phone_number: '',
      profile_photo_url: profilePhotoUrl,
      gender: 'other' as const,
      readiness_score: 0,
      skill_levels: {},
      total_exams_taken: 0,
      average_accuracy: 0,
      college_name: '',
      year_of_study: '',
    };
  };

  const fetchProfile = async (user: User) => {
    const profileData = getProfileFromUser(user);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (data && data.first_name && data.last_name && data.profile_photo_url) {
      setProfile({
        id: data.id,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        theme_preference: (data.theme_preference as 'light' | 'dark') || 'light',
        mobile_number: data.mobile_number,
        phone_number: data.phone_number,
        profile_photo_url: data.profile_photo_url,
        gender: data.gender as 'male' | 'female' | 'other',
        readiness_score: data.readiness_score ?? 0,
        skill_levels: (data.skill_levels as Record<string, number>) ?? {},
        total_exams_taken: data.total_exams_taken ?? 0,
        average_accuracy: data.average_accuracy ?? 0,
        college_name: data.college_name ?? '',
        year_of_study: data.year_of_study ?? '',
      });
      return;
    }

    const { data: upserted, error: upsertError } = await supabase
      .from('profiles')
      .upsert(profileData, { onConflict: 'id' })
      .select()
      .single();

    if (!upsertError && upserted) {
      setProfile({
        id: upserted.id,
        email: upserted.email,
        first_name: upserted.first_name,
        last_name: upserted.last_name,
        theme_preference: (upserted.theme_preference as 'light' | 'dark') || 'light',
        mobile_number: upserted.mobile_number,
        phone_number: upserted.phone_number,
        profile_photo_url: upserted.profile_photo_url,
        gender: upserted.gender as 'male' | 'female' | 'other',
        readiness_score: upserted.readiness_score ?? 0,
        skill_levels: (upserted.skill_levels as Record<string, number>) ?? {},
        total_exams_taken: upserted.total_exams_taken ?? 0,
        average_accuracy: upserted.average_accuracy ?? 0,
        college_name: upserted.college_name ?? '',
        year_of_study: upserted.year_of_study ?? '',
      });
      return;
    }

    if (data) {
      setProfile({
        id: data.id,
        email: data.email,
        first_name: data.first_name || profileData.first_name,
        last_name: data.last_name || profileData.last_name,
        theme_preference: (data.theme_preference as 'light' | 'dark') || 'light',
        mobile_number: data.mobile_number,
        phone_number: data.phone_number,
        profile_photo_url: data.profile_photo_url || profileData.profile_photo_url,
        gender: data.gender as 'male' | 'female' | 'other',
        readiness_score: data.readiness_score ?? 0,
        skill_levels: (data.skill_levels as Record<string, number>) ?? {},
        total_exams_taken: data.total_exams_taken ?? 0,
        average_accuracy: data.average_accuracy ?? 0,
        college_name: data.college_name ?? '',
        year_of_study: data.year_of_study ?? '',
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      // Set up auth state listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);

          if (session?.user) {
            setTimeout(() => {
              fetchProfile(session.user);
            }, 0);
          } else {
            setProfile(null);
          }
        }
      );

      try {
        // Parse a redirected OAuth session from the URL if present.
        if (
          window.location.href.includes('access_token') ||
          window.location.href.includes('refresh_token') ||
          window.location.href.includes('provider_token') ||
          window.location.href.includes('error_description')
        ) {
          const { data: sessionData } = await supabase.auth.getSessionFromUrl();
          if (mounted && sessionData?.session) {
            setSession(sessionData.session);
            setUser(sessionData.session.user);
            fetchProfile(sessionData.session.user);
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }
      } catch (error) {
        console.error('Failed to parse OAuth redirect session:', error);
      }

      // Check for existing session when not already signed in.
      const { data: { session } } = await supabase.auth.getSession();
      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchProfile(session.user);
      }
      setLoading(false);

      return () => subscription.unsubscribe();
    };

    initializeAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const signUp = async (email: string, password: string, firstName: string, lastName: string, phone?: string, collegeName?: string, yearOfStudy?: string) => {
    const redirectUrl = `${window.location.origin}/dashboard`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phone || '',
          college_name: collegeName || '',
          year_of_study: yearOfStudy || '',
        }
      }
    });
    
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    return { error };
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
        skipBrowserRedirect: false,
      },
    });

    // Supabase will automatically redirect to Google, no need to handle manually
    if (error) {
      console.error('OAuth error:', error);
      return { error };
    }

    // Don't return anything, let Supabase handle the redirect
    return { error: null };
  };

  const signInWithOTP = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });
    
    return { error };
  };

  const signInWithPhone = async (phone: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      phone,
    });
    
    return { error };
  };

  const verifyOTP = async (email: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    
    return { error };
  };

  const verifyPhoneOTP = async (phone: string, token: string) => {
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    });
    
    return { error };
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });
    
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  const updateTheme = async (theme: 'light' | 'dark') => {
    if (!user) return;
    
    await supabase
      .from('profiles')
      .update({ theme_preference: theme })
      .eq('id', user.id);
    
    setProfile(prev => prev ? { ...prev, theme_preference: theme } : null);
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('No user logged in') };
    
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);
    
    if (!error) {
      setProfile(prev => prev ? { ...prev, ...updates } : null);
    }
    
    return { error };
  };

  const uploadProfilePhoto = async (file: File) => {
    if (!user) return { error: new Error('No user logged in') };
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${Date.now()}.${fileExt}`;
    
    const { error: uploadError, data } = await supabase.storage
      .from('profile-photos')
      .upload(fileName, file, { upsert: true });
    
    if (uploadError) return { error: uploadError };
    
    const { data: { publicUrl } } = supabase.storage
      .from('profile-photos')
      .getPublicUrl(fileName);
    
    await updateProfile({ profile_photo_url: publicUrl });
    
    return { error: null, url: publicUrl };
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile,
      loading,
      signUp,
      signIn,
      signInWithGoogle,
      signInWithOTP,
      signInWithPhone,
      verifyOTP,
      verifyPhoneOTP,
      resetPassword,
      signOut,
      updateTheme,
      updateProfile,
      uploadProfilePhoto,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
