
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Calculator, Globe, Star, Users, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "University Matching",
      description: "Find universities that match your profile, grades, and preferences across different countries.",
      link: "/university-match"
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Budget Calculator",
      description: "Calculate tuition fees, living costs, and total expenses for studying abroad.",
      link: "/budget-calculator"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "SOP Assistant",
      description: "Get AI-powered feedback on your Statement of Purpose and personal essays.",
      link: "/sop-assistant"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Country Guide",
      description: "Explore study destinations with detailed information about education systems.",
      link: "/country-guide"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Application Tracker",
      description: "Keep track of your university applications, deadlines, and requirements.",
      link: "/application-tracker"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Connect with other students and get advice from those who've been there.",
      link: "/community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">StudyAbroad</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/university-match" className="text-muted-foreground hover:text-primary transition-colors">
                University Match
              </Link>
              <Link to="/budget-calculator" className="text-muted-foreground hover:text-primary transition-colors">
                Budget Calculator
              </Link>
              <Link to="/sop-assistant" className="text-muted-foreground hover:text-primary transition-colors">
                SOP Assistant
              </Link>
              <Link to="/application-tracker" className="text-muted-foreground hover:text-primary transition-colors">
                Track Applications
              </Link>
            </nav>
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Your Gateway to Global Education
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive guidance platform for Class 11th and 12th students in India planning to study abroad. 
            From university selection to application tracking, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/university-match">
                Find Universities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link to="/budget-calculator">Calculate Budget</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Study Abroad</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <Link to={feature.link}>
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Join thousands of Indian students who've successfully applied to universities abroad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link to="/get-started">Get Started Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
