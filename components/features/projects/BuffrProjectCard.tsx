/**
 * Buffr Project Card Component
 * 
 * Purpose: Specialized card component for Buffr payment app
 * Location: /components/features/projects/BuffrProjectCard.tsx
 * 
 * Features:
 * - Highlighted AI agents section
 * - Bank integration badges
 * - Platform indicators (iOS, Android, Web)
 * - Special styling for flagship project
 */

'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Shield, Brain, TrendingUp, BookOpen, Settings, MessageSquare } from 'lucide-react'
import { ProjectCard } from './ProjectCard'

const AI_AGENTS = [
  { name: 'Guardian', icon: Shield, description: 'Fraud detection & credit scoring' },
  { name: 'Transaction Analyst', icon: TrendingUp, description: 'Spending analysis & budgets' },
  { name: 'Scout', icon: Globe, description: 'Market intelligence & rates' },
  { name: 'Mentor', icon: BookOpen, description: 'Financial education' },
  { name: 'Crafter', icon: Settings, description: 'Workflow automation' },
  { name: 'Companion', icon: MessageSquare, description: 'AI orchestrator' },
]

const BANKS = [
  'Bank Windhoek',
  'FNB Namibia',
  'Standard Bank',
  'Nedbank',
  'Banco Atlantico',
  'Bank BIC',
  'Letshego Bank',
]

export function BuffrProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="card bg-gradient-to-br from-act-spring-green/5 to-act-mint/5 border-2 border-act-spring-green/30 shadow-xl backdrop-blur-sm"
    >
      <div className="card-body p-6">
        {/* Header with Badge */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="card-title text-3xl font-bold text-text-primary mb-2 font-act-title">
              Buffr
            </h3>
            <p className="text-lg text-text-secondary font-medium font-act-body">
              Intelligent Payment Companion for Namibia
            </p>
          </div>
          <div className="badge badge-primary badge-lg bg-act-spring-green text-black">Flagship Project</div>
        </div>

        {/* Platforms */}
        <div className="flex gap-3 mb-4">
          <div className="flex items-center gap-1 text-sm text-text-secondary">
            <Smartphone className="w-4 h-4" />
            <span>iOS</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-text-secondary">
            <Smartphone className="w-4 h-4" />
            <span>Android</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-text-secondary">
            <Globe className="w-4 h-4" />
            <span>Web</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-primary mb-6 leading-relaxed">
          A modern mobile payment application built for Namibia, providing seamless money transfers, 
          smart financial insights, and AI-powered assistance. Features multi-agent AI architecture 
          with 6 specialized agents for intelligent financial management.
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-tertiary mb-3 uppercase tracking-wide">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              'React Native',
              'Expo',
              'TypeScript',
              'Neon PostgreSQL',
              'FastAPI',
              'DeepSeek AI',
            ].map((tech, index) => (
              <span
                key={index}
                className="badge badge-primary badge-sm bg-act-spring-green text-black border-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI Agents Section */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-tertiary mb-3 uppercase tracking-wide flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Agents
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {AI_AGENTS.map((agent, index) => {
              const Icon = agent.icon
              return (
                <div
                  key={index}
                  className="p-3 bg-act-moss-green/20 rounded-lg border border-border-light hover:border-act-spring-green/50 transition-colors backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-act-spring-green" />
                    <span className="font-semibold text-sm text-text-primary">{agent.name}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{agent.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bank Integration */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-tertiary mb-3 uppercase tracking-wide">
            Bank Integration
          </h4>
          <div className="flex flex-wrap gap-2">
            {BANKS.map((bank, index) => (
              <span
                key={index}
                className="badge badge-outline badge-sm border-border-light text-text-secondary"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-text-tertiary mb-3 uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm text-text-primary">
            <li>Instant P2P transfers, QR payments, scheduled payments</li>
            <li>Multi-wallet management (savings, business, personal)</li>
            <li>Group savings (Stokvel), bill splitting, contributions</li>
            <li>Utilities: Airtime, bills, insurance, event tickets</li>
            <li>Real-time fraud detection with ML models</li>
            <li>Gamification system with points, quests, achievements</li>
            <li>Financial literacy learning modules</li>
            <li>IPP (Instant Payment Platform) alignment</li>
          </ul>
        </div>

        {/* Innovation Highlight */}
        <div className="alert alert-success mb-4 bg-act-spring-green/10 border border-act-spring-green/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6 text-act-spring-green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h4 className="font-bold text-text-primary">Innovation Highlights</h4>
            <div className="text-sm text-text-secondary">
              Multi-agent AI architecture • Real-time fraud detection • 
              Gamification • Financial literacy • IPP alignment
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="card-actions justify-end mt-auto pt-4 border-t border-border-light">
          <a
            href="https://buffr.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2 bg-act-spring-green text-black hover:bg-act-mint font-act-body"
          >
            <Globe className="w-5 h-5" />
            Visit buffr.ai
          </a>
        </div>
      </div>
    </motion.div>
  )
}
