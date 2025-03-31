import { JessLogo } from "./icons/JessLogo";

export default function Footer() {
  return (
    <footer className="bg-gradient-primary text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <JessLogo className="w-20 h-10" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Jessica's English Assessment Service. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
