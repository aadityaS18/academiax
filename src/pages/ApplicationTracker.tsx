
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Star, CheckCircle, Clock, AlertTriangle, Calendar } from "lucide-react";

const ApplicationTracker = () => {
  const [applications] = useState([
    {
      id: 1,
      university: "University of Toronto",
      program: "Computer Science",
      applicationType: "Regular Decision",
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
      applicationType: "Regular Decision",
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
      applicationType: "Early Action",
      deadline: "2024-01-01",
      status: "Waitlisted",
      requirements: {
        sop: true,
        transcripts: true,
        lor: true,
        test_scores: true,
        portfolio: true
      }
    },
    {
      id: 4,
      university: "Stanford University",
      program: "Computer Science",
      applicationType: "Regular Decision",
      deadline: "2024-01-05",
      status: "In Progress",
      requirements: {
        sop: false,
        transcripts: true,
        lor: false,
        test_scores: true,
        portfolio: true
      }
    },
    {
      id: 5,
      university: "Harvard University",
      program: "Engineering",
      applicationType: "Early Decision",
      deadline: "2024-01-10",
      status: "In Progress",
      requirements: {
        sop: true,
        transcripts: false,
        lor: true,
        test_scores: true,
        portfolio: false
      }
    }
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const getApplicationTypeColor = (type: string) => {
    switch (type) {
      case "Early Action": return "bg-green-100 text-green-800";
      case "Early Decision": return "bg-blue-100 text-blue-800";
      case "Regular Decision": return "bg-gray-100 text-gray-800";
      case "Rolling Admission": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressPercentage = (requirements: any) => {
    const total = Object.keys(requirements).length;
    const completed = Object.values(requirements).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  const getTimeUntilDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate.getTime() - currentTime.getTime();
    
    if (timeDiff <= 0) {
      return { text: "Deadline passed", urgency: "expired", days: 0 };
    }

    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (days <= 7) {
      return { text: `${days} day${days === 1 ? '' : 's'} left`, urgency: "critical", days };
    } else if (days <= 30) {
      return { text: `${days} days left`, urgency: "warning", days };
    } else {
      return { text: `${days} days left`, urgency: "normal", days };
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "expired":
        return "bg-red-500 text-white";
      case "critical":
        return "bg-red-100 text-red-800 animate-pulse";
      case "warning":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "expired":
        return <AlertTriangle className="h-4 w-4" />;
      case "critical":
        return <AlertTriangle className="h-4 w-4" />;
      case "warning":
        return <Clock className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  // Sort applications by urgency and deadline
  const sortedApplications = [...applications].sort((a, b) => {
    const timeA = getTimeUntilDeadline(a.deadline);
    const timeB = getTimeUntilDeadline(b.deadline);
    
    // Prioritize by urgency first, then by days remaining
    if (timeA.urgency === timeB.urgency) {
      return timeA.days - timeB.days;
    }
    
    const urgencyOrder = { "expired": 0, "critical": 1, "warning": 2, "normal": 3 };
    return urgencyOrder[timeA.urgency] - urgencyOrder[timeB.urgency];
  });

  // Calculate stats by application type
  const earlyActionApps = applications.filter(app => app.applicationType === "Early Action");
  const earlyDecisionApps = applications.filter(app => app.applicationType === "Early Decision");
  const regularDecisionApps = applications.filter(app => app.applicationType === "Regular Decision");

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
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                <Clock className="h-4 w-4 inline mr-1" />
                {currentTime.toLocaleTimeString()}
              </div>
              <Button>Add New Application</Button>
            </div>
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
              <div className="text-2xl font-bold text-primary">{applications.length}</div>
              <div className="text-sm text-muted-foreground">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">{earlyActionApps.length}</div>
              <div className="text-sm text-muted-foreground">Early Action</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{earlyDecisionApps.length}</div>
              <div className="text-sm text-muted-foreground">Early Decision</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-gray-600">{regularDecisionApps.length}</div>
              <div className="text-sm text-muted-foreground">Regular Decision</div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {sortedApplications.map((app) => {
            const timeInfo = getTimeUntilDeadline(app.deadline);
            return (
              <Card key={app.id} className={`hover:shadow-lg transition-shadow ${
                timeInfo.urgency === "critical" ? "border-red-300 shadow-red-100" : 
                timeInfo.urgency === "warning" ? "border-orange-300 shadow-orange-100" : ""
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{app.university}</CardTitle>
                      <CardDescription className="text-base mt-1">{app.program}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getApplicationTypeColor(app.applicationType)}>
                        {app.applicationType}
                      </Badge>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                      <Badge className={getUrgencyBadge(timeInfo.urgency)}>
                        {getUrgencyIcon(timeInfo.urgency)}
                        <span className="ml-1">{timeInfo.text}</span>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Application Info */}
                    <div>
                      <div className="mb-4">
                        <Label className="text-sm text-muted-foreground">Application Deadline</Label>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">{new Date(app.deadline).toLocaleDateString()}</p>
                          <div className="text-sm text-muted-foreground">
                            ({timeInfo.text})
                          </div>
                        </div>
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

                      {/* Countdown Timer for urgent deadlines */}
                      {(timeInfo.urgency === "critical" || timeInfo.urgency === "warning") && (
                        <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <Label className="text-sm text-orange-800 font-medium flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Time Remaining
                          </Label>
                          <div className="text-lg font-bold text-orange-800 mt-1">
                            {timeInfo.text}
                          </div>
                        </div>
                      )}
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
                    {timeInfo.urgency === "critical" && (
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Set Reminder
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
