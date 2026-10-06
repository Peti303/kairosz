import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditWithRoi: (roiSummary: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditWithRoi }) => {
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(6500); // HUF / óra átlagos bérköltség
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(14); // heti manuális adminisztrációs óra / fő

  // Calculations
  // Estimated automation efficiency: 65% of repetitive admin tasks can be automated with bespoke software + AI agents
  const automationEfficiency = 0.65;
  const savedHoursPerPersonWeekly = manualHoursPerWeek * automationEfficiency;
  const totalWeeklyHoursSaved = Math.round(savedHoursPerPersonWeekly * teamSize);
  const totalMonthlyHoursSaved = Math.round(totalWeeklyHoursSaved * 4.33);
  const monthlyCostSavings = Math.round(totalMonthlyHoursSaved * hourlyRate);
  const yearlyCostSavings = monthlyCostSavings * 12;

  // Format currency
  const formatHUF = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', {
      maximumFractionDigits: 0
    }).format(amount) + ' Ft';
  };

  const handleClaimSavings = () => {
    const summary = `ROI Kalkuláció: ${teamSize} fős csapat, ~${totalMonthlyHoursSaved} óra/hó felszabadítható kapacitás, ~${formatHUF(monthlyCostSavings)}/hó potenciális megtakarítás.`;
    onOpenAuditWithRoi(summary);
  };

  return (
    <section id="kalkulator" className="py-24 border-t border-neutral-200/80 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
            03. Interaktív Hatékonysági Elemző
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
            Számítsa ki, mekkora tőkét és munkaidőt éget el a manuális adminisztráció.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            A legtöbb vállalatnál a munkatársak idejük 25–40%-át adatmásolással, e-mailek válogatásával, státuszegyeztetésekkel és Excel-táblák kezelésével töltik. Tekintse meg az automatizálás közvetlen pénzügyi hatását.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Box - 7 Cols */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="team-size-slider" className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-600" />
                    <span>Adminisztrációval vagy operációval érintett csapatméret</span>
                  </label>
                  <span className="text-lg font-bold text-neutral-950 font-mono tabular-nums bg-neutral-100 px-3 py-1 rounded-md">
                    {teamSize} fő
                  </span>
                </div>
                <input
                  id="team-size-slider"
                  type="range"
                  min="2"
                  max="80"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                  aria-label="Csapatméret beállítása"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-mono mt-1">
                  <span>2 fő</span>
                  <span>40 fő</span>
                  <span>80+ fő</span>
                </div>
              </div>

              {/* Slider 2: Weekly Manual Hours */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="manual-hours-slider" className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neutral-600" />
                    <span>Heti manuális adminisztráció / adatmásolás fejenként</span>
                  </label>
                  <span className="text-lg font-bold text-neutral-950 font-mono tabular-nums bg-neutral-100 px-3 py-1 rounded-md">
                    {manualHoursPerWeek} óra / hét
                  </span>
                </div>
                <input
                  id="manual-hours-slider"
                  type="range"
                  min="4"
                  max="30"
                  step="1"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                  aria-label="Heti manuális órák száma"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-mono mt-1">
                  <span>4 óra (Alacsony)</span>
                  <span>15 óra (Átlagos KKV)</span>
                  <span>30 óra (Kritikus teher)</span>
                </div>
              </div>

              {/* Slider 3: Hourly Cost */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="hourly-rate-slider" className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-neutral-600" />
                    <span>Átlagos bruttó órabér + járulékos bérköltség</span>
                  </label>
                  <span className="text-lg font-bold text-neutral-950 font-mono tabular-nums bg-neutral-100 px-3 py-1 rounded-md">
                    {formatHUF(hourlyRate)} / óra
                  </span>
                </div>
                <input
                  id="hourly-rate-slider"
                  type="range"
                  min="3500"
                  max="18000"
                  step="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
                  aria-label="Órabér beállítása"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-mono mt-1">
                  <span>3 500 Ft</span>
                  <span>10 000 Ft</span>
                  <span>18 000 Ft</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-500 font-sans">
              *A modell 65%-os konzervatív automatizálhatósági rátával számol (személyre szabott szoftveres integrációk és AI ágensek bevezetése után).
            </div>
          </div>

          {/* Results Summary Box - 5 Cols */}
          <div className="lg:col-span-5 bg-neutral-950 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Számított Megtérülési Potenciál</span>
              </div>

              {/* Main Headline Metric */}
              <div className="mb-8">
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mb-1">
                  Várható Havi Megtakarítás & Kapacitásérték
                </div>
                <div className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight tabular-nums">
                  {formatHUF(monthlyCostSavings)}
                </div>
                <div className="text-xs text-emerald-400 mt-2 font-medium">
                  Éves szinten kb. {formatHUF(yearlyCostSavings)} felszabaduló tőke
                </div>
              </div>

              {/* Sub Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-800 mb-8">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Felszabadított idő</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-white">
                    {totalMonthlyHoursSaved} óra
                  </div>
                  <div className="text-[11px] text-neutral-400">minden egyes hónapban</div>
                </div>

                <div>
                  <div className="text-xs text-neutral-400 mb-1">Kapacitásbővülés</div>
                  <div className="text-2xl font-bold font-display tabular-nums text-emerald-400">
                    +{Math.round((totalMonthlyHoursSaved / (teamSize * 160)) * 100)}%
                  </div>
                  <div className="text-[11px] text-neutral-400">új felvétel nélkül</div>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="relative z-10 pt-4 border-t border-neutral-800">
              <button
                onClick={handleClaimSavings}
                className="w-full py-4 px-6 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Audit Kérése Erre a Megtakarításra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-3">
                Kötelezettségmentes, 30 perces konkrét folyamatelemzés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
