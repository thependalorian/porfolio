/**
 * Buffr Section
 * 
 * Purpose: Detailed Buffr showcase section
 * Location: /components/features/buffr/BuffrSection.tsx
 */

import Image from 'next/image'
import Link from 'next/link'

const recognition = {
  title: 'Asper Student Startup Prize Winner (Apps, Software & Computer Science)',
  image: '/images/buffr/asper_win.jpeg',
  description: 'Winner of the Asper Student Startup Prize in the Apps, Software & Computer Science category at Brandeis International Business School for Buffr.',
}

export function BuffrSection() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">BUFFR</h2>
        <p className="text-lg text-text-secondary mb-1 font-act-body">Your Payment Companion</p>
        <p className="text-sm text-text-tertiary font-act-body">Building Financial Identity for Southern Africa</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-act-moss-green/20 border border-border-light backdrop-blur-sm">
          <div className="card-body p-4">
            <h3 className="text-lg font-semibold mb-2 text-text-primary font-act-title">THE CHALLENGE</h3>
            <p className="text-sm text-text-primary font-act-body">
              Namibia&apos;s informal economy represents approximately 24.7% of GDP (approximately N$8 billion), 
              encompassing street vendors, small-scale traders, artisanal miners, and transport operators. 
              These economic participants face a cycle of exclusion: No digital footprint, no credit history, 
              and limited access to formal financial services.
            </p>
          </div>
        </div>
        <div className="card bg-act-moss-green/20 border border-border-light backdrop-blur-sm">
          <div className="card-body p-4">
            <h3 className="text-lg font-semibold mb-2 text-text-primary font-act-title">BUFFR&apos;S APPROACH</h3>
            <p className="text-sm text-text-primary font-act-body">
              Buffr transforms everyday payment activity into a foundation for financial identity through 
              AI-powered analysis. By capturing transaction data, we create credit histories for users who 
              may have previously operated entirely in cash, enabling access to formal financial services 
              and business growth opportunities.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-center text-text-primary font-act-title">Platform Capabilities</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-act-moss-green/20 border border-border-light backdrop-blur-sm">
          <div className="card-body p-4">
            <Image
              src="/images/buffr/buffr_app_mock.jpeg"
              alt="Buffr App"
              width={400}
              height={250}
              className="w-full rounded-lg mb-3"
            />
            <h4 className="text-md font-semibold mb-1 text-text-primary font-act-title">Real-Time Transaction Data</h4>
            <p className="text-sm text-text-primary font-act-body">
              Creates digital footprints for cash-based operations, building verifiable business histories 
              and enabling data-driven financial assessments.
            </p>
          </div>
        </div>
        <div className="card bg-act-moss-green/20 border border-border-light backdrop-blur-sm">
          <div className="card-body p-4">
            <Image
              src="/images/buffr/buffr_app_mock2.png"
              alt="Buffr Features"
              width={400}
              height={250}
              className="w-full rounded-lg mb-3"
            />
            <h4 className="text-md font-semibold mb-1 text-text-primary font-act-title">AI-Powered Credit Scoring</h4>
            <p className="text-sm text-text-primary font-act-body">
              Machine learning algorithms assess creditworthiness based on actual economic behavior rather 
              than traditional credit history requirements.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-center text-text-primary font-act-title tracking-act-title">Additional Recognition</h3>
      <div className="card bg-act-moss-green/20 border border-border-light text-center mb-6 backdrop-blur-sm">
        <div className="card-body p-4">
          <Image
            src={recognition.image}
            alt="Asper Win"
            width={600}
            height={400}
            className="w-full rounded-lg mb-3"
            style={{ height: 'auto' }}
          />
          <h4 className="text-lg font-semibold mb-1 text-text-primary font-act-title">{recognition.title}</h4>
          <p className="text-sm text-text-primary font-act-body">{recognition.description}</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          href="https://buffr.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="act-btn act-btn-primary"
        >
          Learn More at buffr.ai
        </Link>
      </div>
    </div>
  )
}