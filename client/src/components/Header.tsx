import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-medium text-primary">English Level Assessment</h1>
            <p className="text-gray-600 mt-1">Check your level and schedule a consultation</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:contact@example.com" className="hover:text-primary">contact@example.com</a>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+11234567890" className="hover:text-primary">+1 (123) 456-7890</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
