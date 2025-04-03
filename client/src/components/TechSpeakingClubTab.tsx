import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Users, Rocket, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Define the form schema
const waitlistFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  profession: z.string().min(2, { message: "Please enter your profession or field." }),
  englishLevel: z.string().min(1, { message: "Please select your English level." }),
  interests: z.string().optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function TechSpeakingClubTab() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Initialize form
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      profession: "",
      englishLevel: "",
      interests: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send the waitlist data to our API endpoint
      const response = await fetch('/api/waitlist-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          program: 'Tech Speaking Club'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit waitlist form');
      }
      
      console.log("Form submitted:", data);
      
      // Show success toast
      toast({
        title: "You've been added to the waitlist!",
        description: "We'll contact you when the Tech Speaking Club has an opening.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later. If the problem persists, contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Card className="shadow-md border-0">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-start">
              <Rocket className="w-10 h-10 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gradient inline-block">Tech Speaking Club</h2>
                <p className="text-gray-600">Improve your English skills in a tech-focused environment</p>
              </div>
            </div>
            <Badge className="bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full px-4 py-1 text-sm font-medium self-start md:self-auto flex items-center">
              <Users className="w-3.5 h-3.5 mr-1" />
              Limited Spots
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-xl font-semibold mb-4">About the Tech Speaking Club</h3>
              <p className="mb-4 text-gray-700">
                Our Tech Speaking Club is designed specifically for professionals in the tech industry who want to improve their English communication skills. Join a community of like-minded individuals in weekly sessions led by specialized instructors.
              </p>
              <p className="mb-4 text-gray-700">
                The club focuses on tech-related vocabulary, presentation skills, job interviews, technical discussions, and networking in English.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Industry-Specific</h4>
                    <p className="text-sm text-gray-600">Tech vocabulary and scenarios</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Small Groups</h4>
                    <p className="text-sm text-gray-600">Maximum 8 participants per club</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Weekly Sessions</h4>
                    <p className="text-sm text-gray-600">Consistent practice and feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Networking</h4>
                    <p className="text-sm text-gray-600">Connect with tech professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-lg p-6 border border-purple-100">
              <h3 className="font-semibold mb-3 flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" /> 
                Club Details
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">2 months</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Meeting days:</span>
                  <span className="font-medium">Mondays & Wednesdays</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Session length:</span>
                  <span className="font-medium">90 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Group size:</span>
                  <span className="font-medium">6-8 people</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">Online (Zoom)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Min. level:</span>
                  <span className="font-medium">Intermediate</span>
                </li>
                <li className="pt-2 border-t border-purple-100 mt-2">
                  <span className="text-primary font-medium block mb-1">Investment:</span>
                  <span className="font-semibold">R$360/month or R$700 paid in advance</span>
                </li>
                <li className="pt-2 border-t border-purple-100 mt-2">
                  <span className="text-primary font-medium block mb-1">Next club starts:</span>
                  <span className="font-semibold">May 15, 2025</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100/50 to-purple-100/50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Join the Waitlist</h3>
            <p className="mb-6 text-gray-700">
              Spots in our Tech Speaking Club are limited to ensure quality interaction. Join our waitlist to be notified when a spot becomes available in the next club session.
            </p>

            {isSubmitted ? (
              <div className="bg-white bg-opacity-70 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">You're on the waitlist!</h4>
                <p className="text-gray-600 mb-4">
                  We've received your information and will contact you when a spot becomes available.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2"
                >
                  Join another waitlist
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profession/Field</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Software Developer, UX Designer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="englishLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>English Level</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select your level</option>
                              <option value="A1-A2">Basic (A1-A2)</option>
                              <option value="B1">Intermediate (B1)</option>
                              <option value="B2">Upper Intermediate (B2)</option>
                              <option value="C1-C2">Advanced (C1-C2)</option>
                              <option value="unknown">I don't know</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What specific topics are you interested in? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="e.g., Technical presentations, Job interviews, Team meetings..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium mb-3">Frequently Asked Questions</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">How much does it cost?</h4>
                <p className="text-sm text-gray-600">The Tech Speaking Club costs R$360 per month for 2 months, or R$700 if paid in advance for the full program (saving R$20).</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm">How often does the club meet?</h4>
                <p className="text-sm text-gray-600">The club meets twice per week, on Mondays and Wednesdays, for 90-minute sessions.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm">What if my English level is lower than Intermediate?</h4>
                <p className="text-sm text-gray-600">We recommend taking individual classes to reach the Intermediate level before joining the club. You can schedule a consultation to discuss your options.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm">Can I join mid-program?</h4>
                <p className="text-sm text-gray-600">Each club runs as a cohort for the full 2 months. New members join at the start of a new club cycle.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}