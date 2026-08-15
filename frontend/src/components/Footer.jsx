import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import gamlensLogo from '@/assets/images/logo.png';
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const footerLinks = {
  Product: ['Features', 'Pricing', 'Dashboard', 'API Docs', 'Changelog'],
  Sports: ['Cricket AI', 'Football Referee', 'Tennis Vision', 'Multi-Sport'],
  Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null);
  const [subLoading, setSubLoading] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault(); if (!email) return;
    setSubLoading(true); setSubStatus(null);
    try { await axios.post(`${API}/subscribe`, { email }); setSubStatus('success'); setEmail(''); }
    catch (err) { setSubStatus(err.response?.status === 400 ? 'exists' : 'error'); }
    finally { setSubLoading(false); }
  };

  return (
    <footer data-testid="footer" className="bg-gl-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        {/* Subscribe card */}
        <div className="dark-glass rounded-3xl p-8 md:p-12 text-center gsap-scale">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">Stay Ahead of the <span className="text-gradient-multi">Game</span></h3>
          <p className="mt-3 text-sm font-body text-white/40 max-w-md mx-auto leading-relaxed">Get the latest updates on AI sports technology and product launches.</p>
          <form onSubmit={handleSubscribe} data-testid="subscribe-form" className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input data-testid="subscribe-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gl-coral/30 focus:border-gl-coral/30 transition-all" placeholder="Enter your email" required />
            <button type="submit" data-testid="subscribe-submit" disabled={subLoading}
              className="px-6 py-3 rounded-xl bg-gradient-brand text-white text-sm font-body font-semibold hover:opacity-90 shadow-lg shadow-gl-coral/10 transition-all flex items-center justify-center gap-2 disabled:opacity-60 whitespace-nowrap btn-glow">
              {subLoading ? 'Subscribing...' : 'Subscribe'}<ArrowRight className="w-4 h-4 btn-glow-icon" />
            </button>
          </form>
          {subStatus === 'success' && <div data-testid="subscribe-success" className="mt-3 flex items-center justify-center gap-2 text-sm font-body text-green-400"><CheckCircle className="w-4 h-4" />Subscribed!</div>}
          {subStatus === 'exists' && <div data-testid="subscribe-exists" className="mt-3 flex items-center justify-center gap-2 text-sm font-body text-gl-coral"><CheckCircle className="w-4 h-4" />Already subscribed!</div>}
          {subStatus === 'error' && <div data-testid="subscribe-error" className="mt-3 flex items-center justify-center gap-2 text-sm font-body text-gl-coral"><AlertCircle className="w-4 h-4" />Something went wrong.</div>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={gamlensLogo} alt="GamLens" className="h-7 w-auto object-contain" />
            </div>
            <p className="text-sm font-body text-white/40 leading-relaxed">AI-powered sports officiating for the modern era.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-bold text-sm text-white/70 mb-3">{title}</h4>
              <ul className="space-y-2">{links.map((link) => (<li key={link}><a href="#" className="text-sm font-body text-white/30 hover:text-gl-coral transition-colors duration-200">{link}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/30">2026 GamLens. All rights reserved.</p>
          <p className="text-xs font-body text-white/30">Transforming sports officiating with AI.</p>
        </div>
      </div>

      {/* Giant watermark text */}
      <div className="overflow-hidden pb-6"><p data-testid="footer-giant-text" className="text-center font-heading font-black text-[12vw] leading-none tracking-tighter text-white/[0.02] select-none">GAMLENS</p></div>
    </footer>
  );
}
