import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Countries of Experience', value: '9+' },
    { label: 'Loans Analyzed (ML Project)', value: '1.8M' },
    { label: 'Startup Accelerators', value: '3' },
    { label: 'Telecom Towers Built', value: '10' },
  ]

  const featuredCards = [
    {
      title: 'Buffr',
      description: 'Building Financial Identity for Namibia',
      detail: 'Digital payment platform inspired by India\'s UPI, targeting the informal economy.',
      link: '/ventures/',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Global Experience',
      description: '9+ Countries. 3 Continents. One Mission.',
      detail: 'From Tel Aviv\'s tech scene to India\'s UPI ecosystem to Namibia\'s markets.',
      link: '/about/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data & AI',
      description: 'Data-Driven Solutions for Real Impact',
      detail: 'Machine learning, forecasting, and AI-powered solutions for emerging markets.',
      link: '/ventures/',
      gradient: 'from-gold-warm to-orange-600',
    },
  ]

  const recognition = [
    'Asper Startup Prize Winner',
    'MassChallenge Cohort',
    'Global Venture Labs',
    'Brandeis Spark',
    'Hassenfeld Fellow',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building Financial Identity
            <br />
            <span className="gradient-text">for the Next Billion</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-soft mb-8 max-w-3xl mx-auto">
            Fintech Founder. Data Strategist. Global Citizen.
            <br />
            Bridging technology, business strategy, and social impact in emerging markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ventures/"
              className="px-8 py-4 bg-blue-electric text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              Explore My Work
            </Link>
            <Link
              href="/connect/"
              className="px-8 py-4 border-2 border-blue-electric text-blue-electric rounded-lg font-semibold hover:bg-blue-electric hover:text-white transition-all duration-300"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-12 bg-navy-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed">
            <p>
              I'm <span className="text-blue-electric font-semibold">George Nekwaya</span> — a Namibian fintech founder and MBA graduate passionate about
              leveraging AI and data analytics to solve real-world problems in emerging markets.
            </p>
            <p>
              As the founder of <span className="text-blue-electric font-semibold">Buffr</span>, I'm building digital payment infrastructure inspired by
              India's UPI to create financial identity for Southern Africa's informal economy.
            </p>
            <p>
              My journey spans civil engineering foundations, telecommunications infrastructure
              across Southern Africa, and immersive fintech experiences in Israel and India as
              a Hassenfeld Fellow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sections (Cards) */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card, index) => (
              <Link key={index} href={card.link}>
                <div className={`bg-gradient-to-br ${card.gradient} p-8 rounded-xl card-hover h-full`}>
                  <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-lg font-semibold mb-4 text-white/90">
                    {card.description}
                  </p>
                  <p className="text-white/80 mb-4">{card.detail}</p>
                  <span className="text-white font-semibold inline-flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-soft">
            {recognition.map((item, index) => (
              <span key={index} className="flex items-center">
                <span className="font-semibold">{item}</span>
                {index < recognition.length - 1 && (
                  <span className="mx-4 text-gold-warm">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
