import { useRef } from 'react';
import { Linkedin, Github, Mail, Star, Users, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Meet Rathod',
    role: 'Finance & Investor',
    description: 'Driving financial strategy, investments and long-term value creation for GamLens. Focused on building sustainable growth through strategic partnerships and smart capital allocation.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/meet-rathod-a5a934211/',
    github: null,
    email: 'gamelens.Offical@gmail.com',
    badge: 'Founder',
    skills: ['Financial Strategy', 'Investor Relations', 'Growth Planning'],
  },
  {
    name: 'Aunj Gaud',
    role: 'AI Researcher',
    description: 'Leading AI research and innovation to build intelligent solutions for the future of sports. Specializing in computer vision, deep learning, and real-time inference systems that power GamLens.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/anuj-gaud-3b110b394/',
    github: 'https://github.com/Anuj-Gaud/',
    email: 'gaudanuj664@gmail.com',
    badge: 'Co-Founder',
    skills: ['Computer Vision', 'Deep Learning', 'Real-time AI', 'Research'],
  },
  {
    name: 'Rishi Sawant',
    role: 'Backend developer',
    description: 'Architecting robust backend systems and infrastructure that power GamLens at scale. Building high-performance APIs, data pipelines, and distributed systems for real-time sports analytics.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/rishi-sawant19/',
    github: 'https://github.com/Unknowncoder84/',
    email: 'Rishi.sawant2005@gmail.com',
    badge: 'Co-Founder',
    skills: ['System Architecture', 'APIs', 'Cloud Infrastructure', 'Databases'],
  },
  {
    name: 'Dharmendra Vishwakarma',
    role: 'UI/UX & Marketing',
    description: 'Designing seamless experiences and driving brand growth that connects GamLens with the world. Creating intuitive interfaces and compelling narratives that resonate with sports professionals.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/dharmendra-vishwakarma-7b6716344/',
    github: 'https://github.com/Dharmendra0202/',
    email: 'dv45564@gmail.com',
    badge: 'Co-Founder',
    skills: ['UI/UX Design', 'Marketing'],
  },
  {
    name: 'Ayush Sharma',
    role: 'Full Stack Developer',
    description: 'Building scalable, high-performance web and mobile applications that power the future of GamLens. Passionate about clean architecture, developer experience, and shipping polished products.',
    image: null,
    linkedin: 'https://www.linkedin.com/in/aayush-sharma-4b7b7b23a/',
    github: 'https://github.com/Ayushsharma262004',
    email: 'aayushgamlens@gmail.com',
    badge: 'Co-Founder',
    skills: ['System Design', 'DevOps'],
  },
];

