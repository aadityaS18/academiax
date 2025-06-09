
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, CheckCircle } from "lucide-react";

const ApplicationTracker = () => {
  const [applications] = useState([
    {
      id: 1,
      university: "University of Toronto",
      program: "Computer Science",
      deadline: "2024-01-15",
      status: "In Progress",
      requirements: {
        sop: true,
        transcripts: true,
        lor: false,
        test_scores: true,
        portfolio: false
      }
    },
    {
      id: 2,
      university: "University of Melbourne",
      program: "Engineering",
      deadline: "2024-02-01",
      status: "Submitted",
      requirements: {
        sop: true,
        transcripts: true,
        lor: true,
        test_scores: true,
        portfolio: false
      }
    },
    {
      id: 3,
      university: "MIT",
      program: "Computer Science",
      deadline: "2024-01-01",
      status: "Waitlisted",
      requirements: {
        sop: true,
        transcripts: true,
        lor: true,
        test_scores: true,
        portfolio: true
      }
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Submitted": return "bg-blue-100 text-blue-800";
      case "Accepted": return "bg-green-100 text-green-800";
      case "Rejected": return "bg-red-100 text-red-800";
      case "Waitlisted": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressPercentage = (requirements: any) => {
    const total = Object.keys(requirements).length;
    const completed = Object.values(requirements).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">StudyAbroad</span>
            </div>
            <Button>Add New Application</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Application Tracker</h1>
          <p className="text-muted-foreground">Keep track of your university applications and deadlines</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="text-sm text-muted-foreground">Submitted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-purple-600">1</div>
              <div className="text-sm text-muted-foreground">Waitlisted</div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {applications.map((app) => (
            <Card key={app.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{app.university}</CardTitle>
                    <CardDescription className="text-base mt-1">{app.program}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Application Info */}
                  <div>
                    <div className="mb-4">
                      <Label className="text-sm text-muted-foreground">Application Deadline</Label>
                      <p className="font-medium">{new Date(app.deadline).toLocaleDateString()}</p>
                    </div>
                    
                    <div className="mb-4">
                      <Label className="text-sm text-muted-foreground">Progress</Label>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${getProgressPercentage(app.requirements)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{getProgressPercentage(app.requirements)}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Requirements Checklist */}
                  <div>
                    <Label className="text-sm text-muted-foreground mb-3 block">Requirements</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${app.requirements.sop ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className="text-sm">Statement of Purpose</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${app.requirements.transcripts ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className="text-sm">Academic Transcripts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${app.requirements.lor ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className="text-sm">Letters of Recommendation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${app.requirements.test_scores ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className="text-sm">Test Scores (IELTS/TOEFL)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${app.requirements.portfolio ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className="text-sm">Portfolio (if required)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-6">
                  <Button variant="outline" size="sm">Update Status</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Add Notes</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {applications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Applications Yet</h3>
              <p className="text-muted-foreground mb-4">Start tracking your university applications</p>
              <Button>Add Your First Application</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ApplicationTracker;
