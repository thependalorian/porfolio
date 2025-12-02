import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Home() {
  const skills = [
    { category: 'Technical', items: ['Python', 'R', 'SQL', 'JavaScript/TypeScript', 'Next.js', 'FastAPI'] },
    { category: 'AI/ML', items: ['Machine Learning', 'LangGraph', 'LlamaIndex', 'Pydantic AI', 'RAG Systems'] },
    { category: 'Business', items: ['Financial Modeling', 'Data Analytics', 'Strategy & Innovation', 'Market Research'] },
    { category: 'Leadership', items: ['Team Management', 'Project Management', 'Stakeholder Engagement', 'Business Development'] },
  ]

  const education = [
    {
      degree: 'MBA (STEM)',
      school: 'Brandeis International Business School',
      year: '2024',
      focus: 'Data Analytics, Strategy & Innovation',
    },
    {
      degree: 'B.Eng.',
      school: 'Namibia University of Science & Technology',
      year: '2017',
      focus: 'Civil & Environmental Engineering',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Professional Experience */}
      <section className="section section-alt">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="mb-4">
              <span className="gradient-gold">Professional Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)] mx-auto"></div>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Education */}
      <section className="section section-accent">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="gradient-teal">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-gold)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="card p-8">
                <div className="text-[var(--color-gold)] font-bold text-sm mb-3 uppercase tracking-wider">
                  {edu.year}
                </div>
                <h3 className="text-2xl font-bold mb-3 gradient-gold">
                  {edu.degree}
                </h3>
                <div className="text-lg font-semibold mb-3 text-[var(--color-text-primary)]">
                  {edu.school}
                </div>
                <p className="text-[var(--color-text-secondary)]">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="section section-alt">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="gradient-gold">Core Competencies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-teal)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-bold mb-6 text-gold bracket-left pl-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section grid-pattern-subtle">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="shimmer">Explore More</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-gold)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ventures/">
              <div className="card p-10 text-center cursor-pointer group h-full">
                <div className="w-12 h-12 mx-auto mb-6 border-2 border-[var(--color-gold)] transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-4 text-gold group-hover:gradient-gold transition-all">
                  Ventures & Projects
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Explore Buffr, research projects, and hackathon wins
                </p>
              </div>
            </Link>

            <Link href="/speaking/">
              <div className="card p-10 text-center cursor-pointer group h-full">
                <div className="w-12 h-12 mx-auto mb-6 border-2 border-[var(--color-teal)] transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-4 text-teal group-hover:gradient-teal transition-all">
                  Conferences & Events
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Global fintech conferences from Tel Aviv to Boston
                </p>
              </div>
            </Link>

            <Link href="/about/">
              <div className="card p-10 text-center cursor-pointer group h-full">
                <div className="w-12 h-12 mx-auto mb-6 border-2 border-[var(--color-gold)] transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold mb-4 text-gold group-hover:gradient-gold transition-all">
                  My Story
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  From Namibia to global impact across 9+ countries
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-alt">
        <div className="container-custom max-w-4xl text-center">
          <div className="frame p-12">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Interested in fintech innovation, data analytics, or building solutions for emerging markets?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:george@buffr.ai" className="btn btn-primary">
                Email: george@buffr.ai
              </a>
              <Link href="/connect/" className="btn btn-outline">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
