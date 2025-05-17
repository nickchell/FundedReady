import { motion } from 'framer-motion';
import { Check, Zap, AlertTriangle, Target } from 'lucide-react';
import { ReactNode } from 'react';

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

export const HowItWorks = () => {
  const steps = [
    {
      title: "Log Your Trades Like a Pro",
      description: "Easily log every trade with our intuitive interface. Track entries, exits, and your psychological state.",
      icon: <Check className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "AI Detects Your Weaknesses",
      description: "Our advanced AI analyzes your trading patterns to identify emotional triggers and recurring mistakes.",
      icon: <AlertTriangle className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Get Real-Time Alerts",
      description: "Receive instant notifications for breaking news, economic events, and potential rule violations.",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Improve with Targeted Feedback",
      description: "Get actionable insights and personalized coaching to transform your trading performance.",
      icon: <Target className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Your Path to Funded Success
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your trading with AI-powered insights and real-time guidance
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <span className="text-cyan-400">0{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 text-center"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 text-xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h4 className="text-white font-medium mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
