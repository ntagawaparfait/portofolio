
import React from 'react';
import { SKILLS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Core Competencies</h2>
          <p className="text-slate-600">A blend of technical mastery and interpersonal excellence refined over years of remote collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => {
            const IconComponent = (LucideIcons as any)[skill.icon];
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <span className="text-2xl font-bold text-slate-300 group-hover:text-indigo-100 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.name}</h3>
                
                <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 pt-16 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50">
          <div className="flex items-center justify-center font-bold text-xl">ZENDESK</div>
          <div className="flex items-center justify-center font-bold text-xl">SALESFORCE</div>
          <div className="flex items-center justify-center font-bold text-xl">INTERCOM</div>
          <div className="flex items-center justify-center font-bold text-xl">SLACK</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
