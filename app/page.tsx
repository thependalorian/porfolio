import Link from 'next/link'

export default function Home() {
  const experience = [
    {
      period: '2024 - 2025',
      role: 'Project Manager, DEIJ & Workforce Development',
      company: 'The Alliance for Climate Transition (ACT)',
      location: 'Massachusetts, USA',
      highlights: [
        'Led workforce development assessment with Massachusetts Clean Energy Center',
        'Conducted 14+ in-depth interviews with clean energy companies',
        'Built ACT Climate Economy Careers Platform with AI features',
      ],
      link: '/experience/',
    },
    {
      period: '2023 - Present',
      role: 'Founder',
      company: 'Buffr Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Building financial identity for Namibia\'s informal economy',
        'Won Asper Student Startup Prize',
        'Selected for MassChallenge, Global Venture Labs, and Brandeis Spark',
      ],
      link: '/ventures/',
    },
    {
      period: '2023',
      role: 'Business Development Intern',
      company: 'Insait IO',
      location: 'Tel Aviv, Israel',
      highlights: [
        'Analyzed financial data for predictive analytics',
        'Researched EU AI Act and US regulatory compliance',
        'Developed compliance framework documentation',
      ],
      link: '/experience/',
    },
    {
      period: '2022 - 2024',
      role: 'MBA Candidate',
      company: 'Brandeis International Business School',
      location: 'Waltham, MA',
      highlights: [
        'Concentrations: Data Analytics, Strategy & Innovation',
        'GPA: 3.45/4.0',
        'VP of IBSSA, Graduate Student Senator',
      ],
      link: '/experience/',
    },
    {
      period: '2018 - 2019',
      role: 'Business Operations Manager / Site Engineer',
      company: 'Polar Power Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Constructed 10 telecommunication towers for MTC',
        'Established partnerships across Southern Africa',
        'Directed teams of 10+ employees',
      ],
      link: '/experience/',
    },
  ]

  const skills = [
    { category: 'Technical', items: ['Python', 'R', 'SQL', 'JavaScript/TypeScript', 'Next.js', 'FastAPI'] },
    { category: 'AI/ML', items: ['Machine Learning', 'LangGraph', 'LlamaIndex', 'Pydantic AI', 'RAG Systems'] },
    { category: 'Business', items: ['Financial Modeling', 'Data Analytics', 'Strategy & Innovation', 'Market Research'] },
    { category: 'Leadership', items: ['Team Management', 'Project Management', 'Stakeholder Engagement', 'Business Development'] },
  ]

  const stats = [
    { label: 'Countries', value: '9+' },
    { label: 'Accelerators', value: '3' },
    { label: 'Years Experience', value: '7+' },
    { label: 'Telecom Towers Built', value: '10' },
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
      <section className="section grid-pattern pt-32">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="mb-6">
              <span className="gradient-text">George Nekwaya</span>
            </h1>
            <p className="text-2xl font-semibold text-[var(--color-text-secondary)] mb-4">
              Fintech Founder | Data Strategist | Global Citizen
            </p>
            <p className="text-lg text-[var(--color-text-tertiary)] max-w-3xl mx-auto">
              Building financial identity for the next billion. MBA graduate with expertise in AI, data analytics,
              and fintech infrastructure across emerging markets.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="stat-number mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:george@buffr.ai?subject=Resume Request"
              className="btn btn-primary"
            >
              Request Full Resume
            </a>
            <Link href="/connect/" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>

          <p className="text-center text-sm text-[var(--color-text-tertiary)]">
            Full resume available upon request at{' '}
            <a href="mailto:george@buffr.ai" className="text-[var(--color-primary)] link-underline">
              george@buffr.ai
            </a>
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section section-alt">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Link key={index} href={job.link}>
                <div className="card p-8 cursor-pointer group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="badge badge-primary mb-3">{job.period}</div>
                      <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {job.role}
                      </h3>
                      <div className="text-lg font-semibold mb-1">{job.company}</div>
                      <div className="text-[var(--color-text-secondary)] text-sm mb-4">{job.location}</div>
                    </div>
                    <div className="flex items-center text-[var(--color-primary)] group-hover:translate-x-2 transition-transform">
                      <span className="text-sm mr-2">View Details</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-[var(--color-text-secondary)]">
                        <span className="text-[var(--color-accent)] mr-3 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/experience/" className="btn btn-outline">
              View Complete Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-8">
                <div className="text-[var(--color-accent)] font-bold text-sm mb-2">{edu.year}</div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">{edu.degree}</h3>
                <div className="text-lg font-semibold mb-2">{edu.school}</div>
                <p className="text-[var(--color-text-secondary)]">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
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
      <section className="section">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/ventures/">
              <div className="card p-8 text-center cursor-pointer group h-full">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  Ventures & Projects
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Explore Buffr, research projects, and hackathon wins
                </p>
              </div>
            </Link>

            <Link href="/speaking/">
              <div className="card p-8 text-center cursor-pointer group h-full">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  Conferences & Events
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Global fintech conferences from Tel Aviv to Boston
                </p>
              </div>
            </Link>

            <Link href="/about/">
              <div className="card p-8 text-center cursor-pointer group h-full">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  My Story
                </h3>
                <p className="text-[var(--color-text-secondary)]">
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
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-8">
            Interested in fintech innovation, data analytics, or building solutions for emerging markets?
            Let's connect.
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
      </section>
    </div>
  )
}
