import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { motion } from './Motion';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

interface FormState {
  name: string;
  email: string;
  contact: string;
  isLifetimeAccess: boolean;
}

export const SignupForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    contact: '',
    isLifetimeAccess: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_users')
        .insert([
          {
            name: formState.name,
            email: formState.email,
            contact: formState.contact || null,
            is_lifetime_access: formState.isLifetimeAccess
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success('Successfully joined the waitlist!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-20 relative">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Become Funded with FundedReady.ai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Join the waitlist for early access. Limited spots available.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-xl">
            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-1">
                      Telegram or Discord (optional)
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formState.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="@username"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isLifetimeAccess"
                      name="isLifetimeAccess"
                      checked={formState.isLifetimeAccess}
                      onChange={(e) => setFormState(prev => ({ ...prev, isLifetimeAccess: e.target.checked }))}
                      className="h-4 w-4 rounded border-gray-700 text-cyan-500 focus:ring-cyan-500 bg-gray-900"
                    />
                    <label htmlFor="isLifetimeAccess" className="ml-2 block text-sm text-gray-300">
                      I'm interested in lifetime access ($49)
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-lg shadow-sky-500/20 hover:from-sky-500 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    We'll notify you when early access is available.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <Check size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">You're on the list!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for joining our waitlist. We'll be in touch soon when early access is available.
                  </p>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-cyan-400">
                      Check your email for confirmation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};