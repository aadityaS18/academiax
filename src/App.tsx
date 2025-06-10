
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import TourProvider from "@/components/TourProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UniversityMatch from "./pages/UniversityMatch";
import BudgetCalculator from "./pages/BudgetCalculator";
import SOPAssistant from "./pages/SOPAssistant";
import ApplicationTracker from "./pages/ApplicationTracker";
import CountryGuide from "./pages/CountryGuide";
import GetStarted from "./pages/GetStarted";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="studyabroad-ui-theme">
      <TooltipProvider>
        <TourProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/university-match" element={<UniversityMatch />} />
              <Route path="/budget-calculator" element={<BudgetCalculator />} />
              <Route path="/sop-assistant" element={<SOPAssistant />} />
              <Route path="/application-tracker" element={<ApplicationTracker />} />
              <Route path="/country-guide" element={<CountryGuide />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TourProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
