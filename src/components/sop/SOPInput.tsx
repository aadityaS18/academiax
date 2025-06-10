
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Brain, Shield, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface SOPInputProps {
  sopText: string;
  setSopText: (text: string) => void;
  wordLimit: number;
  setWordLimit: (limit: number) => void;
  onAnalyzeSOP: () => void;
  onCheckPlagiarism: () => void;
  isAnalyzing: boolean;
  isCheckingPlagiarism: boolean;
}

const SOPInput = ({
  sopText,
  setSopText,
  wordLimit,
  setWordLimit,
  onAnalyzeSOP,
  onCheckPlagiarism,
  isAnalyzing,
  isCheckingPlagiarism
}: SOPInputProps) => {
  const wordCount = sopText.split(' ').filter(word => word.length > 0).length;
  const isOverLimit = wordCount > wordLimit;

  const handleAnalyze = () => {
    if (isOverLimit) {
      toast({
        title: "Word Limit Exceeded",
        description: `Your SOP exceeds the word limit of ${wordLimit} words. Please reduce it by ${wordCount - wordLimit} words.`,
        variant: "destructive",
      });
      return;
    }
    onAnalyzeSOP();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5" />
          Your Statement of Purpose
        </CardTitle>
        <CardDescription>
          Paste your SOP draft below for detailed analysis and suggestions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Word Limit Setting */}
          <div className="flex items-center space-x-4">
            <Label htmlFor="wordLimit" className="whitespace-nowrap">Word Limit:</Label>
            <Input
              id="wordLimit"
              type="number"
              value={wordLimit}
              onChange={(e) => setWordLimit(Number(e.target.value))}
              className="w-24"
              min="100"
              max="2000"
            />
            <span className="text-sm text-muted-foreground">words</span>
          </div>

          <div>
            <Label htmlFor="sop">SOP Text</Label>
            <Textarea
              id="sop"
              placeholder="Paste your Statement of Purpose here..."
              className="min-h-[400px]"
              value={sopText}
              onChange={(e) => setSopText(e.target.value)}
            />
            <div className="flex justify-between items-center mt-2">
              <p className={`text-sm ${isOverLimit ? 'text-red-500' : 'text-muted-foreground'}`}>
                Word count: {wordCount} / {wordLimit}
                {isOverLimit && (
                  <span className="ml-2 text-red-500">
                    ({wordCount - wordLimit} over limit)
                  </span>
                )}
              </p>
              {isOverLimit && (
                <div className="flex items-center text-red-500">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  <span className="text-sm">Exceeds limit</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <Button 
              onClick={handleAnalyze} 
              disabled={!sopText.trim() || isAnalyzing}
              className="flex-1"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze SOP"}
            </Button>
            <Button 
              onClick={onCheckPlagiarism} 
              variant="outline"
              disabled={!sopText.trim() || isCheckingPlagiarism}
              className="flex-1"
            >
              <Shield className="mr-2 h-4 w-4" />
              {isCheckingPlagiarism ? "Checking..." : "Check Plagiarism"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SOPInput;
