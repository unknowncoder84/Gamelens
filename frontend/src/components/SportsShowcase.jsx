import { Target, Crosshair, Radar, TrendingUp, Gauge, Scan, Sparkles, Circle } from 'lucide-react';
import tennisImage from '@/assets/images/tennis.jfif';

const sports = [
  {
    id: 'cricket', title: 'Cricket Intelligence', subtitle: 'Precision Ball Tracking',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2400&auto=format&fit=crop',
    features: ['Ball Trajectory', 'LBW Prediction', 'No-Ball Detection', 'Wicket Detection', 'Smart Replay', 'Ultra-Edge'],
    icon: Target, color: '#FF4F7B',
    description: 'AI-powered ball tracking analyzes trajectory, spin, and impact points in real-time for LBW, no-ball, and caught-behind decisions.',
    earlyAccess: false,
    stats: [{ label: 'Speed', value: '240fps' }, { label: 'Accuracy', value: '95%' }, { label: 'Cameras', value: '32 feeds' }],
    liveStats: [{ l: 'Accuracy', v: '95%' }, { l: 'Latency', v: '12ms' }, { l: 'Confidence', v: '98.2%' }],
  },
  {
    id: 'pickleball', title: 'Pickleball Intelligence Platform', subtitle: 'Smart Match Intelligence',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2400&auto=format&fit=crop',
    features: ['Rally Analysis', 'Shot Tracking', 'Court Heatmaps', 'Player Positioning', 'Match Statistics', 'AI Performance Insights'],
    icon: Circle, color: '#22C55E',
    description: 'Our Pickleball Intelligence Platform is being developed to bring AI-powered match intelligence to one of the world\'s fastest-growing sports. It will deliver advanced player tracking, rally analysis, shot recognition, and real-time performance insights for clubs, academies, tournaments, and recreational players. Designed with the same intelligent technology that powers GamLens, our goal is to make professional-grade analytics accessible to every level of Pickleball.',
    earlyAccess: true,
    earlyAccessNote: 'Be among the first clubs and organizations to experience Pickleball Intelligence.',
    stats: [],
    liveStats: [],
  },
  {
    id: 'tennis', title: 'Tennis Intelligence Platform', subtitle: 'Hawk-Eye Precision',
    image: tennisImage,
    features: ['Ball Tracking', 'Line Detection', 'Serve Speed', 'Bounce Prediction', 'Smart Replay', 'Court Analytics'],
    icon: Radar, color: '#FF9A3C',
    description: 'Our Tennis Intelligence Platform combines AI-powered line calling, ball tracking, stroke recognition, player movement analysis, and performance insights.',
    earlyAccess: true,
    earlyAccessNote: 'Request priority access for your academy or organization.',
    stats: [],
    liveStats: [],
  },
  {
    id: 'football', title: 'Football Intelligence Platform', subtitle: 'Total Match Awareness',
    image: 'https://images.unsplash.com/photo-1701363539457-875b9bc9bbc1?q=80&w=2400&auto=format&fit=crop',
    features: ['Goal-Line Analysis', 'Offside Detection', 'Referee Tracking', 'Player Heatmaps', 'Foul Detection', 'VAR Integration'],
    icon: Crosshair, color: '#4FC3F7',
    description: 'Our Football Intelligence Platform is being engineered to deliver AI-powered officiating, tactical analysis, player tracking, and real-time match intelligence for clubs, academies, and professional leagues.',
    earlyAccess: true,
    earlyAccessNote: 'Be among the first organizations to experience Football Intelligence.',
    stats: [],
    liveStats: [],
  },
];

