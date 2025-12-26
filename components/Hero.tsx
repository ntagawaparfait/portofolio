
import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PROFILE_PIC } from '../constants';

const Hero: React.FC = () => {
  const [profileImg, setProfileImg] = useState<string>(PROFILE_PIC);

  // Function to load image from storage
  const loadSavedProfile = () => {
    const saved = localStorage.getItem('np_portfolio_profile_img');
    if (saved) setProfileImg(saved);
  };

  useEffect(() => {
    loadSavedProfile();

    // Listen for updates from the About component
    window.addEventListener('profileImageUpdated', loadSavedProfile);
    return () => window.removeEventListener('profileImageUpdated', loadSavedProfile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full lg:w-1/2 h-full bg-indigo-50/50 skew-x-12 transform lg:translate-x-20"></div>
      <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Remote Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
              Excellence in Every <span className="text-indigo-600 italic">Interaction.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              I'm Ntagawa Parfait, a professional Remote Chat Support Agent dedicated to resolving complex issues with empathy and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
              >
                View Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                Let's Talk
              </a>
            </div>

            <div className="pt-8 flex items-center space-x-8 border-t border-slate-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">2+</p>
                <p className="text-sm text-slate-500">Years Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500">Avg. CSAT</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">5k+</p>
                <p className="text-sm text-slate-500">Resolved</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 max-w-md mx-auto lg:max-w-none">
              <img 
                src={profileImg} 
                alt="Ntagawa Parfait Professional Portrait" 
                className="w-full h-[400px] lg:h-[600px] object-cover hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply"></div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center space-x-4 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Fast Response</p>
                <p className="text-xs text-slate-500">&lt; 1 min average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
