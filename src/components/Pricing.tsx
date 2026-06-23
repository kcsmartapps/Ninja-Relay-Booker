import { Check, Globe, Star, Sparkles } from 'lucide-react';

const benefits = [
  'Auto-Refresh Amazon Relay Loadboard',
  'Smart Notifications (Visual and Audio Alerts)',
  'One-Click FastBook On Matched Trips',
  'FastBook On Every Trips',
  'Unlimited Search and Auto-Booking',
  '15+ Filters and Location for Custom Booking Preferences',
  'Post A Truck and Bulk Management Now Included',
  'Works On Desktop : Chrome · Edge · Brave - Android (Lemur, Quetta)',
  'Regular Feature Updates',
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-violet-400 text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            One Plan.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Unlimited Power.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            No hidden fees. No tiers. Get full access to every feature for one simple price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-3xl opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative bg-[#0d0d15] rounded-3xl p-8 sm:p-10 border border-white/10">
              {/* Sale badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <Star className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">55% OFF</span>
                </div>
                <span className="text-gray-500 text-sm">Limited Time Offer</span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl sm:text-6xl font-black text-white">$45</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-lg line-through">$100/month</span>
                  <span className="text-emerald-400 text-sm font-semibold">Save $55/mo</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              {/* Benefits list */}
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://chromewebstore.google.com/detail/ninja-relay-booker-pro/hlcpcjjgcmimpmbgjknkaljhajlenofl"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-3 w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0a0a0f] text-lg font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-[1.02]"
              >
                <Globe className="w-5 h-5" />
                Get Ninja Relay Booker
              </a>

              <p className="text-center text-gray-500 text-xs mt-4">Cancel anytime. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
