
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import TourProvider from "@/components/TourProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { useTour } from '@reactour/tour';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UniversityMatch from "./pages/UniversityMatch";
import BudgetCalculator from "./pages/BudgetCalculator";
import SOPAssistant from "./pages/SOPAssistant";
import ApplicationTracker from "./pages/ApplicationTracker";
import CountryGuide from "./pages/CountryGuide";
import GetStarted from "./pages/GetStarted";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const TourController = () => {
  const { setIsOpen } = useTour();
  const location = useLocation();

  useEffect(() => {
    // Close tour when navigating to a different page
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/get-started" element={<GetStarted />} />
    <Route path="/university-match" element={<UniversityMatch />} />
    <Route path="/budget-calculator" element={<BudgetCalculator />} />
    <Route path="/sop-assistant" element={<SOPAssistant />} />
    <Route path="/application-tracker" element={<ApplicationTracker />} />
    <Route path="/country-guide" element={<CountryGuide />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="studyabroad-ui-theme">
      <TooltipProvider>
        <AuthProvider>
          <TourProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <TourController />
              <AppRoutes />
            </BrowserRouter>
          </TourProvider>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
