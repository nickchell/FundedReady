import React from 'react';
import { Brain, BookOpen, AlertTriangle, Bell } from 'lucide-react';
import { motion } from './Motion';

const FeatureCard = ({ icon, title, description, iconColor, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-800 transition duration-300"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gray-900/80 ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const Solutions = () => {
  const features = [
    {
      icon: <Brain size={22} />,
      title: "AI Trading Coach",
      description: "Get personalized trading advice, pattern recognition, and strategy improvements based on your trading history.",
      iconColor: "text-cyan-400"
    },
    {
      icon: <BookOpen size={22} />,
      title: "Smart Journal & Feedback",
      description: "Document trades with AI-enhanced analysis, revealing your psychological patterns and trading weaknesses.",
      iconColor: "text-purple-400"
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Real-Time News Warnings",
      description: "Receive alerts before major economic events that could impact your positions or violate trading rules.",
      iconColor: "text-amber-400"
    },
    {
      icon: <Bell size={22} />,
      title: "Trade Rule Monitor",
      description: "Never break a prop firm rule again with automated monitoring of drawdown limits, lot sizes, and holding periods.",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="solutions" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            How FundedReady Helps You Win
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Our AI assistant transforms your trading journey from frustration to funded success.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 overflow-hidden relative"
        >
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-200">How It Works</h3>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <p className="text-gray-300">You log your trades and thoughts in the AI journal</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <p className="text-gray-300">AI analyzes your trading patterns and psychological triggers</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <p className="text-gray-300">Get real-time alerts for news events and rule violations</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <p className="text-gray-300">Receive personalized coaching to improve performance</p>
                </motion.li>
              </ul>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="rounded-lg bg-gray-900 border border-gray-700 p-4 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">FundedReady AI</div>
                </div>
                
                <div className="space-y-3">
                  <div className="typing-animation text-left">
                    <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">
                      <span className="text-cyan-400 font-medium">→ Warning:</span> NFP report coming in 15 minutes. Consider closing open positions.
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded p-3 text-sm text-gray-300">
                    <span className="text-purple-400 font-medium">→ Analysis:</span> Your win rate is 68% on EUR/USD but only 32% on GBP/JPY. Consider focusing on your strength.
                  </div>
                  
                  <div className="animate-pulse bg-red-500/20 border border-red-500/30 rounded p-3 text-sm text-red-300">
                    <span className="text-red-400 font-medium">⚠️ Alert:</span> You're approaching daily drawdown limit (1.4% / 2%). Consider stopping trading for today.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};