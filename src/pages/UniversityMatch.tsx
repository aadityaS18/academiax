import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Star, BookOpen, Youtube, ExternalLink, Loader2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchUniversitiesFromApi, convertApiUniversityToLocalFormat } from "@/services/universityApi";

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
  satRequired: 'required' | 'optional' | 'not-required';
  minGPA?: number;
}

interface StudentProfile {
  grades: string;
  budget: string;
  country: string;
  field: string;
  englishTest: string;
  satPreference: string;
}

const UniversityMatch = () => {
  const [profile, setProfile] = useState<StudentProfile>({
    grades: "",
    budget: "",
    country: "",
    field: "",
    englishTest: "",
    satPreference: ""
  });

  const [searchClicked, setSearchClicked] = useState(false);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [apiUniversities, setApiUniversities] = useState<University[]>([]);

  // Expanded university data with more institutions
  const allUniversities: University[] = [
    // USA Universities - Top Tier
    { id: 1, name: "Harvard University", country: "USA", city: "Cambridge, MA", globalRank: 1, programs: ["Medicine", "Law", "Business", "Engineering", "Computer Science", "Liberal Arts"], tuitionFee: "$54,000/year", admissionRate: "3.4%", satScore: "1460-1580", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'required', minGPA: 3.9 },
    { id: 2, name: "Stanford University", country: "USA", city: "Stanford, CA", globalRank: 2, programs: ["Engineering", "Computer Science", "Business", "Medicine", "Liberal Arts"], tuitionFee: "$56,000/year", admissionRate: "3.9%", satScore: "1440-1570", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'required', minGPA: 3.9 },
    { id: 3, name: "MIT", country: "USA", city: "Cambridge, MA", globalRank: 3, programs: ["Engineering", "Computer Science", "Physics", "Mathematics", "Technology"], tuitionFee: "$53,000/year", admissionRate: "6.7%", satScore: "1510-1580", ieltsScore: "7.5+", toeflScore: "100+", satRequired: 'required', minGPA: 3.9 },
    { id: 4, name: "California Institute of Technology", country: "USA", city: "Pasadena, CA", globalRank: 4, programs: ["Engineering", "Physics", "Chemistry", "Mathematics", "Computer Science"], tuitionFee: "$58,000/year", admissionRate: "6.4%", satScore: "1530-1580", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'required', minGPA: 3.9 },
    { id: 5, name: "Princeton University", country: "USA", city: "Princeton, NJ", globalRank: 5, programs: ["Liberal Arts", "Engineering", "Economics", "Politics", "Computer Science"], tuitionFee: "$57,000/year", admissionRate: "5.8%", satScore: "1460-1570", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'required', minGPA: 3.9 },
    
    // USA Universities - SAT Optional
    { id: 6, name: "University of Chicago", country: "USA", city: "Chicago, IL", globalRank: 10, programs: ["Economics", "Business", "Law", "Medicine", "Liberal Arts"], tuitionFee: "$59,000/year", admissionRate: "7.4%", satScore: "1480-1580 (if submitted)", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'optional', minGPA: 3.8 },
    { id: 7, name: "New York University", country: "USA", city: "New York, NY", globalRank: 30, programs: ["Business", "Arts", "Engineering", "Medicine", "Film"], tuitionFee: "$58,000/year", admissionRate: "12.8%", satScore: "1350-1530 (if submitted)", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'optional', minGPA: 3.6 },
    { id: 8, name: "University of California, Berkeley", country: "USA", city: "Berkeley, CA", globalRank: 15, programs: ["Engineering", "Computer Science", "Business", "Law", "Liberal Arts"], tuitionFee: "$46,000/year", admissionRate: "14.5%", satScore: "1330-1530 (if submitted)", ieltsScore: "7.0+", toeflScore: "90+", satRequired: 'optional', minGPA: 3.7 },
    { id: 9, name: "University of California, Los Angeles", country: "USA", city: "Los Angeles, CA", globalRank: 20, programs: ["Film", "Engineering", "Business", "Medicine", "Arts"], tuitionFee: "$45,000/year", admissionRate: "10.8%", satScore: "1290-1510 (if submitted)", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'optional', minGPA: 3.7 },
    { id: 10, name: "Northwestern University", country: "USA", city: "Evanston, IL", globalRank: 25, programs: ["Journalism", "Business", "Engineering", "Medicine", "Liberal Arts"], tuitionFee: "$60,000/year", admissionRate: "7.2%", satScore: "1440-1550 (if submitted)", ieltsScore: "7.5+", toeflScore: "105+", satRequired: 'optional', minGPA: 3.8 },
    { id: 11, name: "University of Southern California", country: "USA", city: "Los Angeles, CA", globalRank: 35, programs: ["Film", "Engineering", "Business", "Communications"], tuitionFee: "$62,000/year", admissionRate: "12%", satScore: "1350-1520 (if submitted)", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'optional', minGPA: 3.6 },
    { id: 12, name: "Arizona State University", country: "USA", city: "Tempe, AZ", globalRank: 145, programs: ["Business", "Engineering", "Liberal Arts", "Communications"], tuitionFee: "$32,000/year", admissionRate: "88%", satScore: "1120-1360 (if submitted)", ieltsScore: "6.0+", toeflScore: "79+", satRequired: 'optional', minGPA: 3.0 },

    // Canada Universities
    { id: 20, name: "University of Toronto", country: "Canada", city: "Toronto, ON", globalRank: 25, programs: ["Medicine", "Engineering", "Business", "Computer Science", "Liberal Arts"], tuitionFee: "CAD $58,000/year", admissionRate: "43%", satScore: "1350-1500 (optional)", ieltsScore: "6.5+", toeflScore: "100+", satRequired: 'optional', minGPA: 3.7 },
    { id: 21, name: "McGill University", country: "Canada", city: "Montreal, QC", globalRank: 27, programs: ["Medicine", "Law", "Engineering", "Arts", "Business"], tuitionFee: "CAD $50,000/year", admissionRate: "46%", satScore: "1320-1480 (optional)", ieltsScore: "6.5+", toeflScore: "90+", satRequired: 'optional', minGPA: 3.5 },
    { id: 22, name: "University of British Columbia", country: "Canada", city: "Vancouver, BC", globalRank: 40, programs: ["Engineering", "Business", "Medicine", "Arts", "Forestry"], tuitionFee: "CAD $45,000/year", admissionRate: "52%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "90+", satRequired: 'not-required', minGPA: 3.3 },
    { id: 23, name: "University of Alberta", country: "Canada", city: "Edmonton, AB", globalRank: 45, programs: ["Engineering", "Medicine", "Business", "Arts"], tuitionFee: "CAD $35,000/year", admissionRate: "58%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "86+", satRequired: 'not-required', minGPA: 3.2 },
    { id: 24, name: "University of Waterloo", country: "Canada", city: "Waterloo, ON", globalRank: 50, programs: ["Engineering", "Computer Science", "Mathematics", "Business"], tuitionFee: "CAD $62,000/year", admissionRate: "53%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "90+", satRequired: 'not-required', minGPA: 3.5 },
    { id: 25, name: "McMaster University", country: "Canada", city: "Hamilton, ON", globalRank: 55, programs: ["Medicine", "Engineering", "Business", "Health Sciences"], tuitionFee: "CAD $42,000/year", admissionRate: "60%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "86+", satRequired: 'not-required', minGPA: 3.0 },

    // UK Universities
    { id: 40, name: "University of Oxford", country: "UK", city: "Oxford", globalRank: 4, programs: ["Medicine", "Law", "Philosophy", "Engineering", "Liberal Arts"], tuitionFee: "£38,000/year", admissionRate: "17.5%", satScore: "Not required", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'not-required', minGPA: 3.8 },
    { id: 41, name: "University of Cambridge", country: "UK", city: "Cambridge", globalRank: 5, programs: ["Medicine", "Engineering", "Mathematics", "Natural Sciences", "Liberal Arts"], tuitionFee: "£37,000/year", admissionRate: "21%", satScore: "Not required", ieltsScore: "7.5+", toeflScore: "110+", satRequired: 'not-required', minGPA: 3.8 },
    { id: 42, name: "Imperial College London", country: "UK", city: "London", globalRank: 8, programs: ["Engineering", "Medicine", "Business", "Computer Science", "Physics"], tuitionFee: "£35,000/year", admissionRate: "14.3%", satScore: "Not required", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'not-required', minGPA: 3.7 },
    { id: 43, name: "University College London", country: "UK", city: "London", globalRank: 9, programs: ["Medicine", "Engineering", "Law", "Architecture", "Liberal Arts"], tuitionFee: "£31,000/year", admissionRate: "63%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "92+", satRequired: 'not-required', minGPA: 3.3 },
    { id: 44, name: "London School of Economics", country: "UK", city: "London", globalRank: 35, programs: ["Economics", "Business", "Law", "Politics", "Social Sciences"], tuitionFee: "£25,000/year", admissionRate: "8.9%", satScore: "Not required", ieltsScore: "7.0+", toeflScore: "100+", satRequired: 'not-required', minGPA: 3.6 },
    { id: 45, name: "University of Edinburgh", country: "UK", city: "Edinburgh", globalRank: 40, programs: ["Medicine", "Engineering", "Business", "Arts", "Veterinary"], tuitionFee: "£28,000/year", admissionRate: "46%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "92+", satRequired: 'not-required', minGPA: 3.2 },
    { id: 46, name: "King's College London", country: "UK", city: "London", globalRank: 45, programs: ["Medicine", "Law", "Business", "Liberal Arts", "Dentistry"], tuitionFee: "£29,000/year", admissionRate: "13%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "92+", satRequired: 'not-required', minGPA: 3.3 },

    // Australia Universities
    { id: 60, name: "University of Melbourne", country: "Australia", city: "Melbourne", globalRank: 33, programs: ["Medicine", "Engineering", "Business", "Liberal Arts", "Law"], tuitionFee: "AUD $45,000/year", admissionRate: "70%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "79+", satRequired: 'not-required', minGPA: 3.0 },
    { id: 61, name: "Australian National University", country: "Australia", city: "Canberra", globalRank: 30, programs: ["Liberal Arts", "Engineering", "Computer Science", "Politics", "Economics"], tuitionFee: "AUD $47,000/year", admissionRate: "35%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "80+", satRequired: 'not-required', minGPA: 3.2 },
    { id: 62, name: "University of Sydney", country: "Australia", city: "Sydney", globalRank: 40, programs: ["Medicine", "Engineering", "Business", "Liberal Arts", "Architecture"], tuitionFee: "AUD $48,000/year", admissionRate: "30%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "85+", satRequired: 'not-required', minGPA: 3.0 },

    // Germany Universities
    { id: 80, name: "Technical University of Munich", country: "Germany", city: "Munich", globalRank: 50, programs: ["Engineering", "Computer Science", "Business", "Medicine"], tuitionFee: "€350/semester", admissionRate: "8%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "88+", satRequired: 'not-required', minGPA: 3.3 },
    { id: 81, name: "Ludwig Maximilian University", country: "Germany", city: "Munich", globalRank: 60, programs: ["Medicine", "Liberal Arts", "Law", "Business"], tuitionFee: "€150/semester", admissionRate: "25%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "80+", satRequired: 'not-required', minGPA: 3.0 },
    { id: 82, name: "Heidelberg University", country: "Germany", city: "Heidelberg", globalRank: 65, programs: ["Medicine", "Liberal Arts", "Natural Sciences"], tuitionFee: "€171/semester", admissionRate: "20%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "80+", satRequired: 'not-required', minGPA: 3.0 },

    // Ireland Universities
    { id: 100, name: "Trinity College Dublin", country: "Ireland", city: "Dublin", globalRank: 1, programs: ["Medicine", "Law", "Engineering", "Business", "Liberal Arts"], tuitionFee: "€45,000/year", admissionRate: "35%", satScore: "Not required", ieltsScore: "6.5+", toeflScore: "90+", satRequired: 'not-required', minGPA: 3.3 },
    { id: 101, name: "University College Dublin", country: "Ireland", city: "Dublin", globalRank: 2, programs: ["Business", "Engineering", "Medicine", "Agriculture", "Liberal Arts"], tuitionFee: "€25,000/year", admissionRate: "85%", satScore: "Not required", ieltsScore: "6.0+", toeflScore: "80+", satRequired: 'not-required', minGPA: 2.8 },
    { id: 102, name: "University College Cork", country: "Ireland", city: "Cork", globalRank: 3, programs: ["Medicine", "Engineering", "Business", "Arts"], tuitionFee: "€20,000/year", admissionRate: "75%", satScore: "Not required", ieltsScore: "6.0+", toeflScore: "80+", satRequired: 'not-required', minGPA: 2.8 },

    // Additional Universities for better matching
    { id: 120, name: "University of Washington", country: "USA", city: "Seattle, WA", globalRank: 85, programs: ["Medicine", "Engineering", "Computer Science", "Business"], tuitionFee: "$40,000/year", admissionRate: "48%", satScore: "1220-1470 (optional)", ieltsScore: "7.0+", toeflScore: "92+", satRequired: 'optional', minGPA: 3.4 },
    { id: 121, name: "Penn State University", country: "USA", city: "University Park, PA", globalRank: 95, programs: ["Engineering", "Business", "Liberal Arts", "Agriculture"], tuitionFee: "$38,000/year", admissionRate: "56%", satScore: "1160-1360 (optional)", ieltsScore: "6.5+", toeflScore: "80+", satRequired: 'optional', minGPA: 3.2 },
    { id: 122, name: "University of Illinois", country: "USA", city: "Urbana-Champaign, IL", globalRank: 75, programs: ["Engineering", "Computer Science", "Business", "Agriculture"], tuitionFee: "$35,000/year", admissionRate: "45%", satScore: "1210-1470 (optional)", ieltsScore: "6.5+", toeflScore: "79+", satRequired: 'optional', minGPA: 3.3 },
  ];

  // Test preparation resources with corrected book links
  const testPrepResources = {
    IELTS: {
      books: [
        { title: "Cambridge IELTS 17 Academic Student's Book", link: "https://www.amazon.com/dp/1316635767" },
        { title: "The Official Cambridge Guide to IELTS", link: "https://www.amazon.com/dp/1107620694" },
        { title: "Barron's IELTS Superpack", link: "https://www.amazon.com/dp/1438075219" }
      ],
      youtubeChannels: [
        { name: "IELTS Liz", url: "https://youtube.com/@IELTSLiz" },
        { name: "E2 IELTS", url: "https://youtube.com/@E2IELTS" },
        { name: "IELTS Simon", url: "https://youtube.com/@ieltssimon" }
      ]
    },
    SAT: {
      books: [
        { title: "The Official SAT Study Guide 2024", link: "https://www.amazon.com/dp/1457315645" },
        { title: "Kaplan SAT Prep Plus 2024", link: "https://www.amazon.com/dp/1506285244" },
        { title: "Barron's SAT 29th Edition", link: "https://www.amazon.com/dp/1506264328" }
      ],
      youtubeChannels: [
        { name: "Khan Academy SAT", url: "https://youtube.com/@khanacademy" },
        { name: "SupertutorTV", url: "https://youtube.com/@SupertutorTV" },
        { name: "SAT Math", url: "https://youtube.com/@SATMath" }
      ]
    },
    TOEFL: {
      books: [
        { title: "The Official Guide to the TOEFL iBT Test", link: "https://www.amazon.com/dp/1260011216" },
        { title: "Barron's TOEFL iBT Superpack", link: "https://www.amazon.com/dp/1438075170" },
        { title: "Cambridge Preparation for the TOEFL Test", link: "https://www.amazon.com/dp/0521755875" }
      ],
      youtubeChannels: [
        { name: "TOEFL TV Official", url: "https://youtube.com/@TOEFLTV" },
        { name: "TST Prep TOEFL", url: "https://youtube.com/@TSTPrep" },
        { name: "BestMyTest TOEFL", url: "https://youtube.com/@BestMyTest" }
      ]
    },
    GRE: {
      books: [
        { title: "The Official Guide to the GRE General Test", link: "https://www.amazon.com/dp/1259862410" },
        { title: "Manhattan Prep GRE Set of 8 Strategy Guides", link: "https://www.amazon.com/dp/1506232396" },
        { title: "Barron's GRE 23rd Edition", link: "https://www.amazon.com/dp/1506264328" }
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
    
    if (normalized.includes('usa') || normalized.includes('america') || normalized.includes('states') || normalized.includes('united states')) {
      return 'usa';
    }
    if (normalized.includes('uk') || normalized.includes('britain') || normalized.includes('kingdom') || normalized.includes('england')) {
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

  const parseGPA = (gradesInput: string): number | null => {
    const gradeStr = gradesInput.toLowerCase().trim();
    
    // Extract GPA from formats like "3.8 GPA", "GPA: 3.5", "3.7"
    const gpaMatch = gradeStr.match(/(\d+\.?\d*)/);
    if (gpaMatch) {
      const gpa = parseFloat(gpaMatch[1]);
      
      // If it's already in 4.0 scale
      if (gpa <= 4.0) {
        return gpa;
      }
      
      // Convert percentage to GPA (rough conversion)
      if (gpa >= 50 && gpa <= 100) {
        if (gpa >= 90) return 4.0;
        if (gpa >= 85) return 3.7;
        if (gpa >= 80) return 3.3;
        if (gpa >= 75) return 3.0;
        if (gpa >= 70) return 2.7;
        if (gpa >= 65) return 2.3;
        if (gpa >= 60) return 2.0;
        return 1.7;
      }
    }
    
    return null;
  };

  const parseBudget = (budgetInput: string): number | null => {
    const budgetStr = budgetInput.toLowerCase().replace(/[,$]/g, '');
    const match = budgetStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  const fetchApiUniversities = async (searchCountry?: string) => {
    setIsLoadingApi(true);
    console.log('Fetching API universities for country:', searchCountry);
    
    try {
      const apiData = await fetchUniversitiesFromApi(searchCountry);
      console.log('Raw API data received:', apiData.length);
      
      // Convert and limit the results
      const convertedUniversities = apiData
        .slice(0, 50) // Limit to 50 to avoid overwhelming the UI
        .map((apiUni, index) => convertApiUniversityToLocalFormat(apiUni, index));
      
      console.log('Converted universities:', convertedUniversities.length);
      setApiUniversities(convertedUniversities);
    } catch (error) {
      console.error('Error fetching API universities:', error);
      setApiUniversities([]);
    } finally {
      setIsLoadingApi(false);
    }
  };

  const getFilteredUniversities = () => {
    console.log("Search clicked:", searchClicked);
    console.log("Profile:", profile);
    
    if (!searchClicked) {
      return allUniversities.slice(0, 6); // Show featured universities
    }

    // Combine local and API universities
    const combinedUniversities = [...allUniversities, ...apiUniversities];
    let filtered = [...combinedUniversities];
    console.log("Total universities before filtering:", filtered.length);

    // Country filtering
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

    // Field/Program filtering (more flexible)
    if (profile.field.trim()) {
      const searchFields = profile.field.toLowerCase().split(/[,\s]+/).filter(f => f.length > 2);
      console.log("Searching for fields:", searchFields);
      
      filtered = filtered.filter(uni => {
        const hasField = searchFields.some(searchField =>
          uni.programs.some(program =>
            program.toLowerCase().includes(searchField) ||
            searchField.includes(program.toLowerCase()) ||
            // Additional matching for common field variations
            (searchField.includes('comp') && program.toLowerCase().includes('computer')) ||
            (searchField.includes('cs') && program.toLowerCase().includes('computer science')) ||
            (searchField.includes('business') && program.toLowerCase().includes('economics')) ||
            (searchField.includes('pre-med') && program.toLowerCase().includes('medicine'))
          )
        );
        if (hasField) {
          console.log("Field match found:", uni.name, uni.programs);
        }
        return hasField;
      });

      console.log("Universities after field filtering:", filtered.length);
    }

    // SAT preference filtering
    if (profile.satPreference.trim()) {
      console.log("Filtering by SAT preference:", profile.satPreference);
      
      filtered = filtered.filter(uni => {
        let matches = false;
        if (profile.satPreference === 'optional-or-not-required') {
          matches = uni.satRequired === 'optional' || uni.satRequired === 'not-required';
        } else {
          matches = uni.satRequired === profile.satPreference;
        }
        
        if (matches) {
          console.log("SAT preference match found:", uni.name, uni.satRequired);
        }
        return matches;
      });

      console.log("Universities after SAT filtering:", filtered.length);
    }

    // GPA/Grades filtering (more flexible)
    if (profile.grades.trim()) {
      const userGPA = parseGPA(profile.grades);
      console.log("User GPA parsed:", userGPA);
      
      if (userGPA !== null) {
        filtered = filtered.filter(uni => {
          // Show universities where user's GPA is within reasonable range
          const minGPA = uni.minGPA || 2.5;
          const matches = userGPA >= (minGPA - 0.3); // Give some flexibility
          if (matches) {
            console.log("GPA match found:", uni.name, "requires:", minGPA, "user has:", userGPA);
          }
          return matches;
        });
        
        console.log("Universities after GPA filtering:", filtered.length);
      }
    }

    // Budget filtering (flexible)
    if (profile.budget.trim()) {
      const userBudget = parseBudget(profile.budget);
      console.log("User budget parsed:", userBudget);
      
      if (userBudget !== null) {
        filtered = filtered.filter(uni => {
          // Extract numeric value from tuition fee
          const tuitionMatch = uni.tuitionFee.match(/(\d+,?\d+)/);
          if (tuitionMatch) {
            const tuition = parseInt(tuitionMatch[1].replace(',', ''));
            const matches = userBudget >= tuition * 0.8; // Allow 20% flexibility
            if (matches) {
              console.log("Budget match found:", uni.name, "costs:", tuition, "budget:", userBudget);
            }
            return matches;
          }
          return true; // Include if can't parse tuition
        });
        
        console.log("Universities after budget filtering:", filtered.length);
      }
    }

    // Sort by global rank
    filtered.sort((a, b) => a.globalRank - b.globalRank);

    console.log("Final filtered universities:", filtered.length);
    
    // If no matches, show some backup options based on less strict criteria
    if (filtered.length === 0) {
      console.log("No strict matches found, showing backup options...");
      let backup = [...combinedUniversities];
      
      // Less strict filtering - just country or field
      if (profile.country.trim()) {
        const searchCountry = normalizeCountryName(profile.country);
        backup = backup.filter(uni => normalizeCountryName(uni.country) === searchCountry);
      } else if (profile.field.trim()) {
        const searchField = profile.field.toLowerCase();
        backup = backup.filter(uni => 
          uni.programs.some(program => 
            program.toLowerCase().includes(searchField) || 
            searchField.includes(program.toLowerCase())
          )
        );
      }
      
      backup.sort((a, b) => a.globalRank - b.globalRank);
      return backup.slice(0, 15);
    }
    
    return filtered.slice(0, 30); // Show more results
  };

  const handleSearch = async () => {
    console.log("Search button clicked");
    console.log("Current profile state:", profile);
    setSearchClicked(true);
    
    // Fetch API universities if country is specified
    if (profile.country.trim()) {
      await fetchApiUniversities(profile.country);
    }
  };

  const getSatBadgeColor = (satRequired: string) => {
    switch (satRequired) {
      case 'required':
        return 'bg-red-100 text-red-800';
      case 'optional':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-required':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSatBadgeText = (satRequired: string) => {
    switch (satRequired) {
      case 'required':
        return 'SAT Required';
      case 'optional':
        return 'SAT Optional';
      case 'not-required':
        return 'No SAT Required';
      default:
        return 'SAT Unknown';
    }
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
              {searchClicked && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>Showing results from our database + live API data</span>
                  {isLoadingApi && <Loader2 className="h-4 w-4 animate-spin" />}
                </div>
              )}
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Your Academic Profile</CardTitle>
                <CardDescription>
                  Fill in your details to get personalized university recommendations from our database + live API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="grades">Academic Grades</Label>
                    <Input
                      id="grades"
                      placeholder="e.g., 3.8 GPA, 85%, 90%"
                      value={profile.grades}
                      onChange={(e) => setProfile({ ...profile, grades: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (Annual)</Label>
                    <Input
                      id="budget"
                      placeholder="e.g., $50,000, €30,000"
                      value={profile.budget}
                      onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Preferred Country</Label>
                    <Input
                      id="country"
                      placeholder="e.g., USA, UK, Canada, Germany"
                      value={profile.country}
                      onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="field">Field of Study</Label>
                    <Input
                      id="field"
                      placeholder="e.g., Computer Science, Medicine, Business"
                      value={profile.field}
                      onChange={(e) => setProfile({ ...profile, field: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <Label htmlFor="satPreference">SAT Requirement</Label>
                    <Select value={profile.satPreference} onValueChange={(value) => setProfile({ ...profile, satPreference: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select SAT preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="required">SAT Required</SelectItem>
                        <SelectItem value="optional">SAT Optional</SelectItem>
                        <SelectItem value="not-required">No SAT Required</SelectItem>
                        <SelectItem value="optional-or-not-required">SAT Optional or Not Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleSearch} className="w-full" size="lg" disabled={isLoadingApi}>
                  {isLoadingApi ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching Universities...
                    </>
                  ) : (
                    'Find My Universities'
                  )}
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {searchClicked ? "Your University Matches" : "Featured Universities"}
                </h2>
                {searchClicked && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Results include universities from our curated database and live API data
                    {apiUniversities.length > 0 && ` (${apiUniversities.length} from API)`}
                  </p>
                )}
              </div>

              {isLoadingApi && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mr-2" />
                  <span>Loading additional universities from API...</span>
                </div>
              )}

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
                        <div className="flex flex-col gap-1">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            #{university.globalRank}
                          </Badge>
                          <Badge className={`text-xs ${getSatBadgeColor(university.satRequired)}`}>
                            {getSatBadgeText(university.satRequired)}
                          </Badge>
                          {university.id >= 1000 && (
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                              Live Data
                            </Badge>
                          )}
                        </div>
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
                        {university.minGPA && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Min GPA:</span>
                            <span className="font-medium">{university.minGPA}</span>
                          </div>
                        )}
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

              {searchClicked && getFilteredUniversities().length === 0 && !isLoadingApi && (
                <Card className="p-8 text-center">
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">No matches found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria to find more universities. Consider broadening your field of study or country preferences.
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
