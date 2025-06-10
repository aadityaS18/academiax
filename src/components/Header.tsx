
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">AcademiaX</span>
          </Link>
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
  );
};

export default Header;
