import React from 'react';
import { SmoothScroll } from './components/SmoothScroll'; // Importa tu nuevo componente

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Results from './components/Results';
import TargetAudience from './components/TargetAudience';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <SmoothScroll>
      <div className="font-sans antialiased text-[#374e86] bg-[#fdfdfd] selection:bg-[#e7f1ad] selection:text-[#374e86]">
        {/* ESTILOS OBLIGATORIOS PARA LENIS */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;1,400;1,600&display=swap');
          
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-serif { font-family: 'Playfair Display', serif; }

          /* Lenis Recommended CSS */
          html.lenis, html.lenis body { height: auto; }
          .lenis.lenis-smooth { scroll-behavior: auto !important; }
          .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
          .lenis.lenis-stopped { overflow: hidden; }
          .lenis.lenis-scrolling iframe { pointer-events: none; }
        `}</style>

        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <Services />
          <TargetAudience />
          <SocialProof />
          <Results />
          <Process />
          <FinalCTA />
          <FAQ />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;