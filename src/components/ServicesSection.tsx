import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/services';
import { ServiceItem } from '../types';
import { 
  Code2, 
  Workflow, 
  Bot, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(CORE_SERVICES[0].id);

  const activeService = CORE_SERVICES.find((s) => s.id === activeServiceId) || CORE_SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'custom-software':
        return <Code2 className="w-5 h-5" />;
      case 'custom-automations':
        return <Workflow className="w-5 h-5" />;
      case 'ai-agents':
        return <Bot className="w-5 h-5" />;
      case 'enterprise-erp':
        return <LayoutDashboard className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="szolgaltatasok" className="py-24 border-t border-neutral-200/80 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
            01. Fő Szolgáltatások / Vállalati Korszerűsítés
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
            Négy technológiai pillér az önműködő, skálázható működésért.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            Minden vállalat egyedi, a szoftverek többsége viszont merev doboz. Megszüntetjük a kompromisszumokat és olyan egyedi rendszereket építünk, amelyek az Ön cégének növekedési motorjává válnak.
          </p>
        </div>

        {/* Desktop & Tablet: Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CORE_SERVICES.map((service: ServiceItem) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`text-left p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-neutral-900 shadow-sm'
                      : 'bg-white/60 border-neutral-200/90 hover:border-neutral-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {service.index}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-950 font-display">
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-neutral-950 text-white'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {getServiceIcon(service.id)}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 line-clamp-2 pl-7 font-sans">
                    {service.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Interactive Spotlight Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Pillér Részletei · {activeService.index}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display">
                  {activeService.title}
                </h3>
              </div>
              <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-md font-mono hidden sm:inline-block">
                {activeService.badgeText}
              </span>
            </div>

            <p className="text-base text-neutral-700 leading-relaxed mb-8 font-sans">
              {activeService.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4 font-mono">
                Mit szállítunk le konkrétan?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50/70 border border-neutral-200/60 text-xs sm:text-sm text-neutral-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Business Impact Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F6] border border-neutral-200 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1 font-mono uppercase">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Garantált Üzleti Eredmény</span>
              </div>
              <p className="text-sm font-medium text-neutral-700">
                {activeService.businessImpact}
              </p>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
              <div className="text-xs text-neutral-500">
                Kérdése van a megvalósításról? Válaszolunk a konzultáción.
              </div>
              <button
                onClick={() => onSelectService(activeService.title)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-xs"
              >
                <span>Ajánlatkérés erre a pillérre</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
