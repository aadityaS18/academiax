
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, DollarSign, Clock, FileText, Users, MapPin } from "lucide-react";

const CountryGuide = () => {
  const [selectedCountry, setSelectedCountry] = useState("canada");

  const countries = {
    canada: {
      name: "Canada",
      flag: "🇨🇦",
      overview: "Known for high-quality education, multicultural environment, and post-study work opportunities.",
      highlights: ["High quality education", "Multicultural society", "Post-graduation work permit", "Pathway to permanent residency"],
      costs: {
        tuition: "CAD 15,000 - 45,000 per year",
        living: "CAD 12,000 - 18,000 per year",
        total: "CAD 27,000 - 63,000 per year"
      },
      visaInfo: {
        type: "Study Permit",
        processingTime: "4-12 weeks",
        requirements: ["Letter of acceptance", "Proof of funds", "Medical exam (if required)", "No criminal record"]
      },
      topUniversities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Alberta"],
      workRights: "20 hours/week during studies, unlimited during breaks",
      postStudy: "Up to 3 years post-graduation work permit"
    },
    australia: {
      name: "Australia",
      flag: "🇦🇺",
      overview: "Offers world-class universities, beautiful climate, and strong job market for international students.",
      highlights: ["World-class universities", "Beautiful climate", "Strong job market", "English-speaking country"],
      costs: {
        tuition: "AUD 20,000 - 50,000 per year",
        living: "AUD 15,000 - 25,000 per year",
        total: "AUD 35,000 - 75,000 per year"
      },
      visaInfo: {
        type: "Student Visa (Subclass 500)",
        processingTime: "4-8 weeks",
        requirements: ["COE from institution", "Genuine Temporary Entrant", "English proficiency", "Health insurance"]
      },
      topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney", "University of Queensland"],
      workRights: "20 hours/week during studies, unlimited during breaks",
      postStudy: "2-4 years Temporary Graduate visa"
    },
    uk: {
      name: "United Kingdom",
      flag: "🇬🇧",
      overview: "Home to prestigious universities with shorter course durations and rich cultural heritage.",
      highlights: ["Prestigious universities", "Shorter course duration", "Rich cultural heritage", "Gateway to Europe"],
      costs: {
        tuition: "£15,000 - 35,000 per year",
        living: "£12,000 - 20,000 per year",
        total: "£27,000 - 55,000 per year"
      },
      visaInfo: {
        type: "Student Visa (Tier 4)",
        processingTime: "3-8 weeks",
        requirements: ["CAS from university", "Financial evidence", "English proficiency", "Tuberculosis test"]
      },
      topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "University College London"],
      workRights: "20 hours/week during studies, full-time during holidays",
      postStudy: "2 years Graduate Route visa"
    },
    usa: {
      name: "United States",
      flag: "🇺🇸",
      overview: "World's largest economy with top-ranked universities and diverse academic programs.",
      highlights: ["Top-ranked universities", "Research opportunities", "Diverse programs", "Innovation hub"],
      costs: {
        tuition: "$25,000 - 70,000 per year",
        living: "$12,000 - 20,000 per year",
        total: "$37,000 - 90,000 per year"
      },
      visaInfo: {
        type: "F-1 Student Visa",
        processingTime: "2-8 weeks",
        requirements: ["I-20 form", "SEVIS fee payment", "Financial documents", "Visa interview"]
      },
      topUniversities: ["Harvard University", "Stanford University", "MIT", "University of California"],
      workRights: "On-campus work only, 20 hours/week",
      postStudy: "OPT: 12 months (36 months for STEM)"
    },
    ireland: {
      name: "Ireland",
      flag: "🇮🇪",
      overview: "EU member with English-speaking environment, growing tech industry, and friendly culture.",
      highlights: ["EU member state", "English-speaking", "Growing tech industry", "Friendly culture"],
      costs: {
        tuition: "€10,000 - 25,000 per year",
        living: "€9,000 - 15,000 per year",
        total: "€19,000 - 40,000 per year"
      },
      visaInfo: {
        type: "Student Visa (Type D)",
        processingTime: "4-8 weeks",
        requirements: ["Letter of acceptance", "Financial evidence", "Medical insurance", "English proficiency"]
      },
      topUniversities: ["Trinity College Dublin", "University College Dublin", "University College Cork", "NUI Galway"],
      workRights: "20 hours/week during studies, 40 hours during holidays",
      postStudy: "Third Level Graduate Programme (up to 2 years)"
    },
    germany: {
      name: "Germany",
      flag: "🇩🇪",
      overview: "Low tuition fees, strong engineering programs, and excellent research opportunities in Europe.",
      highlights: ["Low/no tuition fees", "Strong engineering programs", "Research opportunities", "Central European location"],
      costs: {
        tuition: "€0 - 3,500 per year (public unis)",
        living: "€8,000 - 12,000 per year",
        total: "€8,000 - 15,500 per year"
      },
      visaInfo: {
        type: "National Visa (Type D)",
        processingTime: "4-12 weeks",
        requirements: ["University admission", "Financial proof", "Health insurance", "Academic records"]
      },
      topUniversities: ["Technical University of Munich", "University of Heidelberg", "Humboldt University", "RWTH Aachen"],
      workRights: "120 full days or 240 half days per year",
      postStudy: "18 months residence permit for job seeking"
    }
  };

  const currentCountry = countries[selectedCountry];

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
          <h1 className="text-3xl font-bold mb-2">Country Guide</h1>
          <p className="text-muted-foreground">Explore top study destinations and find the perfect country for your education journey</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Country Selection */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Study Destinations</CardTitle>
                <CardDescription>Select a country to explore</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(countries).map(([key, country]) => (
                  <Button
                    key={key}
                    variant={selectedCountry === key ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCountry(key)}
                  >
                    <span className="mr-2 text-lg">{country.flag}</span>
                    {country.name}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Country Details */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{currentCountry.flag}</span>
                    <div>
                      <CardTitle className="text-2xl">{currentCountry.name}</CardTitle>
                      <CardDescription className="text-base mt-1">{currentCountry.overview}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentCountry.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary">{highlight}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cost Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Cost of Study</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Annual Tuition</p>
                      <p className="font-semibold">{currentCountry.costs.tuition}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Annual Living Costs</p>
                      <p className="font-semibold">{currentCountry.costs.living}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Total Annual Cost</p>
                      <p className="font-semibold text-primary">{currentCountry.costs.total}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visa Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Visa Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Visa Type</p>
                        <p className="font-semibold">{currentCountry.visaInfo.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Processing Time</p>
                        <p className="font-semibold flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{currentCountry.visaInfo.processingTime}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Key Requirements</p>
                      <ul className="space-y-1">
                        {currentCountry.visaInfo.requirements.map((req, index) => (
                          <li key={index} className="text-sm flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Rights & Post-Study */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Work Rights</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{currentCountry.workRights}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Post-Study Options</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{currentCountry.postStudy}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Top Universities */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-2">
                    {currentCountry.topUniversities.map((uni, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-secondary/50 rounded">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-sm">{uni}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryGuide;
