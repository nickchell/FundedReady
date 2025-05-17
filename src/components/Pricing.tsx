import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from './Motion';

export const Pricing = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Early Access Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Lock in lifetime access at our lowest price ever – only available for the first 500 users.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden shadow-xl">
          <div className="md:w-1/2 p-8 md:border-r border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-200">Plan Features</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-300">Free Beta Access</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">Basic AI trading analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">Manual trading journal</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">Standard economic calendar</span>
                  </li>
                  <li className="flex items-start">
                    <X size={18} className="text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">Advanced AI trading coach</span>
                  </li>
                  <li className="flex items-start">
                    <X size={18} className="text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-400">Real-time rule monitoring</span>
                  </li>
                </ul>
                
                <a 
                  href="#signup"
                  className="mt-6 inline-block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Join the waitlist →
                </a>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-300 flex items-center">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Lifetime Access</span>
                  <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-cyan-800 to-blue-800 text-cyan-200 rounded-full">BEST VALUE</span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-cyan-300 font-medium">Everything in Free Beta</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-cyan-300 font-medium">Advanced AI trading coach</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-cyan-300 font-medium">Real-time news & impact alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-cyan-300 font-medium">Rule violation monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-cyan-300 font-medium">Private Discord community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 bg-gray-800/90">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-1 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur-lg opacity-50"></div>
              
              <div className="relative h-full rounded-lg bg-gray-900/80 p-6 border border-gray-700 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0">
                  <div className="bg-cyan-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-900">
                    LIMITED TIME
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    🔒 Lifetime Access
                  </h4>
                  <p className="text-gray-400">One-time payment, unlimited value</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="text-3xl md:text-4xl font-bold text-white">$49</div>
                    <div className="ml-2 text-sm text-gray-400 line-through">$299</div>
                    <div className="ml-2 text-sm text-green-400 font-medium">Save 83%</div>
                  </div>
                  <div className="text-sm text-gray-400">One-time payment. No subscription fees.</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Lifetime access to all features</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Future updates included</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Private Discord community</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                    <span>Early access to mobile app</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <div className="text-green-400">324 / 500 spots remaining</div>
                    <div className="text-gray-400">Limited availability</div>
                  </div>
                </div>
                
                <motion.a
                  href="#signup"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative block w-full py-3 px-4 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/20 group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Lifetime Access Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span 
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-600 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};