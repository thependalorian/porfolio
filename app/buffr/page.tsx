'use client';

import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const challenges = [
  'In Namibia, approximately 42% of the adult population remains unbanked',
  '25% face barriers due to lack of access to affordable financial services',
  'Traditional banking systems often fail to meet the needs of younger generations',
  'Financial exclusion perpetuates inequality and limits economic participation'
];

export default function Buffr() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-base-100">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing Financial Inclusion in Africa
              </h1>
              <p className="text-xl mb-6">
                Empowering Millennials and Gen Z with AI-powered payment solutions that make financial services accessible, affordable, and enjoyable.
              </p>
              <p className="text-lg mb-8">
                Winner of the 2023 Asper Student Startup Prize in Apps, Software and Computer Science category.
              </p>
              <a 
                href="https://www.brandeis.edu/global/news/2023/asper-student-startup-prizes.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                Read Award Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/buffr/asper_win.jpeg"
                alt="Buffr Team at Asper Student Startup Prizes"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/buffr/buffr_app_mock.jpeg"
                alt="Buffr App Interface"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Award-Winning Innovation</h2>
              <p className="text-lg mb-6">
                Buffr took home first place in the Apps, Software and Computer Science category at the first-ever 
                Asper Student Startup Prizes competition at Brandeis International Business School.
              </p>
              <p className="text-lg mb-6">
                Founded by George Nekwaya, MBA'24 and Evan Goddard, MSF'24, Buffr aims to transform 
                the financial landscape in Southern Africa, beginning with Namibia.
              </p>
              <blockquote className="card glass-card p-6 mb-6">
                <p className="italic text-base-content/70">
                  "We will vertically integrate into a payment gateway and expand across south Africa and developing countries."
                </p>
                <footer className="mt-2 font-semibold">— George Nekwaya, Founder & CEO</footer>
              </blockquote>
              <a
                href="https://www.linkedin.com/posts/brandeisbusiness_lunch-with-this-years-ain-family-start-up-activity-7205901681505546240-Z9Ut"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                Buffr was also featured in the Ain Family Start-Up Challenge at Brandeis
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Challenges Section */}
      <section className="py-20 bg-base-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Buffr</h2>
            <p className="text-xl text-base-content/70">
              Addressing Critical Financial Inclusion Challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Our Mission</h3>
                <p className="mb-6">
                  Buffr is an innovative fintech startup addressing the critical challenge of financial exclusion 
                  across Namibia and Southern Africa. Our mission is to empower Millennials and Gen Z by making 
                  financial services accessible, affordable, and enjoyable through an AI-powered platform.
                </p>
                <p>
                  What sets Buffr apart is our unique value proposition of compensating users for their data—making us 
                  the first in Namibia to do so—while prioritizing financial inclusion for the unbanked and underbanked.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">The Challenge We're Solving</h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Alignment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Strategic Alignment with National Initiatives</h3>
                <p className="mb-6">
                  Buffr is strategically positioned to complement the Bank of Namibia's Instant Payment Project, 
                  which aims to modernize the country's payment infrastructure. As the central bank works to implement 
                  real-time payment capabilities and interoperability standards, Buffr serves as a consumer-facing 
                  interface that leverages this evolving infrastructure.
                </p>
                <p>
                  Our platform is designed to integrate seamlessly with these national payment systems, enhancing 
                  their reach and adoption among younger demographics while adding value through our AI-powered 
                  financial management tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full rounded-xl overflow-hidden"
            >
              <Image
                src="/images/buffr/buffr_app_mock4.png"
                alt="Buffr App Interface Showcase"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-base-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Experiences</h2>
            <p className="text-xl text-base-content/70">
              Highlighting key events that shape my fintech journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">FinTech Junction 2023</h3>
                <p>
                  Attended Israel's premier fintech conference, FinTech Junction 2023, held at the Hilton Tel Aviv. 
                  This event brought together over 1,000 attendees from 25 countries, including leaders from banks, 
                  fintech startups, and venture capital firms. I gained insights into global fintech trends, particularly 
                  in AI-driven innovation and digital payments, and had the opportunity to network with industry leaders, 
                  enhancing my understanding of the challenges and opportunities in the fintech landscape.
                </p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href="https://www.fintechjunction.com"
                    className="btn btn-primary btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Conference Page
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">Black in eCom 2023</h3>
                <p>
                  Attended the Black in eCom Conference 2023, a pivotal event focused on empowering Black entrepreneurs and professionals in e-commerce and technology. 
                  The conference aimed to amplify Black voices in e-commerce, celebrate their contributions, and address industry challenges through networking, education, and empowerment initiatives.
                </p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href="https://www.blackinecom.com"
                    className="btn btn-primary btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Conference Page
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">MIT FinTech Conference 2024</h3>
                <p>
                  Engaged with over 400 innovators and professionals at the MIT FinTech Conference 2024. 
                  The conference addressed pressing issues in fintech, including real-time payments and AI applications 
                  in finance. I participated in discussions led by industry leaders from Visa and PayPal, gaining valuable 
                  insights into the future of financial services and the role of technology in enhancing customer experiences.
                </p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href="https://www.mitfintechconference.com"
                    className="btn btn-primary btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Conference Page
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card glass-card"
            >
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">MIT FinTech Conference 2025</h3>
                <p>
                  Continued my engagement with cutting-edge fintech discussions at the MIT FinTech Conference 2025. 
                  This conference focused on the impact of open banking, AI, and digital currencies on financial services. 
                  I participated in keynotes and networking opportunities, discussing strategies for navigating the evolving 
                  financial ecosystem and the importance of customer trust in adopting new technologies.
                </p>
                <div className="card-actions justify-center mt-4">
                  <a
                    href="https://www.mitfintechconference.com"
                    className="btn btn-primary btn-outline btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Conference Page
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-base-200/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-xl text-base-content/70 mb-8">
              Currently in stealth mode as we build our innovative financial platform.
              We're selectively connecting with strategic partners and investors.
            </p>
            <div className="card glass-card">
              <div className="card-body items-center">
                <p className="text-lg mb-4">Connect with me directly:</p>
                <a
                  href="mailto:george@buffr.ai"
                  className="btn btn-primary btn-lg gap-2"
                >
                  <Mail className="w-5 h-5" />
                  george@buffr.ai
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
} 
