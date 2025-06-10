
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import SOPHeader from "@/components/sop/SOPHeader";
import SOPInput from "@/components/sop/SOPInput";
import SOPAnalysisResults from "@/components/sop/SOPAnalysisResults";
import SOPPlagiarismResults from "@/components/sop/SOPPlagiarismResults";
import SOPSamples from "@/components/sop/SOPSamples";
import SOPStructureGuide from "@/components/sop/SOPStructureGuide";
import SOPTips from "@/components/sop/SOPTips";

const SOPAssistant = () => {
  const [sopText, setSopText] = useState("");
  const [feedback, setFeedback] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [wordLimit, setWordLimit] = useState(1000);
  const [plagiarismResult, setPlagiarismResult] = useState<any>(null);
  const [isCheckingPlagiarism, setIsCheckingPlagiarism] = useState(false);

  const analyzeSOP = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis with more detailed feedback
    setTimeout(() => {
      const score = Math.max(60, Math.min(95, 75 + Math.floor(Math.random() * 20)));
      setFeedback({
        score,
        breakdown: {
          introduction: Math.floor(score * 0.15 + Math.random() * 10),
          academicBackground: Math.floor(score * 0.2 + Math.random() * 15),
          professionalExperience: Math.floor(score * 0.25 + Math.random() * 15),
          programFit: Math.floor(score * 0.2 + Math.random() * 15),
          futureGoals: Math.floor(score * 0.2 + Math.random() * 15)
        },
        strengths: [
          "Clear career goals mentioned",
          "Good academic background description", 
          "Specific program choice reasoning",
          "Professional tone maintained",
          "Relevant experiences highlighted"
        ],
        improvements: [
          "Add more personal experiences and stories",
          "Strengthen the connection between past experiences and future goals",
          "Include specific details about the university and program",
          "Better conclusion with clear next steps",
          "Use more specific examples to demonstrate passion"
        ],
        criticalIssues: score < 70 ? [
          "Lacks specific examples and concrete achievements",
          "Generic statements without personalization",
          "Weak connection between background and program choice"
        ] : [],
        suggestions: [
          "Start with a compelling personal anecdote",
          "Use specific examples to demonstrate your passion",
          "Research and mention specific professors or research opportunities",
          "Connect your background to your future aspirations more clearly",
          "Quantify your achievements with numbers and results"
        ],
        grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const checkPlagiarism = () => {
    if (!sopText.trim()) {
      toast({
        title: "No Content",
        description: "Please enter your SOP text before checking for plagiarism.",
        variant: "destructive",
      });
      return;
    }

    setIsCheckingPlagiarism(true);
    
    // Simulate plagiarism check
    setTimeout(() => {
      const similarityScore = Math.floor(Math.random() * 25); // 0-25% similarity
      setPlagiarismResult({
        similarityPercentage: similarityScore,
        status: similarityScore < 10 ? 'excellent' : similarityScore < 20 ? 'good' : 'warning',
        sources: similarityScore > 0 ? [
          { site: "Sample SOP Templates", similarity: Math.floor(similarityScore / 2) },
          { site: "University Guidelines", similarity: Math.floor(similarityScore / 3) }
        ] : []
      });
      setIsCheckingPlagiarism(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SOPHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Statement of Purpose Assistant</h1>
          <p className="text-muted-foreground">Get AI-powered feedback, check plagiarism, and learn from examples</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOP Input */}
          <div className="space-y-6">
            <SOPInput
              sopText={sopText}
              setSopText={setSopText}
              wordLimit={wordLimit}
              setWordLimit={setWordLimit}
              onAnalyzeSOP={analyzeSOP}
              onCheckPlagiarism={checkPlagiarism}
              isAnalyzing={isAnalyzing}
              isCheckingPlagiarism={isCheckingPlagiarism}
            />

            {/* Plagiarism Results */}
            {plagiarismResult && (
              <SOPPlagiarismResults plagiarismResult={plagiarismResult} />
            )}

            {/* Sample SOPs */}
            <SOPSamples />

            {/* SOP Structure Guide */}
            <SOPStructureGuide />
          </div>

          {/* Feedback Section */}
          <div>
            {feedback ? (
              <SOPAnalysisResults feedback={feedback} />
            ) : (
              <SOPTips />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPAssistant;
