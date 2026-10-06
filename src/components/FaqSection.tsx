import React, { useState } from 'react';
import { FAQS } from '../data/testimonials';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="gyik" className="py-24 border-t border-neutral-200/80 bg-[#FAF9F6] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-3 font-mono">
            07. Kérdések & Válaszok / Kételyek Felszámolása
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 font-display mb-4 text-balance">
            Minden, amit a vállalati korszerűsítésről tudni érdemes.
          </h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto font-sans">
            Világos válaszok az adatbiztonságról, a technológiáról és a megtérülésről.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-neutral-950 font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-neutral-950' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed font-sans border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
