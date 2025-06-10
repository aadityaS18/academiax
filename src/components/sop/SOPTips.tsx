
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SOPTips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SOP Writing Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Before You Start</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Research the university and program thoroughly</li>
              <li>• Understand the admission requirements</li>
              <li>• Review successful SOP samples</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">Writing Best Practices</h4>
            <ul className="space-y-1 text-green-700">
              <li>• Be specific and avoid generic statements</li>
              <li>• Show, don't tell - use concrete examples</li>
              <li>• Maintain a clear narrative flow</li>
              <li>• Keep it within word limits (500-1000 words)</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900 mb-2">Common Mistakes to Avoid</h4>
            <ul className="space-y-1 text-purple-700">
              <li>• Copying from templates</li>
              <li>• Focusing only on academics</li>
              <li>• Being too emotional or dramatic</li>
              <li>• Not proofreading for errors</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SOPTips;
