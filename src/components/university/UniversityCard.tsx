
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star } from "lucide-react";
import { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
}

export const UniversityCard = ({ university }: UniversityCardProps) => {
  const getSatBadgeColor = (satRequired: string) => {
    switch (satRequired) {
      case 'required':
        return 'bg-red-100 text-red-800';
      case 'optional':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-required':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSatBadgeText = (satRequired: string) => {
    switch (satRequired) {
      case 'required':
        return 'SAT Required';
      case 'optional':
        return 'SAT Optional';
      case 'not-required':
        return 'No SAT Required';
      default:
        return 'SAT Unknown';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{university.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {university.city}, {university.country}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-1">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              #{university.globalRank}
            </Badge>
            <Badge className={`text-xs ${getSatBadgeColor(university.satRequired)}`}>
              {getSatBadgeText(university.satRequired)}
            </Badge>
            {university.id >= 1000 && (
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                Live Data
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Programs</h4>
          <div className="flex flex-wrap gap-1">
            {university.programs.slice(0, 3).map((program, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {program}
              </Badge>
            ))}
            {university.programs.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{university.programs.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tuition:</span>
            <span className="font-medium">{university.tuitionFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Admission Rate:</span>
            <span className="font-medium">{university.admissionRate}</span>
          </div>
          {university.minGPA && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Min GPA:</span>
              <span className="font-medium">{university.minGPA}</span>
            </div>
          )}
          {university.satScore && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">SAT Score:</span>
              <span className="font-medium">{university.satScore}</span>
            </div>
          )}
          {university.ieltsScore && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">IELTS:</span>
              <span className="font-medium">{university.ieltsScore}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
