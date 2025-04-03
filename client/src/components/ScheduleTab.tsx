import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail } from "lucide-react";
import { SparkleIcon } from "./icons/SparkleIcon";
import { useState, useEffect } from "react";
import CalendlySetupGuide from "./CalendlySetupGuide";
import { analytics } from "../lib/analytics";

export default function ScheduleTab() {
  // Calendar URL for scheduling meetings
  const calendarUrl = "https://calendly.com/teacherjessbr/new-meeting";
  
  // State to toggle setup guide visibility
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Rastrear visualização da guia de agendamento
  useEffect(() => {
    analytics.trackScheduleView();
  }, []);
  
  // Configurar ouvinte para eventos do Calendly
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      // Verificar se a mensagem veio do Calendly
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // Eventos do Calendly seguem o formato: calendly.event_type
        const eventName = e.data.event;
        
        // Rastrear quando alguém inicia o processo de agendamento
        if (eventName === 'calendly.date_and_time_selected' && !hasInteracted) {
          analytics.trackScheduleStart();
          setHasInteracted(true);
        }
        
        // Rastrear quando alguém completa um agendamento
        if (eventName === 'calendly.event_scheduled') {
          analytics.trackScheduleComplete();
        }
      }
    };
    
    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [hasInteracted]);
  
  return (
    <div>
      <Card className="shadow-md border-0">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-start">
              <Calendar className="w-10 h-10 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gradient inline-block">Schedule a Consultation</h2>
                <p className="text-gray-600">Book a one-on-one session to discuss your English learning journey</p>
              </div>
            </div>
            <Badge className="bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full px-4 py-1 text-sm font-medium self-start md:self-auto flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              30 minutes
            </Badge>
          </div>
          
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-2">Select a convenient time for your <span className="font-semibold">free, no-commitment consultation</span>. During this call, we'll provide a complete and accurate assessment of your English level and personalized recommendations for your learning journey.</p>
            
            <div className="flex items-center text-primary mt-4">
              <Mail className="h-4 w-4 mr-2" />
              <p>
                <span className="font-medium">Email Notifications: </span>
                <button 
                  onClick={() => setShowSetupGuide(!showSetupGuide)}
                  className="underline text-primary hover:text-purple-700 focus:outline-none"
                >
                  {showSetupGuide ? 'Hide setup instructions' : 'Show setup instructions'}
                </button>
              </p>
            </div>
          </div>
          
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
            <div className="flex items-center mb-4">
              <SparkleIcon className="w-6 h-6 text-primary mr-2" />
              <h3 className="font-bold text-lg text-gray-800">What to expect in your consultation:</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-gradient-primary mr-2"></div>
                <span>Complete and accurate level assessment</span>
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
      
      {/* Collapsible setup guide */}
      {showSetupGuide && <CalendlySetupGuide />}
    </div>
  );
}
