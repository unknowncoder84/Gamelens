import { Camera, Brain, Zap, CheckCircle, BarChart3 } from 'lucide-react';

const stages = [
  {
    icon: Camera,
    title: 'Camera System',
    description: 'Captures synchronized high-frame-rate video from all cameras installed around the turf.',
    color: '#FF9A3C',
  },
  {
    icon: Brain,
    title: 'AI Vision Engine',
    description: 'Processes incoming frames using advanced computer vision models trained for sports understanding.',
    color: '#FF4F7B',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Processes every frame with ultra-low latency and applies AI logic instantly.',
    color: '#06B6D4',
  },
  {
    icon: CheckCircle,
    title: 'AI Decision Engine',
    description: 'Generates automated umpiring decisions using proprietary AI models.',
    color: '#FF4F7B',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Reports',
    description: 'Delivers live match data, analytics, replays, reports and match history instantly.',
    color: '#FF9A3C',
  },
];

function FlowCard({ stage, index }) {
  const IconComp = stage.icon;
  return (
    <div
      data-testid={`how-step-${index}`}
      className="hiw-flow-card group relative flex flex-col items-center text-center"
    >
      {/* Card */}
      <div
        className="relative w-[180px] sm:w-[190px] md:w-[200px] rounded-2xl p-5 pt-6 pb-7 flex flex-col items-center transition-all duration-250 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl"
        style={{
          background: 'rgba(12,12,12,0.9)',
          border: `1px solid ${stage.color}25`,
          boxShadow: `0 0 20px ${stage.color}06`,
        }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none"
          style={{ boxShadow: `0 0 30px ${stage.color}12, inset 0 1px 0 ${stage.color}15` }}
        />

        {/* Icon container */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-250 group-hover:scale-110"
          style={{
            backgroundColor: `${stage.color}08`,
            border: `1.5px solid ${stage.color}30`,
            boxShadow: `0 0 16px ${stage.color}10`,
          }}
        >
          <IconComp className="w-6 h-6" style={{ color: stage.color }} />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-sm md:text-[15px] text-white tracking-tight mb-2.5 leading-tight min-h-[40px] flex items-center">
          {stage.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] font-body text-white/40 leading-relaxed">
          {stage.description}
        </p>
      </div>

      {/* Bottom node dot */}
      <div
        className="w-3 h-3 rounded-full mt-4 border-2 shadow-md"
        style={{
          backgroundColor: stage.color,
          borderColor: `${stage.color}60`,
          boxShadow: `0 0 8px ${stage.color}40`,
        }}
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-dark relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gl-blue/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-6 gsap-heading">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-blue/80">How It Works</span>
          <h2 data-testid="how-it-works-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
            From Camera<br />to <span className="text-gradient-blue">Decision.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-sm md:text-base font-body text-white/40 max-w-xl mx-auto leading-relaxed mb-16 gsap-reveal">
          AI-powered officiating system that sees every moment, understands the game, and makes accurate calls in real-time.
        </p>

        {/* Flowchart — Desktop: horizontal row, Mobile: vertical */}
        <div className="hiw-pipeline gsap-stagger">
          {stages.map((stage, i) => (
            <div key={stage.title} className="hiw-stage-wrapper">
              <FlowCard stage={stage} index={i} />
              {/* Arrow connector (between cards, not after last) */}
              {i < stages.length - 1 && (
                <div className="hiw-arrow" aria-hidden="true">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="hiw-arrow-svg">
                    <path d="M0 8H28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
                    <path d="M24 4L30 8L24 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {/* Animated particle */}
                  <div className="hiw-particle" style={{ '--particle-color': stages[i + 1].color }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom connector line */}
        <div className="hidden lg:block relative mt-0 mb-10 mx-auto" style={{ maxWidth: '900px' }}>
          <svg className="w-full h-8" viewBox="0 0 900 32" fill="none" preserveAspectRatio="none">
            <path
              d="M90 2 C90 16, 180 28, 270 28 S450 16, 450 16 S630 28, 720 28 S810 16, 810 2"
              stroke="url(#connectorGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9A3C" />
                <stop offset="25%" stopColor="#FF4F7B" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="75%" stopColor="#FF4F7B" />
                <stop offset="100%" stopColor="#FF9A3C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom pill */}
        <div className="flex justify-center mt-8 gsap-reveal">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/8">
            <Brain className="w-4 h-4 text-gl-blue" />
            <span className="text-xs font-body font-medium text-white/60">AI-Powered</span>
            <span className="w-1 h-1 rounded-full bg-gl-coral" />
            <span className="text-xs font-body font-medium text-white/60">Real-Time</span>
            <span className="w-1 h-1 rounded-full bg-gl-blue" />
            <span className="text-xs font-body font-medium text-white/60">Accurate</span>
            <span className="w-1 h-1 rounded-full bg-gl-orange" />
            <span className="text-xs font-body font-medium text-white/60">Reliable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
