
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";

const SOPSamples = () => {
  const [showSamples, setShowSamples] = useState(false);

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

  return (
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
  );
};

export default SOPSamples;
