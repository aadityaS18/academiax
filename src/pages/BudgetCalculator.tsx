
import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import ExpenseForm from "@/components/budget/ExpenseForm";
import BudgetSummary from "@/components/budget/BudgetSummary";
import FundingOptions from "@/components/budget/FundingOptions";
import ScholarshipsSection from "@/components/budget/ScholarshipsSection";

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

  const [currency, setCurrency] = useState("INR");

  const currencies = [
    { code: "INR", symbol: "₹", name: "Indian Rupee", placeholder: "e.g., 2500000 (25 Lakhs)" },
    { code: "USD", symbol: "$", name: "US Dollar", placeholder: "e.g., 30000" },
    { code: "GBP", symbol: "£", name: "British Pound", placeholder: "e.g., 25000" },
    { code: "EUR", symbol: "€", name: "Euro", placeholder: "e.g., 28000" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar", placeholder: "e.g., 35000" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar", placeholder: "e.g., 40000" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen", placeholder: "e.g., 3500000" },
  ];

  const selectedCurrency = currencies.find(c => c.code === currency) || currencies[0];

  const calculateTotal = () => {
    const values = Object.values(expenses).map(val => parseFloat(val) || 0);
    return values.reduce((sum, val) => sum + val, 0);
  };

  const total = calculateTotal();

  const formatCurrency = (amount: number) => {
    if (currency === "INR") {
      return `${selectedCurrency.symbol}${amount.toLocaleString()}`;
    }
    return `${selectedCurrency.symbol}${amount.toLocaleString()}`;
  };

  const getConversionNote = () => {
    if (currency === "INR") {
      return `Approximately ₹${(total / 100000).toFixed(1)} Lakhs per year`;
    }
    return `Total annual cost in ${selectedCurrency.name}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">StudyAbroad</span>
          </Link>
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
            <ExpenseForm
              expenses={expenses}
              setExpenses={setExpenses}
              currency={currency}
              setCurrency={setCurrency}
              currencies={currencies}
              selectedCurrency={selectedCurrency}
            />
          </div>

          {/* Results */}
          <div className="space-y-6">
            <BudgetSummary
              expenses={expenses}
              selectedCurrency={selectedCurrency}
              total={total}
              formatCurrency={formatCurrency}
              getConversionNote={getConversionNote}
            />

            <FundingOptions />
          </div>
        </div>

        <ScholarshipsSection />
      </div>
    </div>
  );
};

export default BudgetCalculator;
