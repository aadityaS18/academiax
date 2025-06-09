
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { GraduationCap, Search, Star } from "lucide-react";

const UniversityMatch = () => {
  const [profile, setProfile] = useState({
    grades: "",
    budget: "",
    country: "",
    field: "",
    englishTest: ""
  });

  const universities = [
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#1 in Canada",
      tuition: "$45,000 CAD",
      requirements: "85%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Computer Science", "Business"]
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#1 in Australia",
      tuition: "$35,000 AUD",
      requirements: "80%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Arts"]
    },
    {
      name: "University of Manchester",
      country: "UK",
      ranking: "#6 in UK",
      tuition: "£25,000",
      requirements: "85%+ in 12th, IELTS 6.0",
      programs: ["Engineering", "Business", "Medicine"]
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
          <h1 className="text-3xl font-bold mb-2">University Matching</h1>
          <p className="text-muted-foreground">Find universities that match your profile and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Tell us about yourself to get matched</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="grades">12th Grade Percentage</Label>
                  <Input
                    id="grades"
                    placeholder="e.g., 85%"
                    value={profile.grades}
                    onChange={(e) => setProfile({...profile, grades: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="budget">Annual Budget (in Lakhs)</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., 25 Lakhs"
                    value={profile.budget}
                    onChange={(e) => setProfile({...profile, budget: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Preferred Country</Label>
                  <Input
                    id="country"
                    placeholder="e.g., Canada, Australia"
                    value={profile.country}
                    onChange={(e) => setProfile({...profile, country: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="field">Field of Study</Label>
                  <Input
                    id="field"
                    placeholder="e.g., Engineering, Medicine"
                    value={profile.field}
                    onChange={(e) => setProfile({...profile, field: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="englishTest">English Test Score</Label>
                  <Input
                    id="englishTest"
                    placeholder="e.g., IELTS 7.0, TOEFL 100"
                    value={profile.englishTest}
                    onChange={(e) => setProfile({...profile, englishTest: e.target.value})}
                  />
                </div>
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Find Matches
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Recommended Universities</h2>
              <p className="text-muted-foreground">Based on your profile, here are the best matches</p>
            </div>

            <div className="space-y-4">
              {universities.map((uni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{uni.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-muted-foreground">{uni.country}</span>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                            {uni.ranking}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">Match</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Annual Tuition</p>
                        <p className="font-semibold">{uni.tuition}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Requirements</p>
                        <p className="font-semibold">{uni.requirements}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Popular Programs</p>
                      <div className="flex flex-wrap gap-2">
                        {uni.programs.map((program, idx) => (
                          <span key={idx} className="text-xs bg-secondary px-2 py-1 rounded">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details & Apply
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityMatch;
