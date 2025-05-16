'use client';

import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';
import { Github, Rocket } from 'lucide-react';

/**
 * Projects Page
 * 
 * A placeholder page for upcoming projects with GitHub integration.
 * Features animated elements and a call-to-action.
 * Located at: app/projects/page.tsx
 */

export default function Projects() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-base-content/70">
            Showcasing my technical projects and contributions
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="card glass-card w-full max-w-2xl text-center"
          >
            <div className="card-body items-center">
              <Rocket className="w-16 h-16 text-primary mb-4" />
              <h2 className="card-title text-3xl mb-4">Coming Soon</h2>
              <p className="text-base-content/70 mb-8">
                Exciting projects focused on generative AI applications, including:
              </p>
              <ul className="text-left mb-4">
                <li>🔍 Retrieval-Augmented Generation (RAG) techniques</li>
                <li>🌐 Web applications leveraging AI frameworks</li>
                <li>🔄 n8n automations for seamless workflows</li>
                <li>🤖 Showcasing various agentic AI frameworks and their applications</li>
              </ul>
              <p className="text-base-content/70 mb-8">
                Check back soon or visit my GitHub profile to see what I'm working on.
              </p>
              <div className="card-actions">
                <a
                  href="https://github.com/thependalorian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg gap-2"
                >
                  <Github className="w-5 h-5" />
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <section className="py-20 bg-base-200/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Highlighted Projects</h2>
              <p className="text-xl text-base-content/70">
                Showcasing impactful projects that demonstrate my skills and insights in fintech and social innovation.
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
                  <h3 className="card-title text-2xl mb-4">Time Series Analysis on AMD Stock Prices</h3>
                  <p>
                    Conducted a comprehensive analysis of the influence of news sentiment on AMD stock prices from 1984 to 2024. 
                    Utilizing time series techniques, I examined 159 daily observations and 473 monthly observations, revealing 
                    significant predictive relationships. The findings indicated that daily news sentiment had a stronger impact 
                    on stock returns than annual report sentiment, with the 7-day moving average emerging as the most important 
                    predictor for forecasting stock prices.
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
                  <h3 className="card-title text-2xl mb-4">Airbnb Listings Analysis</h3>
                  <p>
                    Analyzed two Kaggle datasets comprising 458,177 Airbnb listings from 2020 and 2023 to assess the impact 
                    of the COVID-19 pandemic on the rental market. The analysis revealed average prices between $200 and $300 
                    per night and identified the most booked unit types, providing crucial insights for potential investors 
                    looking to navigate the recovering market.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card glass-card"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">Machine Learning in Peer-to-Peer Lending</h3>
                  <p>
                    Developed predictive models for optimizing loan investments in peer-to-peer lending, analyzing over 
                    1.8 million loans worth $15 billion. The project identified a 13.5% default rate and interest rates ranging 
                    from 6.7% to 22.8%. I implemented three return calculation methods, finding that the optimistic method 
                    yielded the highest returns, albeit with increased risk. This project demonstrated the effectiveness of 
                    data-driven strategies in investment decisions and confirmed that recent data models consistently outperformed 
                    random selections.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card glass-card"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">Kit Star - #DeisHacks2023</h3>
                  <p>
                    Kit Star is a custom shipping containerized aquaponics and organic vertical farm solution. This project 
                    creates a symbiotic relationship between fish and plants, reducing waste and producing fresh, healthy produce. 
                    The vertical farm setup optimizes the use of space within the container, maximizing harvest potential and 
                    providing a sustainable food production system.
                  </p>
                  <p>
                    The inspiration for Kit Star came from the challenges faced by The Land's Sake Farm and similar organizations 
                    in sustainable agriculture. We aimed to address limited space and resources while revolutionizing their operations.
                  </p>
                  <p>
                    One of the biggest challenges was creating a sustainable closed-loop system between the fish and plants. 
                    We learned the importance of optimizing space while ensuring a healthy environment for both.
                  </p>

                  <div className="card-actions justify-center mt-4">
                    <a
                      href="https://devpost.com/software/kit-star"
                      className="btn btn-primary btn-outline btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Devpost
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
                  <h3 className="card-title text-2xl mb-4">FRONT-AI - #DeisHacks2024</h3>
                  <p>
                    FRONT-AI addresses the complex challenges in healthcare data management, particularly in complying with HIPAA regulations. 
                    This project simplifies the management of sensitive patient data for healthcare organizations, ensuring compliance while 
                    being user-friendly.
                  </p>
                  <p>
                    We built a specialized hardware device capable of operating offline for maximum security, integrating a custom-trained 
                    Large Language Model (FRONT-LLM) to process healthcare data in accordance with HIPAA guidelines.
                  </p>

                  <div className="card-actions justify-center mt-4">
                    <a
                      href="https://devpost.com/software/front-ai"
                      className="btn btn-primary btn-outline btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Devpost
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
} 
