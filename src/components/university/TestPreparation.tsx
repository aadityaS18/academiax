
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Youtube, ExternalLink } from "lucide-react";
import { testPrepResources } from "@/data/testPrepResources";

export const TestPreparation = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Test Preparation Resources</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive resources to help you prepare for standardized tests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(testPrepResources).map(([testName, resources]) => (
          <Card key={testName} className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {testName} Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Recommended Books</h4>
                <ul className="space-y-2">
                  {resources.books.map((book, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition-colors hover:underline"
                      >
                        {book.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                  <Youtube className="w-4 h-4" />
                  YouTube Channels
                </h4>
                <div className="space-y-2">
                  {resources.youtubeChannels.map((channel, index) => (
                    <a
                      key={index}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                    >
                      <Youtube className="w-4 h-4 text-red-500" />
                      <span>{channel.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-muted/50">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">General Preparation Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Study Schedule</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Start preparation 3-6 months early</li>
                <li>• Practice consistently for 1-2 hours daily</li>
                <li>• Take regular practice tests</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Test Day Tips</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Get proper rest the night before</li>
                <li>• Arrive early at the test center</li>
                <li>• Bring required identification</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
