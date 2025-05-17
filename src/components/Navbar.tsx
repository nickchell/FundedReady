
import { motion } from './Motion';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" className="flex items-center space-x-3 group h-16">
            <motion.img
              src="/images/logo.png"
              alt="FundedReady"
              className="h-12 w-12 transition-all duration-300 group-hover:scale-110"
              whileHover={{ rotate: 15 }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FundedReady
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a 
              href="#signup" 
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors"
            >
              Join Waitlist
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
