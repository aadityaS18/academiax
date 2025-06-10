
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, GraduationCap, CheckCircle, AlertTriangle, FileText, Shield, Eye, BookOpen } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const SOPAssistant = () => {
  const [sopText, setSopText] = useState("");
  const [feedback, setFeedback] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [wordLimit, setWordLimit] = useState(1000);
  const [plagiarismResult, setPlagiarismResult] = useState<any>(null);
  const [isCheckingPlagiarism, setIsCheckingPlagiarism] = useState(false);
  const [showSamples, setShowSamples] = useState(false);

  const wordCount = sopText.split(' ').filter(word => word.length > 0).length;
  const isOverLimit = wordCount > wordLimit;

  const analyzeSOP = () => {
    if (isOverLimit) {
      toast({
        title: "Word Limit Exceeded",
        description: `Your SOP exceeds the word limit of ${wordLimit} words. Please reduce it by ${wordCount - wordLimit} words.`,
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const score = Math.max(60, Math.min(95, 75 + Math.floor(Math.random() * 20)));
      setFeedback({
        score,
        strengths: [
          "Clear career goals mentioned",
          "Good academic background description",
          "Specific program choice reasoning",
          "Professional tone maintained"
        ],
        improvements: [
          "Add more personal experiences and stories",
          "Strengthen the connection between past experiences and future goals",
          "Include specific details about the university and program",
          "Better conclusion with clear next steps"
        ],
        suggestions: [
          "Start with a compelling personal anecdote",
          "Use specific examples to demonstrate your passion",
          "Research and mention specific professors or research opportunities",
          "Connect your background to your future aspirations more clearly"
        ]
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

  const sampleSOPs = [
    {
      title: "Computer Science Master's",
      content: `Ever since I wrote my first "Hello World" program at age 12, I knew that computer science would be my passion. This early fascination with coding has evolved into a deep commitment to leveraging technology for solving real-world problems.

During my undergraduate studies in Computer Engineering at XYZ University, I maintained a GPA of 3.8/4.0 while actively participating in hackathons and research projects. My thesis on "Machine Learning Applications in Healthcare" received the Dean's Award for Excellence, reinforcing my interest in the intersection of AI and healthcare.

My internship at ABC Tech allowed me to work on a team developing predictive analytics software that improved patient outcome predictions by 15%. This experience not only honed my technical skills in Python and TensorFlow but also highlighted the importance of interdisciplinary collaboration.

I am particularly drawn to your program because of Professor Smith's groundbreaking research in AI ethics and the university's state-of-the-art AI research lab. The curriculum's emphasis on both theoretical foundations and practical applications aligns perfectly with my goal of developing ethical AI solutions for healthcare.

My long-term goal is to establish a research lab focused on developing AI tools that can democratize healthcare access in underserved communities. I believe your program's rigorous academic environment and research opportunities will provide the perfect foundation for achieving this vision.`
    },
    {
      title: "Business Administration MBA",
      content: `The moment I witnessed my family's small textile business struggle during the economic downturn, I realized the critical importance of strategic business management and financial planning. This personal experience ignited my passion for business administration and my determination to help organizations navigate challenges while creating sustainable growth.

As a Business Analyst at DEF Corporation for the past three years, I have successfully led cross-functional teams to implement process improvements that resulted in 20% cost reduction and 30% efficiency gains. My role involved analyzing market trends, developing strategic recommendations, and presenting findings to C-level executives, experiences that have sharpened my analytical and leadership skills.

Additionally, I founded a social enterprise that provides micro-loans to women entrepreneurs in rural areas, which has supported over 100 small businesses to date. This venture taught me the importance of social responsibility in business and reinforced my commitment to using business as a force for positive change.

Your MBA program's emphasis on sustainable business practices and global perspective aligns perfectly with my values and career aspirations. I am particularly excited about the Global Immersion Program and the opportunity to learn from diverse cohorts representing different industries and cultures.

My goal is to return to my home country and establish a social impact consulting firm that helps traditional businesses adopt sustainable practices while maintaining profitability. I am confident that your program's comprehensive curriculum and network will equip me with the knowledge and connections necessary to make this vision a reality.`
    }
  ];

  const sopStructure = [
    {
      id: "introduction",
      title: "Introduction (10-15%)",
      description: "Hook the reader with a compelling opening",
      details: [
        "Start with a personal anecdote or meaningful experience",
        "Avoid clichés like 'Ever since I was a child...'",
        "Make it specific and unique to your story",
        "Connect the opening to your field of study"
      ],
      example: "Instead of a generic statement, share a specific moment that sparked your interest in the field."
    },
    {
      id: "academic",
      title: "Academic Background (20-25%)",
      description: "Showcase your educational foundation",
      details: [
        "Highlight relevant coursework and projects",
        "Mention significant academic achievements",
        "Discuss research experiences or thesis work",
        "Connect your studies to your future goals"
      ],
      example: "Focus on how specific courses or projects prepared you for graduate study."
    },
    {
      id: "professional",
      title: "Professional Experience (25-30%)",
      description: "Demonstrate practical application of your knowledge",
      details: [
        "Describe internships, jobs, or volunteer work",
        "Emphasize skills gained and responsibilities",
        "Show progression and growth over time",
        "Link experiences to your academic interests"
      ],
      example: "Quantify your achievements and explain what you learned from each experience."
    },
    {
      id: "program",
      title: "Why This Program (20-25%)",
      description: "Show you've done your research",
      details: [
        "Mention specific professors and their research",
        "Discuss unique program features or opportunities",
        "Explain how the program fits your goals",
        "Show genuine interest and knowledge"
      ],
      example: "Research faculty members and mention specific projects or papers that interest you."
    },
    {
      id: "goals",
      title: "Future Goals (15-20%)",
      description: "Paint a clear picture of your aspirations",
      details: [
        "Outline short-term and long-term objectives",
        "Connect your goals to the program",
        "Be specific about your intended impact",
        "Show how the degree will help you achieve these goals"
      ],
      example: "Describe concrete steps you'll take after graduation and how you'll contribute to your field."
    }
  ];

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
          <p className="text-muted-foreground">Get AI-powered feedback, check plagiarism, and learn from examples</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SOP Input */}
          <div className="space-y-6">
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
                      onClick={analyzeSOP} 
                      disabled={!sopText.trim() || isAnalyzing}
                      className="flex-1"
                    >
                      {isAnalyzing ? "Analyzing..." : "Analyze SOP"}
                    </Button>
                    <Button 
                      onClick={checkPlagiarism} 
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

            {/* Plagiarism Results */}
            {plagiarismResult && (
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
                          {plagiarismResult.sources.map((source: any, index: number) => (
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
            )}

            {/* Sample SOPs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Sample SOPs
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSamples(!showSamples)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {showSamples ? 'Hide' : 'View'} Examples
                  </Button>
                </CardTitle>
              </CardHeader>
              {showSamples && (
                <CardContent>
                  <div className="space-y-6">
                    {sampleSOPs.map((sample, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-primary">{sample.title}</h4>
                        <div className="text-sm text-muted-foreground whitespace-pre-line bg-muted/30 p-4 rounded">
                          {sample.content}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Word count: {sample.content.split(' ').filter(word => word.length > 0).length} words
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Updated SOP Structure Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  SOP Structure Guide
                </CardTitle>
                <CardDescription>
                  Follow this proven structure to craft a compelling statement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {sopStructure.map((section) => (
                    <AccordionItem key={section.id} value={section.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center justify-between w-full mr-4">
                          <span className="font-medium">{section.title}</span>
                          <span className="text-sm text-muted-foreground">{section.description}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Key Elements:</h4>
                            <ul className="space-y-1">
                              {section.details.map((detail, index) => (
                                <li key={index} className="flex items-start space-x-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm font-medium text-primary mb-1">💡 Pro Tip:</p>
                            <p className="text-sm text-muted-foreground">{section.example}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
