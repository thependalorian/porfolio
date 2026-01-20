/**
 * Projects Section Component - Animated Version
 * 
 * Purpose: Display all featured projects with Framer Motion animations
 * Location: /components/features/projects/ProjectsSection.tsx
 * 
 * Features:
 * - Framer Motion scroll-triggered animations
 * - Featured project badge
 * - Staggered animations for each project
 * - Grid layout with featured projects spanning 2 columns
 * - Tech stack badges
 * - External links with icons
 * - Uses semantic tokens and HSL color system
 */

'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";
import { researchProjects, hackathonProjects } from '@/lib/data/professional-data';

// Transform existing project data to match inspiration format
const projects = [
  {
    title: 'Buffr Payment Companion',
    description: "AI-powered digital wallet platform designed to empower Namibia's freelance and gig economy workers. Instant payment infrastructure for emerging markets, inspired by India's UPI.",
    tech: ['Next.js', 'React Native', 'Apache Fineract', 'DeepSeek AI', 'PostgreSQL', 'TypeScript'],
    link: 'https://buffr.ai',
    featured: true,
  },
  {
    title: 'AnchorBridge Support House',
    description: 'Complete brand identity, website development, and business strategy for affordable independent housing provider in Marion County, Indiana. Developed comprehensive brand identity from scratch including logo design, color palette (navy blue, gold, teal), typography system, and brand guidelines. Created complete business plan and marketing materials. Built production-ready website with full responsive design, accessibility compliance (WCAG 2.1 Level AA), Indiana legal compliance (ICDPA, housing regulations), multi-step application forms, and email integration. Delivered end-to-end solution from concept to deployment.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Brand Identity Design', 'Logo Design', 'UI/UX Design', 'Business Strategy', 'Marketing Materials'],
    link: 'https://anchorbridge-website.vercel.app',
    featured: true,
  },
  {
    title: 'Yukio',
    description: 'AI-Powered Japanese Language Learning Platform with RAG agent, structured lessons, and voice practice.',
    tech: ['FastAPI', 'RAG Agent', 'LanceDB', 'Ollama LLM', 'Next.js 14', 'TypeScript'],
    featured: false,
  },
  {
    title: 'Yukio Frontend',
    description: 'Modern Japanese Learning Web Application with real-time AI chat and progress tracking.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Server-Sent Events'],
    featured: false,
  },
  {
    title: 'Buffr Host',
    description: 'Hospitality Management Platform with complete PMS and Sofia AI Concierge - an intelligent email agent that monitors inboxes, automatically responds to guest inquiries, sends quotations and confirmations, and maintains conversation context across email and chat channels.',
    tech: ['Next.js 16', 'Neon PostgreSQL', 'Prisma ORM', 'Deepseek AI', 'Email Automation', 'AI Agent'],
    link: 'https://host.buffr.ai',
    featured: false,
  },
  {
    title: 'Sports Analytics & Video Analysis',
    description: 'Enterprise-grade sports intelligence platform for professional clubs, scouts, and analysts with real-time video analysis.',
    tech: ['YOLO11x', 'ByteTrack', 'EasyOCR', 'PostgreSQL', 'LanceDB', 'FastAPI', 'Next.js 14'],
    featured: false,
  },
  {
    title: 'Computer Vision & Gesture Recognition',
    description: 'Real-time computer vision applications: sign language interpretation, emotion analysis, gesture control, and pose estimation.',
    tech: ['MediaPipe', 'OpenCV', 'Three.js', 'Real-time gesture recognition', 'Emotional AI'],
    featured: false,
  },
  {
    title: 'Voice AI & Local Processing',
    description: 'Privacy-focused, offline voice AI with local LLM inference and real-time speech processing.',
    tech: ['Ollama', 'Moonshine (STT)', 'Kokoro (TTS)', 'FastRTC', 'WebRTC'],
    featured: false,
  },
  {
    title: 'Financial AI & Knowledge Graphs',
    description: 'ReAct (Reasoning + Acting) AI agent for financial analysis combining RAG with knowledge graphs.',
    tech: ['Pydantic AI', 'PostgreSQL (pgvector)', 'Neo4j', 'FastAPI', 'Ollama/OpenAI'],
    featured: false,
  },
  // Add research projects
  ...researchProjects.map((project) => ({
    title: project.title,
    description: project.description,
    tech: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'],
    featured: false,
  })),
  // Add hackathon projects
  ...hackathonProjects.map((project) => ({
    title: project.title,
    description: project.description,
    tech: ['Next.js', 'TypeScript', 'AI/ML', 'Full-Stack Development'],
    link: project.link,
    featured: false,
  })),
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <span className="section-title">Projects</span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Innovation in <span className="text-gradient">Action</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className={`bento-item group ${
                  project.featured ? "md:col-span-2 lg:col-span-2 border-primary/30" : ""
                }`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                    <Star size={16} /> Featured Project
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visit Project <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
