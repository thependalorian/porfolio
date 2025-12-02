export default function Experience() {
  const timeline = [
    {
      period: '2024 - 2025',
      role: 'PROJECT MANAGER, DEIJ & WORKFORCE DEVELOPMENT',
      company: 'The Alliance for Climate Transition (ACT)',
      location: 'Massachusetts, USA',
      highlights: [
        'Led workforce development assessment in partnership with Massachusetts Clean Energy Center (MassCEC)',
        'Conducted 14+ in-depth interviews with clean energy companies',
        'Analyzed hiring needs across 50+ companies in the clean energy sector',
        'Developed diversity and inclusion strategies for clean energy workforce',
        'Authored comprehensive workforce development assessment report',
        'Built ACT Climate Economy Careers Platform with AI-powered features',
      ],
    },
    {
      period: '2024 - 2025',
      role: 'BUSINESS DEVELOPMENT CONSULTANT',
      company: 'Aquasaic Corporation',
      location: 'Remote',
      highlights: [
        'Designed initial architecture for Aquasaic Aqua Intel Platform',
        'Conducted commercial and technical research on water treatment technologies',
        'Developed pitch decks for funding opportunities',
      ],
    },
    {
      period: '2023 - Present',
      role: 'FOUNDER',
      company: 'Buffr Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Building financial identity for Namibia\'s informal economy',
        'Developed Buffr Payment Companion — Instant payment infrastructure',
        'Created BuffrLend — Digital lending module',
        'Built BuffrSign — Digital signature module',
        'Launched Buffr Host — Front desk AI for hospitality',
        'Selected for MassChallenge, Global Venture Labs, and Brandeis Spark',
        'Won Asper Student Startup Prize (Apps, Software & Computer Science)',
        'Conducted field studies on digital payment ecosystems across 5+ countries',
      ],
    },
    {
      period: '2023',
      role: 'BUSINESS DEVELOPMENT INTERN',
      company: 'Insait IO',
      location: 'Tel Aviv, Israel',
      highlights: [
        'Analyzed Valley National Bank financial data',
        'Researched EU AI Act and US regulatory compliance for AI in finance',
        'Developed compliance framework documentation (GDPR, PATRIOT Act, Fair Lending Laws, ECOA, FCRA, Gramm-Leach-Bliley Act)',
        'Delivered strategic recommendations to senior leadership',
      ],
    },
    {
      period: '2022 - 2024',
      role: 'MBA CANDIDATE',
      company: 'Brandeis International Business School',
      location: 'Waltham, MA',
      highlights: [
        'Concentrations: Data Analytics, Strategy & Innovation',
        'GPA: 3.45/4.0',
        'Vice President, International Business School Student Association (IBSSA)',
        'Graduate Student Senator & Board Member, Graduate Student Association (GSA)',
        'Instructional Assistant, Social Impact Investing and MBA Communication',
        'Asper Student Startup Prize Winner',
        'Led IBSSA to "Student Group of the Year"',
        'Hassenfeld Fellowship (Israel & India)',
      ],
    },
    {
      period: '2020 - 2021',
      role: 'INTERNATIONAL SALES REPRESENTATIVE',
      company: 'Kanie Distribution and Supply Chain',
      location: 'Windhoek, Namibia',
      highlights: [
        'Represented company at Dubai Expo 2020',
        'Presented at Namibia\'s 4th Industrial Revolution Expo',
        'Provided training to government officials on drone applications',
      ],
    },
    {
      period: '2018 - 2019',
      role: 'BUSINESS OPERATIONS MANAGER / SITE ENGINEER',
      company: 'Polar Power Inc.',
      location: 'Windhoek, Namibia',
      highlights: [
        'Constructed 10 telecommunication towers for MTC (Namibia\'s largest carrier)',
        'Secured contract for 2 portable WiFi trailer masts for BoFiNet (Botswana)',
        'Managed optical fiber installation project in Swakopmund',
        'Established partnerships with MTN Business, NECOR Ltd (Zambia), Victoria Consolidated (Tanzania)',
        'Directed teams of 10+ employees and managed subcontractors',
      ],
    },
    {
      period: '2017 - 2018',
      role: 'SITE AGENT\'S ASSISTANT',
      company: 'Namibia Road Products & Services',
      location: 'Windhoek, Namibia',
      highlights: [
        'Led road construction operations managing team of 15 workers',
        'Completed 3.5 km road upgrade project in Windhoek',
        'Coordinated with municipal stakeholders',
      ],
    },
    {
      period: '2015 - 2016',
      role: 'CIVIL ENGINEERING INTERN',
      company: 'Lithon Project Consultants',
      location: 'Ongwediva, Namibia',
      highlights: [
        'Evaluated 15+ tender documents for compliance with Namibian standards',
        'Conducted site inspections for stormwater infrastructure projects',
      ],
    },
  ]

  const education = [
    {
      degree: 'Master of Business Administration (STEM-Designated)',
      institution: 'Brandeis International Business School',
      date: 'May 2024',
      details: 'Concentrations: Data Analytics, Strategy & Innovation | GPA: 3.45/4.0',
    },
    {
      degree: 'Bachelor of Engineering: Civil & Environmental Engineering',
      institution: 'Namibia University of Science & Technology',
      date: 'October 2017',
      details: 'Capstone: Water tower system design for Kalkrand township | International Exchange: FH-Aachen University, Germany',
    },
  ]

  const awards = [
    { award: 'Asper Student Startup Prize Winner', organization: 'Brandeis University', year: '2023' },
    { award: 'Student Group of the Year (IBSSA VP)', organization: 'Brandeis University', year: '2023' },
    { award: 'Student Choice for Community Engagement (IBSSA)', organization: 'Brandeis International Business School Student Association', year: '2023' },
    { award: 'Prime Liaison Recognition (GSA)', organization: 'Graduate Student Association', year: '2024' },
    { award: 'Hassenfeld Fellowship', organization: 'Brandeis International Business School', year: '2023-2024' },
  ]

  const accelerators = [
    {
      name: 'Brandeis Spark',
      logo: '/images/logos/brandeis-spark-logo.png',
      description: 'Participated in the Brandeis Spark Startup Cohort, receiving guidance and support to develop and launch my startup within the Brandeis University ecosystem.',
      link: 'https://www.brandeis.edu/innovation/grant-programs/spark/index.html'
    },
    {
      name: 'MassChallenge',
      logo: '/images/logos/masschallenge-logo.png',
      description: 'As part of the MassChallenge Early Stage Foundations Cohort, accessed mentorship, resources, and a network to refine entrepreneurial skills and grow ventures.',
      link: 'https://www.masschallenge.org/'
    },
    {
      name: 'Global Venture Labs',
      logo: '/images/logos/global-venture-labs-logo.png',
      description: 'Participated in the Global Venture Labs Accelerator Cohort, gaining valuable insights into entrepreneurship, business strategy, and scaling startups.',
      link: 'https://www.globalventurelabs.org/'
    }
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-soft max-w-3xl mx-auto">
            A Journey Across Continents, Industries, and Impact
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Professional Timeline</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-electric">
                <div className="absolute w-4 h-4 bg-blue-electric rounded-full -left-[9px] top-0"></div>
                <div className="bg-navy-light p-6 rounded-lg">
                  <div className="text-gold-warm font-semibold mb-2">{item.period}</div>
                  <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                  <div className="text-blue-electric font-semibold mb-1">{item.company}</div>
                  <div className="text-gray-soft text-sm mb-4">{item.location}</div>
                  <ul className="space-y-2 text-gray-300">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-warm mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="bg-navy p-8 rounded-lg border border-gray-soft/20">
                <h3 className="text-2xl font-bold mb-2 text-blue-electric">{item.degree}</h3>
                <div className="text-xl font-semibold mb-2">{item.institution}</div>
                <div className="text-gold-warm mb-3">{item.date}</div>
                <p className="text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((item, index) => (
              <div key={index} className="bg-navy-light p-6 rounded-lg border border-gold-warm/30">
                <div className="text-gold-warm text-sm mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.award}</h3>
                <div className="text-gray-soft">{item.organization}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Accelerators */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Startup Accelerator Programs</h2>
          <div className="space-y-6">
            {accelerators.map((item, index) => (
              <div key={index} className="bg-navy p-8 rounded-lg border border-blue-electric/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-electric">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
