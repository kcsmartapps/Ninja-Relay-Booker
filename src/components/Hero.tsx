import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">Now Available on Chrome Web Store</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Automate Your</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
            Amazon Relay Booking
          </span>
          <br />
          <span className="text-white">Like a Ninja</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          The ultimate Chrome extension that supercharges your Amazon Relay booking workflow.
          Save hours of manual work and never miss a load on the Amazon Relay Loadboard again.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://chromewebstore.google.com/detail/ninja-relay-booker-pro/hlcpcjjgcmimpmbgjknkaljhajlenofl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0a0a0f] text-lg font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 animate-pulse-glow"
          >
            <Globe className="w-5 h-5" />
            Download for Chrome
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white text-lg font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Zap, label: 'Lightning Fast', value: '10x Faster' },
            { icon: Shield, label: 'Secure & Private', value: '100% Safe' },
            { icon: Globe, label: 'Chrome Extension', value: 'Easy Install' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Works in countries */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Works in</span>
          <div className="flex items-center gap-3 flex-wrap justify-center text-3xl sm:text-4xl">
            <span title="United States">🇺🇸</span>
            <span title="Canada">🇨🇦</span>
            <span title="United Kingdom">🇬🇧</span>
            <span title="European Union">🇪🇺</span>
            <span title="Germany">🇩🇪</span>
            <span title="Spain">🇪🇸</span>
            <span title="Poland">🇵🇱</span>
            <span title="India">🇮🇳</span>
            <span title="Japan">🇯🇵</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
