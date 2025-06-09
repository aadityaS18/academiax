
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, GraduationCap } from "lucide-react";

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
      </div>
    </div>
  );
};

export default BudgetCalculator;
