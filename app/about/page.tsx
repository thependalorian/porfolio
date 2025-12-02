export default function About() {
  const globalJourney = [
    { country: 'Namibia', experience: 'Home. Engineering degree. Buffr headquarters. Infrastructure projects.' },
    { country: 'United States', experience: 'MBA at Brandeis. Startup accelerators. MIT FinTech Conference.' },
    { country: 'Israel', experience: 'Hassenfeld Fellow. Insait IO internship. FinTech Junction 2023.' },
    { country: 'India', experience: 'Hassenfeld Fellow. UPI study. Industry leader engagement.' },
    { country: 'Germany', experience: 'Student exchange at FH-Aachen. Project management research.' },
    { country: 'UAE', experience: 'Dubai Expo 2020. International business development.' },
    { country: 'South Africa', experience: 'PowerGEN Africa. Partnership development.' },
    { country: 'Zambia', experience: 'NECOR Ltd partnership. Telecommunications expansion.' },
    { country: 'Tanzania', experience: 'Victoria Consolidated partnership. Market development.' },
    { country: 'Botswana', experience: 'BoFiNet contract. WiFi infrastructure delivery.' },
  ]

  const achievements = [
    { label: 'Startup Accelerator Programs', value: '3' },
    { label: 'Countries of Professional Experience', value: '9+' },
    { label: 'Telecommunication Towers Built', value: '10' },
    { label: 'Loan Records Analyzed (ML Project)', value: '1.8M' },
    { label: 'Clean Energy Companies Assessed', value: '50+' },
    { label: 'Academic GPA (MBA)', value: '3.45/4.0' },
    { label: 'Airbnb Listings Analyzed', value: '458,177' },
    { label: 'Road Kilometers Constructed', value: '3.5 km' },
    { label: 'Team Members Led', value: '15+' },
  ]

  const philosophies = [
    {
      title: 'Technology Serves Humanity',
      description: 'Technology is not an end in itself — it\'s a tool for human flourishing. The most meaningful innovations solve real problems for real people.',
    },
    {
      title: 'Data Reveals Truth',
      description: 'In a world of noise, data provides clarity. I combine analytical rigor with human insight to transform information into actionable intelligence.',
    },
    {
      title: 'Global Thinking, Local Action',
      description: 'The best solutions adapt global best practices to local realities. I\'ve studied fintech in Tel Aviv, payments in Mumbai, and markets in Windhoek. The synthesis of these perspectives drives my work.',
    },
    {
      title: 'Inclusion is Innovation',
      description: 'True innovation expands the circle of opportunity. The informal economy isn\'t a problem to solve; it\'s potential to unleash.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-soft max-w-3xl mx-auto">
            From Engineering Foundations to Fintech Frontiers
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 gradient-text">My Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              My journey began in Namibia, where I grew up witnessing the gap between economic
              potential and financial access. I watched talented entrepreneurs, street vendors,
              and small business owners operate in an informal economy with no digital footprint,
              no credit history, and no pathway to formal financial services.
            </p>
            <p className="text-blue-electric font-semibold">
              This observation became my mission.
            </p>
            <p>
              I studied Civil & Environmental Engineering at Namibia University of Science &
              Technology, learning to build physical infrastructure. After leading telecommunications
              and renewable energy projects across Southern Africa at Polar Power — establishing
              partnerships with MTN, MTC, and carriers in Botswana, Zambia, and Tanzania — I
              pursued my MBA at Brandeis International Business School with concentrations in
              Data Analytics and Strategy & Innovation.
            </p>
            <p>
              During my Hassenfeld Fellowship, I studied Israel's innovation ecosystem and
              India's UPI payment system firsthand. Witnessing how India Stack enabled widespread
              digital identity adoption shaped my vision for Buffr.
            </p>
            <p>
              Today, I'm building Buffr to create financial identity for Namibia's next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophies.map((item, index) => (
              <div key={index} className="bg-navy p-8 rounded-xl border border-gray-soft/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-electric">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Journey */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Global Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalJourney.map((item, index) => (
              <div key={index} className="bg-navy-light p-6 rounded-lg border border-gray-soft/20">
                <h3 className="text-xl font-bold text-gold-warm mb-2">
                  {item.country}
                </h3>
                <p className="text-gray-300">{item.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-navy p-6 rounded-lg text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-soft">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
