import {
  Zap,
  Timer,
  Shield,
  LayoutDashboard,
  RefreshCw,
  Bell,
  Settings,
  MousePointerClick,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Booking',
    description:
      'Book Amazon Relay loads in milliseconds with our optimized engine. Stay ahead of the competition every single time.',
    color: 'from-emerald-400 to-emerald-600',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Timer,
    title: 'Auto Booking',
    description:
      'Set your filters and Ninja Relay Booker will automatically book the trip based on your preferred filters.',
    color: 'from-cyan-400 to-cyan-600',
    glow: 'shadow-cyan-500/20',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description:
      'Get instant alerts when new Amazon Relay loads become available. Never miss a high-value booking opportunity.',
    color: 'from-violet-400 to-violet-600',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description:
      'Your data stays on your device. We use enterprise-grade encryption to protect your booking credentials.',
    color: 'from-amber-400 to-orange-600',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: LayoutDashboard,
    title: 'User Interface',
    description:
      'Very modern and easy to use interface. Navigate effortlessly and manage your bookings with clarity.',
    color: 'from-pink-400 to-rose-600',
    glow: 'shadow-pink-500/20',
  },
  {
    icon: RefreshCw,
    title: 'Regular Updates',
    description:
      'We regularly update our extension software by adding new features and improvements to make your work easier.',
    color: 'from-blue-400 to-indigo-600',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Settings,
    title: 'Custom Preferences',
    description:
      'Fine-tune every aspect — filters, priorities, booking speed, and notification settings.',
    color: 'from-teal-400 to-teal-600',
    glow: 'shadow-teal-500/20',
  },
  {
    icon: MousePointerClick,
    title: 'One-Click Setup',
    description:
      'Install the extension, configure your settings, and start booking. It\'s that simple.',
    color: 'from-fuchsia-400 to-fuchsia-600',
    glow: 'shadow-fuchsia-500/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Dominate
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Packed with powerful features designed to give you the competitive edge in Amazon Relay booking.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${feature.glow}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
