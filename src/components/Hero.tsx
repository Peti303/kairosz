import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Clean unboxed editorial kicker without pill box */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-6 font-mono"
            >
              <span>Vállalati Rendszerépítés & Korszerűsítés</span>
              <span aria-hidden="true">/</span>
              <span>Beszállítófüggetlen Architektúra</span>
            </motion.div>

            {/* Headline with text-wrap: balance */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 font-display leading-[1.08] text-balance mb-6"
            >
              Építsen önműködő vállalatot. Személyre szabott szoftverek és autonóm AI munkatársak.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-8 font-sans font-normal"
            >
              A Kairosz az a stratégiai partner, amely a dobozos kompromisszumok helyett az Ön üzleti modelljére tervezi meg a belső szoftvereket, munkafolyamat-automatizmusokat és AI ügynököket. Kevesebb manuális hiba, felszabadult munkaidő, exponenciális kapacitás.
            </motion.p>

            {/* Conversion Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.99] transition-all shadow-md group whitespace-nowrap cursor-pointer"
              >
                <span>30 Perces Korszerűsítési Audit Kérése</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#szolgaltatasok"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-lg transition-colors border border-neutral-300/80 bg-white/60 backdrop-blur-xs whitespace-nowrap"
              >
                <span>Szolgáltatások Megtekintése</span>
              </a>
            </motion.div>

            {/* Adjacency Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200/90 w-full"
            >
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">10 napon belüli működő prototípus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-neutral-900 shrink-0" />
                <span className="font-medium">100%-ban saját tulajdonú forráskód</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-medium">Mérhető, garantált ROI mutatók</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Focal Carrier - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/src/assets/images/hero_modern_architecture_1791025003968.jpg"
                alt="Kairosz minimalista modern építészeti tér és technológiai fókusz"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-wider font-mono text-neutral-300 mb-1">
                  Korszerű Vállalati Architektúra
                </div>
                <div className="text-lg font-bold font-display leading-snug">
                  Kairosz — A döntő pillanat a cége skálázásához.
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  Egyedi szoftverek · Intelligens munkafolyamatok · Dedikált AI ügynökök
                </div>
              </div>
            </div>

            {/* Quick floating outcome card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-xl p-4 shadow-lg hidden sm:block max-w-[260px]">
              <div className="text-xs text-neutral-500 font-medium mb-1">Átlagos hatékonyságnövekedés</div>
              <div className="text-2xl font-bold text-neutral-950 font-display tabular-nums">+42.6%</div>
              <div className="text-[11px] text-neutral-500 mt-1">
                A manuális adatmozgatási órák csökkentése mellett.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
