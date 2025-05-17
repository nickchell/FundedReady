import { Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
export const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
           <motion.img
                         src="/images/logo.png"
                         alt="FundedReady"
                         className="h-12 w-12 transition-all duration-300 group-hover:scale-110"
                         whileHover={{ rotate: 15 }}
                       /> 
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FundedReady
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 flex items-center transition-colors">
              <span className="mr-1">Contact</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; 2025 FundedReady.ai. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};