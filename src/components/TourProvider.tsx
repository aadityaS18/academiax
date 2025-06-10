
import React from 'react';
import { TourProvider as ReactTourProvider } from '@reactour/tour';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const tourSteps = [
  {
    selector: '[data-tour="university-match"]',
    content: (
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">🎓 University Matching</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Find universities that perfectly match your academic profile, budget, and preferences across different countries.
        </p>
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular Feature
        </div>
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
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          Essential Planning Tool
        </div>
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
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          AI-Powered
        </div>
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
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          Stay Organized
        </div>
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
        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          Complete Guide
        </div>
      </div>
    ),
  },
];

interface TourProviderProps {
  children: React.ReactNode;
}

const TourProvider: React.FC<TourProviderProps> = ({ children }) => {
  return (
    <ReactTourProvider
      steps={tourSteps}
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': 'hsl(var(--primary))',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          border: '1px solid hsl(var(--border))',
          background: 'hsl(var(--background))',
        }),
        maskArea: (base) => ({ ...base, rx: 10 }),
        badge: (base) => ({
          ...base,
          left: 'auto',
          right: '10px',
          background: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
        }),
      }}
      components={{
        Close: ({ onClick }) => (
          <Button
            onClick={onClick}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        ),
        Navigation: ({ currentStep, stepsLength, setCurrentStep, setIsOpen }) => (
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <Button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              variant="outline"
              size="sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {stepsLength}
            </span>
            {currentStep === stepsLength - 1 ? (
              <Button onClick={() => setIsOpen(false)} size="sm">
                Finish Tour
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep(Math.min(stepsLength - 1, currentStep + 1))}
                size="sm"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        ),
      }}
      onClickMask={({ setIsOpen }) => setIsOpen(false)}
      onClickClose={({ setIsOpen }) => setIsOpen(false)}
      showPrevNextButtons={false}
      showCloseButton={false}
      showNavigation={false}
      showBadge={true}
      padding={10}
      disableDotsNavigation={true}
    >
      {children}
    </ReactTourProvider>
  );
};

export default TourProvider;
