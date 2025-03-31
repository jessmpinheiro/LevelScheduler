import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

// Testimonial type definition
interface Testimonial {
  id: number;
  rating: number;
  text: string;
  name: string;
  progress: string;
}

// Sample testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "The assessment was very accurate and the consultation helped me identify the areas I need to focus on. Highly recommended!",
    name: "Sarah Johnson",
    progress: "Intermediate to Advanced"
  },
  {
    id: 2,
    rating: 5,
    text: "The scheduling system was easy to use and the consultation provided clear guidance on my English learning path.",
    name: "Miguel Rodriguez",
    progress: "Beginner to Intermediate"
  }
];

// Testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <div className="text-[#FBBC05] flex">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4" 
                fill={i < testimonial.rating ? "#FBBC05" : "none"} 
              />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-3">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
            <User className="h-4 w-4" />
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.progress}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialSection() {
  return (
    <section className="max-w-4xl mx-auto mt-10">
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-2xl font-medium mb-6">What Our Students Say</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
