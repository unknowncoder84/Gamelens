import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    slug: 'starter',
    badge: 'Basic',
    description: 'Perfect for local cricket turfs and small academies getting started with AI officiating.',
    priceLabel: 'Starting From',
    priceValue: '₹25,000',
    features: ['Single Camera Setup', 'Ball Tracking', 'Basic Player Analytics', 'Match Highlights', 'Mobile Dashboard', 'Email Support'],
    popular: false,
    cta: 'Get Started',
    color: '#4FC3F7',
  },
  {
    name: 'Professional',
    slug: 'professional',
    badge: 'Most Popular',
    description: 'Designed for multi-ground facilities, leagues, and tournament organizers who need full coverage.',
    priceLabel: 'Starting From',
    priceValue: '₹1,00,000',
    features: ['Multi-Camera Setup', 'Advanced Ball Tracking', 'Full Player Analytics', 'Live Score Integration', 'Broadcast Ready Output', 'Custom Branding', 'API Access', 'Priority Support'],
    popular: true,
    cta: 'Choose Professional',
    color: '#FF4F7B',
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    badge: null,
    description: 'For large organizations, sports bodies, and nationwide deployments with custom requirements.',
    priceLabel: "Let's Talk",
    priceValue: 'Custom Pricing',
    features: ['Unlimited Cameras', 'White-label Platform', 'Custom AI Models', 'Dedicated Infrastructure', 'SLA Support', 'On-premise Deployment', 'Custom Integrations', 'Dedicated Account Manager'],
    popular: false,
    cta: 'Contact Us',
    color: '#FF9A3C',
  },
];

export default function PricingSection() {
  const navigate = useNavigate();
  return (
    <section id="pricing" data-testid="pricing-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gl-coral/3 blur-[150px] gsap-parallax" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 gsap-heading">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-orange/80">Pricing</span>
          <h2 data-testid="pricing-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
            Choose Your<br /><span className="text-gradient-orange">Setup.</span>
          </h2>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch gsap-stagger">
          {plans.map((plan, i) => (
            <div key={i} data-testid={`pricing-card-${plan.name.toLowerCase().replace(/\s/g, '-')}`}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${plan.popular ? 'dark-glass' : 'dark-glass'}`}
              style={plan.popular ? { borderColor: `${plan.color}25`, boxShadow: `0 0 40px ${plan.color}08` } : {}}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-white text-xs font-body font-semibold shadow-lg" style={{ background: plan.color, boxShadow: `0 4px 20px ${plan.color}30` }}>
                  <Sparkles className="w-3 h-3" />{plan.badge}
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-body font-semibold border border-white/10" style={{ color: plan.color, backgroundColor: `${plan.color}15` }}>
                  {plan.badge}
                </div>
              )}

              <h3 className="font-heading font-bold text-xl text-white mt-1">{plan.name}</h3>
              <p className="text-sm font-body text-white/40 mt-1.5 leading-relaxed min-h-[48px]">{plan.description}</p>

              {/* Price area */}
              <div className="mt-5 mb-6">
                <span className="block text-xs font-body font-medium uppercase tracking-wider text-white/30 mb-1">{plan.priceLabel}</span>
                <span className="font-heading font-bold text-2xl text-white">{plan.priceValue}</span>
              </div>

              {/* CTA */}
              <button data-testid={`pricing-cta-${plan.name.toLowerCase().replace(/\s/g, '-')}`} onClick={() => navigate(`/plan/${plan.slug}`)}
                className={`w-full py-3 rounded-xl text-sm font-body font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.popular ? 'text-white hover:opacity-90 shadow-lg btn-glow' : 'bg-white/5 text-white/80 hover:bg-white/8 border border-white/8 btn-glow-soft'}`}
                style={plan.popular ? { background: plan.color, boxShadow: `0 4px 20px ${plan.color}20` } : {}}>
                {plan.cta}<ArrowRight className="w-4 h-4 btn-glow-icon" />
              </button>

              {/* Features */}
              <div className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.popular ? plan.color : `${plan.color}90` }} />
                    <span className="text-sm font-body text-white/55">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center dark-glass rounded-2xl p-8 gsap-scale">
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white">Need something different?</h3>
          <p className="text-sm font-body text-white/40 mt-2 max-w-2xl mx-auto leading-relaxed">
            Every cricket facility has unique requirements. We'll create a customized solution based on your cameras, number of grounds, AI features, storage, analytics, and support needs.
          </p>
          <button data-testid="pricing-enterprise-cta" onClick={() => navigate('/plan/enterprise')}
            className="mt-6 px-6 py-3 bg-gradient-brand text-white rounded-xl text-sm font-body font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-lg btn-glow">
            Request a Custom Quote<ArrowRight className="w-4 h-4 btn-glow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
