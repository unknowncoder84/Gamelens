import { useNavigate } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';

const posts = [
  { slug: 'future-of-ai-in-sports', title: 'The Future of AI in Sports Officiating', excerpt: 'How machine learning is revolutionizing the way we officiate competitive sports.', category: 'AI & Sports', readTime: '6 min', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', date: 'Dec 12, 2025' },
  { slug: 'smart-stadium-technology', title: 'Smart Stadium Technology: A New Era', excerpt: 'How integrated camera systems and edge computing are transforming stadiums.', category: 'Technology', readTime: '4 min', image: 'https://images.unsplash.com/photo-1518605368461-1ee7c510808a?q=80&w=800&auto=format&fit=crop', date: 'Feb 20, 2026' },
  { slug: 'automated-umpiring-systems', title: 'Automated Umpiring: Beyond Human Limits', excerpt: 'Why AI-powered officiating delivers consistency that surpasses human referees.', category: 'Innovation', readTime: '5 min', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop', date: 'Mar 3, 2026' },
  { slug: 'sports-vision-ai-deep-dive', title: 'Sports Vision AI: Technical Deep Dive', excerpt: 'Under the hood of computer vision models that track balls at 240fps.', category: 'Engineering', readTime: '8 min', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop', date: 'may 8, 2026' },
];

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <section id="blog" data-testid="blog-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gsap-heading">
          <div>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-coral/80">Insights</span>
            <h2 data-testid="blog-heading" className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
              Latest from<br /><span className="text-gradient-red">GamLens.</span>
            </h2>
          </div>
          <button data-testid="blog-view-all" className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-body font-semibold text-gl-coral animated-underline">
            View All Posts <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gsap-stagger">
          {posts.map((post, i) => (
            <article key={i} data-testid={`blog-card-${i}`} onClick={() => navigate(`/blog/${post.slug}`)} className="group cursor-pointer">
              <div className="parallax-img-wrap relative rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover gsap-parallax-img group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gl-black/40 group-hover:bg-gl-black/50 transition-colors" />
                <div className="absolute top-4 left-4"><span className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1 text-xs font-body font-medium text-white/80">{post.category}</span></div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-body text-white/35">{post.date}</span>
                <span className="text-white/10">|</span>
                <span className="flex items-center gap-1 text-xs font-body text-white/35"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-white tracking-tight group-hover:text-gl-coral transition-colors duration-200">{post.title}</h3>
              <p className="mt-2 text-sm font-body text-white/40 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
