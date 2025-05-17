import React from 'react';
import { AlertTriangle, TrendingDown, Brain, Zap } from 'lucide-react';
import { motion } from './Motion';

const PainPoint = ({ icon, title, stat, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition duration-300"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gray-900/80 text-red-400`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
        {stat}
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const PainPoints = () => {
  const painPoints = [
    {
      icon: <TrendingDown size={22} />,
      title: "High Failure Rate",
      stat: "90%",
      description: "of traders fail funded challenges due to emotional decisions and lacking a proper trading system."
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Risk Rule Violations",
      stat: "73%",
      description: "of rule violations occur in the first 2 hours of trading – breaking daily loss limits before lunch."
    },
    {
      icon: <Zap size={22} />,
      title: "News Event Wipeouts",
      stat: "68%",
      description: "of funded accounts are lost during high-impact news events without proper risk management."
    },
    {
      icon: <Brain size={22} />,
      title: "Trading Psychology",
      stat: "82%",
      description: "of traders cite psychology, not strategy, as their primary challenge to consistent profitability."
    }
  ];

  return (
    <section id="pain-points" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Why Most Traders Fail
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The path to funded trading is littered with preventable mistakes. Let AI guide you around them.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <PainPoint 
              key={index}
              icon={point.icon}
              title={point.title}
              stat={point.stat}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};