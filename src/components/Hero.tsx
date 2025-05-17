import { useState } from 'react';
import { Sparkles, ArrowRight, Brain, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypewriterEffect } from './TypewriterEffect';

const phrases = [
  'overtrading, failed challenges, rule violations and emotional trading',
  
 
 
];

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-gray-800/80 text-cyan-400 border border-cyan-400/20 mb-2">
              <Sparkles size={16} className="mr-2" />
              <span>Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            Funded Traders Aren’t Lucky — They’re Ready.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg">
              <span className="text-white font-medium">From</span> <TypewriterEffect phrases={phrases} />
              <br />
              <span className="text-white font-medium">to</span> laser-focused trades and real funding. 
              <span className="text-cyan-400 font-medium"> FundedReady</span> guides you there.
            </p>
            
            <div className="pt-2 space-y-4">
              <motion.a
                href="#pricing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative block w-full sm:w-auto sm:inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-lg shadow-sky-500/20 group"
              >
                <div className="relative z-10">
                  <div className="flex items-center">
                    Get Lifetime Access — $49
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <span 
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-600 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                />
              </motion.a>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                <a href="#signup" className="text-sm hover:text-cyan-400 transition-colors">
                  or join the free beta waitlist
                </a>
                <ArrowRight size={14} className="text-gray-600" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <p className="text-sm text-purple-300 font-medium">
                Launch deal: Lifetime access for first 500 users only
              </p>
              <motion.span 
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-900/30 text-red-300 border border-red-500/30 whitespace-nowrap"
                animate={{
                  boxShadow: [
                    '0 0 3px rgba(239, 68, 68, 0.4)',
                    '0 0 6px rgba(239, 68, 68, 0.6)',
                    '0 0 3px rgba(239, 68, 68, 0.4)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                349/500 spots left!
              </motion.span>
            </div>
          </motion.div>
          
          <div className="relative order-first md:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-w-5 aspect-h-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gray-800/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="text-cyan-400 mb-4 flex justify-between items-center">
                      <Brain size={28} />
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    
                    <div className="font-mono text-sm text-gray-400 mb-2">AI Trading Assistant</div>
                    
                    <div className="flex flex-col space-y-4 mb-auto">
                      <div className="typing-animation">
                        <span className="text-gray-300">Analyzing your last 5 trades...</span>
                      </div>
                      
                      <div className="bg-gray-700/50 p-3 rounded-lg">
                        <p className="text-cyan-300 text-sm">
                          I've detected a pattern: You're entering trades too early before confirmation. Wait for the second candle close.
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <LineChart size={16} className="text-purple-400" />
                        <span className="text-sm text-purple-300">Win rate would increase by ~23%</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-700 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">Trade Advisor</div>
                        <motion.div 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-xs text-cyan-400"
                        >
                          AI processing...
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
            />
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};