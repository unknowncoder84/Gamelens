import { Zap, Target, Globe, TrendingUp } from 'lucide-react';

export default function AboutGamlens() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gl-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
            About <span className="text-gradient-multi">GamLens</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-brand rounded-full mt-4" />
        </div>

        {/* Two column layout - Wikipedia style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left side - Text content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base font-body text-white/60 leading-relaxed">
              <span className="text-white font-semibold">GamLens</span> is an AI-powered automated umpiring and referee platform designed for cricket, football, tennis, pickleball, and multiple ball-oriented sports. Founded in early 2025, GamLens was built with a single vision — to bring real-time, accurate, and fair officiating to every level of sport using computer vision and artificial intelligence.
            </p>

            <p className="text-base font-body text-white/60 leading-relaxed">
              The platform uses deep learning models trained on millions of professional match frames to track balls, players, and field markers simultaneously across multiple camera feeds. With sub-50ms response time and 95% decision accuracy, GamLens delivers instant officiating decisions that were previously only available at international-level stadiums.
            </p>

            <h3 className="font-heading font-bold text-xl text-white mt-8">How It Started</h3>
            <p className="text-base font-body text-white/60 leading-relaxed">
              In Q1 2025, a team of sports enthusiasts and AI engineers came together to solve a real problem — inconsistent and error-prone officiating at local and semi-professional sports venues. What began as a cricket ball-tracking experiment quickly evolved into a full-scale multi-sport AI platform.
            </p>

            <h3 className="font-heading font-bold text-xl text-white mt-8">The Technology</h3>
            <p className="text-base font-body text-white/60 leading-relaxed">
              GamLens combines computer vision, real-time object tracking, and predictive analytics to deliver split-second decisions. The system processes 240 frames per second through 32 synchronized camera feeds, analyzing ball trajectory, spin, speed, bounce points, and player positions in real-time.
            </p>

            <h3 className="font-heading font-bold text-xl text-white mt-8">Our Journey</h3>
            <div className="space-y-4 mt-4">
              {[
                { period: 'Q1 2025', event: 'GamLens founded — vision to bring AI umpiring to every sport.' },
                { period: 'Q2 2025', event: 'First cricket AI model launched with ball tracking and LBW prediction.' },
                { period: 'Q3 2025', event: 'Team expanded — engineers, sports analysts, and CV researchers joined.' },
                { period: 'Q4 2025', event: 'Multi-sport expansion began — Tennis, Football, Pickleball platforms in development.' },
                { period: 'Q1 2026', event: 'Beta released to cricket academies. 95% accuracy achieved in live testing.' },
                { period: 'Q2 2026', event: 'Partnerships with clubs and tournament organizers. Full multi-sport launch underway.' },
              ].map((m) => (
                <div key={m.period} className="flex gap-4 items-start">
                  <span className="text-xs font-body font-bold text-gl-orange whitespace-nowrap mt-0.5">{m.period}</span>
                  <span className="text-sm font-body text-white/50">{m.event}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-xl text-white mt-8">What We Cover</h3>
            <p className="text-base font-body text-white/60 leading-relaxed">
              From local turfs to international stadiums, GamLens is designed to work at every scale. Whether it's a gully cricket match or a professional tennis tournament, our AI adapts to the venue, camera setup, and sport rules to deliver consistent, unbiased decisions.
            </p>
          </div>

          {/* Right side - Info box with image (Wikipedia-style) */}
          <div className="lg:col-span-1">
            <div className="dark-glass rounded-2xl overflow-hidden sticky top-24">
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
                  alt="GamLens AI Sports Technology"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info table */}
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-white text-center mb-4">GamLens</h4>
                <p className="text-xs font-body text-white/40 text-center mb-5">AI-Powered Sports Officiating Platform</p>

                <div className="space-y-3 border-t border-white/8 pt-4">
                  {[
                    { label: 'Founded', value: '2025' },
                    { label: 'Headquarters', value: 'India' },
                    { label: 'Industry', value: 'Sports Technology' },
                    { label: 'Products', value: 'AI Umpiring, Ball Tracking' },
                    { label: 'Sports', value: 'Cricket, Tennis, Football, Pickleball' },
                    { label: 'Accuracy', value: '95%' },
                    { label: 'Response Time', value: '<50ms' },
                    { label: 'Camera Feeds', value: '32 synchronized' },
                    { label: 'Frame Rate', value: '240fps' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-3">
                      <span className="text-xs font-body font-semibold text-white/50">{item.label}</span>
                      <span className="text-xs font-body text-white/70 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/8">
                  {[
                    { icon: Zap, label: 'Real-time', color: '#FF4F7B' },
                    { icon: Target, label: '95% Accurate', color: '#FF9A3C' },
                    { icon: Globe, label: 'Multi-Sport', color: '#4FC3F7' },
                    { icon: TrendingUp, label: 'Scalable', color: '#22C55E' },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                        <span className="text-[11px] font-body text-white/50">{s.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
