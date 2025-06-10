
import React, { useState } from 'react';
import { useTour } from '@reactour/tour';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GuidedTourProps {
  onStart: () => void;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ onStart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tourSteps = [
    {
      selector: '[data-tour="university-match"]',
      content: (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">🎓 University Matching</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Find universities that perfectly match your academic profile, budget, and preferences across different countries.
          </p>
          <Badge variant="secondary" className="text-xs">Most Popular Feature</Badge>
        </div>
      ),
    },
    {
      selector: '[data-tour="budget-calculator"]',
      content: (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">💰 Budget Calculator</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Calculate comprehensive costs including tuition fees, living expenses, and get funding options for your study abroad journey.
          </p>
          <Badge variant="secondary" className="text-xs">Essential Planning Tool</Badge>
        </div>
      ),
    },
    {
      selector: '[data-tour="sop-assistant"]',
      content: (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">📝 SOP Assistant</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Get AI-powered feedback on your Statement of Purpose and personal essays to make them stand out.
          </p>
          <Badge variant="secondary" className="text-xs">AI-Powered</Badge>
        </div>
      ),
    },
    {
      selector: '[data-tour="application-tracker"]',
      content: (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">📋 Application Tracker</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Keep track of all your university applications, deadlines, and requirements in one organized place.
          </p>
          <Badge variant="secondary" className="text-xs">Stay Organized</Badge>
        </div>
      ),
    },
    {
      selector: '[data-tour="country-guide"]',
      content: (
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">🌍 Country Guide</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Explore detailed information about different study destinations and their education systems.
          </p>
          <Badge variant="secondary" className="text-xs">Complete Guide</Badge>
        </div>
      ),
    },
  ];

  const handleStartTour = () => {
    console.log('Starting guided tour');
    setIsOpen(true);
    onStart();
  };

  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Play className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-xl">Take a Guided Tour</CardTitle>
        <CardDescription>
          Let us show you around and help you discover all the amazing features that will make your study abroad journey easier.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">You'll learn about:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Finding the perfect universities</li>
            <li>• Planning your budget effectively</li>
            <li>• Writing compelling essays</li>
            <li>• Tracking your applications</li>
            <li>• Choosing the right country</li>
          </ul>
        </div>
        <Button onClick={handleStartTour} className="w-full" size="lg">
          <Play className="mr-2 h-4 w-4" />
          Start Guided Tour
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Takes about 2 minutes • Skip anytime
        </p>
      </CardContent>
    </Card>
  );
};

export default GuidedTour;
