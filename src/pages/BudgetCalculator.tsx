import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, GraduationCap, ExternalLink, Award, Globe, Users } from "lucide-react";

const BudgetCalculator = () => {
  const [expenses, setExpenses] = useState({
    tuition: "",
    accommodation: "",
    food: "",
    transport: "",
    books: "",
    personal: "",
    insurance: ""
  });

  const calculateTotal = () => {
    const values = Object.values(expenses).map(val => parseFloat(val) || 0);
    return values.reduce((sum, val) => sum + val, 0);
  };

  const total = calculateTotal();

  const scholarships = [
    {
      name: "Fulbright Foreign Student Program",
      country: "USA",
      amount: "Full tuition + living expenses",
      eligibility: "Graduate students, Open to all fields",
      deadline: "October (varies by country)",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Prestigious program for international students to pursue graduate study in the US",
      link: "https://www.fulbrightonline.org"
    },
    {
      name: "Chevening Scholarships",
      country: "UK",
      amount: "Full tuition + £1,347/month stipend",
      eligibility: "Master's degree, 2+ years work experience",
      deadline: "November 2",
      type: "Government",
      icon: <Award className="h-5 w-5" />,
      description: "UK government's global scholarship programme for future leaders",
      link: "https://www.chevening.org"
    },
    {
      name: "DAAD Scholarships",
      country: "Germany",
      amount: "€861-1,200/month + tuition coverage",
      eligibility: "Graduate students, Various programs",
      deadline: "October-December (varies)",
      type: "Government",
      icon: <Users className="h-5 w-5" />,
      description: "German Academic Exchange Service scholarships for international students",
      link: "https://www.daad.de"
    },
    {
      name: "Australia Awards",
      country: "Australia",
      amount: "Full tuition + living allowance",
      eligibility: "Developing country citizens",
      deadline: "April 30",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Australian government scholarships for students from developing countries",
      link: "https://www.australiaawards.gov.au"
    },
    {
      name: "Erasmus Mundus",
      country: "Europe",
      amount: "€1,400/month + tuition coverage",
      eligibility: "Master's & PhD students",
      deadline: "January (varies by program)",
      type: "EU Program",
      icon: <Award className="h-5 w-5" />,
      description: "Joint master's and doctoral programs across multiple European universities",
      link: "https://ec.europa.eu/programmes/erasmus-plus"
    },
    {
      name: "Gates Cambridge Scholarship",
      country: "UK",
      amount: "Full cost + £17,848 stipend",
      eligibility: "Graduate students, High academic achievement",
      deadline: "December 3 (US citizens), January 4 (others)",
      type: "Private",
      icon: <Award className="h-5 w-5" />,
      description: "Prestigious scholarship for outstanding students at University of Cambridge",
      link: "https://www.gatescambridge.org"
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      country: "Canada",
      amount: "CAD $50,000/year for 3 years",
      eligibility: "PhD students, Canadian & international",
      deadline: "November 1",
      type: "Government",
      icon: <Users className="h-5 w-5" />,
      description: "Canada's premier doctoral scholarship program",
      link: "https://vanier.gc.ca"
    },
    {
      name: "MEXT Scholarship",
      country: "Japan",
      amount: "¥143,000-145,000/month + tuition",
      eligibility: "Graduate & undergraduate students",
      deadline: "May-June (varies)",
      type: "Government",
      icon: <Globe className="h-5 w-5" />,
      description: "Japanese government scholarship for international students",
      link: "https://www.mext.go.jp"
    }
  ];

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
          <h1 className="text-3xl font-bold mb-2">Budget Calculator</h1>
          <p className="text-muted-foreground">Calculate your total cost of studying abroad</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Annual Expenses
                </CardTitle>
                <CardDescription>Enter your estimated annual costs in your local currency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tuition">Tuition Fees</Label>
                  <Input
                    id="tuition"
                    type="number"
                    placeholder="e.g., 2500000 (25 Lakhs)"
                    value={expenses.tuition}
                    onChange={(e) => setExpenses({...expenses, tuition: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="accommodation">Accommodation</Label>
                  <Input
                    id="accommodation"
                    type="number"
                    placeholder="e.g., 800000 (8 Lakhs)"
                    value={expenses.accommodation}
                    onChange={(e) => setExpenses({...expenses, accommodation: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="food">Food & Groceries</Label>
                  <Input
                    id="food"
                    type="number"
                    placeholder="e.g., 300000 (3 Lakhs)"
                    value={expenses.food}
                    onChange={(e) => setExpenses({...expenses, food: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="transport">Transportation</Label>
                  <Input
                    id="transport"
                    type="number"
                    placeholder="e.g., 150000 (1.5 Lakhs)"
                    value={expenses.transport}
                    onChange={(e) => setExpenses({...expenses, transport: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="books">Books & Supplies</Label>
                  <Input
                    id="books"
                    type="number"
                    placeholder="e.g., 100000 (1 Lakh)"
                    value={expenses.books}
                    onChange={(e) => setExpenses({...expenses, books: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="personal">Personal Expenses</Label>
                  <Input
                    id="personal"
                    type="number"
                    placeholder="e.g., 200000 (2 Lakhs)"
                    value={expenses.personal}
                    onChange={(e) => setExpenses({...expenses, personal: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="insurance">Health Insurance</Label>
                  <Input
                    id="insurance"
                    type="number"
                    placeholder="e.g., 50000 (50,000)"
                    value={expenses.insurance}
                    onChange={(e) => setExpenses({...expenses, insurance: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Summary</CardTitle>
                <CardDescription>Your estimated annual costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Tuition Fees</span>
                    <span className="font-medium">₹{(parseFloat(expenses.tuition) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accommodation</span>
                    <span className="font-medium">₹{(parseFloat(expenses.accommodation) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Food & Groceries</span>
                    <span className="font-medium">₹{(parseFloat(expenses.food) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation</span>
                    <span className="font-medium">₹{(parseFloat(expenses.transport) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Books & Supplies</span>
                    <span className="font-medium">₹{(parseFloat(expenses.books) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal Expenses</span>
                    <span className="font-medium">₹{(parseFloat(expenses.personal) || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health Insurance</span>
                    <span className="font-medium">₹{(parseFloat(expenses.insurance) || 0).toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Annual Cost</span>
                    <span className="text-primary">₹{total.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Approximately ₹{(total / 100000).toFixed(1)} Lakhs per year
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funding Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Education Loans</p>
                    <p className="text-blue-700">Up to ₹1.5 Crores available from Indian banks</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">Scholarships</p>
                    <p className="text-green-700">Merit-based and need-based scholarships available</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-900">Part-time Work</p>
                    <p className="text-purple-700">20 hours/week allowed in most countries</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scholarships Section */}
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Scholarships</h2>
            <p className="text-muted-foreground">Explore scholarship opportunities to fund your education abroad</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {scholarship.icon}
                      <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {scholarship.type}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-muted-foreground">{scholarship.country}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                  <CardDescription className="text-sm">{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-green-700 mb-1">Award Amount</div>
                    <div className="text-sm">{scholarship.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-700 mb-1">Eligibility</div>
                    <div className="text-sm">{scholarship.eligibility}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-orange-700 mb-1">Application Deadline</div>
                    <div className="text-sm">{scholarship.deadline}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => window.open(scholarship.link, '_blank')}
                  >
                    Learn More <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Resources */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Scholarship Search Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Application Strategy</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Start your search 12-18 months before departure</li>
                    <li>• Apply to multiple scholarships to increase chances</li>
                    <li>• Tailor each application to specific requirements</li>
                    <li>• Prepare strong personal statements and recommendations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Additional Resources</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• University-specific scholarships from target institutions</li>
                    <li>• Field-specific scholarships for your area of study</li>
                    <li>• Corporate scholarships from multinational companies</li>
                    <li>• Regional scholarships for specific countries/states</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
