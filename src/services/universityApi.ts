
interface ApiUniversity {
  name: string;
  country: string;
  domains: string[];
  web_pages: string[];
  alpha_two_code: string;
  'state-province'?: string;
}

interface UniversityApiResponse extends ApiUniversity {}

export const fetchUniversitiesFromApi = async (country?: string): Promise<ApiUniversity[]> => {
  try {
    let url = 'http://universities.hipolabs.com/search';
    
    // If country is specified, add it as a query parameter
    if (country) {
      const normalizedCountry = normalizeCountryForApi(country);
      url += `?country=${encodeURIComponent(normalizedCountry)}`;
    }
    
    console.log('Fetching universities from API:', url);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: UniversityApiResponse[] = await response.json();
    console.log('API response received:', data.length, 'universities');
    
    return data;
  } catch (error) {
    console.error('Error fetching universities from API:', error);
    return [];
  }
};

const normalizeCountryForApi = (country: string): string => {
  const normalized = country.toLowerCase().trim();
  
  // Map common country variations to API-expected format
  const countryMap: { [key: string]: string } = {
    'usa': 'United States',
    'america': 'United States',
    'states': 'United States',
    'united states': 'United States',
    'uk': 'United Kingdom',
    'britain': 'United Kingdom',
    'kingdom': 'United Kingdom',
    'england': 'United Kingdom',
    'canada': 'Canada',
    'ireland': 'Ireland',
    'australia': 'Australia',
    'germany': 'Germany',
    'france': 'France',
    'italy': 'Italy',
    'spain': 'Spain',
    'netherlands': 'Netherlands',
    'sweden': 'Sweden',
    'norway': 'Norway',
    'denmark': 'Denmark',
    'finland': 'Finland',
    'switzerland': 'Switzerland',
    'austria': 'Austria',
    'belgium': 'Belgium',
    'japan': 'Japan',
    'south korea': 'South Korea',
    'china': 'China',
    'india': 'India',
    'brazil': 'Brazil',
    'mexico': 'Mexico',
    'argentina': 'Argentina',
    'chile': 'Chile',
    'new zealand': 'New Zealand',
    'south africa': 'South Africa'
  };
  
  return countryMap[normalized] || country;
};

export const convertApiUniversityToLocalFormat = (apiUni: ApiUniversity, index: number) => {
  // Generate estimated data based on country and university characteristics
  const getEstimatedTuition = (country: string, name: string): string => {
    const countryTuition: { [key: string]: string } = {
      'United States': '$25,000-65,000/year',
      'United Kingdom': '£15,000-40,000/year',
      'Canada': 'CAD $20,000-55,000/year',
      'Australia': 'AUD $25,000-50,000/year',
      'Germany': '€500-20,000/year',
      'France': '€200-15,000/year',
      'Netherlands': '€2,000-25,000/year',
      'Sweden': 'Free-€15,000/year',
      'Norway': 'Free-€2,000/year',
      'Denmark': 'Free-€15,000/year',
      'Finland': 'Free-€12,000/year',
      'Switzerland': 'CHF 1,000-30,000/year',
      'Austria': '€700-15,000/year',
      'Belgium': '€900-12,000/year',
      'Ireland': '€12,000-45,000/year',
      'Italy': '€900-20,000/year',
      'Spain': '€1,000-18,000/year',
      'Japan': '¥500,000-1,500,000/year',
      'South Korea': '₩4,000,000-15,000,000/year',
      'New Zealand': 'NZD $25,000-45,000/year',
      'South Africa': 'ZAR 50,000-150,000/year'
    };
    
    return countryTuition[country] || '$15,000-35,000/year';
  };

  const getEstimatedPrograms = (name: string): string[] => {
    const lowerName = name.toLowerCase();
    const programs = ['Liberal Arts', 'Business'];
    
    if (lowerName.includes('tech') || lowerName.includes('institute')) {
      programs.push('Engineering', 'Computer Science');
    }
    if (lowerName.includes('medical') || lowerName.includes('health')) {
      programs.push('Medicine', 'Health Sciences');
    }
    if (lowerName.includes('art') || lowerName.includes('design')) {
      programs.push('Arts', 'Design');
    }
    if (lowerName.includes('business') || lowerName.includes('commerce')) {
      programs.push('Economics', 'Finance');
    }
    if (lowerName.includes('law')) {
      programs.push('Law');
    }
    if (lowerName.includes('science')) {
      programs.push('Natural Sciences', 'Mathematics');
    }
    
    return programs;
  };

  const getSatRequirement = (country: string): 'required' | 'optional' | 'not-required' => {
    if (country === 'United States') {
      return Math.random() > 0.5 ? 'optional' : 'required';
    }
    return 'not-required';
  };

  const getEstimatedAdmissionRate = (country: string): string => {
    const rates = {
      'United States': ['15%', '25%', '35%', '45%', '65%', '75%'],
      'United Kingdom': ['20%', '30%', '40%', '50%', '60%'],
      'Canada': ['35%', '45%', '55%', '65%', '75%'],
      'Australia': ['40%', '50%', '60%', '70%', '80%'],
      'Germany': ['25%', '35%', '45%', '55%'],
      'France': ['30%', '40%', '50%', '60%'],
      'Netherlands': ['25%', '35%', '45%', '55%'],
      'Sweden': ['40%', '50%', '60%', '70%'],
      'Norway': ['45%', '55%', '65%', '75%'],
      'Denmark': ['35%', '45%', '55%', '65%'],
      'Finland': ['40%', '50%', '60%', '70%'],
      'Switzerland': ['20%', '30%', '40%', '50%'],
      'Austria': ['30%', '40%', '50%', '60%'],
      'Belgium': ['35%', '45%', '55%', '65%'],
      'Ireland': ['40%', '50%', '60%', '70%'],
      'Italy': ['35%', '45%', '55%', '65%'],
      'Spain': ['40%', '50%', '60%', '70%'],
      'Japan': ['30%', '40%', '50%', '60%'],
      'South Korea': ['25%', '35%', '45%', '55%'],
      'New Zealand': ['50%', '60%', '70%', '80%'],
      'South Africa': ['40%', '50%', '60%', '70%']
    };
    
    const countryRates = rates[country as keyof typeof rates] || ['50%', '60%', '70%'];
    return countryRates[Math.floor(Math.random() * countryRates.length)];
  };

  const city = apiUni['state-province'] 
    ? `${apiUni['state-province']}` 
    : 'Main Campus';

  return {
    id: 1000 + index, // Start API universities from ID 1000+
    name: apiUni.name,
    country: apiUni.country,
    city: city,
    globalRank: 50 + index, // Assign reasonable rankings
    programs: getEstimatedPrograms(apiUni.name),
    tuitionFee: getEstimatedTuition(apiUni.country, apiUni.name),
    admissionRate: getEstimatedAdmissionRate(apiUni.country),
    satScore: getSatRequirement(apiUni.country) === 'not-required' ? undefined : '1200-1400',
    ieltsScore: '6.0+',
    toeflScore: '80+',
    satRequired: getSatRequirement(apiUni.country),
    minGPA: 2.5 + Math.random() * 1.0 // Random GPA between 2.5-3.5
  };
};
