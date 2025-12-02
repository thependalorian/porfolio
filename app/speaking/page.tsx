export default function Speaking() {
  const conferences = [
    {
      event: 'MIT FinTech Conference',
      location: 'Boston, MA',
      years: '2024, 2025',
      description: 'Engaged with innovators and professionals at the MIT FinTech Conference. The 2024 conference addressed pressing issues in fintech, including real-time payments and AI applications in finance. Participated in discussions led by industry leaders from Visa and PayPal, gaining valuable insights into the future of financial services. The 2025 conference focused on the impact of open banking, AI, and digital currencies on financial services, with networking opportunities discussing strategies for navigating the evolving financial ecosystem.',
      link: 'https://www.mitfintech.com/',
    },
    {
      event: 'FinTech Junction',
      location: 'Tel Aviv, Israel',
      years: '2023',
      description: 'Attended Israel\'s premier fintech conference at the Hilton Tel Aviv. This event brought together over 1,000 attendees from 25 countries, including leaders from banks, fintech startups, and venture capital firms. Gained insights into global fintech trends, particularly in AI-driven innovation and digital payments, and networked with industry leaders, enhancing understanding of challenges and opportunities in the fintech landscape.',
      link: 'https://events.lynx.co/fintech-junction/',
    },
    {
      event: 'Black in E-Commerce',
      location: 'Atlanta, GA',
      years: '2023',
      description: 'Attended the Black in eCom Conference 2023, a pivotal event focused on empowering Black entrepreneurs and professionals in e-commerce and technology. The conference aimed to amplify Black voices in e-commerce, celebrate their contributions, and address industry challenges through networking, education, and empowerment initiatives.',
      link: 'https://www.linkedin.com/posts/blackinecom_welcome-to-the-black-in-ecom-conference-activity-7092732100386181120-4053',
    },
    {
      event: 'Dubai Expo 2020',
      location: 'Dubai, UAE',
      years: '2020',
      description: 'Represented Kanie Distribution and Supply Chain at Dubai Expo 2020, showcasing innovative solutions and connecting with international stakeholders.',
      link: null,
    },
    {
      event: 'Namibia 4th Industrial Revolution Expo',
      location: 'Windhoek, Namibia',
      years: '2021',
      description: 'Presented at Namibia\'s 4th Industrial Revolution Expo, providing training to government officials on drone applications and emerging technologies.',
      link: null,
    },
    {
      event: 'PowerGEN Africa Utility Week',
      location: 'South Africa',
      years: '2019',
      description: 'Participated in PowerGEN Africa, focusing on renewable energy and telecommunications infrastructure development across Southern Africa.',
      link: null,
    },
  ]

  const topics = [
    {
      title: 'Financial Inclusion in Emerging Markets',
      description: 'Exploring how technology can bridge the gap between informal economies and formal financial services.',
    },
    {
      title: 'AI/ML Applications in Fintech',
      description: 'Leveraging artificial intelligence and machine learning to create financial identity and enable access.',
    },
    {
      title: 'Building Startups in Africa',
      description: 'Lessons learned from building fintech infrastructure across Southern Africa\'s diverse markets.',
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Transforming raw data into actionable insights for business strategy and social impact.',
    },
    {
      title: 'Lessons from India\'s UPI System',
      description: 'How India Stack revolutionized digital payments and what Africa can learn from this success.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section grid-pattern">
        <div className="container-custom text-center">
          <h1 className="mb-6">
            Conferences & <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Engaging with global fintech leaders, innovators, and industry experts across continents
          </p>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section section-alt">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-12 gradient-text">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="card p-8 hover:glow">
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">{topic.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences Attended */}
      <section className="section">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-12">Conference Participation</h2>
          <div className="space-y-6">
            {conferences.map((conf, index) => (
              <div key={index} className="card p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="badge badge-primary mb-3">{conf.years}</div>
                    <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">{conf.event}</h3>
                    <div className="text-[var(--color-text-secondary)] flex items-center mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {conf.location}
                    </div>
                  </div>
                  {conf.link && (
                    <a
                      href={conf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mt-4 md:mt-0"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-[var(--color-text-secondary)]">{conf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-6">Let's Connect</h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-8">
            Interested in partnering, collaborating, or discussing opportunities? I'd love to hear from you.
          </p>
          <a href="/connect/" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
