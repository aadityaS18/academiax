
export interface University {
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

export const allUniversities: University[] = [
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
