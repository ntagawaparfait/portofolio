
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-serif font-bold text-indigo-900 tracking-tight">NP.</span>
            <p className="mt-2 text-sm text-slate-500">© {new Date().getFullYear()} Ntagawa Parfait. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Success Stories</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-slate-500">
            Crafted with passion in Rwanda.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
