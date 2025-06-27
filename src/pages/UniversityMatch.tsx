
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchUniversitiesFromApi, convertApiUniversityToLocalFormat } from "@/services/universityApi";
import { allUniversities, University } from "@/data/universities";
import { useUniversityFiltering, StudentProfile } from "@/hooks/useUniversityFiltering";
import { ProfileForm } from "@/components/university/ProfileForm";
import { UniversityCard } from "@/components/university/UniversityCard";
import { TestPreparation } from "@/components/university/TestPreparation";

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

  const { filterUniversities } = useUniversityFiltering();

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
    // Combine local and API universities
    const combinedUniversities = [...allUniversities, ...apiUniversities];
    return filterUniversities(combinedUniversities, profile, searchClicked);
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

            <ProfileForm 
              profile={profile}
              setProfile={setProfile}
              onSearch={handleSearch}
              isLoading={isLoadingApi}
            />

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
                  <UniversityCard key={university.id} university={university} />
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
            <TestPreparation />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UniversityMatch;
