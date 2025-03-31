import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default function ScheduleTab() {
  // Calendar URL for scheduling meetings
  const calendarUrl = "https://calendar.app.google/31BGK1V8QW8MYp4W8";
  
  return (
    <div>
      <Card className="shadow-md border-0">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gradient inline-block">Schedule a Consultation</h2>
              <p className="text-gray-600">Book a one-on-one session to discuss your English learning journey</p>
            </div>
            <Badge className="bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full px-4 py-1 text-sm font-medium self-start md:self-auto flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              30 minutes
            </Badge>
          </div>
          
          <p className="mb-8 text-lg leading-relaxed">Select a convenient time for your consultation. During this call, we'll discuss your assessment results and provide personalized recommendations for your English learning journey.</p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src={calendarUrl}
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Schedule Consultation"
              className="bg-white"
            >
              Loading calendar...
            </iframe>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="font-bold text-lg mb-4 flex items-center text-gray-800">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              What to expect in your consultation:
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-primary mr-2"></div>
                <span>Review of your assessment results</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-primary mr-2"></div>
                <span>Discussion of your learning goals</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-primary mr-2"></div>
                <span>Personalized study plan recommendations</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-primary mr-2"></div>
                <span>Q&A session with a language expert</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
