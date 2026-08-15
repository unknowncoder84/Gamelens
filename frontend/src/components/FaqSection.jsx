import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const faqs = [
  {
    q: 'What is GamLens?',
    a: 'GamLens is an AI-powered sports intelligence platform that transforms match footage into detailed decision-making insights. Built to make professional-level sports analysis accessible, it helps players, coaches, academies, and turf owners make smarter decisions through intelligent video analysis.',
  },
  {
    q: 'How accurate is GamLens?',
    a: 'GamLens delivers up to 95% accuracy under optimal conditions. Accuracy depends on camera quality and video clarity. Our AI continuously improves through regular updates and real-world data to provide reliable match insights.',
  },
  {
    q: 'Which sports are supported?',
    a: 'GamLens is currently optimized for cricket. Support for pickleball, football, badminton, and other sports is planned, with each sport receiving AI models specifically trained for its unique gameplay.',
  },
  {
    q: 'Does it work offline?',
    a: 'GamLens requires an internet connection for AI processing. If your connection is interrupted during a match, recordings are safely stored locally and automatically uploaded once the internet is restored.',
  },
  {
    q: 'How many cameras are required?',
    a: 'A three-camera setup is recommended for most cricket turfs, while larger venues can use up to four cameras for enhanced coverage and accuracy. The setup can be upgraded anytime based on your requirements.',
  },
  {
    q: 'Can GamLens work in local turfs?',
    a: 'Yes. GamLens is designed for local turfs, academies, coaching centers, and box cricket venues. It requires only a suitable camera setup, stable internet, and proper lighting to get started.',
  },
  {
    q: 'Is cloud integration included?',
    a: 'Yes. Every installation includes secure cloud integration for storing match videos, reports, and analytics. Storage can be upgraded anytime, and users can securely access their data from anywhere through a subscription-based cloud service.',
  },
  {
    q: 'What is the installation timeline?',
    a: 'Most installations are completed within 2-3 business days. The process includes camera installation, AI configuration, testing, and staff training, followed by 24/7 remote and technical support.',
  },
  {
    q: 'How are edge cases handled?',
    a: 'GamLens is designed to work well in real match conditions, including lighting changes and fast gameplay. Our AI keeps learning from real match data, making its analysis more accurate and reliable with every update.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" data-testid="faq-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 gsap-heading">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-orange/80">FAQ</span>
          <h2 data-testid="faq-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
            Questions?<br /><span className="text-gradient-orange">Answered.</span>
          </h2>
        </div>
        <div className="gsap-reveal">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}
                className="border border-white/6 rounded-2xl px-6 overflow-hidden bg-gl-surface shadow-sm hover:border-gl-coral/10 transition-colors data-[state=open]:border-gl-coral/15 data-[state=open]:bg-gl-surface-light">
                <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left font-heading font-semibold text-base md:text-lg text-white hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm font-body text-white/45 leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
