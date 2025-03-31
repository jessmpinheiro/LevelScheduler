import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Lock } from "lucide-react";

export default function LevelCheckTab() {
  // Google Form URL for the English level assessment
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd2zhoScVWEc5jmffzHHLXbmblYqC-HXbaaL94SqqDZ_Q40Gw/viewform?embedded=true";
  
  return (
    <div>
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">English Level Assessment</h2>
            <Badge className="bg-[#34A853] hover:bg-[#34A853] text-white rounded-full">10-15 minutes</Badge>
          </div>
          
          <p className="mb-6">Please complete the following form to help us assess your current English level. The assessment covers reading, writing, vocabulary, and grammar skills.</p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src={googleFormUrl}
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="English Level Assessment Form"
            >
              Loading Google Form...
            </iframe>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2 flex items-center">
              <Info className="h-4 w-4 mr-1" /> 
              The assessment results will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <Lock className="h-4 w-4 mr-1" /> 
              Your data is secure and will only be used for assessment purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
