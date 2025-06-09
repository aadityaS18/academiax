
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UniversityMatch from "./pages/UniversityMatch";
import BudgetCalculator from "./pages/BudgetCalculator";
import SOPAssistant from "./pages/SOPAssistant";
import ApplicationTracker from "./pages/ApplicationTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/university-match" element={<UniversityMatch />} />
          <Route path="/budget-calculator" element={<BudgetCalculator />} />
          <Route path="/sop-assistant" element={<SOPAssistant />} />
          <Route path="/application-tracker" element={<ApplicationTracker />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
