import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setForm({ ...form, phone: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) return;

    if (form.phone.length !== 10) {
      setStatus('error');
      setErrorMsg('Please enter a valid 10 digit phone number');
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrorMsg('');

    try {
      await axios.post(`${API}/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      if (err.response && err.response.status === 409) {
        setErrorMsg('This phone number is already registered.');
      } else if (err.response && err.response.data && err.response.data.detail) {
        setErrorMsg(err.response.data.detail);
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gl-coral/3 blur-[150px] gsap-parallax" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="gsap-slide-left">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-blue/80">Get In Touch</span>
            <h2 data-testid="contact-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
              Let's Build<br />the <span className="text-gradient-blue">Future.</span>
            </h2>
            <p className="mt-5 text-base font-body text-white/45 leading-relaxed max-w-md">Whether you're a local turf owner or managing an international stadium, our team is ready to deploy AI-powered officiating.</p>
            <div className="mt-10 space-y-5">
              {[{ l: 'Email', v: 'gamelens.Official@gmail.com' }].map((c) => (
                <div key={c.l}><span className="text-xs font-body font-semibold uppercase tracking-wider text-white/30">{c.l}</span><a href={`mailto:${c.v}`} className="block text-base font-body font-medium text-white/70 mt-0.5 hover:text-gl-coral transition-colors cursor-pointer">{c.v}</a></div>
              ))}
            </div>
          </div>
          <div className="gsap-slide-right">
            <form onSubmit={handleSubmit} data-testid="contact-form" className="dark-glass rounded-2xl p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body font-semibold text-white/60 mb-1.5">Name *</label>
                  <input data-testid="contact-name" type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gl-blue/30 focus:border-gl-blue/30 transition-all" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-white/60 mb-1.5">Gmail *</label>
                  <input data-testid="contact-email" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gl-blue/30 focus:border-gl-blue/30 transition-all" placeholder="Enter your email" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-white/60 mb-1.5">Contact Number *</label>
                <input data-testid="contact-phone" type="tel" value={form.phone} onChange={handlePhoneChange} maxLength={10} className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gl-blue/30 focus:border-gl-blue/30 transition-all" placeholder="Enter 10 digit number" required />
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-white/60 mb-1.5">Message *</label>
                <textarea data-testid="contact-message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={4} className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 text-sm font-body text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gl-blue/30 focus:border-gl-blue/30 transition-all resize-none" placeholder="Enter your message here..." required />
              </div>
              {status === 'success' && <div data-testid="contact-success" className="flex items-center gap-2 text-sm font-body text-green-400 bg-green-500/10 rounded-xl px-4 py-3"><CheckCircle className="w-4 h-4" />Registration successful!</div>}
              {status === 'error' && <div data-testid="contact-error" className="flex items-center gap-2 text-sm font-body text-gl-coral bg-gl-coral/10 rounded-xl px-4 py-3"><AlertCircle className="w-4 h-4" />{errorMsg}</div>}
              <button type="submit" data-testid="contact-submit" disabled={loading} className="w-full py-3 rounded-xl bg-gradient-brand text-white text-sm font-body font-semibold hover:opacity-90 shadow-lg shadow-gl-coral/10 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 btn-glow">
                {loading ? 'Sending...' : 'Register'}<Send className="w-4 h-4 btn-glow-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
