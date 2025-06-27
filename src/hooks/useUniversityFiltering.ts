
import { useState } from "react";
import { University } from "@/data/universities";

export interface StudentProfile {
  grades: string;
  budget: string;
  country: string;
  field: string;
  englishTest: string;
  satPreference: string;
}

export const useUniversityFiltering = () => {
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

  const filterUniversities = (
    universities: University[], 
    profile: StudentProfile, 
    searchClicked: boolean
  ): University[] => {
    console.log("Search clicked:", searchClicked);
    console.log("Profile:", profile);
    
    if (!searchClicked) {
      return universities.slice(0, 6); // Show featured universities
    }

    let filtered = [...universities];
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
      let backup = [...universities];
      
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

  return {
    filterUniversities,
    normalizeCountryName,
    parseGPA,
    parseBudget
  };
};
