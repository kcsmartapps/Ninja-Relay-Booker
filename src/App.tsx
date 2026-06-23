import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Features />

      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Pricing />

      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <About />

      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-emerald-500 text-[#0a0a0f] shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" strokeWidth={3} />
      </button>
    </div>
  );
}
