import { Mail, Phone } from "lucide-react";
import { JessLogo } from "./icons/JessLogo";
import { SparkleIcon } from "./icons/SparkleIcon";

export default function Header() {
  return (
    <header className="bg-gradient-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white flex items-center">
                English Assessment
                <SparkleIcon className="w-5 h-5 ml-2 text-white" />
              </h1>
              <p className="text-white/80 mt-1 ml-2">Check your level and schedule a consultation</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-5 w-5 text-white" />
            <a href="mailto:jessmpinheiro@gmail.com" className="text-white hover:text-white/80">jessmpinheiro@gmail.com</a>
            <span className="hidden md:inline text-white/80">|</span>
            <span className="hidden md:flex items-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <a href="tel:+5588993691238" className="text-white hover:text-white/80">+55 (88) 9 9369-1238</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
