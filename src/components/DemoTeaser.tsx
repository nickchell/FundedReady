import React from 'react';
import { Terminal, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from './Motion';

export const DemoTeaser = () => {
  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            See FundedReady.ai in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A glimpse of how our AI assistant transforms your trading experience.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative bg-gray-800 rounded-xl border border-gray-700 shadow-2xl shadow-purple-500/5 overflow-hidden">
            <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">FundedReady.ai Terminal</div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-xs text-green-400">LIVE</div>
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              <div className="flex gap-4 mb-6">
                <div className="min-w-[10rem] bg-gray-900 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-2">ACCOUNTS</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">MyFundedTrader</span>
                      <span className="text-xs text-green-400">ACTIVE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs">FTMO Challenge</span>
                      <span className="text-xs text-amber-400">DAY 8/30</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-900 rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-2">RISK MONITOR</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-400">Daily Drawdown</div>
                      <div className="flex items-center mt-1">
                        <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-xs text-green-400 ml-2">0.7%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Max Drawdown</div>
                      <div className="flex items-center mt-1">
                        <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-xs text-green-400 ml-2">2.5%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Profit Target</div>
                      <div className="flex items-center mt-1">
                        <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-xs text-blue-400 ml-2">6.0%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Trading Days</div>
                      <div className="flex items-center mt-1">
                        <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" style={{width: '27%'}}></div>
                        </div>
                        <span className="text-xs text-amber-400 ml-2">8/30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-5">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Terminal size={14} className="text-cyan-400 mr-2" />
                    <span className="text-cyan-400">AI Assistant</span>
                  </div>
                  <div className="text-xs text-gray-500">Today, 10:32 AM</div>
                </div>
                
                <div className="space-y-4">
                  <div className="typing-animation pl-5 border-l-2 border-gray-700">
                    <span className="text-gray-300">What should I do before Non-Farm Payroll (NFP) tomorrow?</span>
                  </div>
                  
                  <div className="pl-5 border-l-2 border-cyan-600">
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        <span className="text-cyan-400 font-medium">Before NFP, I recommend:</span>
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-gray-300 pl-2">
                        <li>Close all open positions at least 30 minutes before the release</li>
                        <li>Avoid opening new trades until 15-20 minutes after the data</li>
                        <li>Set a maximum risk of 0.5% per trade if you trade during the event</li>
                        <li>Be aware that spreads will widen significantly</li>
                      </ol>
                      <p className="text-gray-300 mt-2">
                        Based on your trading history, NFP has been challenging for you with a 35% win rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-3 -right-3 animate-pulse">
                  <div className="bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-medium px-3 py-1 rounded-full border border-red-500/30 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    LIVE ALERT
                  </div>
                </div>
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-400 font-medium">Critical News Alert:</h4>
                      <p className="text-gray-300 text-sm mt-1">
                        CPI data release in 10 minutes. Expected volatility across all USD pairs.
                        Consider closing positions or setting tighter stops.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};