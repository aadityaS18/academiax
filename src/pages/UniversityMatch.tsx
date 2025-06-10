
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Search, Star, ExternalLink } from "lucide-react";

const UniversityMatch = () => {
  const [profile, setProfile] = useState({
    grades: "",
    budget: "",
    country: "",
    field: "",
    englishTest: ""
  });

  const [searchClicked, setSearchClicked] = useState(false);

  const allUniversities = [
    // USA (Top 23-50 range)
    {
      name: "University of California, Berkeley",
      country: "USA",
      ranking: "#2 Public in USA",
      globalRank: 23,
      tuition: "$65,000",
      requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0",
      programs: ["Engineering", "Computer Science", "Business"],
      website: "https://www.berkeley.edu"
    },
    {
      name: "University of Michigan",
      country: "USA",
      ranking: "#3 Public in USA",
      globalRank: 25,
      tuition: "$60,000",
      requirements: "88%+ in 12th, TOEFL 100/IELTS 7.0",
      programs: ["Engineering", "Medicine", "Business"],
      website: "https://umich.edu"
    },
    {
      name: "University of California, Los Angeles",
      country: "USA",
      ranking: "#4 Public in USA",
      globalRank: 28,
      tuition: "$63,000",
      requirements: "87%+ in 12th, TOEFL 100/IELTS 7.0",
      programs: ["Film Studies", "Engineering", "Medicine"],
      website: "https://www.ucla.edu"
    },
    {
      name: "Georgia Institute of Technology",
      country: "USA",
      ranking: "#7 Public in USA",
      globalRank: 35,
      tuition: "$58,000",
      requirements: "85%+ in 12th, TOEFL 100/IELTS 7.0",
      programs: ["Engineering", "Computer Science", "Business"],
      website: "https://www.gatech.edu"
    },
    {
      name: "University of Texas at Austin",
      country: "USA",
      ranking: "#8 Public in USA",
      globalRank: 38,
      tuition: "$55,000",
      requirements: "84%+ in 12th, TOEFL 100/IELTS 7.0",
      programs: ["Engineering", "Business", "Computer Science"],
      website: "https://www.utexas.edu"
    },
    // Canada (Top 23-50 range)
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#1 in Canada",
      globalRank: 24,
      tuition: "$45,000 CAD",
      requirements: "85%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Computer Science", "Business"],
      website: "https://www.utoronto.ca"
    },
    {
      name: "University of British Columbia",
      country: "Canada",
      ranking: "#2 in Canada",
      globalRank: 30,
      tuition: "$42,000 CAD",
      requirements: "82%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Arts"],
      website: "https://www.ubc.ca"
    },
    {
      name: "McGill University",
      country: "Canada",
      ranking: "#3 in Canada",
      globalRank: 32,
      tuition: "$38,000 CAD",
      requirements: "83%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Arts"],
      website: "https://www.mcgill.ca"
    },
    {
      name: "University of Alberta",
      country: "Canada",
      ranking: "#4 in Canada",
      globalRank: 40,
      tuition: "$35,000 CAD",
      requirements: "80%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Medicine", "Science"],
      website: "https://www.ualberta.ca"
    },
    {
      name: "University of Waterloo",
      country: "Canada",
      ranking: "#5 in Canada",
      globalRank: 45,
      tuition: "$40,000 CAD",
      requirements: "85%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Computer Science", "Mathematics"],
      website: "https://uwaterloo.ca"
    },
    // UK (Top 20)
    {
      name: "University of Manchester",
      country: "UK",
      ranking: "#6 in UK",
      globalRank: 15,
      tuition: "£25,000",
      requirements: "85%+ in 12th, IELTS 6.0",
      programs: ["Engineering", "Business", "Medicine"],
      website: "https://www.manchester.ac.uk"
    },
    {
      name: "University of Edinburgh",
      country: "UK",
      ranking: "#4 in UK",
      globalRank: 12,
      tuition: "£28,000",
      requirements: "88%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Arts"],
      website: "https://www.ed.ac.uk"
    },
    {
      name: "King's College London",
      country: "UK",
      ranking: "#7 in UK",
      globalRank: 18,
      tuition: "£26,000",
      requirements: "86%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Law", "Business"],
      website: "https://www.kcl.ac.uk"
    },
    {
      name: "University of Bristol",
      country: "UK",
      ranking: "#9 in UK",
      globalRank: 20,
      tuition: "£24,000",
      requirements: "84%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Medicine", "Arts"],
      website: "https://www.bristol.ac.uk"
    },
    // Australia
    {
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#1 in Australia",
      globalRank: 14,
      tuition: "$35,000 AUD",
      requirements: "80%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Arts"],
      website: "https://www.unimelb.edu.au"
    },
    {
      name: "Australian National University",
      country: "Australia",
      ranking: "#2 in Australia",
      globalRank: 16,
      tuition: "$38,000 AUD",
      requirements: "85%+ in 12th, IELTS 6.5",
      programs: ["Science", "Engineering", "Business"],
      website: "https://www.anu.edu.au"
    },
    {
      name: "University of Sydney",
      country: "Australia",
      ranking: "#3 in Australia",
      globalRank: 19,
      tuition: "$36,000 AUD",
      requirements: "82%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Engineering", "Business"],
      website: "https://www.sydney.edu.au"
    },
    // Ireland (Top 5)
    {
      name: "Trinity College Dublin",
      country: "Ireland",
      ranking: "#1 in Ireland",
      globalRank: 101,
      tuition: "€20,000",
      requirements: "80%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Computer Science", "Medicine"],
      website: "https://www.tcd.ie"
    },
    {
      name: "University College Dublin",
      country: "Ireland",
      ranking: "#2 in Ireland",
      globalRank: 173,
      tuition: "€18,500",
      requirements: "78%+ in 12th, IELTS 6.0",
      programs: ["Business", "Engineering", "Arts"],
      website: "https://www.ucd.ie"
    },
    {
      name: "National University of Ireland Galway",
      country: "Ireland",
      ranking: "#3 in Ireland",
      globalRank: 258,
      tuition: "€16,000",
      requirements: "75%+ in 12th, IELTS 6.0",
      programs: ["Science", "Medicine", "Arts"],
      website: "https://www.nuigalway.ie"
    },
    {
      name: "University College Cork",
      country: "Ireland",
      ranking: "#4 in Ireland",
      globalRank: 298,
      tuition: "€17,500",
      requirements: "76%+ in 12th, IELTS 6.0",
      programs: ["Medicine", "Engineering", "Business"],
      website: "https://www.ucc.ie"
    },
    {
      name: "Dublin City University",
      country: "Ireland",
      ranking: "#5 in Ireland",
      globalRank: 490,
      tuition: "€15,000",
      requirements: "74%+ in 12th, IELTS 6.0",
      programs: ["Engineering", "Business", "Computer Science"],
      website: "https://www.dcu.ie"
    },
    // Germany (European)
    {
      name: "Technical University of Munich",
      country: "Germany",
      ranking: "#1 in Germany",
      globalRank: 50,
      tuition: "€3,000",
      requirements: "85%+ in 12th, IELTS 6.5",
      programs: ["Engineering", "Computer Science", "Science"],
      website: "https://www.tum.de"
    },
    {
      name: "University of Heidelberg",
      country: "Germany",
      ranking: "#2 in Germany",
      globalRank: 64,
      tuition: "€3,500",
      requirements: "82%+ in 12th, IELTS 6.5",
      programs: ["Medicine", "Science", "Arts"],
      website: "https://www.uni-heidelberg.de"
    }
  ];

  // Function to normalize country names for flexible matching
  const normalizeCountryName = (country: string) => {
    const normalized = country.toLowerCase().replace(/[^a-z]/g, '');
    
    // Handle common typos and variations
    if (normalized.includes('ireland') || normalized.includes('iraldn') || normalized.includes('irland')) {
      return 'ireland';
    }
    if (normalized.includes('canada') || normalized.includes('canad')) {
      return 'canada';
    }
    if (normalized.includes('australia') || normalized.includes('austral') || normalized.includes('aus')) {
      return 'australia';
    }
    if (normalized.includes('usa') || normalized.includes('america') || normalized.includes('united states')) {
      return 'usa';
    }
    if (normalized.includes('uk') || normalized.includes('britain') || normalized.includes('england')) {
      return 'uk';
    }
    if (normalized.includes('germany') || normalized.includes('german')) {
      return 'germany';
    }
    
    return normalized;
  };

  // Get country-specific limits
  const getCountryLimit = (country: string) => {
    const normalizedCountry = country.toLowerCase();
    
    if (normalizedCountry === 'usa' || normalizedCountry === 'canada') {
      return { min: 23, max: 50 };
    }
    if (normalizedCountry === 'uk' || normalizedCountry === 'germany') {
      return { min: 1, max: 20 };
    }
    if (normalizedCountry === 'ireland') {
      return { min: 1, max: 5 };
    }
    if (normalizedCountry === 'australia') {
      return { min: 1, max: 15 };
    }
    
    return { min: 1, max: 10 }; // Default for other countries
  };

  const getFilteredUniversities = () => {
    if (!searchClicked) {
      return allUniversities.slice(0, 3); // Show first 3 by default
    }

    let filtered = allUniversities;

    // Filter by country if specified
    if (profile.country.trim()) {
      const searchCountry = normalizeCountryName(profile.country);
      
      filtered = filtered.filter(uni => {
        const uniCountry = normalizeCountryName(uni.country);
        return uniCountry === searchCountry;
      });

      // Apply country-specific ranking limits
      if (filtered.length > 0) {
        const countryLimits = getCountryLimit(searchCountry);
        filtered = filtered.filter(uni => 
          uni.globalRank >= countryLimits.min && uni.globalRank <= countryLimits.max
        );
      }
    }

    // Filter by field if specified
    if (profile.field.trim()) {
      filtered = filtered.filter(uni =>
        uni.programs.some(program =>
          program.toLowerCase().includes(profile.field.toLowerCase())
        )
      );
    }

    // Sort by global ranking
    filtered.sort((a, b) => a.globalRank - b.globalRank);

    return filtered.length > 0 ? filtered : [];
  };

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const handleViewDetails = (websiteUrl: string) => {
    window.open(websiteUrl, '_blank', 'noopener,noreferrer');
  };

  const filteredUniversities = getFilteredUniversities();

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
                    placeholder="e.g., Ireland, Canada, Australia"
                    value={profile.country}
                    onChange={(e) => setProfile({...profile, country: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Shows top 23-50 for USA/Canada, top 20 for UK/Europe, top 5 for Ireland
                  </p>
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
                <Button className="w-full" onClick={handleSearch}>
                  <Search className="mr-2 h-4 w-4" />
                  Find Matches
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {searchClicked ? "Search Results" : "Recommended Universities"}
              </h2>
              <p className="text-muted-foreground">
                {searchClicked 
                  ? `Found ${filteredUniversities.length} universities matching your criteria`
                  : "Based on your profile, here are the best matches"
                }
              </p>
            </div>

            {filteredUniversities.length === 0 && searchClicked ? (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">
                    No universities found matching your criteria. Try adjusting your search parameters.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredUniversities.map((uni, index) => (
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
                            <span className="text-xs bg-secondary px-2 py-1 rounded">
                              Global #{uni.globalRank}
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
                      <Button 
                        className="w-full mt-4" 
                        variant="outline"
                        onClick={() => handleViewDetails(uni.website)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details & Apply
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityMatch;
