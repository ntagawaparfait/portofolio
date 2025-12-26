
import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState('submitting');

    // Extract form data
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const topic = formData.get('topic') as string;
    const message = formData.get('message') as string;

    // Format the WhatsApp message
    const whatsappMessage = `Hello Ntagawa! 👋\n\nMy name is *${name}* (${email}).\nI'm reaching out regarding: *${topic}*.\n\n*Message:*\n${message}`;
    
    // WhatsApp number in international format (Rwanda: 250)
    const phoneNumber = "250782315242";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate a brief loading state for better UX before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[3rem] overflow-hidden shadow-2xl border border-indigo-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-indigo-600 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-white leading-tight">
                  Let's Elevate Your <span className="text-indigo-200">Support Experience.</span>
                </h2>
                <p className="text-indigo-100 mb-12 text-lg">
                  Ready to add a dedicated, empathetic professional to your team? Let's discuss how I can help streamline your customer interactions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-indigo-300 font-bold">Email Me</p>
                      <p className="text-lg">ntagawaparfait123@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-indigo-300 font-bold">Call / WhatsApp</p>
                      <p className="text-lg">0782315242</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10 flex space-x-6">
                <a href="#" className="hover:text-indigo-200 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-indigo-200 transition-colors">Upwork</a>
                <a href="#" className="hover:text-indigo-200 transition-colors">Twitter</a>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-white">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Redirected to WhatsApp!</h3>
                  <p className="text-slate-600 max-w-xs mx-auto">
                    Your message details have been formatted. Please hit 'Send' in the WhatsApp window to finish.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-indigo-600 font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        name="name"
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Topic</label>
                    <select 
                      name="topic"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                    >
                      <option>Hiring Opportunity</option>
                      <option>Project Consultation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      placeholder="How can I help your customers?"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transform active:scale-[0.98] transition-all flex items-center justify-center space-x-3"
                  >
                    {formState === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Connect via WhatsApp</span>
                        <MessageSquare size={20} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 font-medium">
                    This form opens a pre-filled chat directly with Ntagawa Parfait.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
