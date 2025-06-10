
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Currency {
  code: string;
  symbol: string;
  name: string;
  placeholder: string;
}

interface Expenses {
  tuition: string;
  accommodation: string;
  food: string;
  transport: string;
  books: string;
  personal: string;
  insurance: string;
}

interface BudgetSummaryProps {
  expenses: Expenses;
  selectedCurrency: Currency;
  total: number;
  formatCurrency: (amount: number) => string;
  getConversionNote: () => string;
}

const BudgetSummary = ({ 
  expenses, 
  selectedCurrency, 
  total, 
  formatCurrency, 
  getConversionNote 
}: BudgetSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Summary</CardTitle>
        <CardDescription>Your estimated annual costs in {selectedCurrency.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Tuition Fees</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.tuition) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Accommodation</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.accommodation) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Food & Groceries</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.food) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Transportation</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.transport) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Books & Supplies</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.books) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Personal Expenses</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.personal) || 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Health Insurance</span>
            <span className="font-medium">{formatCurrency(parseFloat(expenses.insurance) || 0)}</span>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>Total Annual Cost</span>
            <span className="text-primary">{formatCurrency(total)}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {getConversionNote()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSummary;
