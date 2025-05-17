import React from 'react';
import { motion } from './Motion';
import { Users, TrendingUp, Award } from 'lucide-react';

const Testimonial = ({ quote, name, title, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="text-gray-200 font-medium">{name}</div>
          <div className="text-sm text-gray-400">{title}</div>
        </div>
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-gray-700 mx-auto flex items-center justify-center text-cyan-400 mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
};

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "This AI made me realize I was gambling, not trading. I passed my second challenge after implementing the personalized plan it created for me.",
      name: "James M.",
      title: "FTMO Trader"
    },
    {
      quote: "The news alerts have saved me from at least 3 major drawdowns. Worth every penny just for that feature alone.",
      name: "Sarah K.",
      title: "MyFundedTrader"
    },
    {
      quote: "FundedReady identified my pattern of revenge trading immediately and helped me create rules to prevent it. Game changer.",
      name: "Michael D.",
      title: "Prop Firm Trader"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Trusted by Serious Traders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Join our growing community of dedicated traders achieving funded success.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard 
            icon={<Users size={24} />}
            value="230+"
            label="Beta Testers"
            delay={0}
          />
          <StatCard 
            icon={<TrendingUp size={24} />}
            value="72%"
            label="Pass Rate Increase"
            delay={0.1}
          />
          <StatCard 
            icon={<Award size={24} />}
            value="45+"
            label="Traders Funded"
            delay={0.2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};