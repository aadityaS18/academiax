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
    // USA Top 100 Universities
    { name: "Harvard University", country: "USA", ranking: "#1 in USA", globalRank: 1, tuition: "$70,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Medicine", "Business", "Law"], website: "https://www.harvard.edu" },
    { name: "Stanford University", country: "USA", ranking: "#2 in USA", globalRank: 2, tuition: "$68,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Engineering", "Computer Science", "Business"], website: "https://www.stanford.edu" },
    { name: "Massachusetts Institute of Technology", country: "USA", ranking: "#3 in USA", globalRank: 3, tuition: "$69,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Engineering", "Computer Science", "Science"], website: "https://web.mit.edu" },
    { name: "California Institute of Technology", country: "USA", ranking: "#4 in USA", globalRank: 4, tuition: "$67,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Engineering", "Science", "Technology"], website: "https://www.caltech.edu" },
    { name: "Princeton University", country: "USA", ranking: "#5 in USA", globalRank: 5, tuition: "$66,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Engineering", "Science", "Arts"], website: "https://www.princeton.edu" },
    { name: "Yale University", country: "USA", ranking: "#6 in USA", globalRank: 6, tuition: "$68,000", requirements: "95%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Medicine", "Law", "Arts"], website: "https://www.yale.edu" },
    { name: "University of Pennsylvania", country: "USA", ranking: "#7 in USA", globalRank: 7, tuition: "$67,000", requirements: "94%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Business", "Medicine", "Engineering"], website: "https://www.upenn.edu" },
    { name: "Duke University", country: "USA", ranking: "#8 in USA", globalRank: 8, tuition: "$66,000", requirements: "94%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Medicine", "Engineering", "Business"], website: "https://duke.edu" },
    { name: "Johns Hopkins University", country: "USA", ranking: "#9 in USA", globalRank: 9, tuition: "$65,000", requirements: "94%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Medicine", "Engineering", "Science"], website: "https://www.jhu.edu" },
    { name: "Northwestern University", country: "USA", ranking: "#10 in USA", globalRank: 10, tuition: "$64,000", requirements: "93%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Business", "Engineering", "Medicine"], website: "https://www.northwestern.edu" },
    { name: "Columbia University", country: "USA", ranking: "#11 in USA", globalRank: 11, tuition: "$69,000", requirements: "93%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Business", "Medicine", "Engineering"], website: "https://www.columbia.edu" },
    { name: "University of Chicago", country: "USA", ranking: "#12 in USA", globalRank: 12, tuition: "$67,000", requirements: "93%+ in 12th, TOEFL 110/IELTS 7.5", programs: ["Business", "Economics", "Medicine"], website: "https://www.uchicago.edu" },
    { name: "Cornell University", country: "USA", ranking: "#13 in USA", globalRank: 13, tuition: "$65,000", requirements: "92%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Agriculture"], website: "https://www.cornell.edu" },
    { name: "University of California, Los Angeles", country: "USA", ranking: "#14 in USA", globalRank: 14, tuition: "$63,000", requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Film Studies", "Engineering", "Medicine"], website: "https://www.ucla.edu" },
    { name: "University of California, Berkeley", country: "USA", ranking: "#15 in USA", globalRank: 15, tuition: "$65,000", requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Computer Science", "Business"], website: "https://www.berkeley.edu" },
    { name: "Carnegie Mellon University", country: "USA", ranking: "#16 in USA", globalRank: 16, tuition: "$64,000", requirements: "91%+ in 12th, TOEFL 105/IELTS 7.0", programs: ["Computer Science", "Engineering", "Business"], website: "https://www.cmu.edu" },
    { name: "Rice University", country: "USA", ranking: "#17 in USA", globalRank: 17, tuition: "$62,000", requirements: "91%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Science", "Business"], website: "https://www.rice.edu" },
    { name: "Vanderbilt University", country: "USA", ranking: "#18 in USA", globalRank: 18, tuition: "$63,000", requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Education"], website: "https://www.vanderbilt.edu" },
    { name: "University of Notre Dame", country: "USA", ranking: "#19 in USA", globalRank: 19, tuition: "$61,000", requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Arts"], website: "https://www.nd.edu" },
    { name: "Washington University in St. Louis", country: "USA", ranking: "#20 in USA", globalRank: 20, tuition: "$62,000", requirements: "90%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Business"], website: "https://wustl.edu" },
    
    // Continue with more USA universities (21-50)
    { name: "Georgetown University", country: "USA", ranking: "#21 in USA", globalRank: 21, tuition: "$61,000", requirements: "89%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Law", "International Relations"], website: "https://www.georgetown.edu" },
    { name: "University of Michigan", country: "USA", ranking: "#22 in USA", globalRank: 22, tuition: "$60,000", requirements: "88%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Business"], website: "https://umich.edu" },
    { name: "Emory University", country: "USA", ranking: "#23 in USA", globalRank: 23, tuition: "$60,000", requirements: "88%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Business", "Arts"], website: "https://www.emory.edu" },
    { name: "University of Virginia", country: "USA", ranking: "#24 in USA", globalRank: 24, tuition: "$59,000", requirements: "87%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Law", "Medicine"], website: "https://www.virginia.edu" },
    { name: "Wake Forest University", country: "USA", ranking: "#25 in USA", globalRank: 25, tuition: "$58,000", requirements: "87%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Medicine", "Arts"], website: "https://www.wfu.edu" },
    { name: "University of Southern California", country: "USA", ranking: "#26 in USA", globalRank: 26, tuition: "$63,000", requirements: "87%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Film", "Engineering", "Business"], website: "https://www.usc.edu" },
    { name: "New York University", country: "USA", ranking: "#27 in USA", globalRank: 27, tuition: "$64,000", requirements: "86%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Arts", "Medicine"], website: "https://www.nyu.edu" },
    { name: "Tufts University", country: "USA", ranking: "#28 in USA", globalRank: 28, tuition: "$61,000", requirements: "86%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.tufts.edu" },
    { name: "University of North Carolina at Chapel Hill", country: "USA", ranking: "#29 in USA", globalRank: 29, tuition: "$58,000", requirements: "85%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Business", "Journalism"], website: "https://www.unc.edu" },
    { name: "University of California, Santa Barbara", country: "USA", ranking: "#30 in USA", globalRank: 30, tuition: "$57,000", requirements: "85%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Science", "Arts"], website: "https://www.ucsb.edu" },
    
    // Adding more USA universities (31-100)
    { name: "University of Florida", country: "USA", ranking: "#31 in USA", globalRank: 31, tuition: "$56,000", requirements: "84%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Business"], website: "https://www.ufl.edu" },
    { name: "Georgia Institute of Technology", country: "USA", ranking: "#32 in USA", globalRank: 32, tuition: "$58,000", requirements: "85%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Computer Science", "Business"], website: "https://www.gatech.edu" },
    { name: "University of Rochester", country: "USA", ranking: "#33 in USA", globalRank: 33, tuition: "$59,000", requirements: "84%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Music"], website: "https://www.rochester.edu" },
    { name: "Boston University", country: "USA", ranking: "#34 in USA", globalRank: 34, tuition: "$60,000", requirements: "84%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.bu.edu" },
    { name: "Case Western Reserve University", country: "USA", ranking: "#35 in USA", globalRank: 35, tuition: "$57,000", requirements: "83%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Arts"], website: "https://case.edu" },
    { name: "University of California, Irvine", country: "USA", ranking: "#36 in USA", globalRank: 36, tuition: "$55,000", requirements: "83%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Computer Science", "Medicine", "Engineering"], website: "https://uci.edu" },
    { name: "University of California, San Diego", country: "USA", ranking: "#37 in USA", globalRank: 37, tuition: "$56,000", requirements: "83%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Science"], website: "https://ucsd.edu" },
    { name: "University of Texas at Austin", country: "USA", ranking: "#38 in USA", globalRank: 38, tuition: "$55,000", requirements: "82%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Computer Science"], website: "https://www.utexas.edu" },
    { name: "Boston College", country: "USA", ranking: "#39 in USA", globalRank: 39, tuition: "$58,000", requirements: "82%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Arts", "Education"], website: "https://www.bc.edu" },
    { name: "Tulane University", country: "USA", ranking: "#40 in USA", globalRank: 40, tuition: "$56,000", requirements: "82%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Business", "Arts"], website: "https://tulane.edu" },
    { name: "University of California, Davis", country: "USA", ranking: "#41 in USA", globalRank: 41, tuition: "$54,000", requirements: "81%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Agriculture", "Medicine", "Engineering"], website: "https://www.ucdavis.edu" },
    { name: "University of Wisconsin-Madison", country: "USA", ranking: "#42 in USA", globalRank: 42, tuition: "$53,000", requirements: "81%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Medicine"], website: "https://www.wisc.edu" },
    { name: "University of Illinois at Urbana-Champaign", country: "USA", ranking: "#43 in USA", globalRank: 43, tuition: "$52,000", requirements: "80%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Computer Science", "Business"], website: "https://illinois.edu" },
    { name: "Pepperdine University", country: "USA", ranking: "#44 in USA", globalRank: 44, tuition: "$57,000", requirements: "80%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Law", "Arts"], website: "https://www.pepperdine.edu" },
    { name: "Villanova University", country: "USA", ranking: "#45 in USA", globalRank: 45, tuition: "$56,000", requirements: "80%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Arts"], website: "https://www1.villanova.edu" },
    { name: "University of Georgia", country: "USA", ranking: "#46 in USA", globalRank: 46, tuition: "$51,000", requirements: "79%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Journalism", "Agriculture"], website: "https://www.uga.edu" },
    { name: "Ohio State University", country: "USA", ranking: "#47 in USA", globalRank: 47, tuition: "$50,000", requirements: "79%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Business"], website: "https://www.osu.edu" },
    { name: "University of Miami", country: "USA", ranking: "#48 in USA", globalRank: 48, tuition: "$55,000", requirements: "79%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Medicine", "Marine Science"], website: "https://welcome.miami.edu" },
    { name: "Purdue University", country: "USA", ranking: "#49 in USA", globalRank: 49, tuition: "$49,000", requirements: "78%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Technology"], website: "https://www.purdue.edu" },
    { name: "Penn State University", country: "USA", ranking: "#50 in USA", globalRank: 50, tuition: "$48,000", requirements: "78%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Agriculture"], website: "https://www.psu.edu" },
    
    // Adding more USA universities (51-100) - major state schools and respected institutions
    { name: "University of Washington", country: "USA", ranking: "#51 in USA", globalRank: 51, tuition: "$47,000", requirements: "77%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Computer Science"], website: "https://www.washington.edu" },
    { name: "University of Maryland", country: "USA", ranking: "#52 in USA", globalRank: 52, tuition: "$46,000", requirements: "77%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Computer Science"], website: "https://www.umd.edu" },
    { name: "Syracuse University", country: "USA", ranking: "#53 in USA", globalRank: 53, tuition: "$54,000", requirements: "77%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Communications", "Business", "Engineering"], website: "https://www.syracuse.edu" },
    { name: "University of Connecticut", country: "USA", ranking: "#54 in USA", globalRank: 54, tuition: "$45,000", requirements: "76%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Medicine"], website: "https://uconn.edu" },
    { name: "University of Pittsburgh", country: "USA", ranking: "#55 in USA", globalRank: 55, tuition: "$44,000", requirements: "76%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.pitt.edu" },
    { name: "Florida State University", country: "USA", ranking: "#56 in USA", globalRank: 56, tuition: "$43,000", requirements: "75%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Film", "Business", "Medicine"], website: "https://www.fsu.edu" },
    { name: "Clemson University", country: "USA", ranking: "#57 in USA", globalRank: 57, tuition: "$42,000", requirements: "75%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Business"], website: "https://www.clemson.edu" },
    { name: "University of Minnesota", country: "USA", ranking: "#58 in USA", globalRank: 58, tuition: "$41,000", requirements: "74%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Business"], website: "https://twin-cities.umn.edu" },
    { name: "Texas A&M University", country: "USA", ranking: "#59 in USA", globalRank: 59, tuition: "$40,000", requirements: "74%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Business"], website: "https://www.tamu.edu" },
    { name: "Virginia Tech", country: "USA", ranking: "#60 in USA", globalRank: 60, tuition: "$39,000", requirements: "73%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Business"], website: "https://vt.edu" },
    { name: "Indiana University", country: "USA", ranking: "#61 in USA", globalRank: 61, tuition: "$38,000", requirements: "73%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Music", "Medicine"], website: "https://www.indiana.edu" },
    { name: "Michigan State University", country: "USA", ranking: "#62 in USA", globalRank: 62, tuition: "$37,000", requirements: "72%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Agriculture", "Engineering", "Medicine"], website: "https://msu.edu" },
    { name: "Auburn University", country: "USA", ranking: "#63 in USA", globalRank: 63, tuition: "$36,000", requirements: "72%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Business"], website: "https://www.auburn.edu" },
    { name: "University of Colorado Boulder", country: "USA", ranking: "#64 in USA", globalRank: 64, tuition: "$35,000", requirements: "71%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Arts"], website: "https://www.colorado.edu" },
    { name: "North Carolina State University", country: "USA", ranking: "#65 in USA", globalRank: 65, tuition: "$34,000", requirements: "71%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Design"], website: "https://www.ncsu.edu" },
    { name: "University of Iowa", country: "USA", ranking: "#66 in USA", globalRank: 66, tuition: "$33,000", requirements: "70%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Writing"], website: "https://uiowa.edu" },
    { name: "University of Delaware", country: "USA", ranking: "#67 in USA", globalRank: 67, tuition: "$32,000", requirements: "70%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Chemical Engineering"], website: "https://www.udel.edu" },
    { name: "University of Alabama", country: "USA", ranking: "#68 in USA", globalRank: 68, tuition: "$31,000", requirements: "69%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Medicine"], website: "https://www.ua.edu" },
    { name: "University of Oregon", country: "USA", ranking: "#69 in USA", globalRank: 69, tuition: "$30,000", requirements: "69%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Journalism", "Arts"], website: "https://www.uoregon.edu" },
    { name: "University of Utah", country: "USA", ranking: "#70 in USA", globalRank: 70, tuition: "$29,000", requirements: "68%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.utah.edu" },
    
    // Continue with more USA universities (71-100)
    { name: "Arizona State University", country: "USA", ranking: "#71 in USA", globalRank: 71, tuition: "$28,000", requirements: "68%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Journalism"], website: "https://www.asu.edu" },
    { name: "University of Arizona", country: "USA", ranking: "#72 in USA", globalRank: 72, tuition: "$27,000", requirements: "67%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Astronomy"], website: "https://www.arizona.edu" },
    { name: "University of Tennessee", country: "USA", ranking: "#73 in USA", globalRank: 73, tuition: "$26,000", requirements: "67%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Business"], website: "https://www.utk.edu" },
    { name: "University of South Carolina", country: "USA", ranking: "#74 in USA", globalRank: 74, tuition: "$25,000", requirements: "66%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Medicine"], website: "https://www.sc.edu" },
    { name: "University of Kentucky", country: "USA", ranking: "#75 in USA", globalRank: 75, tuition: "$24,000", requirements: "66%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Agriculture", "Engineering"], website: "https://www.uky.edu" },
    { name: "University of Kansas", country: "USA", ranking: "#76 in USA", globalRank: 76, tuition: "$23,000", requirements: "65%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Journalism"], website: "https://www.ku.edu" },
    { name: "University of Nebraska", country: "USA", ranking: "#77 in USA", globalRank: 77, tuition: "$22,000", requirements: "65%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Agriculture", "Engineering", "Medicine"], website: "https://www.unl.edu" },
    { name: "University of Oklahoma", country: "USA", ranking: "#78 in USA", globalRank: 78, tuition: "$21,000", requirements: "64%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Meteorology"], website: "https://www.ou.edu" },
    { name: "University of Arkansas", country: "USA", ranking: "#79 in USA", globalRank: 79, tuition: "$20,000", requirements: "64%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Agriculture", "Engineering", "Business"], website: "https://www.uark.edu" },
    { name: "University of Mississippi", country: "USA", ranking: "#80 in USA", globalRank: 80, tuition: "$19,000", requirements: "63%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Pharmacy"], website: "https://www.olemiss.edu" },
    { name: "University of Missouri", country: "USA", ranking: "#81 in USA", globalRank: 81, tuition: "$18,000", requirements: "63%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Journalism", "Medicine", "Engineering"], website: "https://www.missouri.edu" },
    { name: "University of Louisiana", country: "USA", ranking: "#82 in USA", globalRank: 82, tuition: "$17,000", requirements: "62%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Agriculture"], website: "https://www.louisiana.edu" },
    { name: "University of New Mexico", country: "USA", ranking: "#83 in USA", globalRank: 83, tuition: "$16,000", requirements: "62%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.unm.edu" },
    { name: "University of Nevada", country: "USA", ranking: "#84 in USA", globalRank: 84, tuition: "$15,000", requirements: "61%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Medicine"], website: "https://www.unr.edu" },
    { name: "University of Idaho", country: "USA", ranking: "#85 in USA", globalRank: 85, tuition: "$14,000", requirements: "61%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Arts"], website: "https://www.uidaho.edu" },
    { name: "University of Montana", country: "USA", ranking: "#86 in USA", globalRank: 86, tuition: "$13,000", requirements: "60%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Forestry", "Journalism", "Arts"], website: "https://www.umt.edu" },
    { name: "University of Wyoming", country: "USA", ranking: "#87 in USA", globalRank: 87, tuition: "$12,000", requirements: "60%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Agriculture", "Energy"], website: "https://www.uwyo.edu" },
    { name: "University of North Dakota", country: "USA", ranking: "#88 in USA", globalRank: 88, tuition: "$11,000", requirements: "59%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Aviation", "Medicine", "Engineering"], website: "https://und.edu" },
    { name: "University of South Dakota", country: "USA", ranking: "#89 in USA", globalRank: 89, tuition: "$10,000", requirements: "59%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Law", "Arts"], website: "https://www.usd.edu" },
    { name: "University of Maine", country: "USA", ranking: "#90 in USA", globalRank: 90, tuition: "$35,000", requirements: "58%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Marine Sciences", "Arts"], website: "https://umaine.edu" },
    { name: "University of Vermont", country: "USA", ranking: "#91 in USA", globalRank: 91, tuition: "$43,000", requirements: "58%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Agriculture", "Environment"], website: "https://www.uvm.edu" },
    { name: "University of New Hampshire", country: "USA", ranking: "#92 in USA", globalRank: 92, tuition: "$42,000", requirements: "57%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Marine Science"], website: "https://www.unh.edu" },
    { name: "University of Rhode Island", country: "USA", ranking: "#93 in USA", globalRank: 93, tuition: "$41,000", requirements: "57%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Pharmacy", "Ocean Engineering"], website: "https://www.uri.edu" },
    { name: "University of Alaska", country: "USA", ranking: "#94 in USA", globalRank: 94, tuition: "$25,000", requirements: "56%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Arctic Studies", "Natural Resources"], website: "https://www.alaska.edu" },
    { name: "University of Hawaii", country: "USA", ranking: "#95 in USA", globalRank: 95, tuition: "$40,000", requirements: "56%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Astronomy", "Marine Science", "Pacific Studies"], website: "https://www.hawaii.edu" },
    { name: "University of West Virginia", country: "USA", ranking: "#96 in USA", globalRank: 96, tuition: "$24,000", requirements: "55%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Medicine", "Engineering", "Energy"], website: "https://www.wvu.edu" },
    { name: "University of North Florida", country: "USA", ranking: "#97 in USA", globalRank: 97, tuition: "$23,000", requirements: "55%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Health", "Computing"], website: "https://www.unf.edu" },
    { name: "California State University", country: "USA", ranking: "#98 in USA", globalRank: 98, tuition: "$22,000", requirements: "54%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Business", "Engineering", "Arts"], website: "https://www.calstate.edu" },
    { name: "State University of New York", country: "USA", ranking: "#99 in USA", globalRank: 99, tuition: "$21,000", requirements: "54%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Medicine", "Arts"], website: "https://www.suny.edu" },
    { name: "University of Houston", country: "USA", ranking: "#100 in USA", globalRank: 100, tuition: "$20,000", requirements: "53%+ in 12th, TOEFL 100/IELTS 7.0", programs: ["Engineering", "Business", "Energy"], website: "https://www.uh.edu" },

    // Canada Top Universities (Expanded to 20)
    { name: "University of Toronto", country: "Canada", ranking: "#1 in Canada", globalRank: 101, tuition: "$45,000 CAD", requirements: "85%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Business"], website: "https://www.utoronto.ca" },
    { name: "University of British Columbia", country: "Canada", ranking: "#2 in Canada", globalRank: 102, tuition: "$42,000 CAD", requirements: "82%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.ubc.ca" },
    { name: "McGill University", country: "Canada", ranking: "#3 in Canada", globalRank: 103, tuition: "$38,000 CAD", requirements: "83%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.mcgill.ca" },
    { name: "University of Alberta", country: "Canada", ranking: "#4 in Canada", globalRank: 104, tuition: "$35,000 CAD", requirements: "80%+ in 12th, IELTS 6.5", programs: ["Engineering", "Medicine", "Science"], website: "https://www.ualberta.ca" },
    { name: "University of Waterloo", country: "Canada", ranking: "#5 in Canada", globalRank: 105, tuition: "$40,000 CAD", requirements: "85%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Mathematics"], website: "https://uwaterloo.ca" },
    { name: "McMaster University", country: "Canada", ranking: "#6 in Canada", globalRank: 106, tuition: "$37,000 CAD", requirements: "78%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Health Sciences"], website: "https://www.mcmaster.ca" },
    { name: "Queen's University", country: "Canada", ranking: "#7 in Canada", globalRank: 107, tuition: "$39,000 CAD", requirements: "79%+ in 12th, IELTS 6.5", programs: ["Business", "Engineering", "Medicine"], website: "https://www.queensu.ca" },
    { name: "University of Calgary", country: "Canada", ranking: "#8 in Canada", globalRank: 108, tuition: "$34,000 CAD", requirements: "77%+ in 12th, IELTS 6.5", programs: ["Engineering", "Medicine", "Business"], website: "https://www.ucalgary.ca" },
    { name: "University of Ottawa", country: "Canada", ranking: "#9 in Canada", globalRank: 109, tuition: "$33,000 CAD", requirements: "76%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Public Policy"], website: "https://www.uottawa.ca" },
    { name: "Western University", country: "Canada", ranking: "#10 in Canada", globalRank: 110, tuition: "$32,000 CAD", requirements: "75%+ in 12th, IELTS 6.5", programs: ["Business", "Medicine", "Engineering"], website: "https://www.uwo.ca" },
    { name: "University of Montreal", country: "Canada", ranking: "#11 in Canada", globalRank: 111, tuition: "$31,000 CAD", requirements: "74%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.umontreal.ca" },
    { name: "Laval University", country: "Canada", ranking: "#12 in Canada", globalRank: 112, tuition: "$30,000 CAD", requirements: "73%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Science"], website: "https://www.ulaval.ca" },
    { name: "Simon Fraser University", country: "Canada", ranking: "#13 in Canada", globalRank: 113, tuition: "$29,000 CAD", requirements: "72%+ in 12th, IELTS 6.5", programs: ["Computer Science", "Business", "Arts"], website: "https://www.sfu.ca" },
    { name: "University of Victoria", country: "Canada", ranking: "#14 in Canada", globalRank: 114, tuition: "$28,000 CAD", requirements: "71%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Law"], website: "https://www.uvic.ca" },
    { name: "York University", country: "Canada", ranking: "#15 in Canada", globalRank: 115, tuition: "$27,000 CAD", requirements: "70%+ in 12th, IELTS 6.5", programs: ["Business", "Arts", "Science"], website: "https://www.yorku.ca" },
    { name: "Carleton University", country: "Canada", ranking: "#16 in Canada", globalRank: 116, tuition: "$26,000 CAD", requirements: "69%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Journalism"], website: "https://carleton.ca" },
    { name: "University of Saskatchewan", country: "Canada", ranking: "#17 in Canada", globalRank: 117, tuition: "$25,000 CAD", requirements: "68%+ in 12th, IELTS 6.5", programs: ["Agriculture", "Engineering", "Medicine"], website: "https://www.usask.ca" },
    { name: "University of Manitoba", country: "Canada", ranking: "#18 in Canada", globalRank: 118, tuition: "$24,000 CAD", requirements: "67%+ in 12th, IELTS 6.5", programs: ["Engineering", "Medicine", "Agriculture"], website: "https://umanitoba.ca" },
    { name: "Concordia University", country: "Canada", ranking: "#19 in Canada", globalRank: 119, tuition: "$23,000 CAD", requirements: "66%+ in 12th, IELTS 6.5", programs: ["Engineering", "Business", "Arts"], website: "https://www.concordia.ca" },
    { name: "Ryerson University", country: "Canada", ranking: "#20 in Canada", globalRank: 120, tuition: "$22,000 CAD", requirements: "65%+ in 12th, IELTS 6.5", programs: ["Engineering", "Business", "Media"], website: "https://www.ryerson.ca" },

    // UK Top 30 Universities (Expanded)
    { name: "University of Oxford", country: "UK", ranking: "#1 in UK", globalRank: 121, tuition: "£35,000", requirements: "95%+ in 12th, IELTS 7.5", programs: ["Medicine", "Law", "PPE"], website: "https://www.ox.ac.uk" },
    { name: "University of Cambridge", country: "UK", ranking: "#2 in UK", globalRank: 122, tuition: "£35,000", requirements: "95%+ in 12th, IELTS 7.5", programs: ["Engineering", "Medicine", "Natural Sciences"], website: "https://www.cam.ac.uk" },
    { name: "Imperial College London", country: "UK", ranking: "#3 in UK", globalRank: 123, tuition: "£32,000", requirements: "92%+ in 12th, IELTS 7.0", programs: ["Engineering", "Medicine", "Science"], website: "https://www.imperial.ac.uk" },
    { name: "University College London", country: "UK", ranking: "#4 in UK", globalRank: 124, tuition: "£30,000", requirements: "90%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.ucl.ac.uk" },
    { name: "London School of Economics", country: "UK", ranking: "#5 in UK", globalRank: 125, tuition: "£31,000", requirements: "91%+ in 12th, IELTS 7.0", programs: ["Economics", "Politics", "Social Sciences"], website: "https://www.lse.ac.uk" },
    { name: "University of Edinburgh", country: "UK", ranking: "#6 in UK", globalRank: 126, tuition: "£28,000", requirements: "88%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.ed.ac.uk" },
    { name: "King's College London", country: "UK", ranking: "#7 in UK", globalRank: 127, tuition: "£26,000", requirements: "86%+ in 12th, IELTS 6.5", programs: ["Medicine", "Law", "Business"], website: "https://www.kcl.ac.uk" },
    { name: "University of Manchester", country: "UK", ranking: "#8 in UK", globalRank: 128, tuition: "£25,000", requirements: "85%+ in 12th, IELTS 6.0", programs: ["Engineering", "Business", "Medicine"], website: "https://www.manchester.ac.uk" },
    { name: "University of Warwick", country: "UK", ranking: "#9 in UK", globalRank: 129, tuition: "£27,000", requirements: "87%+ in 12th, IELTS 6.5", programs: ["Business", "Engineering", "Economics"], website: "https://warwick.ac.uk" },
    { name: "University of Bristol", country: "UK", ranking: "#10 in UK", globalRank: 130, tuition: "£24,000", requirements: "84%+ in 12th, IELTS 6.5", programs: ["Engineering", "Medicine", "Arts"], website: "https://www.bristol.ac.uk" },
    { name: "University of Glasgow", country: "UK", ranking: "#11 in UK", globalRank: 131, tuition: "£23,000", requirements: "83%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.gla.ac.uk" },
    { name: "Durham University", country: "UK", ranking: "#12 in UK", globalRank: 132, tuition: "£25,500", requirements: "85%+ in 12th, IELTS 6.5", programs: ["Business", "Law", "Arts"], website: "https://www.durham.ac.uk" },
    { name: "University of Sheffield", country: "UK", ranking: "#13 in UK", globalRank: 133, tuition: "£22,000", requirements: "82%+ in 12th, IELTS 6.0", programs: ["Engineering", "Medicine", "Arts"], website: "https://www.sheffield.ac.uk" },
    { name: "University of Birmingham", country: "UK", ranking: "#14 in UK", globalRank: 134, tuition: "£21,500", requirements: "81%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.birmingham.ac.uk" },
    { name: "University of Leeds", country: "UK", ranking: "#15 in UK", globalRank: 135, tuition: "£21,000", requirements: "80%+ in 12th, IELTS 6.0", programs: ["Engineering", "Business", "Medicine"], website: "https://www.leeds.ac.uk" },
    { name: "University of Nottingham", country: "UK", ranking: "#16 in UK", globalRank: 136, tuition: "£20,500", requirements: "79%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.nottingham.ac.uk" },
    { name: "University of Southampton", country: "UK", ranking: "#17 in UK", globalRank: 137, tuition: "£20,000", requirements: "78%+ in 12th, IELTS 6.0", programs: ["Engineering", "Medicine", "Science"], website: "https://www.southampton.ac.uk" },
    { name: "University of St Andrews", country: "UK", ranking: "#18 in UK", globalRank: 138, tuition: "£24,500", requirements: "84%+ in 12th, IELTS 6.5", programs: ["Arts", "Science", "Medicine"], website: "https://www.st-andrews.ac.uk" },
    { name: "Queen Mary University of London", country: "UK", ranking: "#19 in UK", globalRank: 139, tuition: "£19,500", requirements: "77%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Law"], website: "https://www.qmul.ac.uk" },
    { name: "Lancaster University", country: "UK", ranking: "#20 in UK", globalRank: 140, tuition: "£19,000", requirements: "76%+ in 12th, IELTS 6.0", programs: ["Business", "Engineering", "Arts"], website: "https://www.lancaster.ac.uk" },
    { name: "University of York", country: "UK", ranking: "#21 in UK", globalRank: 141, tuition: "£18,500", requirements: "75%+ in 12th, IELTS 6.0", programs: ["Computer Science", "Medicine", "Arts"], website: "https://www.york.ac.uk" },
    { name: "University of Bath", country: "UK", ranking: "#22 in UK", globalRank: 142, tuition: "£22,500", requirements: "82%+ in 12th, IELTS 6.5", programs: ["Engineering", "Business", "Architecture"], website: "https://www.bath.ac.uk" },
    { name: "University of Exeter", country: "UK", ranking: "#23 in UK", globalRank: 143, tuition: "£21,500", requirements: "81%+ in 12th, IELTS 6.5", programs: ["Medicine", "Business", "Engineering"], website: "https://www.exeter.ac.uk" },
    { name: "Cardiff University", country: "UK", ranking: "#24 in UK", globalRank: 144, tuition: "£18,000", requirements: "74%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Journalism"], website: "https://www.cardiff.ac.uk" },
    { name: "University of Liverpool", country: "UK", ranking: "#25 in UK", globalRank: 145, tuition: "£17,500", requirements: "73%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.liverpool.ac.uk" },
    { name: "Newcastle University", country: "UK", ranking: "#26 in UK", globalRank: 146, tuition: "£17,000", requirements: "72%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Architecture"], website: "https://www.ncl.ac.uk" },
    { name: "University of Reading", country: "UK", ranking: "#27 in UK", globalRank: 147, tuition: "£16,500", requirements: "71%+ in 12th, IELTS 6.0", programs: ["Business", "Agriculture", "Science"], website: "https://www.reading.ac.uk" },
    { name: "University of Sussex", country: "UK", ranking: "#28 in UK", globalRank: 148, tuition: "£16,000", requirements: "70%+ in 12th, IELTS 6.0", programs: ["International Relations", "Science", "Arts"], website: "https://www.sussex.ac.uk" },
    { name: "Loughborough University", country: "UK", ranking: "#29 in UK", globalRank: 149, tuition: "£18,000", requirements: "74%+ in 12th, IELTS 6.0", programs: ["Engineering", "Sports Science", "Business"], website: "https://www.lboro.ac.uk" },
    { name: "University of Leicester", country: "UK", ranking: "#30 in UK", globalRank: 150, tuition: "£15,500", requirements: "69%+ in 12th, IELTS 6.0", programs: ["Medicine", "Space Science", "Archaeology"], website: "https://le.ac.uk" },

    // Australia Top 15 Universities (Expanded)
    { name: "Australian National University", country: "Australia", ranking: "#1 in Australia", globalRank: 151, tuition: "$38,000 AUD", requirements: "85%+ in 12th, IELTS 6.5", programs: ["Science", "Engineering", "Business"], website: "https://www.anu.edu.au" },
    { name: "University of Melbourne", country: "Australia", ranking: "#2 in Australia", globalRank: 152, tuition: "$35,000 AUD", requirements: "80%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.unimelb.edu.au" },
    { name: "University of Sydney", country: "Australia", ranking: "#3 in Australia", globalRank: 153, tuition: "$36,000 AUD", requirements: "82%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Business"], website: "https://www.sydney.edu.au" },
    { name: "University of New South Wales", country: "Australia", ranking: "#4 in Australia", globalRank: 154, tuition: "$37,000 AUD", requirements: "83%+ in 12th, IELTS 6.5", programs: ["Engineering", "Business", "Medicine"], website: "https://www.unsw.edu.au" },
    { name: "University of Queensland", country: "Australia", ranking: "#5 in Australia", globalRank: 155, tuition: "$34,000 AUD", requirements: "79%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Science"], website: "https://www.uq.edu.au" },
    { name: "Monash University", country: "Australia", ranking: "#6 in Australia", globalRank: 156, tuition: "$33,000 AUD", requirements: "78%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Business"], website: "https://www.monash.edu" },
    { name: "University of Western Australia", country: "Australia", ranking: "#7 in Australia", globalRank: 157, tuition: "$32,000 AUD", requirements: "77%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Mining"], website: "https://www.uwa.edu.au" },
    { name: "University of Adelaide", country: "Australia", ranking: "#8 in Australia", globalRank: 158, tuition: "$31,000 AUD", requirements: "76%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Wine"], website: "https://www.adelaide.edu.au" },
    { name: "University of Technology Sydney", country: "Australia", ranking: "#9 in Australia", globalRank: 159, tuition: "$30,000 AUD", requirements: "75%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Design"], website: "https://www.uts.edu.au" },
    { name: "Macquarie University", country: "Australia", ranking: "#10 in Australia", globalRank: 160, tuition: "$29,000 AUD", requirements: "74%+ in 12th, IELTS 6.5", programs: ["Business", "Science", "Arts"], website: "https://www.mq.edu.au" },
    { name: "Queensland University of Technology", country: "Australia", ranking: "#11 in Australia", globalRank: 161, tuition: "$28,000 AUD", requirements: "73%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Creative Industries"], website: "https://www.qut.edu.au" },
    { name: "RMIT University", country: "Australia", ranking: "#12 in Australia", globalRank: 162, tuition: "$27,000 AUD", requirements: "72%+ in 12th, IELTS 6.5", programs: ["Design", "Engineering", "Technology"], website: "https://www.rmit.edu.au" },
    { name: "University of Newcastle", country: "Australia", ranking: "#13 in Australia", globalRank: 163, tuition: "$26,000 AUD", requirements: "71%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Arts"], website: "https://www.newcastle.edu.au" },
    { name: "Griffith University", country: "Australia", ranking: "#14 in Australia", globalRank: 164, tuition: "$25,000 AUD", requirements: "70%+ in 12th, IELTS 6.5", programs: ["Medicine", "Arts", "Business"], website: "https://www.griffith.edu.au" },
    { name: "Deakin University", country: "Australia", ranking: "#15 in Australia", globalRank: 165, tuition: "$24,000 AUD", requirements: "69%+ in 12th, IELTS 6.5", programs: ["Health", "Education", "Business"], website: "https://www.deakin.edu.au" },

    // Ireland Top 10 Universities (Expanded)
    { name: "Trinity College Dublin", country: "Ireland", ranking: "#1 in Ireland", globalRank: 166, tuition: "€20,000", requirements: "80%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Medicine"], website: "https://www.tcd.ie" },
    { name: "University College Dublin", country: "Ireland", ranking: "#2 in Ireland", globalRank: 167, tuition: "€18,500", requirements: "78%+ in 12th, IELTS 6.0", programs: ["Business", "Engineering", "Arts"], website: "https://www.ucd.ie" },
    { name: "National University of Ireland Galway", country: "Ireland", ranking: "#3 in Ireland", globalRank: 168, tuition: "€16,000", requirements: "75%+ in 12th, IELTS 6.0", programs: ["Science", "Medicine", "Arts"], website: "https://www.nuigalway.ie" },
    { name: "University College Cork", country: "Ireland", ranking: "#4 in Ireland", globalRank: 169, tuition: "€17,500", requirements: "76%+ in 12th, IELTS 6.0", programs: ["Medicine", "Engineering", "Business"], website: "https://www.ucc.ie" },
    { name: "Dublin City University", country: "Ireland", ranking: "#5 in Ireland", globalRank: 170, tuition: "€15,000", requirements: "74%+ in 12th, IELTS 6.0", programs: ["Engineering", "Business", "Computer Science"], website: "https://www.dcu.ie" },
    { name: "Maynooth University", country: "Ireland", ranking: "#6 in Ireland", globalRank: 171, tuition: "€14,500", requirements: "73%+ in 12th, IELTS 6.0", programs: ["Arts", "Science", "Social Sciences"], website: "https://www.maynoothuniversity.ie" },
    { name: "University of Limerick", country: "Ireland", ranking: "#7 in Ireland", globalRank: 172, tuition: "€14,000", requirements: "72%+ in 12th, IELTS 6.0", programs: ["Engineering", "Business", "Sports Science"], website: "https://www.ul.ie" },
    { name: "Technological University Dublin", country: "Ireland", ranking: "#8 in Ireland", globalRank: 173, tuition: "€13,500", requirements: "71%+ in 12th, IELTS 6.0", programs: ["Engineering", "Technology", "Business"], website: "https://www.tudublin.ie" },
    { name: "Cork Institute of Technology", country: "Ireland", ranking: "#9 in Ireland", globalRank: 174, tuition: "€13,000", requirements: "70%+ in 12th, IELTS 6.0", programs: ["Engineering", "Technology", "Business"], website: "https://www.cit.ie" },
    { name: "Waterford Institute of Technology", country: "Ireland", ranking: "#10 in Ireland", globalRank: 175, tuition: "€12,500", requirements: "69%+ in 12th, IELTS 6.0", programs: ["Engineering", "Business", "Arts"], website: "https://www.wit.ie" },

    // Germany Top 20 Universities (Expanded)
    { name: "Technical University of Munich", country: "Germany", ranking: "#1 in Germany", globalRank: 176, tuition: "€3,000", requirements: "85%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Science"], website: "https://www.tum.de" },
    { name: "University of Heidelberg", country: "Germany", ranking: "#2 in Germany", globalRank: 177, tuition: "€3,500", requirements: "82%+ in 12th, IELTS 6.5", programs: ["Medicine", "Science", "Arts"], website: "https://www.uni-heidelberg.de" },
    { name: "Ludwig Maximilian University Munich", country: "Germany", ranking: "#3 in Germany", globalRank: 178, tuition: "€3,200", requirements: "80%+ in 12th, IELTS 6.5", programs: ["Medicine", "Science", "Arts"], website: "https://www.lmu.de" },
    { name: "RWTH Aachen University", country: "Germany", ranking: "#4 in Germany", globalRank: 179, tuition: "€3,800", requirements: "83%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Science"], website: "https://www.rwth-aachen.de" },
    { name: "University of Berlin", country: "Germany", ranking: "#5 in Germany", globalRank: 180, tuition: "€3,300", requirements: "79%+ in 12th, IELTS 6.5", programs: ["Arts", "Science", "Medicine"], website: "https://www.fu-berlin.de" },
    { name: "Karlsruhe Institute of Technology", country: "Germany", ranking: "#6 in Germany", globalRank: 181, tuition: "€3,600", requirements: "81%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Science"], website: "https://www.kit.edu" },
    { name: "University of Hamburg", country: "Germany", ranking: "#7 in Germany", globalRank: 182, tuition: "€3,100", requirements: "78%+ in 12th, IELTS 6.5", programs: ["Science", "Medicine", "Arts"], website: "https://www.uni-hamburg.de" },
    { name: "University of Frankfurt", country: "Germany", ranking: "#8 in Germany", globalRank: 183, tuition: "€3,400", requirements: "80%+ in 12th, IELTS 6.5", programs: ["Business", "Medicine", "Arts"], website: "https://www.uni-frankfurt.de" },
    { name: "University of Göttingen", country: "Germany", ranking: "#9 in Germany", globalRank: 184, tuition: "€3,000", requirements: "77%+ in 12th, IELTS 6.5", programs: ["Science", "Medicine", "Arts"], website: "https://www.uni-goettingen.de" },
    { name: "Technical University of Berlin", country: "Germany", ranking: "#10 in Germany", globalRank: 185, tuition: "€3,700", requirements: "82%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Architecture"], website: "https://www.tu-berlin.de" },
    { name: "University of Bonn", country: "Germany", ranking: "#11 in Germany", globalRank: 186, tuition: "€2,900", requirements: "76%+ in 12th, IELTS 6.5", programs: ["Science", "Medicine", "Arts"], website: "https://www.uni-bonn.de" },
    { name: "University of Cologne", country: "Germany", ranking: "#12 in Germany", globalRank: 187, tuition: "€3,100", requirements: "75%+ in 12th, IELTS 6.5", programs: ["Business", "Arts", "Medicine"], website: "https://www.uni-koeln.de" },
    { name: "University of Stuttgart", country: "Germany", ranking: "#13 in Germany", globalRank: 188, tuition: "€3,500", requirements: "79%+ in 12th, IELTS 6.5", programs: ["Engineering", "Technology", "Science"], website: "https://www.uni-stuttgart.de" },
    { name: "University of Dresden", country: "Germany", ranking: "#14 in Germany", globalRank: 189, tuition: "€3,200", requirements: "78%+ in 12th, IELTS 6.5", programs: ["Engineering", "Medicine", "Arts"], website: "https://tu-dresden.de" },
    { name: "University of Erlangen", country: "Germany", ranking: "#15 in Germany", globalRank: 190, tuition: "€2,800", requirements: "74%+ in 12th, IELTS 6.5", programs: ["Medicine", "Engineering", "Science"], website: "https://www.fau.de" },
    { name: "University of Darmstadt", country: "Germany", ranking: "#16 in Germany", globalRank: 191, tuition: "€3,400", requirements: "77%+ in 12th, IELTS 6.5", programs: ["Engineering", "Computer Science", "Technology"], website: "https://www.tu-darmstadt.de" },
    { name: "University of Mannheim", country: "Germany", ranking: "#17 in Germany", globalRank: 192, tuition: "€3,000", requirements: "76%+ in 12th, IELTS 6.5", programs: ["Business", "Economics", "Social Sciences"], website: "https://www.uni-mannheim.de" },
    { name: "University of Düsseldorf", country: "Germany", ranking: "#18 in Germany", globalRank: 193, tuition: "€2,700", requirements: "73%+ in 12th, IELTS 6.5", programs: ["Medicine", "Arts", "Science"], website: "https://www.hhu.de" },
    { name: "University of Leipzig", country: "Germany", ranking: "#19 in Germany", globalRank: 194, tuition: "€2,600", requirements: "72%+ in 12th, IELTS 6.5", programs: ["Medicine", "Arts", "Science"], website: "https://www.uni-leipzig.de" },
    { name: "University of Würzburg", country: "Germany", ranking: "#20 in Germany", globalRank: 195, tuition: "€2,500", requirements: "71%+ in 12th, IELTS 6.5", programs: ["Medicine", "Science", "Arts"], website: "https://www.uni-wuerzburg.de" }
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
