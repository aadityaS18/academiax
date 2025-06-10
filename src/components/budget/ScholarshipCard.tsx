
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Scholarship {
  name: string;
  country: string;
  amount: string;
  eligibility: string;
  deadline: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard = ({ scholarship }: ScholarshipCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {scholarship.icon}
            <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {scholarship.type}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-muted-foreground">{scholarship.country}</div>
          </div>
        </div>
        <CardTitle className="text-lg">{scholarship.name}</CardTitle>
        <CardDescription className="text-sm">{scholarship.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-sm font-medium text-green-700 mb-1">Award Amount</div>
          <div className="text-sm">{scholarship.amount}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-blue-700 mb-1">Eligibility</div>
          <div className="text-sm">{scholarship.eligibility}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-orange-700 mb-1">Application Deadline</div>
          <div className="text-sm">{scholarship.deadline}</div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-4"
          onClick={() => window.open(scholarship.link, '_blank')}
        >
          Learn More <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ScholarshipCard;
