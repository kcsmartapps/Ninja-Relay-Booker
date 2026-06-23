import { Zap, ArrowUpRight } from 'lucide-react';

const LOGO_URL = "https://r.jina.ai/i/05e07669d0684f88ba6734292f7f90c4";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500/30">
                <img src={LOGO_URL} alt="Ninja Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Ninja</span>
                <span className="text-emerald-400"> Relay Booker</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              The most powerful Chrome extension for Amazon Relay booking automation.
              Save time, book more, and stay ahead of the competition.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/ninja-relay-booker-pro/hlcpcjjgcmimpmbgjknkaljhajlenofl' },
             //   { name: 'Documentation', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-gray-500 text-sm hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ArrowUpRight className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Ninja Relay Booker. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            Made with <span className="text-red-500 mx-1">❤</span> for bookers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}
