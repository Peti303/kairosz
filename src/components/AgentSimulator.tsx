import React, { useState } from 'react';
import { Bot, Play, CheckCircle2, RefreshCw, FileText, Calendar, Database, Send, Zap } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  category: string;
  description: string;
  steps: {
    title: string;
    description: string;
    system: string;
    duration: string;
    icon: string;
  }[];
  humanTime: string;
  aiTime: string;
  outcome: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'b2b-lead',
    name: 'B2B Érdeklődésből 90 Másodperces Ajánlat',
    category: 'Értékesítés & Ügyfélkezelés',
    description: 'Egy érdeklődő lead érkezik a weboldalon éjjel 23:40-kor egyedi specifikációval.',
    steps: [
      {
        title: '01. Inbound Esemény és Adatkinyerés',
        description: 'Az AI ügynök feldolgozza a lead űrlapot és az opcionálisan csatolt PDF specifikációt.',
        system: 'Kairosz Lead Engine',
        duration: '0.8 mp',
        icon: 'FileText'
      },
      {
        title: '02. Árkalkuláció és Készlet-ellenőrzés',
        description: 'Lekérdezi az egyedi ERP árazási táblákat és a gyártási/szállítási kapacitásokat.',
        system: 'Központi ERP Rendszer',
        duration: '1.4 mp',
        icon: 'Database'
      },
      {
        title: '03. Személyre Szabott PDF Ajánlat Generálása',
        description: 'Összeállítja a cég arculatára illeszkedő, tételes árajánlatot és előkészíti a CRM-ben.',
        system: 'Autonóm AI Ügynök',
        duration: '2.1 mp',
        icon: 'Bot'
      },
      {
        title: '04. Ügyfél E-mail + Vezetői Slack/SMS Értesítés',
        description: 'Kiküldi az ajánlatot naptár-időpontfoglaló linkkel, és értesíti az értékesítési vezetőt.',
        system: 'Automatizációs Lánc',
        duration: '0.4 mp',
        icon: 'Send'
      }
    ],
    humanTime: '24–48 óra átfutás',
    aiTime: '4.7 másodperc',
    outcome: 'Azonnali ügyfélélmény még éjszaka is, 3.4x magasabb konverzió.'
  },
  {
    id: 'dentascale-flow',
    name: 'Dentascale: Pácienshívás és Naptárkezelés',
    category: 'Egészségügyi Automatizmus',
    description: 'Egy páciens munkaidőn kívül szeretne sürgős implantációs konzultációt foglalni.',
    steps: [
      {
        title: '01. Intelligens Hang / Web Asszisztens Fogadja',
        description: 'A Dentascale AI azonosítja a páciens panaszait és a kezelőorvos preferenciáit.',
        system: 'Dentascale Voice & Web AI',
        duration: '1.2 mp',
        icon: 'Bot'
      },
      {
        title: '02. Valós Idejű Rendelői Naptár Keresés',
        description: 'Ellenőrzi a fogorvos szabad slotjait, figyelembe véve a műtét előkészítési idejét.',
        system: 'Klinikai Naptár API',
        duration: '0.6 mp',
        icon: 'Calendar'
      },
      {
        title: '03. Időpont Rögzítés és Kórelőzmény Űrlap',
        description: 'Beírja a foglalást a fogorvosi szoftverbe, és kiküldi az anamnézis kérdőívet.',
        system: 'Egészségügyi CRM',
        duration: '1.1 mp',
        icon: 'Database'
      },
      {
        title: '04. SMS Megerősítés & Naptármeghívó',
        description: 'A páciens megkapja az SMS-t és a Google/Apple naptár meghívót térképpel.',
        system: 'SMS & Kommunikációs Motor',
        duration: '0.5 mp',
        icon: 'Send'
      }
    ],
    humanTime: 'Másnap délig elhalasztva',
    aiTime: '3.4 másodperc',
    outcome: '0 elveszített páciens, maximálisan kihasznált fogorvosi székórák.'
  },
  {
    id: 'ops-erp',
    name: 'Beszállítói Számlafeldolgozás & ERP Könyvelés',
    category: 'Vállalatirányítás & Pénzügy',
    description: 'Havi 300+ beérkező beszállítói számla érkezik e-mailben különböző formátumokban.',
    steps: [
      {
        title: '01. Számlák Automatikus Letöltése és OCR',
        description: 'Az AI ügynök figyeli a pénzügyi postafiókot, letölti és kinyeri a NAV-kompatibilis adatokat.',
        system: 'Dokumentum AI Feldolgozó',
        duration: '1.5 mp',
        icon: 'FileText'
      },
      {
        title: '02. Megrendeléssel Történő Összevetés (3-Way Match)',
        description: 'Összehasonlítja a számlát az ERP raktárbevételi jegyzékével és a megrendelővel.',
        system: 'ERP Kontrolling Modul',
        duration: '1.8 mp',
        icon: 'Database'
      },
      {
        title: '03. Jóváhagyási Lánc és Utalási Csomag',
        description: 'Ha nincs eltérés, jóváhagyja a számlát és előkészíti a banki utalási köteget.',
        system: 'Pénzügyi Automatizmus',
        duration: '0.9 mp',
        icon: 'Zap'
      },
      {
        title: '04. Főkönyvi Számlatükör Frissítés',
        description: 'Közvetlenül lekönyveli a költséghelyre a tételeket emberi beavatkozás nélkül.',
        system: 'Könyvelési Integráció',
        duration: '1.0 mp',
        icon: 'CheckCircle2'
      }
    ],
    humanTime: 'Heti 16 óra számlarögzítés',
    aiTime: '5.2 másodperc / számla',
    outcome: '0 elgépelt összeg, azonnali pénzügyi kimutatások a cégvezetőnek.'
  }
];

