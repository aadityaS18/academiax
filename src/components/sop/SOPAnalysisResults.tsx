
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";

interface Feedback {
  score: number;
  breakdown: {
    introduction: number;
    academicBackground: number;
    professionalExperience: number;
    programFit: number;
    futureGoals: number;
  };
  strengths: string[];
  improvements: string[];
  criticalIssues?: string[];
  suggestions: string[];
  grade: string;
}

interface SOPAnalysisResultsProps {
  feedback: Feedback;
}

const SOPAnalysisResults = ({ feedback }: SOPAnalysisResultsProps) => {
  return (
    <div className="space-y-6">
      {/* Overall Score Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Analysis Results</span>
            <div className={`text-3xl font-bold px-4 py-2 rounded-lg ${
              feedback.grade === 'A' ? 'bg-green-100 text-green-800' :
              feedback.grade === 'B' ? 'bg-blue-100 text-blue-800' :
              feedback.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {feedback.grade}
            </div>
          </CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">{feedback.score}/100</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {feedback.score >= 90 ? 'Excellent' : 
               feedback.score >= 80 ? 'Very Good' :
               feedback.score >= 70 ? 'Good' :
               feedback.score >= 60 ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Section-wise Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(feedback.breakdown).map(([section, score]: [string, any]) => (
              <div key={section} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="font-medium capitalize">
                  {section.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <div className="flex items-center space-x-2">
                  <div className={`w-16 h-2 rounded-full ${
                    score >= 80 ? 'bg-green-500' :
                    score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} style={{ width: `${score}%`, maxWidth: '64px' }} />
                  <span className="font-bold min-w-[40px] text-right">{score}/100</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Critical Issues (if any) */}
      {feedback.criticalIssues && feedback.criticalIssues.length > 0 && (
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Critical Issues to Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.criticalIssues.map((issue: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-red-700">{issue}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Strengths */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-600">
            <CheckCircle className="mr-2 h-5 w-5" />
            Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feedback.strengths.map((strength: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Areas for Improvement */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-600">
            <TrendingUp className="mr-2 h-5 w-5" />
            Areas for Improvement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feedback.improvements.map((improvement: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="h-4 w-4 bg-orange-500 rounded-full mt-0.5 flex-shrink-0"></div>
                <span className="text-sm">{improvement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Actionable Suggestions */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-600">
            <Lightbulb className="mr-2 h-5 w-5" />
            Actionable Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feedback.suggestions.map((suggestion: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{suggestion}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SOPAnalysisResults;
