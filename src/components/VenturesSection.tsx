import React, { useState } from 'react';
import { VENTURES } from '../data/ventures';
import { VentureItem } from '../types';
import { ArrowUpRight, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface VenturesSectionProps {
  onOpenAudit: (subject?: string) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ onOpenAudit }) => {
  const [selectedVentureId, setSelectedVentureId] = useState<string>(VENTURES[0].id);

  const currentVenture = VENTURES.find((v) => v.id === selectedVentureId) || VENTURES[0];

  return (
    <section id="portfolio" className="py-24 border-t border-neutral-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Sub-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
              02. A Kairosz Ökoszisztéma / Bizalmi Portfólió
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
              Nem elméletet tanítunk. Saját működő vállalkozásokat építünk és automatizálunk.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
              A Kairosz az az ernyőszervezet és technológiai műhely, amely alatt több dedikált piaci márka is működik. Ezek az élő bizonyítékai annak, hogy megoldásaink a legkülönbözőbb szegmensekben is kimagasló üzleti eredményeket szállítanak.
            </p>
          </div>

          {/* Quick trust callout */}
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/90 text-xs text-neutral-600 max-w-xs shrink-0 font-sans">
            <span className="font-semibold text-neutral-900 block mb-1">
              Piaci Validáció Garancia:
            </span>
            Ugyanazt a csúcstechnológiát és automatizációs infrastruktúrát kapja, amit saját milliós forgalmú cégeinkben napi szinten futtatunk.
          </div>
        </div>

        {/* Venture Selector Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-neutral-200 pb-4">
          {VENTURES.map((v) => {
            const isActive = v.id === selectedVentureId;
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVentureId(v.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70'
                }`}
              >
                <span>{v.name}</span>
                <span className="text-xs opacity-70 ml-2 hidden sm:inline">
                  — {v.id === 'dentascale' ? 'Egészségügyi AI' : v.id === 'cinesites' ? 'Cinematikus Web' : 'Hibrid Média'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Venture Showcase Card */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media - 5 Cols */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-neutral-100">
              <img
                src={currentVenture.image}
                alt={currentVenture.altText}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  {currentVenture.category}
                </div>
                <div className="text-xl font-bold font-display mt-0.5">
                  {currentVenture.name}
                </div>
              </div>
            </div>

            {/* Description & Proof Metrics - 7 Cols */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Ökoszisztéma Tag
                  </span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-xs font-medium text-emerald-700">
                    Aktív Piaci Működés
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 font-display mb-3">
                  {currentVenture.tagline}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-sans">
                  {currentVenture.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Kulcsfontosságú Képességek & Működés
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentVenture.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 font-medium"
                      >
                        <CheckCircle className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantitative Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-neutral-200/90 mb-8">
                  {currentVenture.metrics.map((m, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <div className="text-lg sm:text-2xl font-bold text-neutral-950 font-display tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-500 leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Footer for this venture */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                <div className="text-xs text-neutral-500">
                  Hasonló rendszert szeretne a saját vállalkozásába?
                </div>
                <button
                  onClick={() => onOpenAudit(`Érdeklődés: ${currentVenture.name} jellegű rendszer / technológia`)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-xs"
                >
                  <span>Konzultáció igénylése erre a modellre</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 mini cards for quick overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-xl bg-[#FAF9F6] border border-neutral-200/90">
            <div className="text-xs font-mono text-neutral-400 mb-1">01 / Dentascale</div>
            <div className="text-base font-bold text-neutral-950 mb-2 font-display">Dentascale</div>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Egészségügyi és fogorvosi rendelők recepcióját és páciensfoglalásait automatizáló dedikált szoftver és AI asszisztens.
            </p>
            <div className="text-xs font-semibold text-neutral-900 flex items-center gap-1">
              <span>0% elveszett hívás</span>
              <span className="text-neutral-400">·</span>
              <span>24/7 AI recepció</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FAF9F6] border border-neutral-200/90">
            <div className="text-xs font-mono text-neutral-400 mb-1">02 / Cinesites</div>
            <div className="text-base font-bold text-neutral-950 mb-2 font-display">Cinesites</div>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Cinematikus, rendkívül animált, filmszerű prémium weboldalak és digitális élmények presztízs márkáknak.
            </p>
            <div className="text-xs font-semibold text-neutral-900 flex items-center gap-1">
              <span>Awwwards szint</span>
              <span className="text-neutral-400">·</span>
              <span>Immerszív élmény</span>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FAF9F6] border border-neutral-200/90">
            <div className="text-xs font-mono text-neutral-400 mb-1">03 / Universy</div>
            <div className="text-base font-bold text-neutral-950 mb-2 font-display">Universy</div>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Online marketing és social tartalomgyártás: valós telephelyi kamerás és gimbálos forgatás softboxokkal összeolvasztva generatív AI reklámokkal és fotózással.
            </p>
            <div className="text-xs font-semibold text-neutral-900 flex items-center gap-1">
              <span>Élő stáb + AI</span>
              <span className="text-neutral-400">·</span>
              <span>48 órás átfutás</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
