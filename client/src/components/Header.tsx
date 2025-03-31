import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-white">English Level Assessment</h1>
            <p className="text-white/80 mt-1">Check your level and schedule a consultation</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-5 w-5 text-white" />
            <a href="mailto:jessmpinheiro@gmail.com" className="text-white hover:text-white/80">jessmpinheiro@gmail.com</a>
            <span className="hidden md:inline text-white/80">|</span>
            <span className="hidden md:flex items-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <a href="tel:+11234567890" className="text-white hover:text-white/80">+1 (123) 456-7890</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
