export default function Ventures() {
  const buffrProducts = [
    {
      name: 'Buffr Payment Companion',
      description: 'Instant payment infrastructure for emerging markets',
    },
    {
      name: 'BuffrLend',
      description: 'Digital lending module',
    },
    {
      name: 'BuffrSign',
      description: 'Digital signature module',
    },
    {
      name: 'Buffr Host',
      description: 'Front desk AI for independent hospitality properties',
    },
  ]

  const recognition = [
    'MassChallenge Early Stage Foundations Cohort',
    'Global Venture Labs Accelerator Cohort',
    'Brandeis Spark Startup Cohort',
    'Asper Student Startup Prize Winner (Apps, Software & Computer Science)',
  ]

  const researchProjects = [
    {
      title: 'Machine Learning in Peer-to-Peer Lending',
      year: '2024',
      description: 'Analyzed 1.8 million loan records to optimize investment strategies using random forests and gradient boosting. Identified key factors affecting default rates and investment returns.',
      tools: 'Python, Scikit-learn, Machine Learning',
    },
    {
      title: 'Time Series Analysis: AMD Stock Prices (1984-2024)',
      year: '2024',
      description: 'Applied econometric techniques to 40-year stock price dataset. Incorporated sentiment analysis of news and annual reports. Used ARIMA modeling and GARCH volatility analysis.',
      tools: 'R, Python, Time Series Analysis',
    },
    {
      title: 'Stripe & SADC Payment Ecosystem Analysis',
      year: '2023',
      description: 'Comprehensive analysis of mobile payment market in Southern Africa. Researched M-Pesa, Flutterwave, PayStack competitive landscape. Analyzed Stripe\'s strategic approach to African markets.',
      tools: 'Fintech Strategy, Market Analysis, SADC Region',
    },
    {
      title: 'COVID-19 Economic Impact Analysis',
      year: '2024',
      description: 'Analyzed pandemic effects on rental markets using Airbnb datasets (458,177 listings). Applied statistical techniques to assess market recovery patterns.',
      tools: 'Python, Statistical Analysis, Data Visualization',
    },
  ]

  const technicalProjects = [
    {
      title: 'ACT Climate Economy Careers Platform',
      description: 'Career platform connecting talent with clean tech opportunities. Features AI-powered resume analysis, skill gap identification, and real-time chat interface.',
      stack: 'Next.js, TypeScript, FastAPI, SQLAlchemy',
    },
    {
      title: 'Aquasaic Aqua Intel Platform',
      description: 'Real-time water management dashboard architecture with role-based data access for water quality insights.',
      stack: 'Next.js, TypeScript, Supabase',
    },
  ]

  const hackathonProjects = [
    {
      title: 'Kit Star',
      event: 'DeisHacks 2023',
      description: 'Custom shipping containerized aquaponics and organic vertical farm solution. Creates a symbiotic relationship between fish and plants, reducing waste and producing fresh, healthy produce. The vertical farm setup optimizes the use of space within the container, maximizing harvest potential and providing a sustainable food production system.',
      inspiration: 'Inspired by challenges faced by The Land\'s Sake Farm and similar organizations in sustainable agriculture. Aimed to address limited space and resources while revolutionizing their operations.',
      challenge: 'Creating a sustainable closed-loop system between the fish and plants. Learned the importance of optimizing space while ensuring a healthy environment for both.',
      link: 'https://devpost.com/software/kit-star',
    },
    {
      title: 'FRONT-AI Healthcare',
      event: 'DeisHacks 2024',
      description: 'Addresses complex challenges in healthcare data management, particularly in complying with HIPAA regulations. Simplifies the management of sensitive patient data for healthcare organizations, ensuring compliance while being user-friendly.',
      technology: 'Built a specialized hardware device capable of operating offline for maximum security, integrating a custom-trained Large Language Model (FRONT-LLM) to process healthcare data in accordance with HIPAA guidelines.',
      link: 'https://devpost.com/software/front-ai',
    },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Ventures</span> & Projects
          </h1>
          <p className="text-xl text-gray-soft max-w-3xl mx-auto">
            Building Solutions for Real-World Impact
          </p>
        </div>
      </section>

      {/* Featured: Buffr */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 gradient-text">BUFFR</h2>
            <p className="text-2xl text-gray-300 mb-2">Your Payment Companion</p>
            <p className="text-xl text-blue-electric">Building Financial Identity for Southern Africa</p>
          </div>

          {/* Problem Statement */}
          <div className="bg-navy-light p-8 rounded-xl mb-8">
            <h3 className="text-3xl font-bold mb-6 text-gold-warm">THE CHALLENGE</h3>
            <p className="text-lg text-gray-300 mb-4">
              Namibia's informal economy represents approximately 24.7% of GDP.
              Yet these economic participants face a cycle of exclusion:
            </p>
            <ul className="space-y-3 text-gray-300 ml-6">
              <li className="flex items-start">
                <span className="text-gold-warm mr-3">•</span>
                <span>No digital footprint</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-warm mr-3">•</span>
                <span>No credit history</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-warm mr-3">•</span>
                <span>No transaction data leverage</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold-warm mr-3">•</span>
                <span>Limited access to formal financial services</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl mb-8">
            <h3 className="text-3xl font-bold mb-6 text-white">BUFFR'S APPROACH</h3>
            <p className="text-lg text-white mb-6">
              Buffr transforms everyday payment activity into a foundation for
              financial identity through AI-powered analysis:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-white font-semibold text-lg">
              <span className="bg-white/20 px-4 py-2 rounded">Payment Activity</span>
              <span className="text-2xl">→</span>
              <span className="bg-white/20 px-4 py-2 rounded">Buffr AI Analysis</span>
              <span className="text-2xl">→</span>
              <span className="bg-white/20 px-4 py-2 rounded">Financial Identity</span>
              <span className="text-2xl">→</span>
              <span className="bg-white/20 px-4 py-2 rounded">Financial Services</span>
            </div>
          </div>

          {/* Products */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buffrProducts.map((product, index) => (
                <div key={index} className="bg-navy-light p-6 rounded-lg border border-blue-electric/30">
                  <h4 className="text-xl font-bold mb-2 text-blue-electric">{product.name}</h4>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-navy-light p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Accelerator Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recognition.map((item, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <span className="text-gold-warm mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More */}
          <div className="text-center">
            <a
              href="https://buffr.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-electric text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              Visit Buffr.ai
            </a>
          </div>
        </div>
      </section>

      {/* Research & Analysis Projects */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Research & Analysis Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-navy p-6 rounded-lg border border-gray-soft/20">
                <div className="text-gold-warm text-sm font-semibold mb-2">{project.year}</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-electric">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-sm text-gray-soft">
                  <span className="font-semibold">Tools: </span>{project.tools}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Projects</h2>
          <div className="space-y-8">
            {technicalProjects.map((project, index) => (
              <div key={index} className="bg-navy-light p-8 rounded-lg border border-blue-electric/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-electric">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-sm">
                  <span className="font-semibold text-gold-warm">Tech Stack: </span>
                  <span className="text-gray-300">{project.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Projects */}
      <section className="py-20 px-6 bg-navy-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Hackathon Projects
          </h2>
          <div className="space-y-8">
            {hackathonProjects.map((project, index) => (
              <div key={index} className="bg-navy p-8 rounded-lg border border-gold-warm/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-electric mb-1">{project.title}</h3>
                    <div className="text-gold-warm font-semibold">{project.event}</div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-electric text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.inspiration && (
                  <div className="mb-4">
                    <span className="font-semibold text-gold-warm">Inspiration: </span>
                    <span className="text-gray-300">{project.inspiration}</span>
                  </div>
                )}
                {project.technology && (
                  <div className="mb-4">
                    <span className="font-semibold text-gold-warm">Technology: </span>
                    <span className="text-gray-300">{project.technology}</span>
                  </div>
                )}
                {project.challenge && (
                  <div>
                    <span className="font-semibold text-gold-warm">Challenge: </span>
                    <span className="text-gray-300">{project.challenge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
