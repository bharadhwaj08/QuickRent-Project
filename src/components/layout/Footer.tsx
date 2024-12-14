import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">QuickRent</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 QuickRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}