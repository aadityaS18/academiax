
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

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

interface ExpenseFormProps {
  expenses: Expenses;
  setExpenses: (expenses: Expenses) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  currencies: Currency[];
  selectedCurrency: Currency;
}

const ExpenseForm = ({ 
  expenses, 
  setExpenses, 
  currency, 
  setCurrency, 
  currencies, 
  selectedCurrency 
}: ExpenseFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5" />
          Annual Expenses
        </CardTitle>
        <CardDescription>Enter your estimated annual costs in your preferred currency</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="currency">Currency</Label>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((curr) => (
                <SelectItem key={curr.code} value={curr.code}>
                  {curr.symbol} {curr.name} ({curr.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="tuition">Tuition Fees</Label>
          <Input
            id="tuition"
            type="number"
            placeholder={selectedCurrency.placeholder}
            value={expenses.tuition}
            onChange={(e) => setExpenses({...expenses, tuition: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="accommodation">Accommodation</Label>
          <Input
            id="accommodation"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '800000 (8 Lakhs)' : currency === 'USD' ? '12000' : currency === 'GBP' ? '10000' : '15000'}`}
            value={expenses.accommodation}
            onChange={(e) => setExpenses({...expenses, accommodation: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="food">Food & Groceries</Label>
          <Input
            id="food"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '300000 (3 Lakhs)' : currency === 'USD' ? '4000' : currency === 'GBP' ? '3500' : '5000'}`}
            value={expenses.food}
            onChange={(e) => setExpenses({...expenses, food: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="transport">Transportation</Label>
          <Input
            id="transport"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '150000 (1.5 Lakhs)' : currency === 'USD' ? '2000' : currency === 'GBP' ? '1500' : '2500'}`}
            value={expenses.transport}
            onChange={(e) => setExpenses({...expenses, transport: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="books">Books & Supplies</Label>
          <Input
            id="books"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '100000 (1 Lakh)' : currency === 'USD' ? '1200' : currency === 'GBP' ? '1000' : '1500'}`}
            value={expenses.books}
            onChange={(e) => setExpenses({...expenses, books: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="personal">Personal Expenses</Label>
          <Input
            id="personal"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '200000 (2 Lakhs)' : currency === 'USD' ? '3000' : currency === 'GBP' ? '2500' : '4000'}`}
            value={expenses.personal}
            onChange={(e) => setExpenses({...expenses, personal: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="insurance">Health Insurance</Label>
          <Input
            id="insurance"
            type="number"
            placeholder={`e.g., ${currency === 'INR' ? '50000 (50,000)' : currency === 'USD' ? '1500' : currency === 'GBP' ? '800' : '1200'}`}
            value={expenses.insurance}
            onChange={(e) => setExpenses({...expenses, insurance: e.target.value})}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
