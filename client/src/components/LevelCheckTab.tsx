import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Info, Lock, Clock } from "lucide-react";
import { GraduationCapIcon } from "./icons/GraduationCapIcon";
import { SparkleIcon } from "./icons/SparkleIcon";

export default function LevelCheckTab() {
  // Google Form URL for the English level assessment
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd2zhoScVWEc5jmffzHHLXbmblYqC-HXbaaL94SqqDZ_Q40Gw/viewform?embedded=true";
  const [progress, setProgress] = React.useState(0);

  // Handle iframe load and message events
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'string' && event.data.includes('scrollHeight')) {
        // Update progress based on scroll position
        const iframe = document.querySelector('iframe');
        if (iframe) {
          const scrollPos = iframe.contentWindow?.scrollY || 0;
          const maxScroll = iframe.contentWindow?.document.body.scrollHeight || 0;
          const newProgress = Math.min(100, Math.round((scrollPos / maxScroll) * 100));
          setProgress(newProgress);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div>
      <Card className="shadow-md border-0">
        <CardContent className="p-8">
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-1">Progress: {progress}%</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-start">
              <GraduationCapIcon className="w-10 h-10 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gradient inline-block">English Level Assessment</h2>
                <p className="text-gray-600">Get an approximate level evaluation and personalized recommendations</p>
              </div>
            </div>
            <Badge className="bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full px-4 py-1 text-sm font-medium self-start md:self-auto flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              10-15 minutes
            </Badge>
          </div>
          
          <p className="mb-8 text-lg leading-relaxed">Please complete the following form to help us assess your approximate English level. The assessment covers reading, writing, vocabulary, and grammar skills to provide a general evaluation.</p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src={googleFormUrl}
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="English Level Assessment Form"
              className="bg-white"
            >
              Loading Google Form...
            </iframe>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <SparkleIcon className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-medium">Important Information</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3 flex items-center">
              <Info className="h-5 w-5 mr-2 text-primary" /> 
              The assessment provides an approximate level. Results will be sent to your email.
            </p>
            <p className="text-sm text-gray-700 mb-3 flex items-center">
              <Info className="h-5 w-5 mr-2 text-primary" /> 
              For a complete and accurate level assessment, the online free no-commitment consultation is required.
            </p>
            <p className="text-sm text-gray-700 flex items-center">
              <Lock className="h-5 w-5 mr-2 text-primary" /> 
              Your data is secure and will only be used for assessment purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
