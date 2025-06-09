
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Brain, GraduationCap, CheckCircle } from "lucide-react";

const SOPAssistant = () => {
  const [sopText, setSopText] = useState("");
  const [feedback, setFeedback] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSOP = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setFeedback({
        score: 78,
        strengths: [
          "Clear career goals mentioned",
          "Good academic background description",
          "Specific program choice reasoning"
        ],
        improvements: [
          "Add more personal experiences and stories",
          "Strengthen the connection between past experiences and future goals",
          "Include specific details about the university and program"
        ],
        suggestions: [
          "Start with a compelling personal anecdote",
          "Use specific examples to demonstrate your passion",
          "Research and mention specific professors or research opportunities"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">StudyAbroad</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Statement of Purpose Assistant</h1>
          <p className="text-muted-foreground">Get AI-powered feedback to improve your SOP</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOP Input */}
          <div>
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
                  <div>
                    <Label htmlFor="sop">SOP Text</Label>
                    <Textarea
                      id="sop"
                      placeholder="Paste your Statement of Purpose here..."
                      className="min-h-[400px]"
                      value={sopText}
                      onChange={(e) => setSopText(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Word count: {sopText.split(' ').filter(word => word.length > 0).length}
                    </p>
                  </div>
                  <Button 
                    onClick={analyzeSOP} 
                    disabled={!sopText.trim() || isAnalyzing}
                    className="w-full"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze SOP"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sample SOP Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Sample SOP Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 border-l-4 border-primary bg-primary/5">
                    <p className="font-medium">Introduction (10-15%)</p>
                    <p className="text-muted-foreground">Hook the reader with a personal story or compelling statement</p>
                  </div>
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <p className="font-medium">Academic Background (20-25%)</p>
                    <p className="text-muted-foreground">Highlight relevant coursework, projects, and achievements</p>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 bg-green-50">
                    <p className="font-medium">Professional Experience (25-30%)</p>
                    <p className="text-muted-foreground">Work experience, internships, research, and skills gained</p>
                  </div>
                  <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                    <p className="font-medium">Why This Program (20-25%)</p>
                    <p className="text-muted-foreground">Specific reasons for choosing this university and program</p>
                  </div>
                  <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                    <p className="font-medium">Future Goals (15-20%)</p>
                    <p className="text-muted-foreground">Short-term and long-term career objectives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback */}
          <div>
            {feedback ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-primary">{feedback.score}/100</div>
                      <div className="text-sm text-muted-foreground">Overall Score</div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
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

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Areas for Improvement</CardTitle>
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

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feedback.suggestions.map((suggestion: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Brain className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>SOP Writing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Before You Start</h4>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Research the university and program thoroughly</li>
                        <li>• Understand the admission requirements</li>
                        <li>• Review successful SOP samples</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Writing Best Practices</h4>
                      <ul className="space-y-1 text-green-700">
                        <li>• Be specific and avoid generic statements</li>
                        <li>• Show, don't tell - use concrete examples</li>
                        <li>• Maintain a clear narrative flow</li>
                        <li>• Keep it within word limits (500-1000 words)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Common Mistakes to Avoid</h4>
                      <ul className="space-y-1 text-purple-700">
                        <li>• Copying from templates</li>
                        <li>• Focusing only on academics</li>
                        <li>• Being too emotional or dramatic</li>
                        <li>• Not proofreading for errors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPAssistant;
