import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="border-t border-neutral-200/80 bg-white py-16 text-neutral-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200/70">
          {/* Brand Col - 4 Cols */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-neutral-950 font-display block mb-4 hover:opacity-80 transition-opacity"
            >
              KAIROSZ
            </a>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mb-6">
              Vállalati korszerűsítés, személyre szabott szoftverarchitektúra és autonóm AI munkatársak. A megfelelő pillanat a manuális korlátok nélküli növekedésre.
            </p>
            <div className="text-xs text-neutral-500 font-mono space-y-1">
              <div>Iroda: 1054 Budapest, Szabadság tér 7.</div>
              <div>Közvetlen vonal: +36 1 890 4220</div>
              <div>Megkeresések: hello@kairosz.io</div>
            </div>
          </div>

          {/* Nav Mirror 1: Fő Szolgáltatások - 3 Cols */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Korszerűsítési Szolgáltatások
            </div>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#szolgaltatasok" className="hover:text-neutral-950 transition-colors">
                  01. Személyre Szabott Szoftverek
                </a>
              </li>
              <li>
                <a href="#szolgaltatasok" className="hover:text-neutral-950 transition-colors">
                  02. Személyre Szabott Automatizmusok
                </a>
              </li>
              <li>
                <a href="#szolgaltatasok" className="hover:text-neutral-950 transition-colors">
                  03. AI Munkatársak & AI Ügynökök
                </a>
              </li>
              <li>
                <a href="#szolgaltatasok" className="hover:text-neutral-950 transition-colors">
                  04. Vállalatirányítási Rendszerek (ERP)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Mirror 2: Ökoszisztéma Márkák - 3 Cols */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Kairosz Ökoszisztéma (Ventures)
            </div>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#portfolio" className="hover:text-neutral-950 transition-colors flex items-center gap-1">
                  <span>Dentascale (Egészségügyi AI)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-neutral-950 transition-colors flex items-center gap-1">
                  <span>Cinesites (Cinematikus Weboldalak)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-neutral-950 transition-colors flex items-center gap-1">
                  <span>Universy (AI + Élő Forgatás)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-neutral-950 transition-colors">
                  Megtakarítási & ROI Kalkulátor
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Action - 2 Cols */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Konzultáció
            </div>
            <p className="text-xs text-neutral-500 mb-4">
              Egyetlen 30 perces audit során feltárjuk cége legdrágább szűk keresztmetszeteit.
            </p>
            <button
              onClick={onOpenAudit}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer text-center"
            >
              Audit Kérése
            </button>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kairosz Rendszerek Zrt. Minden jog fenntartva.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-900 cursor-pointer">Adatkezelési Tájékoztató</span>
            <span className="hover:text-neutral-900 cursor-pointer">Titoktartási Irányelvek (NDA)</span>
            <span className="hover:text-neutral-900 cursor-pointer">Általános Szerződési Feltételek</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
