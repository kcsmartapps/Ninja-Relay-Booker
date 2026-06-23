import { Target, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Active Users' },
  { icon: TrendingUp, value: '2M+', label: 'Bookings Made' },
  { icon: Award, value: '4.9/5', label: 'User Rating' },
  { icon: Target, value: '99.9%', label: 'Uptime' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built by Trucker Carriers,{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                for Truckers Carriers
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Ninja Relay Booker was born from frustration. We were tired of missing Amazon Relay opportunities
                because of slow manual processes and clunky tools that just didn&apos;t cut it.
              </p>
              <p>
                So we built something better — a Chrome extension that combines lightning-fast automation
                with intelligent scheduling to give you an unfair advantage in the Amazon Relay booking world.
              </p>
              <p>
                Our mission is simple: help you book more Amazon Relay loads, faster, and with zero stress. Whether
                you&apos;re a seasoned pro or just getting started, Ninja Relay Booker has your back.
              </p>
            </div>

            {/* Key points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { emoji: '🥷', text: 'Stealth Performance' },
                { emoji: '⚡', text: 'Real-Time Speed' },
                { emoji: '🔒', text: 'Data Privacy First' },
                { emoji: '🚀', text: 'Always Evolving' },
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="text-xl">{point.emoji}</span>
                  <span className="text-white text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-xl" />
            <div className="relative grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-500 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
