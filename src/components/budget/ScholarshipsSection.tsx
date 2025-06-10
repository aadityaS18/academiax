
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, Users } from "lucide-react";
import ScholarshipCard from "./ScholarshipCard";

const ScholarshipsSection = () => {
  const scholarships = [
    {
      name: "Fulbright Foreign Student Program",
      country: "USA",
      amount: "Full tuition + living expenses",
      eligibility: "Graduate students, Open to all fields",
      deadline: "October (varies by country)",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Prestigious program for international students to pursue graduate study in the US",
      link: "https://www.fulbrightonline.org"
    },
    {
      name: "Chevening Scholarships",
      country: "UK",
      amount: "Full tuition + £1,347/month stipend",
      eligibility: "Master's degree, 2+ years work experience",
      deadline: "November 2",
      type: "Government",
      icon: <Award className="h-5 w-5" />,
      description: "UK government's global scholarship programme for future leaders",
      link: "https://www.chevening.org"
    },
    {
      name: "DAAD Scholarships",
      country: "Germany",
      amount: "€861-1,200/month + tuition coverage",
      eligibility: "Graduate students, Various programs",
      deadline: "October-December (varies)",
      type: "Government",
      icon: <Users className="h-5 w-5" />,
      description: "German Academic Exchange Service scholarships for international students",
      link: "https://www.daad.de"
    },
    {
      name: "Australia Awards",
      country: "Australia",
      amount: "Full tuition + living allowance",
      eligibility: "Developing country citizens",
      deadline: "April 30",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Australian government scholarships for students from developing countries",
      link: "https://www.australiaawards.gov.au"
    },
    {
      name: "Erasmus Mundus",
      country: "Europe",
      amount: "€1,400/month + tuition coverage",
      eligibility: "Master's & PhD students",
      deadline: "January (varies by program)",
      type: "EU Program",
      icon: <Award className="h-5 w-5" />,
      description: "Joint master's and doctoral programs across multiple European universities",
      link: "https://ec.europa.eu/programmes/erasmus-plus"
    },
    {
      name: "Gates Cambridge Scholarship",
      country: "UK",
      amount: "Full cost + £17,848 stipend",
      eligibility: "Graduate students, High academic achievement",
      deadline: "December 3 (US citizens), January 4 (others)",
      type: "Private",
      icon: <Award className="h-5 w-5" />,
      description: "Prestigious scholarship for outstanding students at University of Cambridge",
      link: "https://www.gatescambridge.org"
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      country: "Canada",
      amount: "CAD $50,000/year for 3 years",
      eligibility: "PhD students, Canadian & international",
      deadline: "November 1",
      type: "Government",
      icon: <Users className="h-5 w-5" />,
      description: "Canada's premier doctoral scholarship program",
      link: "https://vanier.gc.ca"
    },
    {
      name: "MEXT Scholarship",
      country: "Japan",
      amount: "¥143,000-145,000/month + tuition",
      eligibility: "Graduate & undergraduate students",
      deadline: "May-June (varies)",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Japanese government scholarship for international students",
      link: "https://www.mext.go.jp"
    }
  ];

  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Available Scholarships</h2>
        <p className="text-muted-foreground">Explore scholarship opportunities to fund your education abroad</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard key={index} scholarship={scholarship} />
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Scholarship Search Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Application Strategy</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Start your search 12-18 months before departure</li>
                <li>• Apply to multiple scholarships to increase chances</li>
                <li>• Tailor each application to specific requirements</li>
                <li>• Prepare strong personal statements and recommendations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Additional Resources</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• University-specific scholarships from target institutions</li>
                <li>• Field-specific scholarships for your area of study</li>
                <li>• Corporate scholarships from multinational companies</li>
                <li>• Regional scholarships for specific countries/states</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScholarshipsSection;
