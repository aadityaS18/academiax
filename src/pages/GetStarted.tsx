
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, BookOpen, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import GuidedTour from '@/components/GuidedTour';
import { ThemeToggle } from '@/components/ThemeToggle';

const GetStarted = () => {
  const { setIsOpen } = useTour();

  const handleStartTour = () => {
    console.log('Tour started from Get Started page');
    setIsOpen(true);
  };

  const steps = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Define Your Goals",
      description: "Tell us about your academic background, preferred field of study, and target countries.",
      completed: false
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Find Universities",
      description: "Use our matching algorithm to discover universities that align with your profile.",
      completed: false
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Plan Your Budget",
      description: "Calculate total costs and explore funding options for your education abroad.",
      completed: false
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Join Community",
      description: "Connect with other students and get guidance from our expert mentors.",
      completed: false
    }
  ];

  const benefits = [
    "Access to 200+ top universities worldwide",
    "AI-powered university matching",
    "Comprehensive budget planning tools",
    "Expert guidance and mentorship",
    "Application tracking and deadlines",
    "Scholarship opportunities database"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">AcademiaX</span>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Welcome & Steps */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4">Welcome to AcademiaX! 🎉</h1>
              <p className="text-xl text-muted-foreground mb-6">
                You're just a few steps away from discovering your perfect university and planning your study abroad journey.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Your Journey Roadmap</h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{step.title}</h3>
                            {step.completed && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>What You'll Get Access To</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Guided Tour */}
          <div className="space-y-8">
            <div className="sticky top-8">
              <GuidedTour onStart={handleStartTour} />
              
              {/* Quick Actions */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Jump straight into any feature that interests you most
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full justify-start" variant="outline">
                    <Link to="/university-match" data-tour="university-match">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Find My Universities
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start" variant="outline">
                    <Link to="/budget-calculator" data-tour="budget-calculator">
                      <Target className="mr-2 h-4 w-4" />
                      Calculate Budget
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start" variant="outline">
                    <Link to="/sop-assistant" data-tour="sop-assistant">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Write Better Essays
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
