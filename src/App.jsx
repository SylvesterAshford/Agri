import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CloudRain, 
  TrendingUp, 
  Users, 
  Smartphone, 
  WifiOff, 
  Sun, 
  AlertTriangle,
  Zap,
  ArrowRight,
  Layers,
  MapPin,
  Menu,
  Search,
  ChevronRight,
  Droplets,
  Wind
} from 'lucide-react';

const AgriShieldCanvas = () => {
  const [activeTab, setActiveTab] = useState('climate');

  // Custom UI Component for the Editorial Mobile Preview
  const MobilePreview = ({ type }) => {
    return (
      <div className="w-[300px] h-[600px] bg-[#1a1c18] rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-[#2e342b]">
        <div className="w-full h-full bg-[#f8faf2] rounded-[2.5rem] overflow-hidden flex flex-col relative font-['Plus_Jakarta_Sans']">
          {/* Notch */}
          <div className="w-32 h-6 bg-[#1a1c18] absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl z-30"></div>
          
          {/* Status Bar */}
          <div className="pt-8 pb-2 px-6 flex justify-between items-center bg-transparent z-20">
            <span className="text-[12px] font-bold text-[#2e342b]">9:41</span>
            <div className="flex gap-1 items-center">
              <WifiOff size={12} className="text-[#5a6156]" />
              <div className="w-5 h-2.5 border border-[#2e342b] rounded-sm relative">
                <div className="absolute left-0.5 top-0.5 bottom-0.5 w-3 bg-[#3c6935] rounded-px"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Content Based on Pillar */}
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {type === 'climate' && (
              <div className="animate-fade-in">
                {/* Header with Location */}
                <div className="px-6 mb-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1 text-[#5a6156] text-[10px] font-bold uppercase tracking-widest">
                      <MapPin size={10} /> Nyaung-U, Mandalay
                    </div>
                    <h1 className="text-2xl font-extrabold text-[#2e342b]">Climate Shield</h1>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ebefe4] flex items-center justify-center text-[#2e342b]">
                    <Search size={18} />
                  </div>
                </div>

                {/* Weather Glass Card */}
                <div className="px-4 mb-6">
                  <div className="bg-gradient-to-br from-[#3c6935] to-[#5a9c4d] rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-sm font-medium opacity-90">Today's Forecast</div>
                      <div className="text-5xl font-bold mt-1">38°C</div>
                      <div className="text-sm mt-1 font-medium italic">High Drought Risk</div>
                      <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-1 text-[10px] bg-white/20 px-2 py-1 rounded-full"><Droplets size={10} /> 12%</div>
                        <div className="flex items-center gap-1 text-[10px] bg-white/20 px-2 py-1 rounded-full"><Wind size={10} /> 8km/h</div>
                      </div>
                    </div>
                    <Sun size={100} className="absolute -right-4 -bottom-4 opacity-20 rotate-12" />
                  </div>
                </div>

                {/* Risk Section */}
                <div className="px-6 space-y-4">
                  <div className="flex justify-between items-end">
                    <h2 className="text-sm font-bold text-[#2e342b] uppercase tracking-wider">Active Threats</h2>
                    <span className="text-[10px] text-[#3c6935] font-bold">View History</span>
                  </div>
                  
                  {/* High Risk Card */}
                  <div className="bg-[#fd795a]/10 border-l-4 border-[#fd795a] rounded-r-xl p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-black text-[#fd795a] uppercase tracking-tighter">Immediate Action</span>
                      <AlertTriangle size={14} className="text-[#fd795a]" />
                    </div>
                    <div className="text-sm font-bold text-[#2e342b]">Dry Spell Warning</div>
                    <p className="text-[10px] text-[#5a6156] mt-1 leading-relaxed">Pulse crops in 3rd stage of growth require immediate mulching.</p>
                  </div>

                  {/* Medium Risk Card */}
                  <div className="bg-[#fbfab5]/40 border-l-4 border-[#6a6b34] rounded-r-xl p-4">
                    <div className="text-[10px] font-black text-[#6a6b34] uppercase tracking-tighter mb-1">Observation Required</div>
                    <div className="text-sm font-bold text-[#2e342b]">Spider Mite Influx</div>
                    <p className="text-[10px] text-[#5a6156] mt-1 leading-relaxed">Humidity levels rising in neighbouring townships.</p>
                  </div>
                </div>
              </div>
            )}

            {type === 'market' && (
              <div className="animate-fade-in">
                <div className="px-6 mb-6">
                  <div className="text-[10px] font-bold text-[#5a6156] uppercase tracking-widest mb-1">Profit Optimization</div>
                  <h1 className="text-2xl font-extrabold text-[#2e342b]">Market Lens</h1>
                </div>

                {/* Price Summary */}
                <div className="px-4 mb-6">
                  <div className="bg-[#ebefe4] rounded-[2rem] p-5 border border-[#e5eade]">
                    <div className="text-[10px] font-bold text-[#5a6156] uppercase mb-3">Green Gram (Mandalay)</div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-black text-[#2e342b]">1,550 <span className="text-sm font-normal text-[#5a6156]">MMK</span></div>
                        <div className="text-[10px] font-bold text-green-600 flex items-center gap-0.5">
                          <TrendingUp size={10} /> +125 this week
                        </div>
                      </div>
                      <div className="bg-[#3c6935] text-white px-3 py-1.5 rounded-full text-[10px] font-bold">HOLD ADVISORY</div>
                    </div>
                  </div>
                </div>

                {/* Comparative Markets */}
                <div className="px-6">
                  <h2 className="text-sm font-bold text-[#2e342b] uppercase tracking-wider mb-4">Nearby Markets</h2>
                  <div className="space-y-3">
                    {[
                      { name: 'Myingyan Hub', price: '1,420', trend: 'up' },
                      { name: 'Pakokku Center', price: '1,380', trend: 'down' },
                      { name: 'Monywa Depot', price: '1,510', trend: 'up' }
                    ].map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-[#ebefe4]">
                        <div>
                          <div className="text-xs font-bold text-[#2e342b]">{m.name}</div>
                          <div className="text-[10px] text-[#5a6156]">Last updated 2h ago</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-[#2e342b]">{m.price} MMK</div>
                          <div className={`text-[10px] font-bold ${m.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                            {m.trend === 'up' ? '↗' : '↘'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {type === 'knowledge' && (
              <div className="animate-fade-in">
                <div className="px-6 mb-6">
                  <div className="text-[10px] font-bold text-[#5a6156] uppercase tracking-widest mb-1">Peer & Expert</div>
                  <h1 className="text-2xl font-extrabold text-[#2e342b]">Knowledge Hub</h1>
                </div>

                {/* Featured Expert */}
                <div className="px-4 mb-6">
                  <div className="bg-[#d6e8cd] rounded-[2rem] p-4 flex gap-4 items-center border border-[#c8dac0]">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                       <Users size={30} className="text-[#3c6935]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-[#2e342b]">Dr. Kyaw Myo</span>
                        <Shield size={10} className="fill-[#3c6935] text-[#3c6935]" />
                      </div>
                      <div className="text-[10px] text-[#3c6935] font-bold">Verified Extension Officer</div>
                      <div className="text-[10px] text-[#5a6156] mt-1 italic">Active now in Nyaung-U</div>
                    </div>
                  </div>
                </div>

                {/* Feed */}
                <div className="px-6 space-y-6">
                  <div className="border-b border-[#ebefe4] pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                      <span className="text-[10px] font-bold text-[#2e342b]">U Win Aung</span>
                      <span className="text-[10px] text-[#5a6156]">• 1h ago</span>
                    </div>
                    <p className="text-xs text-[#2e342b] font-medium leading-relaxed mb-3">Does anyone know why the leaves on my chickpea plants are turning yellow from the bottom?</p>
                    <div className="flex gap-2">
                      <div className="bg-[#ebefe4] text-[#2e342b] px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1">
                        <Users size={10} /> 14 Responses
                      </div>
                      <div className="bg-[#ebefe4] text-[#2e342b] px-3 py-1 rounded-full text-[9px] font-bold">Diseases</div>
                    </div>
                  </div>

                  <div className="border-b border-[#ebefe4] pb-4">
                     <div className="bg-[#f8faf2] border border-[#e5eade] rounded-xl p-3 flex gap-3 items-center">
                        <Zap size={20} className="text-[#3c6935]" />
                        <div className="text-[10px] font-bold text-[#2e342b]">New AI Diagnostic Tool: Identify pests instantly with camera scan.</div>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="h-20 bg-white/80 backdrop-blur-md border-t border-[#ebefe4] flex justify-around items-center px-4">
            <button className={`flex flex-col items-center gap-1 ${type === 'climate' ? 'text-[#3c6935]' : 'text-[#5a6156]'}`}>
              <div className={type === 'climate' ? 'bg-[#bcf0ae] p-2 rounded-xl' : 'p-2'}>
                <Sun size={20} strokeWidth={type === 'climate' ? 3 : 2} />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest">Climate</span>
            </button>
            <button className={`flex flex-col items-center gap-1 ${type === 'market' ? 'text-[#3c6935]' : 'text-[#5a6156]'}`}>
              <div className={type === 'market' ? 'bg-[#bcf0ae] p-2 rounded-xl' : 'p-2'}>
                <TrendingUp size={20} strokeWidth={type === 'market' ? 3 : 2} />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest">Market</span>
            </button>
            <button className={`flex flex-col items-center gap-1 ${type === 'knowledge' ? 'text-[#3c6935]' : 'text-[#5a6156]'}`}>
              <div className={type === 'knowledge' ? 'bg-[#bcf0ae] p-2 rounded-xl' : 'p-2'}>
                <Users size={20} strokeWidth={type === 'knowledge' ? 3 : 2} />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest">Knowledge</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8faf2] font-['Plus_Jakarta_Sans'] text-[#2e342b]">
      {/* Editorial Header */}
      <header className="bg-white border-b border-[#ebefe4] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ebefe4] rounded-l-[10rem] opacity-30 -mr-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#3c6935] text-white p-3 rounded-2xl shadow-xl shadow-[#3c6935]/20">
              <Shield size={32} strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-black tracking-tighter uppercase">AgriShield</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter leading-[1.1] mb-6 max-w-4xl text-[#1a1c18]">
            The Digital Agronomist for <span className="text-[#3c6935]">Myanmar's Dry Zone.</span>
          </h1>
          <p className="text-xl text-[#5a6156] max-w-2xl leading-relaxed font-medium">
            Bridging the gap between unpredictable climate and market volatility through editorial-grade intelligence and an interconnected super-platform.
          </p>
        </div>
      </header>

      {/* The Strategic Argument: Why a Super App? */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[#3c6935] font-black text-sm uppercase tracking-[0.3em] mb-4">The Strategic Logic</div>
            <h2 className="text-4xl font-black text-[#1a1c18] mb-8 leading-tight">
              One Interface.<br />Zero Fragmentation.
            </h2>
            <p className="text-lg text-[#5a6156] mb-8 leading-relaxed">
              The three problems farmers face are deeply interconnected—not separate. A dry spell (Climate) triggers pest outbreaks (Knowledge Gap) forcing early harvest (Market Loss). Solving only one breaks without the others.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-white rounded-[2rem] border border-[#ebefe4] hover:shadow-lg transition-all">
                <div className="bg-[#fd795a] text-white p-3 rounded-2xl shrink-0"><AlertTriangle size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1a1c18]">The Domino Effect</h4>
                  <p className="text-sm text-[#5a6156] mt-1">Climate triggers knowledge needs. Knowledge needs trigger market decisions. AgriShield captures all three in one session.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start p-6 bg-[#ebefe4]/50 rounded-[2rem] border border-transparent">
                <div className="bg-[#3c6935] text-white p-3 rounded-2xl shrink-0"><Zap size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1a1c18]">Frictionless Trust</h4>
                  <p className="text-sm text-[#5a6156] mt-1">Validated by DeHaat in India—consolidated tools increase adoption by 40% compared to fragmented single-use apps.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-[#3c6935] blur-[120px] opacity-10 rounded-full"></div>
             <div className="relative flex justify-center">
                <MobilePreview type="climate" />
                <div className="absolute -bottom-10 -right-4 hidden xl:block animate-bounce">
                   <div className="bg-white shadow-2xl p-4 rounded-2xl border border-[#ebefe4]">
                      <div className="text-[10px] font-black text-[#3c6935] uppercase mb-1">Impact Potential</div>
                      <div className="text-2xl font-black text-[#1a1c18]">+370k MMK</div>
                      <div className="text-[9px] text-[#5a6156]">Avg. income uplift per farmer</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Editorial Content: The Three Pillars */}
      <section className="py-24 bg-[#ebefe4]/40 border-y border-[#ebefe4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl font-black text-[#1a1c18] mb-4">Interconnected Intelligence</h3>
              <p className="text-[#5a6156]">Toggle between modules to see how the editorial design system adapts to each unique farmer need while maintaining a unified core.</p>
            </div>
            <div className="flex gap-2 p-1.5 bg-white rounded-full border border-[#ebefe4] shadow-sm">
              <button 
                onClick={() => setActiveTab('climate')}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'climate' ? 'bg-[#3c6935] text-white shadow-md' : 'text-[#5a6156] hover:bg-gray-50'}`}
              >
                Climate
              </button>
              <button 
                onClick={() => setActiveTab('market')}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'market' ? 'bg-[#3c6935] text-white shadow-md' : 'text-[#5a6156] hover:bg-gray-50'}`}
              >
                Market
              </button>
              <button 
                onClick={() => setActiveTab('knowledge')}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'knowledge' ? 'bg-[#3c6935] text-white shadow-md' : 'text-[#5a6156] hover:bg-gray-50'}`}
              >
                Knowledge
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              {activeTab === 'climate' && (
                <div className="animate-fade-in">
                  <div className="text-xs font-black text-[#3c6935] uppercase tracking-[0.2em] mb-4">Pillar 01</div>
                  <h4 className="text-4xl font-black text-[#1a1c18] mb-6">Climate Shield</h4>
                  <p className="text-[#5a6156] leading-relaxed mb-8">Moving beyond generic forecasts to hyperlocal risk modeling. We don't just tell the weather; we tell the farmer what the weather means for their specific crop stage.</p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white p-4 rounded-2xl border border-[#ebefe4]">
                        <div className="text-lg font-black text-[#3c6935]">14-Day</div>
                        <div className="text-[10px] text-[#5a6156] font-bold uppercase tracking-wider">Predictive Window</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl border border-[#ebefe4]">
                        <div className="text-lg font-black text-[#3c6935]">Offline</div>
                        <div className="text-[10px] text-[#5a6156] font-bold uppercase tracking-wider">Edge-First Data</div>
                     </div>
                  </div>
                </div>
              )}
              {activeTab === 'market' && (
                <div className="animate-fade-in">
                  <div className="text-xs font-black text-[#3c6935] uppercase tracking-[0.2em] mb-4">Pillar 02</div>
                  <h4 className="text-4xl font-black text-[#1a1c18] mb-6">Market Lens</h4>
                  <p className="text-[#5a6156] leading-relaxed mb-8">Eliminating information asymmetry. Farmers gain a bird's-eye view of broker prices across townships, turning price-takers into price-makers.</p>
                  <div className="space-y-4">
                     <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-[#ebefe4]">
                        <div className="bg-[#bcf0ae] p-2 rounded-lg text-[#3c6935]"><TrendingUp size={20}/></div>
                        <span className="text-sm font-bold text-[#1a1c18]">AI Sell/Hold Advisory Engine</span>
                     </div>
                     <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-[#ebefe4]">
                        <div className="bg-[#bcf0ae] p-2 rounded-lg text-[#3c6935]"><Smartphone size={20}/></div>
                        <span className="text-sm font-bold text-[#1a1c18]">Cross-Township Hub Prices</span>
                     </div>
                  </div>
                </div>
              )}
              {activeTab === 'knowledge' && (
                <div className="animate-fade-in">
                  <div className="text-xs font-black text-[#3c6935] uppercase tracking-[0.2em] mb-4">Pillar 03</div>
                  <h4 className="text-4xl font-black text-[#1a1c18] mb-6">Knowledge Hub</h4>
                  <p className="text-[#5a6156] leading-relaxed mb-8">A trusted network where AI diagnostics meet verified human expertise. Unbiased, commercial-free advice that isn't tied to chemical broker sales.</p>
                  <div className="bg-[#3c6935] text-white p-6 rounded-[2rem] shadow-xl">
                     <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">Technology Stack</div>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm font-medium">
                           <div className="w-1.5 h-1.5 bg-[#bcf0ae] rounded-full"></div>
                           TensorFlow Lite On-Device Vision
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium">
                           <div className="w-1.5 h-1.5 bg-[#bcf0ae] rounded-full"></div>
                           Verified Extension Officer Network
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium">
                           <div className="w-1.5 h-1.5 bg-[#bcf0ae] rounded-full"></div>
                           Peer-to-Peer Verified Success Stories
                        </li>
                     </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 flex justify-center">
               <MobilePreview type={activeTab} />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Reality Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-[#1a1c18] rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3c6935] opacity-10 rounded-l-[10rem]"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl font-black mb-8 leading-tight">Built for<br />Myanmar's Reality.</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <WifiOff className="text-[#bcf0ae] shrink-0" size={32} />
                    <div>
                      <h5 className="font-bold text-xl mb-2">Offline-First Core</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">We utilize local data caching and on-device ML because in the field, "Loading..." is a failure. AgriShield works where the signal doesn't.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Layers className="text-[#bcf0ae] shrink-0" size={32} />
                    <div>
                      <h5 className="font-bold text-xl mb-2">Localized UX</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">Built for low-literacy environments with audio playback for all alerts and a visual-first navigation system designed for sun-glare outdoor use.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-8">
                 <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl">
                    <div className="text-sm font-bold text-[#bcf0ae] uppercase tracking-widest mb-2">The Scale Potential</div>
                    <div className="text-5xl font-black mb-4">2.5M</div>
                    <div className="text-sm text-gray-400">Smallholder farmers in the Dry Zone alone ready for digital intervention.</div>
                 </div>
                 <button className="w-full bg-[#bcf0ae] text-[#1a1c18] font-black py-5 rounded-2xl text-lg hover:scale-[1.02] transition-transform active:scale-95">
                    Launch Strategic Pilot
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-[#ebefe4] px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#3c6935]" />
              <span className="font-black text-sm uppercase tracking-tighter">AgriShield Super App</span>
           </div>
           <div className="text-[10px] font-bold text-[#5a6156] uppercase tracking-[0.2em]">
              Hackathon 2026 • AI for Climate-Resilient Agriculture
           </div>
        </div>
      </footer>

      {/* Global CSS for hide scrollbar and animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default AgriShieldCanvas;