function PopupCard({ member, onClose }) {
  const IconComp = member.icon;

  return (
    <div className="team-popup-card-lg" onClick={(e) => e.stopPropagation()}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex flex-col md:flex-row h-full">
        {/* LEFT — Portrait image (40%) */}
        <div className="relative w-full md:w-[40%] min-h-[280px] md:min-h-full overflow-hidden flex-shrink-0 rounded-b-none md:rounded-r-none md:rounded-l-[28px] rounded-t-[28px] md:rounded-tr-none">
          {/* Glow ring behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[70%] h-[70%] rounded-full border border-gl-coral/20 shadow-[0_0_60px_rgba(255,79,123,0.08),0_0_120px_rgba(255,154,60,0.05)]" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-gl-black via-gl-surface to-gl-black flex items-center justify-center">
            {member.image ? (
              <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" style={{ aspectRatio: '4/5', objectPosition: 'top' }} />
            ) : (
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white/4 border border-white/8 flex items-center justify-center z-10">
                <span className="text-5xl md:text-6xl font-heading font-bold text-white/10">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>

          {/* Bottom overlay with name/role */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gl-black via-gl-black/80 to-transparent z-10">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">{member.name}</h3>
            <p className="text-sm font-body font-semibold text-gl-coral mt-1">{member.role}</p>
            <p className="text-xs font-body text-white/40 mt-2 leading-relaxed max-w-[280px]">{member.description.split('.')[0]}.</p>
          </div>

          {/* Accent dot */}
          <div className="absolute top-5 left-5 z-10 w-3 h-3 rounded-full bg-gl-orange shadow-[0_0_12px_rgba(255,154,60,0.6)]" />
        </div>

        {/* RIGHT — Content (60%) */}
        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto">
          {/* Name + Role */}
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white tracking-tight leading-tight">
            {member.name}
          </h2>
          <p className="text-base md:text-lg font-body font-semibold text-gl-coral mt-2">{member.role}</p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-gl-orange to-gl-coral rounded-full mt-5 mb-6" />

          {/* Bio */}
          <div className="max-w-[600px]">
            <p className="text-sm md:text-base font-body text-white/50 leading-[1.8]">
              {member.description}
            </p>
          </div>

          {/* Skills */}
          {member.skills && (
            <div className="flex flex-wrap gap-2 mt-6">
              {member.skills.map((skill) => (
                <span key={skill} className="px-3.5 py-1.5 rounded-lg text-xs font-body font-medium bg-white/4 text-white/55 border border-white/6 hover:border-gl-coral/20 hover:text-white/70 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-8">
            {member.linkedin && (
              <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gl-blue hover:border-gl-blue/30 hover:bg-gl-blue/5 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.github && (
              <a href={member.github} aria-label={`${member.name} GitHub`} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} aria-label={`${member.name} Email`} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gl-orange hover:border-gl-orange/30 hover:bg-gl-orange/5 transition-all duration-200">
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef(null);

  return (
    <section id="team" ref={sectionRef} data-testid="team-section" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gl-black relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gl-coral/2 blur-[150px] gsap-parallax" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gl-orange/2 blur-[120px] gsap-parallax" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gsap-heading">
          <div>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gl-coral/80">Our Team</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mt-4">
              Meet the <span className="text-gradient-red">Team</span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-6 text-base font-body text-white/45 max-w-md leading-relaxed lg:text-right">
            The minds behind GamLens are united by one mission — to transform sports intelligence through AI and technology.
          </p>
        </div>

        {/* Static grid — Row 1: featured + 2 normal | Row 2: 2 wide */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 gsap-stagger">
          {/* Row 1 — Meet Rathod (large, spans 2) */}
          {(() => {
            const member = teamMembers[0];
            return (
              <div
                key={member.name}
                className="relative rounded-[20px] overflow-hidden dark-glass min-h-[320px] md:col-span-2 md:row-span-1"
              >
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gl-orange/10 border border-gl-orange/20">
                  <Star className="w-3 h-3 text-gl-orange fill-gl-orange" />
                  <span className="text-[10px] font-body font-bold uppercase tracking-wider text-gl-orange">{member.badge}</span>
                </div>
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="relative w-full sm:w-[42%] min-h-[200px] sm:min-h-[320px] overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gl-surface to-gl-black flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
                        <span className="text-3xl font-heading font-bold text-white/20">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    {member.image && (
                      <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gl-black/50 pointer-events-none" />
                  </div>
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">{member.name}</h3>
                    <p className="text-xs font-body font-semibold text-gl-coral mt-0.5">{member.role}</p>
                    <p className="text-xs font-body text-white/35 leading-relaxed mt-2">{member.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {member.linkedin && (<a href={member.linkedin} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-blue transition-colors"><Linkedin className="w-3 h-3" /></a>)}
                      {member.github && (<a href={member.github} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white transition-colors"><Github className="w-3 h-3" /></a>)}
                      {member.email && (<a href={`mailto:${member.email}`} className="w-7 h-7 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-orange transition-colors"><Mail className="w-3 h-3" /></a>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Row 1 — Rishi + Aunj (each span 1) */}
          {[2, 1].map((memberIdx) => {
            const member = teamMembers[memberIdx];
            return (
              <div
                key={member.name}
                className="relative rounded-[20px] overflow-hidden dark-glass min-h-[320px]"
              >
                {member.badge && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-md bg-gl-orange/10 border border-gl-orange/20">
                    <Star className="w-2.5 h-2.5 text-gl-orange fill-gl-orange" />
                    <span className="text-[9px] font-body font-bold uppercase tracking-wider text-gl-orange">{member.badge}</span>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div className="relative w-full min-h-[160px] overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gl-surface to-gl-black flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
                        <span className="text-lg font-heading font-bold text-white/20">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    {member.image && (
                      <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gl-black/60 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-sm md:text-base text-white tracking-tight">{member.name}</h3>
                    <p className="text-[11px] font-body font-semibold text-gl-coral mt-0.5">{member.role}</p>
                    <p className="text-[11px] font-body text-white/35 leading-relaxed mt-2 line-clamp-3">{member.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      {member.linkedin && (<a href={member.linkedin} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-blue transition-colors"><Linkedin className="w-2.5 h-2.5" /></a>)}
                      {member.github && (<a href={member.github} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white transition-colors"><Github className="w-2.5 h-2.5" /></a>)}
                      {member.email && (<a href={`mailto:${member.email}`} className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-orange transition-colors"><Mail className="w-2.5 h-2.5" /></a>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Row 2 — Ayush + Dharmendra (each span 2) */}
          {[4, 3].map((memberIdx) => {
            const member = teamMembers[memberIdx];
            return (
              <div
                key={member.name}
                className="relative rounded-[20px] overflow-hidden dark-glass min-h-[240px] md:col-span-2"
              >
                {member.badge && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gl-orange/10 border border-gl-orange/20">
                    <Star className="w-2.5 h-2.5 text-gl-orange fill-gl-orange" />
                    <span className="text-[9px] font-body font-bold uppercase tracking-wider text-gl-orange">{member.badge}</span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="relative w-full sm:w-[38%] min-h-[160px] sm:min-h-[240px] overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gl-surface to-gl-black flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
                        <span className="text-lg font-heading font-bold text-white/20">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    {member.image && (
                      <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gl-black/50 pointer-events-none" />
                  </div>
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-sm md:text-base text-white tracking-tight">{member.name}</h3>
                    <p className="text-[11px] font-body font-semibold text-gl-coral mt-0.5">{member.role}</p>
                    <p className="text-[11px] font-body text-white/35 leading-relaxed mt-2">{member.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      {member.linkedin && (<a href={member.linkedin} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-blue transition-colors"><Linkedin className="w-2.5 h-2.5" /></a>)}
                      {member.github && (<a href={member.github} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white transition-colors"><Github className="w-2.5 h-2.5" /></a>)}
                      {member.email && (<a href={`mailto:${member.email}`} className="w-6 h-6 rounded-md bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-gl-orange transition-colors"><Mail className="w-2.5 h-2.5" /></a>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 dark-glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 gsap-scale">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gl-coral/10 border border-gl-coral/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-gl-coral" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Want to build the future of sports intelligence with us?</h3>
              <p className="text-sm font-body text-white/40 mt-0.5">We're always looking for passionate engineers, designers, AI researchers, and innovators.</p>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-brand text-white rounded-xl text-sm font-body font-semibold hover:opacity-90 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap btn-glow flex-shrink-0"
          >
            Join Our Team
            <ArrowRight className="w-4 h-4 btn-glow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
