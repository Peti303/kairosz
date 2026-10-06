import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Folyamataudit & Szűk Keresztmetszet Elemzés',
    timeframe: '1. Hét · 45 perces mélyinterjú',
    description:
      'Feltérképezzük a jelenlegi szoftverkörnyezetet, a manuális munkaidő-veszteségeket és az emberi hibákból eredő veszteségeket. Kiszámoljuk a pontos megtérülési potenciált.',
    deliverable: 'Részletes Modernizációs Audit Riport & Konkrét ROI Becslés'
  },
  {
    step: '02',
    title: 'Működő Prototípus 10 Nap Alatt',
    timeframe: '2-3. Hét · Agilis prototipizálás',
    description:
      'Nem hónapokig tartó elméleti terveket készítünk: 10 munkanapon belül egy működő, tesztelhető prototípust szállítunk a cég legfájóbb szűk keresztmetszetére.',
    deliverable: 'Működő egyedi szoftvermodul vagy AI ügynök tesztkörnyezetben'
  },
  {
    step: '03',
    title: 'Rendszerintegráció & Csapat Betanítás',
    timeframe: '4-5. Hét · Zökkenőmentes átállás',
    description:
      'Összekötjük az új architektúrát a meglévő rendszerekkel (számlázó, CRM, naptár, ERP). Betanítjuk a kulcsembereket – 0 kieső munkanap a mindennapi működésben.',
    deliverable: 'Élesített vállalati rendszer, magyar nyelvű videós tudástár'
  },
  {
    step: '04',
    title: 'Folyamatos ROI Monitorozás & Skálázás',
    timeframe: 'Folyamatos stratégiai partnerség',
    description:
      'Nem hagyjuk magára a bevezetés után. Valós idejű KPI dashboardon követjük a felszabadult munkaórákat, a konverziókat és a megtakarítást, folyamatosan finomhangolva az AI ágenseket.',
    deliverable: 'Havi megtakarítási kimutatás, dedikált fejlesztői rendelkezésre állás'
  }
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="folyamat" className="py-24 border-t border-neutral-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
            06. Transzparens Megvalósítás / Módszertan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
            4 lépés a manuális káoszból az önműködő vállalati rendszerekig.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            Kiszámítható, ellenőrzött mérföldkövek. Nincsenek elszálló határidők, nincsenek rejtett költségek – kizárólag a céges hatékonyságra fókuszáló mérnöki fegyelem.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-display text-neutral-950">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-950 font-display mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Kézzelfogható Eredmény:
                </span>
                <div className="flex items-start gap-1.5 text-xs font-medium text-neutral-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <span>Kezdje az 1. lépéssel: 30 Perces Folyamataudit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