export const AgentSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(3); // By default, show all steps completed

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < activeScenario.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 700);
  };

  return (
    <section className="py-24 border-t border-neutral-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
              04. Működés a Gyakorlatban / AI Ügynök & Munkafolyamat
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
              Hogyan néz ki egy autonóm folyamat az Ön cégében?
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
              Tekintse meg, hogyan veszi át egy személyre szabott Kairosz AI ügynök a napokig tartó, fárasztó adminisztrációs lépéseket – hibátlanul, másodpercek alatt.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 disabled:opacity-50 transition-all cursor-pointer shadow-xs"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Folyamat Végrehajtása...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Szimuláció Újraindítása</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-neutral-200 pb-4">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setCurrentStepIndex(3);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-neutral-950 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                }`}
              >
                {sc.name}
              </button>
            );
          })}
        </div>

        {/* Simulation Canvas */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-sm">
          {/* Scenario Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                Kiválasztott Munkafolyamat · {activeScenario.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                {activeScenario.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                {activeScenario.description}
              </p>
            </div>

            {/* Time Comparison */}
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-neutral-200 shrink-0">
              <div className="text-right">
                <div className="text-[10px] uppercase font-mono text-neutral-400">Manuális Átfutás</div>
                <div className="text-xs font-bold text-neutral-800 line-through">
                  {activeScenario.humanTime}
                </div>
              </div>
              <div className="h-6 w-px bg-neutral-200" />
              <div>
                <div className="text-[10px] uppercase font-mono text-emerald-600 font-semibold">AI Végrehajtás</div>
                <div className="text-sm font-bold text-emerald-700 font-mono">
                  {activeScenario.aiTime}
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Steps Line */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {activeScenario.steps.map((step, idx) => {
              const isCompleted = idx <= currentStepIndex;
              const isCurrent = idx === currentStepIndex && isRunning;

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white border-neutral-900 shadow-md ring-2 ring-neutral-950/10'
                      : isCompleted
                      ? 'bg-white border-neutral-200 shadow-xs'
                      : 'bg-neutral-100/60 border-neutral-200/50 opacity-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        {step.system}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-600 tabular-nums">
                        {step.duration}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-neutral-950 font-display mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 text-[11px]">Státusz:</span>
                    {isCompleted ? (
                      <span className="text-emerald-700 font-medium flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Kész</span>
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-[11px]">Várakozik...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outcome Footer */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Vállalati Végeredmény
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {activeScenario.outcome}
                </span>
              </div>
            </div>
            <div className="text-xs text-neutral-500 font-mono">
              Nulla hibaszázalék · 100% auditálható naplózás
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
