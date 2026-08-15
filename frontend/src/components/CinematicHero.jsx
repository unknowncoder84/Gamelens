import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SLIDE_DURATION = 5000;
const FADE_MS = 1200;

const sportsImages = [
  { url: 'https://images.pexels.com/photos/36741130/pexels-photo-36741130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', label: 'Cricket' },
  { url: 'https://images.unsplash.com/photo-1539053328711-215a8436a9f7?q=80&w=2400&auto=format&fit=crop', label: 'Football' },
  { url: 'https://images.unsplash.com/photo-1710782914858-9324a4c09c4a?q=80&w=2400&auto=format&fit=crop', label: 'Tennis' },
  { url: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=2400&auto=format&fit=crop', label: 'Cricket' },
  { url: 'https://images.unsplash.com/photo-1759210720456-c9814f721479?q=80&w=2400&auto=format&fit=crop', label: 'Football' },
];

export default function CinematicHero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    sportsImages.forEach((img) => {
      const i = new Image();
      i.onload = i.onerror = () => { loaded++; if (loaded >= 3) setReady(true); };
      i.src = img.url;
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    const advance = () => {
      const next = (currentIdx + 1) % sportsImages.length;
      setNextIdx(next);
      setTransitioning(true);
      setTimeout(() => { setCurrentIdx(next); setTransitioning(false); }, FADE_MS);
    };
    timerRef.current = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [currentIdx, ready]);

  return (
    <section id="hero" data-testid="cinematic-hero" className="relative min-h-screen bg-gl-black overflow-hidden flex flex-col">
      {/* Animated BG Images */}
      {sportsImages.map((img, idx) => (
        <div key={idx} className="absolute inset-0 z-0" style={{
          opacity: idx === currentIdx ? (transitioning ? 0 : 1) : idx === nextIdx && transitioning ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}>
          <img src={img.url} alt={img.label} className="absolute inset-0 w-full h-full object-cover"
            style={{ animation: idx === currentIdx && !transitioning ? `kenburns ${SLIDE_DURATION + FADE_MS}ms ease-in-out forwards` : 'none' }} />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.2) 40%, rgba(5,5,5,0.1) 60%, rgba(5,5,5,0.85) 100%)',
      }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-gl-black/50 via-transparent to-gl-black/50 pointer-events-none" />

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {sportsImages.map((img, idx) => (
          <button key={idx} onClick={() => {
            clearInterval(timerRef.current);
            setNextIdx(idx); setTransitioning(true);
            setTimeout(() => { setCurrentIdx(idx); setTransitioning(false); }, FADE_MS);
          }}
            className={`rounded-full transition-all duration-500 ${idx === currentIdx ? 'w-8 h-1.5 bg-gl-coral' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
            aria-label={img.label} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/8 mb-8">
          <span className="w-2 h-2 rounded-full bg-gl-coral animate-pulse" />
          <span className="text-xs font-body font-medium text-white/60 uppercase tracking-wider">AI-Powered Sports Officiating</span>
        </div>

        <h1 data-testid="cinematic-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight font-heading font-bold leading-[1.1]">
          Where Every Match<br />
          <span className="text-gradient-multi">Becomes a Story...</span>
        </h1>

        <p className="text-base md:text-lg text-white/50 font-body max-w-lg leading-relaxed mb-10">
          Real-time AI umpiring for cricket, football, and tennis. 95% decision accuracy with sub-50ms response time.
        </p>

        <div className="max-w-md w-full space-y-4">
          <div className="flex justify-center">
            <Link to="/products/how-it-works" className="border border-white/10 rounded-xl px-6 py-2.5 text-white/70 text-sm font-body font-medium hover:bg-white/5 hover:border-white/15 transition-all btn-glow-soft" data-testid="cinematic-manifesto-btn">Explore Our Vision</Link>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="relative z-10 flex justify-center gap-3 pb-10" data-testid="cinematic-social">
        {['Instagram', 'Twitter', 'Website'].map((label) => (
          <button key={label} aria-label={label} className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-blue hover:border-gl-blue/20 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
}
