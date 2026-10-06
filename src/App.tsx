import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { VenturesSection } from './components/VenturesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { AgentSimulator } from './components/AgentSimulator';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudies } from './components/CaseStudies';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditTopic, setAuditTopic] = useState<string | undefined>(undefined);

  const handleOpenAudit = (topic?: string) => {
    setAuditTopic(topic);
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
    setAuditTopic(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 selection:bg-neutral-950 selection:text-white flex flex-col font-sans">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAudit={() => handleOpenAudit()} />

        {/* 4 Core Modernization Services */}
        <ServicesSection 
          onSelectService={(serviceTitle) => handleOpenAudit(`Ajánlatkérés a következő pillérre: ${serviceTitle}`)} 
        />

        {/* Ecosystem & Ventures Portfolio (Dentascale, Cinesites, Universy) */}
        <VenturesSection onOpenAudit={(subject) => handleOpenAudit(subject)} />

        {/* Interactive ROI & Savings Calculator */}
        <RoiCalculator onOpenAuditWithRoi={(roiSummary) => handleOpenAudit(roiSummary)} />

        {/* Interactive Autonomous AI Agent Demonstration */}
        <AgentSimulator />

        {/* Quantified Case Studies & Verifiable Outcomes */}
        <CaseStudies onOpenAudit={() => handleOpenAudit()} />

        {/* 4-Stage Transparent Roadmap */}
        <ProcessSection onOpenAudit={() => handleOpenAudit()} />

        {/* Enterprise Objection-handling FAQ */}
        <FaqSection />
      </main>

      {/* Quiet Editorial Footer */}
      <Footer onOpenAudit={() => handleOpenAudit()} />

      {/* Conversion Audit & Discovery Consultation Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
        initialTopic={auditTopic}
      />

      {/* Discreet floating quick booking pill for high conversion (desktop only or tiny mobile footprint) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => handleOpenAudit()}
          className="inline-flex items-center gap-2.5 px-4 py-3 bg-neutral-950 text-white rounded-full shadow-xl hover:bg-neutral-800 active:scale-95 transition-all text-xs font-semibold cursor-pointer border border-neutral-800"
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ingyenes Folyamataudit</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
        </button>
      </div>
    </div>
  );
}
