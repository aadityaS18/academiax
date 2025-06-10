import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, Calculator, Globe, Star, Brain, CheckCircle, TrendingUp, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "University Matching",
      description: "Find universities that match your profile, grades, and preferences across different countries.",
      link: "/university-match",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Budget Calculator",
      description: "Calculate tuition fees, living costs, and total expenses for studying abroad.",
      link: "/budget-calculator",
      color: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "SOP Assistant",
      description: "Get AI-powered feedback on your Statement of Purpose and personal essays.",
      link: "/sop-assistant",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Country Guide",
      description: "Explore study destinations with detailed information about education systems.",
      link: "/country-guide",
      color: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Application Tracker",
      description: "Keep track of your university applications, deadlines, and requirements.",
      link: "/application-tracker",
      color: "bg-yellow-50 dark:bg-yellow-900/20"
    }
  ];

  const stats = [
    { number: "200+", label: "Universities Covered", icon: <GraduationCap className="h-6 w-6" /> },
    { 
      number: "8", 
      label: "Top Countries", 
      icon: <Globe className="h-6 w-6" />, 
      countries: [
        { name: "United States", flag: "🇺🇸" },
        { name: "Canada", flag: "🇨🇦" },
        { name: "United Kingdom", flag: "🇬🇧" },
        { name: "Ireland", flag: "🇮🇪" },
        { name: "Australia", flag: "🇦🇺" },
        { name: "Germany", flag: "🇩🇪" },
        { name: "Netherlands", flag: "🇳🇱" },
        { name: "France", flag: "🇫🇷" }
      ]
    }
  ];

  const benefits = [
    "Personalized university recommendations",
    "Comprehensive budget planning",
    "AI-powered essay assistance",
    "Application deadline tracking",
    "Scholarship opportunities",
    "Expert guidance and support"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">AcademiaX</span>
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
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="container mx-auto text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Gateway to Global Education
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive guidance platform for Class 11th and 12th students in India planning to study abroad. 
              From university selection to application tracking, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-8 hover-scale">
                <Link to="/university-match">
                  Find Universities <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 hover-scale">
                <Link to="/budget-calculator">Calculate Budget</Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mb-3">{stat.label}</div>
                  {stat.countries && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {stat.countries.map((country, countryIndex) => (
                        <Badge key={countryIndex} variant="secondary" className="text-xs px-2 py-1">
                          <span className="mr-1">{country.flag}</span>
                          {country.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Study Abroad</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools and guidance to make your study abroad journey smooth and successful
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer group hover-scale ${feature.color}`}
                data-tour={
                  feature.title === "University Matching" ? "university-match" :
                  feature.title === "Budget Calculator" ? "budget-calculator" :
                  feature.title === "SOP Assistant" ? "sop-assistant" :
                  feature.title === "Application Tracker" ? "application-tracker" :
                  feature.title === "Country Guide" ? "country-guide" :
                  undefined
                }
              >
                <Link to={feature.link}>
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
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

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose AcademiaX?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide comprehensive support throughout your study abroad journey, from initial planning to university acceptance.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-primary text-primary-foreground">
                <Award className="h-8 w-8 mb-4" />
                <h3 className="font-bold mb-2">Expert Guidance</h3>
                <p className="text-sm opacity-90">Get advice from education consultants and successful students</p>
              </Card>
              <Card className="p-6 bg-secondary">
                <BookOpen className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-bold mb-2">Comprehensive Resources</h3>
                <p className="text-sm text-muted-foreground">Access detailed guides, checklists, and tools</p>
              </Card>
              <Card className="p-6 bg-secondary">
                <TrendingUp className="h-8 w-8 mb-4 text-primary" />
                <h3 className="font-bold mb-2">Track Progress</h3>
                <p className="text-sm text-muted-foreground">Monitor your application status and deadlines</p>
              </Card>
              <Card className="p-6 bg-primary text-primary-foreground">
                <Award className="h-8 w-8 mb-4" />
                <h3 className="font-bold mb-2">Success-Oriented</h3>
                <p className="text-sm opacity-90">Focused approach to maximize your admission chances</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Join thousands of Indian students who've successfully applied to universities abroad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 hover-scale">
                  <Link to="/get-started">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 hover:text-primary">
                  <Link to="/university-match">Explore Universities</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
