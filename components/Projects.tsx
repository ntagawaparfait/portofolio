
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-slate-600">Real-world examples of how I've optimized support workflows and improved customer retention.</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Strategy</button>
            <button className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Metrics</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-indigo-600 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center p-4 bg-indigo-50 rounded-2xl mb-6">
                  <TrendingUp className="text-indigo-600 mr-3" size={20} />
                  <span className="text-sm font-bold text-slate-800">{project.impact}</span>
                </div>
                
                <button className="flex items-center text-indigo-600 font-bold text-sm group/btn">
                  Learn Details 
                  <ExternalLink size={16} className="ml-2 opacity-0 group-hover/btn:opacity-100 transform translate-x-0 group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
