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
                Exciting projects are in development. Check back soon or visit my GitHub profile
                to see what I'm working on.
              </p>
              <div className="card-actions">
                <a
                  href="https://github.com/georgenekwaya"
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
      </div>
    </PageLayout>
  );
} 