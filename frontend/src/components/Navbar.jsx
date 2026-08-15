import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gamlensLogo from '@/assets/images/logo.png';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#sports' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-2xl py-2.5 px-5 transition-all duration-500 ${
        scrolled
          ? 'glass-heavy shadow-lg'
          : 'bg-gl-black/60 backdrop-blur-xl border border-white/5'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center" data-testid="navbar-logo">
          <img
            src={gamlensLogo}
            alt="GamLens"
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              className="px-3 py-1.5 text-sm font-body font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-body text-gl-coral font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gl-coral animate-pulse" />
            Live
          </div>
          <button
            data-testid="navbar-book-demo"
            onClick={() => handleNav('#contact')}
            className="hidden sm:block px-4 py-2 text-sm font-body font-semibold text-white bg-gradient-brand rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-md btn-glow"
          >
            Book Demo
          </button>
          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors text-white/70"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden mt-3 pb-3 border-t border-white/8 pt-3 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2.5 text-sm font-body font-medium text-white/70 hover:bg-white/5 rounded-xl text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 mx-4 px-4 py-2.5 text-sm font-body font-semibold text-white bg-gradient-brand rounded-xl text-center"
          >
            Book Demo
          </button>
        </div>
      )}
    </nav>
  );
}
