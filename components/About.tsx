
import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Globe, Award, ExternalLink, Pencil, ChevronRight, Languages } from 'lucide-react';
import { CERTIFICATIONS, PROFILE_PIC } from '../constants';

const STORAGE_KEYS = {
  PROFILE: 'np_portfolio_profile_img',
  UOK: 'np_portfolio_uok_logo',
  CERTS: 'np_portfolio_cert_logos'
};

const About: React.FC = () => {
  const [profileImg, setProfileImg] = useState<string>(PROFILE_PIC);
  const [uokLogo, setUokLogo] = useState<string>("https://upload.wikimedia.org/wikipedia/en/2/23/University_of_Kigali_Logo.png");
  const [certLogos, setCertLogos] = useState<string[]>(CERTIFICATIONS.map(c => c.logo));

  useEffect(() => {
    const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (savedProfile) setProfileImg(savedProfile);
    const savedUok = localStorage.getItem(STORAGE_KEYS.UOK);
    if (savedUok) setUokLogo(savedUok);
    const savedCerts = localStorage.getItem(STORAGE_KEYS.CERTS);
    if (savedCerts) {
      try {
        const parsedCerts = JSON.parse(savedCerts);
        if (Array.isArray(parsedCerts)) setCertLogos(parsedCerts);
      } catch (e) {}
    }
  }, []);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const uokInputRef = useRef<HTMLInputElement>(null);
  const certInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>, 
    setter: (val: string) => void,
    storageKey: string,
    index?: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (typeof index === 'number') {
          setCertLogos(prev => {
            const next = [...prev];
            next[index] = result;
            localStorage.setItem(storageKey, JSON.stringify(next));
            return next;
          });
        } else {
          setter(result);
          localStorage.setItem(storageKey, result);
          if (storageKey === STORAGE_KEYS.PROFILE) {
            window.dispatchEvent(new Event('profileImageUpdated'));
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <input type="file" accept="image/*" className="hidden" ref={profileInputRef} onChange={(e) => handleFileChange(e, setProfileImg, STORAGE_KEYS.PROFILE)} />
      <input type="file" accept="image/*" className="hidden" ref={uokInputRef} onChange={(e) => handleFileChange(e, setUokLogo, STORAGE_KEYS.UOK)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Profile Bio & Portrait */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-white bg-slate-100 aspect-[4/5] shadow-xl">
                <button 
                  onClick={() => profileInputRef.current?.click()}
                  className="absolute inset-0 w-full h-full z-10 group"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur p-4 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform flex items-center space-x-2">
                      <Pencil size={20} className="text-indigo-600" />
                      <span className="text-sm font-bold text-slate-900 pr-2">Change Photo</span>
                    </div>
                  </div>
                </button>
                <img src={profileImg} alt="Ntagawa Parfait" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="p-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Professional Profile</h2>
              <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-indigo-500 pl-4">
                "I am a dedicated Customer Support Specialist based in Rwanda. My mission is to blend technical precision with human empathy."
              </p>
            </div>
          </div>

          {/* Right Side: Key Credentials Dashboard */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* EDUCATION - HIGH VISIBILITY CARD */}
              <div className="relative group bg-indigo-600 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-200 text-white overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <GraduationCap size={160} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20">
                      <GraduationCap size={32} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Academic Foundation</h3>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex items-center space-x-5">
                    <button 
                      onClick={() => uokInputRef.current?.click()}
                      className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl group/uok"
                    >
                      <img src={uokLogo} alt="UoK" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/uok:opacity-100 rounded-2xl flex items-center justify-center transition-opacity">
                        <Pencil size={16} className="text-white" />
                      </div>
                    </button>
                    <div>
                      <p className="text-lg font-bold">University of Kigali</p>
                      <p className="text-indigo-100 text-sm">Bachelor's Degree — Ongoing</p>
                      <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Expected May 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMMUNICATION - HIGH VISIBILITY CARD */}
              <div className="relative group bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 text-white overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute bottom-0 right-0 p-12 opacity-10">
                  <Languages size={160} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-indigo-500 rounded-2xl border border-indigo-400/50">
                      <Globe size={32} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Global Ready</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="font-medium text-slate-300">English</span>
                      <span className="px-4 py-1 bg-indigo-600 text-xs font-bold rounded-full">FLUENT</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span className="font-medium text-slate-300">Kinyarwanda</span>
                      <span className="px-4 py-1 bg-slate-700 text-xs font-bold rounded-full">NATIVE</span>
                    </div>
                    <div className="pt-2 flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                      <span className="mr-2">Location:</span>
                      <span className="text-indigo-400">Rwanda (UTC +2)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CERTIFICATES - FULL WIDTH HIGH VISIBILITY WALL */}
              <div className="md:col-span-2 bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-white text-indigo-600 rounded-3xl shadow-lg">
                      <Award size={36} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Professional Certificates</h3>
                      <p className="text-slate-500 font-medium">Verified credentials from world-class institutions</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-2xl text-xs font-bold uppercase tracking-widest">
                    Scroll for details
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="relative group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-500">
                      <input 
                        type="file" 
                        accept="image/*"
                        className="hidden"
                        ref={el => certInputRefs.current[idx] = el}
                        onChange={(e) => handleFileChange(e, () => {}, STORAGE_KEYS.CERTS, idx)}
                      />
                      <div className="flex items-start space-x-5">
                        <button 
                          onClick={() => certInputRefs.current[idx]?.click()}
                          className="relative flex-shrink-0 w-20 h-20 bg-slate-50 rounded-2xl p-3 border border-slate-100 group-hover:bg-indigo-50 transition-colors overflow-hidden"
                        >
                          <img src={certLogos[idx]} alt={cert.institution} className="w-full h-full object-contain" />
                          <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <Pencil size={20} className="text-white" />
                          </div>
                        </button>
                        <div className="flex-1 min-w-0 py-1">
                          <h4 className="text-lg font-bold text-slate-900 leading-tight mb-1 truncate">{cert.name}</h4>
                          <p className="text-sm font-bold text-indigo-600 mb-3">{cert.institution}</p>
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest"
                          >
                            View Credential <ExternalLink size={12} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
