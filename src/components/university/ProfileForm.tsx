
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { StudentProfile } from "@/hooks/useUniversityFiltering";

interface ProfileFormProps {
  profile: StudentProfile;
  setProfile: React.Dispatch<React.SetStateAction<StudentProfile>>;
  onSearch: () => void;
  isLoading: boolean;
}

export const ProfileForm = ({ profile, setProfile, onSearch, isLoading }: ProfileFormProps) => {
  return (
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

        <Button onClick={onSearch} className="w-full" size="lg" disabled={isLoading}>
          {isLoading ? (
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
  );
};
