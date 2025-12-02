import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const certifications = [
    'Agentic AI & Generative AI Bootcamp',
    'Open Banking & Platforms Specialization',
    'Rearchitecting the Financial System',
    'Fintech for Africa',
    'Operations Management',
  ]

  const skills = [
    'Python', 'R', 'SQL', 'JavaScript/TypeScript', 'PostgreSQL',
    'Machine Learning', 'LangGraph', 'LlamaIndex', 'Pydantic AI',
    'Next.js', 'FastAPI', 'Supabase', 'AWS', 'GCP'
  ]

  return (
    <footer className="bg-navy-light border-t border-gray-soft/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">George Nekwaya</h3>
            <p className="text-gray-soft text-sm mb-4">
              Building Financial Identity for the Next Billion. Fintech Founder. Data Strategist. Global Citizen.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/george-nekwaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-soft hover:text-blue-electric transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://buffr.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-soft hover:text-blue-electric transition-colors"
                aria-label="Buffr"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <ul className="text-sm text-gray-soft space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-navy px-2 py-1 rounded text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-soft/20 mt-8 pt-8 text-center text-sm text-gray-soft">
          <p>&copy; {currentYear} George Nekwaya. All rights reserved.</p>
          <p className="mt-2">
            Based in Boston, MA & Windhoek, Namibia
          </p>
        </div>
      </div>
    </footer>
  )
}
