
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FundingOptions = () => {
  return (
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
  );
};

export default FundingOptions;
