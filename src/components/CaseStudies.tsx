import React from 'react';
import { CASE_STUDIES } from '../data/testimonials';
import { Quote, TrendingUp } from 'lucide-react';

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenAudit }) => {
  return (
    <section id="eredmenyek" className="py-24 border-t border-neutral-200/80 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
              05. Valós Eredmények / Esettanulmányok
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
              Mérhető számok, ellenőrizhető üzleti transzformációk.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
              Nem homályos ígéretekkel dolgozunk. Partnereinknél a rendszerátadás pillanatától pontos mérőszámokkal követjük a megtakarított munkaórákat és a többletbevételt.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 max-w-xs shrink-0 font-sans shadow-2xs">
            <div className="flex items-center gap-1.5 text-neutral-950 font-semibold mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Garantált Átláthatóság</span>
            </div>
            Minden rendszerünk valós idejű KPI dashboarddal indul, így azonnal látja a beavatkozás pénzügyi hatását.
          </div>
        </div>

        {/* 3 Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {study.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded">
                    Auditált Eredmény
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 font-display mb-3">
                  {study.client}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block mb-1">
                      Kihívás a beavatkozás előtt:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block mb-1">
                      Kairosz Megoldás:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-neutral-200/80 mb-6">
                  {study.results.map((r, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base sm:text-lg font-bold text-neutral-950 font-display tabular-nums">
                        {r.metric}
                      </div>
                      <div className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributable Quote */}
              <div className="pt-6 border-t border-neutral-100">
                <Quote className="w-5 h-5 text-neutral-300 mb-2" />
                <p className="text-xs text-neutral-700 italic mb-3">
                  "{study.quote.text}"
                </p>
                <div className="text-xs font-bold text-neutral-950">
                  {study.quote.author}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {study.quote.role} · {study.client}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action bar below proof */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-display mb-1">
              Kíváncsi, mekkora tartalék van a saját vállalkozásában?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Egyetlen 30 perces audit során feltárjuk a legköltségesebb szűk keresztmetszeteit.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Saját Elemzés Igénylése
          </button>
        </div>
      </div>
    </section>
  );
};