export default function SportsShowcase({ defaultSport }) {
  const defaultIdx = defaultSport ? sports.findIndex(s => s.id === defaultSport) : 0;
  const activeSport = sports[defaultIdx >= 0 ? defaultIdx : 0];

  return (
    <section id="sports" data-testid="sports-showcase" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="gsap-heading mb-16">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-coral/80">Sports Intelligence</span>
          <h2 data-testid="sports-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
            Every Sport.<br /><span className="text-gradient-multi">Every Decision.</span>
          </h2>
          <p className="mt-4 text-base font-body text-white/45 max-w-xl leading-relaxed">
            Purpose-built AI models for each sport, trained on millions of professional match frames.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="parallax-img-wrap relative min-h-[400px] lg:min-h-[500px] gsap-scale overflow-hidden rounded-2xl">
            <img src={activeSport.image} alt={activeSport.title}
              className="absolute inset-0 w-full h-full object-cover gsap-parallax-img transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gl-black/80 via-gl-black/10 to-gl-black/40" />

            {/* AI Tracking badge */}
            <div className="absolute top-5 left-5 bg-white/5 backdrop-blur-md border border-white/8 rounded-xl px-3 py-2 flex items-center gap-2">
              <Scan className="w-3.5 h-3.5" style={{ color: activeSport.color }} />
              <span className="text-xs font-body font-medium text-white/80">AI Tracking Active</span>
            </div>

            {/* Coming Soon ribbon on image */}
            {activeSport.earlyAccess && (
              <div className="absolute top-5 right-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-3.5 py-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gl-orange" />
                <span className="text-[11px] font-body font-semibold text-white/80">Coming Soon</span>
              </div>
            )}

            {/* Live Analysis overlay */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-gl-black/60 backdrop-blur-xl border border-white/8 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeSport.color }} />
                  <span className="text-[10px] font-body font-semibold uppercase tracking-wider text-white/70">Live Analysis</span>
                </div>
                <div className="flex gap-6">
                  {activeSport.liveStats.map((m) => (
                    <div key={m.l} className="flex flex-col">
                      <span className="text-lg font-heading font-bold text-white">{m.v}</span>
                      <span className="text-[10px] font-body text-white/40">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center gsap-slide-right">
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const IconComp = activeSport.icon;
                return (
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${activeSport.color}10` }}>
                    <IconComp className="w-6 h-6" style={{ color: activeSport.color }} />
                  </div>
                );
              })()}
              <div>
                <h3 data-testid={`sport-title-${activeSport.id}`} className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">{activeSport.title}</h3>
                <p className="text-sm font-body text-white/40">{activeSport.subtitle}</p>
              </div>
            </div>

            {/* Coming Soon badge inline */}
            {activeSport.earlyAccess && (
              <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-gl-orange/5 to-gl-blue/5 border border-white/8 self-start btn-glow-soft">
                <Sparkles className="w-3.5 h-3.5 text-gl-orange" />
                <span className="text-xs font-body font-semibold text-white/70">Preparing for Coming Soon</span>
              </div>
            )}

            <p className="text-base font-body text-white/50 leading-relaxed mb-4">{activeSport.description}</p>

            {/* Coming Soon secondary text */}
            {activeSport.earlyAccess && (
              <p className="text-sm font-body text-white/35 italic mb-6">{activeSport.earlyAccessNote}</p>
            )}
            {!activeSport.earlyAccess && <div className="mb-6" />}

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeSport.features.map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-lg text-xs font-body font-medium bg-white/4 text-white/60 border border-white/6">{f}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {(activeSport.stats || [{ label: 'Speed', value: '240fps' }, { label: 'Accuracy', value: '95%' }, { label: 'Cameras', value: '32 feeds' }]).map((s, i) => (
                <div key={s.label} className="dark-glass rounded-xl p-4 text-center">
                  {[Gauge, TrendingUp, Scan][i] && (() => { const Icon = [Gauge, TrendingUp, Scan][i]; return <Icon className="w-4 h-4 mx-auto mb-1.5" style={{ color: activeSport.color }} />; })()}
                  <span className="block font-heading font-bold text-lg text-white">{s.value}</span>
                  <span className="block text-[10px] font-body text-white/35 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA for Coming Soon sports */}
            {activeSport.earlyAccess && (
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="self-start px-6 py-3 rounded-xl text-sm font-body font-semibold text-white bg-gradient-brand hover:opacity-90 transition-all shadow-lg flex items-center gap-2 btn-glow"
              >
                <Sparkles className="w-4 h-4" />
                Join the Waitlist
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
