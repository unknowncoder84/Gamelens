import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import gamlensLogo from '@/assets/images/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Features',
    path: '/features',
    children: [
      { label: 'Cricket', path: '/features/cricket' },
      { label: 'Pickleball', path: '/features/pickleball' },
      { label: 'Tennis', path: '/features/tennis' },
      { label: 'Football', path: '/features/football' },
    ],
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'How It Works', path: '/products/how-it-works' },
      { label: 'Video', path: '/products/video' },
      { label: 'Dashboard', path: '/products/dashboard' },
      { label: 'Technology', path: '/technology' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Blog', path: '/resources/blog' },
      { label: 'FAQ', path: '/resources/faq' },
    ],
  },
  { label: 'Team', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function DropdownItem({ item, closeMenu }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const isActive = item.path === location.pathname ||
    (item.children && item.children.some(c => c.path === location.pathname));

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.children) {
    return (
      <Link
        to={item.path}
        onClick={closeMenu}
        className={`px-3 py-1.5 text-sm font-body font-medium rounded-lg transition-all duration-200 ${
          location.pathname === item.path
            ? 'text-white bg-white/5'
            : 'text-white/50 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`flex items-center gap-1 px-3 py-1.5 text-sm font-body font-medium rounded-lg transition-all duration-200 ${
          isActive
            ? 'text-white bg-white/5'
            : 'text-white/50 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      <div className={`absolute top-full left-0 mt-2 min-w-[180px] rounded-xl border border-white/8 bg-gl-dark/95 backdrop-blur-2xl shadow-xl overflow-hidden transition-all duration-200 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        {item.children.map((child) => (
          <Link
            key={child.path}
            to={child.path}
            onClick={() => { setOpen(false); closeMenu && closeMenu(); }}
            className={`block px-4 py-2.5 text-sm font-body font-medium transition-colors ${
              location.pathname === child.path
                ? 'text-white bg-white/5'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileDropdownItem({ item, closeMenu }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  if (!item.children) {
    return (
      <Link
        to={item.path}
        onClick={closeMenu}
        className={`px-4 py-3 text-sm font-body font-medium rounded-xl text-left transition-all ${
          location.pathname === item.path
            ? 'text-white bg-white/5'
            : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-body font-medium rounded-xl text-left transition-all ${
          open ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-4 flex flex-col gap-0.5 py-1">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              onClick={closeMenu}
              className={`px-4 py-2.5 text-sm font-body font-medium rounded-xl transition-all ${
                location.pathname === child.path
                  ? 'text-white bg-white/5'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen font-body bg-gl-dark">
      {/* Fixed Navbar */}
      <nav
        data-testid="navbar"
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-2xl py-2.5 px-4 sm:px-5 transition-all duration-500 ${
          scrolled
            ? 'glass-heavy shadow-lg'
            : 'bg-gl-black/60 backdrop-blur-xl border border-white/5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={gamlensLogo} alt="GamLens" className="h-7 sm:h-8 w-auto object-contain" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <DropdownItem key={link.label} item={link} closeMenu={closeMenu} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs font-body text-gl-coral font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gl-coral animate-pulse" />
              Live
            </div>
            <Link
              to="/contact"
              className="hidden lg:block px-4 py-2 text-sm font-body font-semibold text-white bg-gradient-brand rounded-xl hover:opacity-90 transition-opacity duration-200 shadow-md btn-glow"
            >
              Book Demo
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors text-white/70"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div
        data-testid="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[300px] bg-gl-dark/95 backdrop-blur-2xl border-l border-white/8 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
          <img src={gamlensLogo} alt="GamLens" className="h-7 w-auto object-contain" />
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors text-white/70"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer nav links */}
        <div className="flex flex-col px-3 py-4 gap-0.5 overflow-y-auto h-[calc(100%-140px)]">
          {navLinks.map((link) => (
            <MobileDropdownItem key={link.label} item={link} closeMenu={closeMenu} />
          ))}
        </div>

        {/* Drawer footer */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-white/8">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block w-full px-4 py-3 text-sm font-body font-semibold text-white bg-gradient-brand rounded-xl text-center hover:opacity-90 transition-opacity shadow-md btn-glow"
          >
            Book Demo
          </Link>
        </div>
      </div>

      {/* Page content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
