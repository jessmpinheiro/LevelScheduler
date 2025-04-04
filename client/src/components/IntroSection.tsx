import { Card, CardContent } from "@/components/ui/card";
import { JessLogo } from "./icons/JessLogo";
import { SparkleIcon } from "./icons/SparkleIcon";

export default function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto mb-10">
      <div className="flex justify-center mb-8">
        <JessLogo className="h-24 w-auto" />
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-medium">Let's assess your english level!</h2>
            <SparkleIcon className="w-6 h-6 ml-2 text-primary" />
          </div>
          <p className="mb-4">Our assessment process provides an approximate evaluation of your English proficiency level and allows you to schedule a personalized consultation with a language expert.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start">
              <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">Complete the Assessment</h3>
                <p className="text-gray-600 text-sm">Take our comprehensive English level check form to get an approximate evaluation of your skills.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">Schedule a Free Consultation</h3>
                <p className="text-gray-600 text-sm">Book a free, no-commitment call to get a complete level assessment and personalized recommendations.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
