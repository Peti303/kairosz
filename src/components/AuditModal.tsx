import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Calendar, Building, Mail, Phone, User } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    teamSize: '5-20 fő',
    primaryGoal: initialTopic || 'Manuális adminisztráció felszámolása & automatizálás',
    currentBottleneck: ''
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, primaryGoal: initialTopic }));
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStep1Next = () => {
    if (!formData.companyName.trim()) {
      setErrorMessage('Kérjük, adja meg vállalkozása nevét a felkészüléshez!');
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Kérjük, töltse ki a nevet, e-mail címet és telefonszámot!');
      return;
    }

    // Basic email validation
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Kérjük, érvényes céges e-mail címet adjon meg!');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Success state
    }, 600);
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-neutral-200 shadow-2xl w-full max-w-xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-[#FAF9F6]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-0.5">
              Kairosz Vállalati Audit
            </span>
            <h3 className="text-lg font-bold text-neutral-950 font-display">
              {step === 3 ? 'Kérelem Rögzítve' : '30 Perces Korszerűsítési Konzultáció'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/50 transition-colors cursor-pointer"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <p className="text-sm text-neutral-600 mb-6 font-sans">
                  Az audit célja, hogy 30 perc alatt pontosan felmérjük a cége legdrágább szűk keresztmetszeteit és konkrét megtérülési tervet adjunk át.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Goal Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-2">
                  Mi az elsődleges cél vagy fókuszterület?
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-sm font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950 bg-white"
                >
                  <option value="Manuális adminisztráció felszámolása & automatizálás">
                    Manuális adminisztráció felszámolása & automatizálás
                  </option>
                  <option value="Autonóm AI munkatársak & AI ügynökök bevezetése">
                    Autonóm AI munkatársak & AI ügynökök bevezetése
                  </option>
                  <option value="Személyre szabott vállalatirányítási rendszer (ERP)">
                    Személyre szabott vállalatirányítási rendszer (ERP)
                  </option>
                  <option value="Dentascale: Rendelői recepció & páciensút automatizálás">
                    Dentascale: Rendelői recepció & páciensút automatizálás
                  </option>
                  <option value="Cinesites: Cinematikus, animált weboldal & élmény">
                    Cinesites: Cinematikus, animált weboldal & élmény
                  </option>
                  <option value="Universy: Hibrid telephelyi kamerás forgatás + AI reklámok">
                    Universy: Hibrid telephelyi kamerás forgatás + AI reklámok
                  </option>
                  <option value="Egyéb egyedi szoftverfejlesztés">
                    Egyéb egyedi szoftverfejlesztés
                  </option>
                </select>
              </div>

              {/* Company Name */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-2">
                  Vállalkozás vagy szervezet neve *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="pl. Alpha Logistics Kft."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                  />
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-2">
                  Cég / Csapat mérete
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['1-5 fő', '5-20 fő', '20-50 fő', '50+ fő'].map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setFormData({ ...formData, teamSize: size })}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        formData.teamSize === size
                          ? 'bg-neutral-950 text-white border-neutral-950'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">1 / 2. Lépés</span>
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Tovább a Kapcsolathoz</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-neutral-600 mb-4 font-sans">
                Kérjük, adja meg a döntéshozó vagy kapcsolattartó elérhetőségét az audit időpontjának egyeztetéséhez.
              </p>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-1.5">
                  Teljes név *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Kovács Péter"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-1.5">
                    Céges E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="peter@cegnev.hu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-1.5">
                    Telefonszám *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+36 30 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-mono block mb-1.5">
                  Rövid leírás a jelenlegi szűk keresztmetszetről (opcionális)
                </label>
                <textarea
                  rows={2}
                  placeholder="pl. A számlázás és a készletnyilvántartás nem kommunikál egymással, heti 15 óra adatmásolást igényel..."
                  value={formData.currentBottleneck}
                  onChange={(e) => setFormData({ ...formData, currentBottleneck: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950 resize-none"
                />
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 cursor-pointer"
                >
                  ← Vissza
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 disabled:opacity-50 transition-colors cursor-pointer shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Küldés folyamatban...</span>
                  ) : (
                    <>
                      <span>Audit Kérelem Beküldése</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                <span>Titoktartási (NDA) garancia. Adatait kizárólag a konzultációhoz használjuk.</span>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h4 className="text-2xl font-bold font-display text-neutral-950 mb-2">
                Köszönjük, {formData.fullName.split(' ')[0]}!
              </h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6 font-sans">
                Az audit kérését rögzítettük a {formData.companyName} részére. Szakértőnk 24 órán belül felveszi Önnel a kapcsolatot a megadott számon ({formData.phone}) a pontos időpont véglegesítéséhez.
              </p>

              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Kiválasztott fókusz:</span>
                  <span className="font-semibold text-neutral-900">{formData.primaryGoal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Cégméret:</span>
                  <span className="font-semibold text-neutral-900">{formData.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Konzultáció hossza:</span>
                  <span className="font-semibold text-neutral-900">30 perc (Díjmentes)</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-6 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Rendben, visszatérés a weboldalra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
