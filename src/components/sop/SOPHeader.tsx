
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const SOPHeader = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">StudyAbroad</span>
        </Link>
      </div>
    </header>
  );
};

export default SOPHeader;
