import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Star, BookOpen, Youtube, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  globalRank: number;
  programs: string[];
  tuitionFee: string;
  admissionRate: string;
  satScore?: string;
  ieltsScore?: string;
  toeflScore?: string;
}

interface StudentProfile {
  grades: string;
  budget: string;
  country: string;
  field: string;
  englishTest: string;
}

const UniversityMatch = () => {
  const [profile, setProfile] = useState<StudentProfile>({
    grades: "",
    budget: "",
    country: "",
    field: "",
    englishTest: ""
  });

  const [searchClicked, setSearchClicked] = useState(false);

  // Extended university data with SAT scores
  const allUniversities: University[] = [
    // USA Universities
    { id: 1, name: "Harvard University", country: "USA", city: "Cambridge, MA", globalRank: 1, programs: ["Medicine", "Law", "Business", "Engineering", "Computer Science"], tuitionFee: "$54,000/year", admissionRate: "3.4%", satScore: "1460-1580", ieltsScore: "7.0+", toeflScore: "100+" },
    { id: 2, name: "Stanford University", country: "USA", city: "Stanford, CA", globalRank: 2, programs: ["Engineering", "Computer Science", "Business", "Medicine"], tuitionFee: "$56,000/year", admissionRate: "3.9%", satScore: "1440-1570", ieltsScore: "7.0+", toeflScore: "100+" },
    { id: 3, name: "MIT", country: "USA", city: "Cambridge, MA", globalRank: 3, programs: ["Engineering", "Computer Science", "Physics", "Mathematics"], tuitionFee: "$53,000/year", admissionRate: "6.7%", satScore: "1510-1580", ieltsScore: "7.5+", toeflScore: "100+" },
    { id: 4, name: "University of Chicago", country: "USA", city: "Chicago, IL", globalRank: 10, programs: ["Economics", "Business", "Law", "Medicine"], tuitionFee: "$59,000/year", admissionRate: "7.4%", satScore: "1480-1580", ieltsScore: "7.0+", toeflScore: "100+" },
    { id: 5, name: "Yale University", country: "USA", city: "New Haven, CT", globalRank: 11, programs: ["Law", "Medicine", "Drama", "Music"], tuitionFee: "$57,000/year", admissionRate: "6.1%", satScore: "1460-1580", ieltsScore: "7.0+", toeflScore: "100+" },

    // Canada Universities
    { id: 20, name: "University of Toronto", country: "Canada", city: "Toronto, ON", globalRank: 25, programs: ["Medicine", "Engineering", "Business", "Computer Science"], tuitionFee: "CAD $58,000/year", admissionRate: "43%", satScore: "1350-1500", ieltsScore: "6.5+", toeflScore: "100+" },
    { id: 21, name: "McGill University", country: "Canada", city: "Montreal, QC", globalRank: 27, programs: ["Medicine", "Law", "Engineering", "Arts"], tuitionFee: "CAD $50,000/year", admissionRate: "46%", satScore: "1320-1480", ieltsScore: "6.5+", toeflScore: "90+" },
    { id: 22, name: "University of British Columbia", country: "Canada", city: "Vancouver, BC", globalRank: 40, programs: ["Engineering", "Business", "Medicine", "Arts"], tuitionFee: "CAD $45,000/year", admissionRate: "52%", satScore: "1300-1450", ieltsScore: "6.5+", toeflScore: "90+" },
    { id: 23, name: "University of Alberta", country: "Canada", city: "Edmonton, AB", globalRank: 45, programs: ["Engineering", "Medicine", "Business"], tuitionFee: "CAD $35,000/year", admissionRate: "58%", satScore: "1250-1400", ieltsScore: "6.5+", toeflScore: "86+" },

    // UK Universities
    { id: 40, name: "University of Oxford", country: "UK", city: "Oxford", globalRank: 4, programs: ["Medicine", "Law", "Philosophy", "Engineering"], tuitionFee: "£38,000/year", admissionRate: "17.5%", satScore: "1470-1580", ieltsScore: "7.0+", toeflScore: "100+" },
    { id: 41, name: "University of Cambridge", country: "UK", city: "Cambridge", globalRank: 5, programs: ["Medicine", "Engineering", "Mathematics", "Natural Sciences"], tuitionFee: "£37,000/year", admissionRate: "21%", satScore: "1460-1580", ieltsScore: "7.5+", toeflScore: "110+" },
    { id: 42, name: "Imperial College London", country: "UK", city: "London", globalRank: 8, programs: ["Engineering", "Medicine", "Business", "Computer Science"], tuitionFee: "£35,000/year", admissionRate: "14.3%", satScore: "1450-1560", ieltsScore: "7.0+", toeflScore: "100+" },
    { id: 43, name: "University College London", country: "UK", city: "London", globalRank: 9, programs: ["Medicine", "Engineering", "Law", "Architecture"], tuitionFee: "£31,000/year", admissionRate: "63%", satScore: "1400-1520", ieltsScore: "6.5+", toeflScore: "92+" },
    { id: 44, name: "London School of Economics", country: "UK", city: "London", globalRank: 15, programs: ["Economics", "Political Science", "Law", "Management"], tuitionFee: "£25,000/year", admissionRate: "8.9%", satScore: "1420-1540", ieltsScore: "7.0+", toeflScore: "100+" },

    // Ireland Universities
    { id: 60, name: "Trinity College Dublin", country: "Ireland", city: "Dublin", globalRank: 1, programs: ["Medicine", "Law", "Engineering", "Business"], tuitionFee: "€45,000/year", admissionRate: "35%", satScore: "1350-1480", ieltsScore: "6.5+", toeflScore: "90+" },
    { id: 61, name: "University College Dublin", country: "Ireland", city: "Dublin", globalRank: 2, programs: ["Business", "Engineering", "Medicine", "Agriculture"], tuitionFee: "€25,000/year", admissionRate: "85%", satScore: "1300-1450", ieltsScore: "6.0+", toeflScore: "80+" },
    { id: 62, name: "University College Cork", country: "Ireland", city: "Cork", globalRank: 3, programs: ["Medicine", "Engineering", "Business", "Arts"], tuitionFee: "€20,000/year", admissionRate: "75%", satScore: "1250-1400", ieltsScore: "6.0+", toeflScore: "80+" },
    { id: 63, name: "National University of Ireland Galway", country: "Ireland", city: "Galway", globalRank: 4, programs: ["Medicine", "Engineering", "Arts", "Science"], tuitionFee: "€18,000/year", admissionRate: "80%", satScore: "1200-1350", ieltsScore: "6.0+", toeflScore: "80+" },
  ];

  // Test preparation resources with book links
  const testPrepResources = {
    IELTS: {
      books: [
        { title: "Cambridge IELTS 17 Academic Student's Book", link: "https://www.amazon.com/Cambridge-IELTS-Academic-Students-Answers/dp/1316637356" },
        { title: "The Official Cambridge Guide to IELTS", link: "https://www.amazon.com/Official-Cambridge-Guide-IELTS-Students/dp/1107620694" },
        { title: "Barron's IELTS Superpack", link: "https://www.amazon.com/Barrons-IELTS-Superpack-Audio-Online/dp/1438075219" }
      ],
      youtubeChannels: [
        { name: "IELTS Liz", url: "https://youtube.com/@IELTSLiz" },
        { name: "E2 IELTS", url: "https://youtube.com/@E2IELTS" },
        { name: "IELTS Simon", url: "https://youtube.com/@ieltssimon" }
      ]
    },
    SAT: {
      books: [
        { title: "The Official SAT Study Guide 2024", link: "https://www.amazon.com/Official-SAT-Study-Guide-2024/dp/1457315645" },
        { title: "College Board SAT Prep Plus 2024", link: "https://www.amazon.com/Kaplan-SAT-Prep-Plus-2024/dp/1506285244" },
        { title: "Barron's SAT 29th Edition", link: "https://www.amazon.com/Barrons-SAT-29th-Sharon-Weiner/dp/1506264328" }
      ],
      youtubeChannels: [
        { name: "Khan Academy SAT", url: "https://youtube.com/@khanacademy" },
        { name: "SupertutorTV", url: "https://youtube.com/@SupertutorTV" },
        { name: "SAT Math", url: "https://youtube.com/@SATMath" }
      ]
    },
    TOEFL: {
      books: [
        { title: "The Official Guide to the TOEFL iBT Test", link: "https://www.amazon.com/Official-Guide-TOEFL-Test-Sixth/dp/1260011216" },
        { title: "Barron's TOEFL iBT Superpack", link: "https://www.amazon.com/Barrons-TOEFL-iBT-Superpack-Audio/dp/1438075170" },
        { title: "Cambridge Preparation for the TOEFL Test", link: "https://www.amazon.com/Cambridge-Preparation-TOEFL-Test-Book/dp/0521755875" }
      ],
      youtubeChannels: [
        { name: "TOEFL TV Official", url: "https://youtube.com/@TOEFLTV" },
        { name: "TST Prep TOEFL", url: "https://youtube.com/@TSTPrep" },
        { name: "BestMyTest TOEFL", url: "https://youtube.com/@BestMyTest" }
      ]
    },
    GRE: {
      books: [
        { title: "The Official Guide to the GRE General Test", link: "https://www.amazon.com/Official-Guide-GRE-General-Test/dp/1259862410" },
        { title: "Manhattan Prep GRE Set of 8 Strategy Guides", link: "https://www.amazon.com/Manhattan-Prep-Strategy-Guides-Instructional/dp/1506232396" },
        { title: "Barron's GRE 23rd Edition", link: "https://www.amazon.com/Barrons-GRE-23rd-Sharon-Weiner/dp/1506264328" }
      ],
      youtubeChannels: [
        { name: "GregMat", url: "https://youtube.com/@GregMat" },
        { name: "Magoosh GRE", url: "https://youtube.com/@MagooshGRE" },
        { name: "Manhattan Prep GRE", url: "https://youtube.com/@ManhattanPrepGRE" }
      ]
    }
  };

  const normalizeCountryName = (country: string): string => {
    const normalized = country.toLowerCase().trim();
    
    if (normalized.includes('usa') || normalized.includes('america') || normalized.includes('states')) {
      return 'usa';
    }
    if (normalized.includes('uk') || normalized.includes('britain') || normalized.includes('kingdom')) {
      return 'uk';
    }
    if (normalized.includes('canada')) {
      return 'canada';
    }
    if (normalized.includes('ireland')) {
      return 'ireland';
    }
    if (normalized.includes('australia')) {
      return 'australia';
    }
    if (normalized.includes('germany')) {
      return 'germany';
    }
    
    return normalized;
  };

  const getFilteredUniversities = () => {
    console.log("Search clicked:", searchClicked);
    console.log("Profile:", profile);
    
    if (!searchClicked) {
      return allUniversities.slice(0, 3);
    }

    let filtered = allUniversities;
    console.log("Total universities before filtering:", filtered.length);

    if (profile.country.trim()) {
      const searchCountry = normalizeCountryName(profile.country);
      console.log("Normalized search country:", searchCountry);
      
      filtered = filtered.filter(uni => {
        const uniCountry = normalizeCountryName(uni.country);
        const matches = uniCountry === searchCountry;
        if (matches) {
          console.log("Country match found:", uni.name, uni.country);
        }
        return matches;
      });

      console.log("Universities after country filtering:", filtered.length);
    }

    if (profile.field.trim()) {
      const searchField = profile.field.toLowerCase();
      console.log("Searching for field:", searchField);
      
      filtered = filtered.filter(uni => {
        const hasField = uni.programs.some(program =>
          program.toLowerCase().includes(searchField)
        );
        if (hasField) {
          console.log("Field match found:", uni.name, uni.programs);
        }
        return hasField;
      });

      console.log("Universities after field filtering:", filtered.length);
    }

    filtered.sort((a, b) => a.globalRank - b.globalRank);

    console.log("Final filtered universities:", filtered.length);
    return filtered.length > 0 ? filtered : [];
  };

  const handleSearch = () => {
    console.log("Search button clicked");
    setSearchClicked(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">University Match</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="match" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="match">University Matching</TabsTrigger>
            <TabsTrigger value="prep">Test Preparation</TabsTrigger>
          </TabsList>

          <TabsContent value="match" className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Find Your Perfect University</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tell us about your academic profile and we'll match you with the best universities worldwide.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Your Academic Profile</CardTitle>
                <CardDescription>
                  Fill in your details to get personalized university recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="grades">Academic Grades</Label>
                    <Input
                      id="grades"
                      placeholder="e.g., 3.8 GPA, 85%"
                      value={profile.grades}
                      onChange={(e) => setProfile({ ...profile, grades: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (Annual)</Label>
                    <Input
                      id="budget"
                      placeholder="e.g., $50,000"
                      value={profile.budget}
                      onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Preferred Country</Label>
                    <Input
                      id="country"
                      placeholder="e.g., USA, UK, Canada"
                      value={profile.country}
                      onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="field">Field of Study</Label>
                    <Input
                      id="field"
                      placeholder="e.g., Computer Science, Medicine"
                      value={profile.field}
                      onChange={(e) => setProfile({ ...profile, field: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="englishTest">English Test</Label>
                    <Select value={profile.englishTest} onValueChange={(value) => setProfile({ ...profile, englishTest: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your English test" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ielts">IELTS</SelectItem>
                        <SelectItem value="toefl">TOEFL</SelectItem>
                        <SelectItem value="none">None taken yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleSearch} className="w-full" size="lg">
                  Find My Universities
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">
                {searchClicked ? "Your University Matches" : "Featured Universities"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredUniversities().map((university) => (
                  <Card key={university.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{university.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {university.city}, {university.country}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          #{university.globalRank}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Programs</h4>
                        <div className="flex flex-wrap gap-1">
                          {university.programs.slice(0, 3).map((program, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                          {university.programs.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{university.programs.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tuition:</span>
                          <span className="font-medium">{university.tuitionFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Admission Rate:</span>
                          <span className="font-medium">{university.admissionRate}</span>
                        </div>
                        {university.satScore && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">SAT Score:</span>
                            <span className="font-medium">{university.satScore}</span>
                          </div>
                        )}
                        {university.ieltsScore && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">IELTS:</span>
                            <span className="font-medium">{university.ieltsScore}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {searchClicked && getFilteredUniversities().length === 0 && (
                <Card className="p-8 text-center">
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">No matches found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria to find more universities.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="prep" className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Test Preparation Resources</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive resources to help you prepare for standardized tests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(testPrepResources).map(([testName, resources]) => (
                <Card key={testName} className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {testName} Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Recommended Books</h4>
                      <ul className="space-y-2">
                        {resources.books.map((book, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <a
                              href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm hover:text-primary transition-colors hover:underline"
                            >
                              {book.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        YouTube Channels
                      </h4>
                      <div className="space-y-2">
                        {resources.youtubeChannels.map((channel, index) => (
                          <a
                            key={index}
                            href={channel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                          >
                            <Youtube className="w-4 h-4 text-red-500" />
                            <span>{channel.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-muted/50">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">General Preparation Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Study Schedule</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Start preparation 3-6 months early</li>
                      <li>• Practice consistently for 1-2 hours daily</li>
                      <li>• Take regular practice tests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Test Day Tips</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Get proper rest the night before</li>
                      <li>• Arrive early at the test center</li>
                      <li>• Bring required identification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UniversityMatch;
