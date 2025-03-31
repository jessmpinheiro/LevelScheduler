import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScheduleTab() {
  // Calendar URL should be replaced with the actual calendar URL (Google Calendar or Calendly)
  const calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_ID";
  
  return (
    <div>
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Schedule a Consultation</h2>
            <Badge className="bg-primary hover:bg-primary text-white rounded-full">30 minutes</Badge>
          </div>
          
          <p className="mb-6">Select a convenient time for your consultation. During this call, we'll discuss your assessment results and provide personalized recommendations for your English learning journey.</p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src={calendarUrl}
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Schedule Consultation"
            >
              Loading calendar...
            </iframe>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">What to expect in your consultation:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Review of your assessment results</li>
              <li>Discussion of your learning goals</li>
              <li>Personalized study plan recommendations</li>
              <li>Q&A session with a language expert</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
