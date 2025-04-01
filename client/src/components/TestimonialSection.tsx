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
    name: "Amanda Carvalho",
    progress: "Intermediate to Advanced"
  },
  {
    id: 2,
    rating: 5,
    text: "The scheduling system was easy to use and the consultation provided clear guidance on my English learning path.",
    name: "Ravel Alves",
    progress: "Beginner to Intermediate"
  }
];

// Testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border border-gray-200 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <div className="text-[#8e2de2] flex">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className="h-5 w-5" 
                fill={i < testimonial.rating ? "#8e2de2" : "none"} 
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3 text-white">
            <User className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm">{testimonial.name}</p>
            <p className="text-xs text-primary">{testimonial.progress}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialSection() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gradient inline-block">What Our Students Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Hear from students who have improved their English skills through our assessment and consultation services.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
