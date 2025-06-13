
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SignUpFormProps {
  onToggleMode: () => void;
}

const SignUpForm = ({ onToggleMode }: SignUpFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleError, setGoogleError] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Sign up attempt started', { email });
    
    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      console.log('Calling signUp function...');
      const { error } = await signUp(email, password);
      
      console.log('SignUp response:', { error });
      
      if (error) {
        console.error('SignUp error:', error);
        
        let errorMessage = error.message;
        
        // Handle specific error cases
        if (error.message.includes('User already registered')) {
          errorMessage = "An account with this email already exists. Please try signing in instead.";
        } else if (error.message.includes('Invalid email')) {
          errorMessage = "Please enter a valid email address.";
        } else if (error.message.includes('Password should be at least')) {
          errorMessage = "Password must be at least 6 characters long.";
        }
        
        toast({
          title: "Sign Up Failed",
          description: errorMessage,
          variant: "destructive"
        });
      } else {
        console.log('SignUp successful');
        toast({
          title: "Account Created!",
          description: "Please check your email to verify your account before signing in.",
          duration: 5000
        });
      }
    } catch (error: any) {
      console.error('SignUp catch error:', error);
      toast({
        title: "Sign Up Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      console.log('Google sign up attempt...');
      setGoogleError(false);
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Google signup error:', error);
      setGoogleError(true);
      toast({
        title: "Google Sign Up Unavailable",
        description: error.message || "Google authentication is not configured. Please use email signup instead.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Get started with your AcademiaX journey
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!googleError && (
          <>
            <Button 
              onClick={handleGoogleSignUp}
              variant="outline" 
              className="w-full"
              type="button"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
          </>
        )}

        {googleError && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Google sign-in is currently unavailable. Please use email registration below.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="Create a password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Create Account
          </Button>
        </form>

        <div className="text-center">
          <Button variant="link" onClick={onToggleMode} className="text-sm">
            Already have an account? Sign in
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
