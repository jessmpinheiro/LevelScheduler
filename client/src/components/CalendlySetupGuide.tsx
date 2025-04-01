import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Code, ExternalLink, Settings } from "lucide-react";

export default function CalendlySetupGuide() {
  // The webhook URL to display to the user
  const webhookUrl = window.location.origin + '/api/webhooks/calendly';
  
  return (
    <div className="mt-8">
      <Card className="shadow-md border-0">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gradient inline-block">Setting Up Email Notifications</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              To receive email notifications when someone schedules an appointment, you need to connect your Calendly account 
              to this website through webhooks. Follow these steps:
            </p>
            
            <ol className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Log in to your Calendly account</h3>
                  <p className="text-gray-600">Go to <a 
                    href="https://calendly.com/app/admin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline flex items-center gap-1"
                  >
                    Calendly Admin Dashboard <ExternalLink className="h-3 w-3" />
                  </a></p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Click on "Integrations"</h3>
                  <p className="text-gray-600">In the left sidebar menu, click on "Integrations"</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Find Webhooks</h3>
                  <p className="text-gray-600">Scroll down to find "Webhooks" or search for it in the integrations marketplace</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Create a Webhook</h3>
                  <p className="text-gray-600">Click "Connect" or "Create Webhook"</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  5
                </div>
                <div>
                  <h3 className="font-semibold">Configure the webhook</h3>
                  <div className="text-gray-600">
                    <ul className="list-disc list-inside ml-4">
                      <li>Subscribe to event: <strong>invitee.created</strong> (when someone books an appointment)</li>
                      <li>Paste this webhook URL:</li>
                      <div className="bg-gray-100 p-3 rounded-md my-2 flex items-center">
                        <Code className="text-gray-500 mr-2" />
                        <code className="flex-1 text-sm font-mono">{webhookUrl}</code>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  6
                </div>
                <div>
                  <h3 className="font-semibold">Set up your email account</h3>
                  <p className="text-gray-600">
                    For the email notifications to work, you need to update the <code>.env</code> file with your email 
                    credentials. See the server setup guide for details.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Done!</h3>
                  <p className="text-gray-600">
                    Now, when someone schedules an appointment through your Calendly link, 
                    both you and your student will receive an email notification.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
            <div className="flex items-center mb-3">
              <Settings className="text-primary mr-2" />
              <h3 className="font-bold">Email Server Configuration</h3>
            </div>
            <p className="text-gray-600 mb-3">
              For this feature to work, you'll need to add your email credentials to the server's <code>.env</code> file:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>Configure <code>EMAIL_USER</code> with your email address</li>
              <li>
                For Gmail users, set up an <a 
                  href="https://support.google.com/accounts/answer/185833" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  App Password
                </a> and add it as <code>EMAIL_PASS</code>
              </li>
              <li>Restart the server after updating the .env file</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}