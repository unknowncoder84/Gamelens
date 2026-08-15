import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Zap, Globe, Shield, Eye } from 'lucide-react';

const rotatingTexts = [
  'Wide Ball Detection',
  'No Ball Detection',
  'LBW Prediction',
  'Goal Line Analysis',
  'AI Referee Vision',
  'Smart Match Analytics',
  'Real-Time Ball Tracking',
];

export default function HeroSection({ onOpenVideo }) {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((p) => (p + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 bg-gl-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gl-black" />
        {/* Spotlight follow */}
        <div
          data-testid="hero-spotlight"
          className="absolute pointer-events-none z-[1] transition-opacity duration-300"
          style={{
            width: 600,
            height: 600,
            left: mousePos.x - 300,
            top: mousePos.y - 300,
            background: 'radial-gradient(circle, rgba(79,195,247,0.04) 0%, rgba(255,79,123,0.02) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Decorative orbs */}
        <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full bg-gl-blue/3 blur-[120px] animate-glow-pulse gsap-parallax" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-gl-coral/3 blur-[100px] animate-glow-pulse gsap-parallax" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-gl-orange/2 blur-[80px]" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        {/* Overline */}
        <div
          data-testid="hero-overline"
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-xs font-body font-medium uppercase tracking-[0.15em] text-white/60 mb-8">
            <Zap className="w-3.5 h-3.5 text-gl-orange" />
            The Future of Umpiring
          </div>
        </div>

        {/* Main headline */}
        <h1
          data-testid="hero-headline"
          className={`font-heading font-bold text-white leading-[1.05] tracking-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem]">Intelligent</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-gradient-blue mt-2">
            Officiating.
          </span>
        </h1>

        {/* Subheading */}
        <p
          data-testid="hero-subheading"
          className={`mt-6 text-base md:text-lg font-body text-white/50 max-w-2xl leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          GamLens transforms cricket, football, tennis, and competitive sports using
          real-time AI-powered umpiring, smart analytics, and automated referee systems.
        </p>

        {/* Rotating text */}
        <div
          className={`mt-5 h-8 overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div
            className="transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${currentText * 32}px)` }}
          >
            {rotatingTexts.map((text, i) => (
              <div
                key={i}
                className="h-8 flex items-center justify-center text-sm font-body font-semibold text-gl-coral"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          data-testid="hero-ctas"
          className={`flex flex-wrap items-center justify-center gap-4 mt-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button
            data-testid="hero-watch-demo"
            onClick={() => {
              const el = document.querySelector('#video');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 text-sm font-body font-semibold text-white bg-gradient-brand rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg flex items-center gap-2 btn-glow"
          >
            Watch Demo
            <Play className="w-4 h-4 fill-current btn-glow-icon" />
          </button>
          <button
            data-testid="hero-explore-tech"
            onClick={() => navigate('/technology')}
            className="px-6 py-3 text-sm font-body font-semibold text-white/80 border border-white/10 rounded-xl flex items-center gap-2 hover:bg-white/5 hover:border-white/15 transition-all duration-200 btn-glow-soft"
          >
            Explore Technology
            <ArrowRight className="w-4 h-4 btn-glow-icon" />
          </button>
        </div>

        {/* Stats */}
        <div
          data-testid="hero-stats"
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-3xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {[
            { icon: Eye, value: '95%', label: 'Decision Accuracy', color: 'text-gl-coral' },
            { icon: Zap, value: '<50ms', label: 'Response Time', color: 'text-gl-orange' },
            { icon: Globe, value: '120+', label: 'Stadiums Worldwide', color: 'text-gl-blue' },
            { icon: Shield, value: '15M+', label: 'Decisions Processed', color: 'text-gl-coral' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 flex flex-col items-center text-center"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <span className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-body text-white/40 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 scroll-indicator" data-testid="scroll-indicator">
          <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gl-blue animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
