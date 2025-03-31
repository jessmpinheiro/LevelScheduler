export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} English Assessment Service. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
