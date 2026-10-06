import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAF9F6]/60 backdrop-blur-xs border-b border-neutral-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-neutral-900 font-display hover:opacity-85 transition-opacity"
        >
          KAIROSZ
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a
            href="#szolgaltatasok"
            className="hover:text-neutral-950 transition-colors"
          >
            Szolgáltatások
          </a>
          <a
            href="#portfolio"
            className="hover:text-neutral-950 transition-colors"
          >
            Ökoszisztéma
          </a>
          <a
            href="#folyamat"
            className="hover:text-neutral-950 transition-colors"
          >
            Módszertan
          </a>
          <a
            href="#kalkulator"
            className="hover:text-neutral-950 transition-colors"
          >
            ROI Kalkulátor
          </a>
          <a
            href="#eredmenyek"
            className="hover:text-neutral-950 transition-colors"
          >
            Esettanulmányok
          </a>
          <a
            href="#gyik"
            className="hover:text-neutral-950 transition-colors"
          >
            GYIK
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all whitespace-nowrap shadow-xs"
          >
            <span>Ingyenes Audit Kérése</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü megnyitása"
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-neutral-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800 mb-6">
            <a
              href="#szolgaltatasok"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Szolgáltatások
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Ökoszisztéma (Ventures)
            </a>
            <a
              href="#folyamat"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Módszertan
            </a>
            <a
              href="#kalkulator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Megtakarítás & ROI Kalkulátor
            </a>
            <a
              href="#eredmenyek"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Esettanulmányok
            </a>
            <a
              href="#gyik"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-neutral-950"
            >
              Gyakori Kérdések
            </a>
          </nav>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="w-full py-3 px-4 text-center font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <span>Ingyenes Korszerűsítési Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
