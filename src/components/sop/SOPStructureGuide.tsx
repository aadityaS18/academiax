
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, CheckCircle } from "lucide-react";

const SOPStructureGuide = () => {
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
  );
};

export default SOPStructureGuide;
