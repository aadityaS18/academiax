
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface PlagiarismResult {
  similarityPercentage: number;
  status: 'excellent' | 'good' | 'warning';
  sources: Array<{ site: string; similarity: number }>;
}

interface SOPPlagiarismResultsProps {
  plagiarismResult: PlagiarismResult;
}

const SOPPlagiarismResults = ({ plagiarismResult }: SOPPlagiarismResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="mr-2 h-5 w-5" />
          Plagiarism Check Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Similarity Score:</span>
            <div className={`text-2xl font-bold ${
              plagiarismResult.status === 'excellent' ? 'text-green-600' :
              plagiarismResult.status === 'good' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {plagiarismResult.similarityPercentage}%
            </div>
          </div>
          <div className={`p-3 rounded-lg ${
            plagiarismResult.status === 'excellent' ? 'bg-green-50 text-green-800' :
            plagiarismResult.status === 'good' ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-800'
          }`}>
            {plagiarismResult.status === 'excellent' && "Excellent! Your content appears to be original."}
            {plagiarismResult.status === 'good' && "Good originality with minor similarities to common sources."}
            {plagiarismResult.status === 'warning' && "Consider revising sections that show high similarity."}
          </div>
          {plagiarismResult.sources.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Similar Sources Found:</h4>
              <ul className="space-y-1">
                {plagiarismResult.sources.map((source, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{source.site}</span>
                    <span>{source.similarity}% similarity</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SOPPlagiarismResults;
