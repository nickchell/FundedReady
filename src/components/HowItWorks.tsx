import { motion } from './Motion';

export const HowItWorks = () => {
  const features = [
    {
      title: "AI Trading Coach",
      description: "Get personalized trading advice, pattern recognition, and strategy improvements based on your trading history."
    },
    {
      title: "Smart Journal & Feedback",
      description: "Document trades with AI-enhanced analysis, revealing your psychological patterns and trading weaknesses."
    },
    {
      title: "Real-Time News Warnings",
      description: "Receive alerts before major economic events that could impact your positions or violate trading rules."
    },
    {
      title: "Trade Rule Monitor",
      description: "Never break a prop firm rule again with automated monitoring of drawdown limits, lot sizes, and holding periods."
    }
  ];

  const steps = [
    "You log your trades and thoughts in the AI journal",
    "AI analyzes your trading patterns and psychological triggers",
    "Get real-time alerts for news events and rule violations",
    "Receive personalized coaching to improve performance"
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How FundedReady Helps You Win
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI assistant transforms your trading journey from frustration to funded success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
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
                <p className="text-gray-300">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
