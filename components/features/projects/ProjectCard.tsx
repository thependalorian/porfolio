/**
 * Project Card Component
 * 
 * Purpose: Display project information in a card format
 * Location: /components/features/projects/ProjectCard.tsx
 * 
 * Features:
 * - Responsive card layout
 * - Japan-inspired design (minimalist, clean)
 * - Hover effects
 * - External links
 * - Technology tags
 * - Feature highlights
 */

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, Globe } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  features: string[]
  innovation?: string
  links?: {
    website?: string
    github?: string
    demo?: string
  }
  status?: 'completed' | 'in-progress' | 'learning'
  image?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  features,
  innovation,
  links,
  status = 'completed',
  image,
  className = '',
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`card bg-act-moss-green/20 border border-border-light shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm ${className}`}
    >
      {/* Project Image */}
      {image && (
        <figure className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {status === 'in-progress' && (
            <div className="absolute top-4 right-4 badge badge-warning">
              In Progress
            </div>
          )}
          {status === 'learning' && (
            <div className="absolute top-4 right-4 badge badge-info">
              Learning
            </div>
          )}
        </figure>
      )}

      <div className="card-body">
        {/* Title */}
        <h3 className="card-title text-2xl font-bold text-text-primary mb-2 font-act-title tracking-act-title">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-4 leading-relaxed font-act-body">{description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-tertiary mb-2 uppercase tracking-wide font-act-title">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="badge badge-outline badge-sm text-xs border-border-light text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-tertiary mb-2 uppercase tracking-wide font-act-title">
            Key Features
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary font-act-body">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Innovation Highlight */}
        {innovation && (
          <div className="alert alert-info mb-4 py-2 bg-bg-secondary border border-border-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-5 h-5 text-act-spring-green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-xs font-medium text-text-primary font-act-body">{innovation}</span>
          </div>
        )}

        {/* Links */}
        {links && (
          <div className="card-actions justify-end mt-auto pt-4 border-t border-border-light">
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary gap-2"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline gap-2 border-act-spring-green text-act-spring-green hover:bg-act-spring-green hover:text-black"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
