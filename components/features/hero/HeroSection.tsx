/**
 * Hero Section Component
 * 
 * Purpose: Animated hero section with profile, name, tagline, contact info, and CTAs
 * Location: /components/features/hero/HeroSection.tsx
 * 
 * Features:
 * - Framer Motion animations
 * - Animated background gradient elements
 * - Profile avatar image in circular gradient border
 * - Staggered text animations
 * - Contact info with icons
 * - CTA buttons (View Projects, Download Resume, Japanese Resumes)
 */

'use client';

import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data/professional-data";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const secondName = nameParts[1];
  const remainingName = nameParts.slice(2).join(" ");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-moss/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-moss p-1.5 md:p-2 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <Image
                    src="/images/profile/pendo-avatar.png"
                    alt="George Nekwaya"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">{firstName}</span>
            <br className="md:hidden" />
            <span className="text-primary"> {secondName}</span>
            <br className="hidden md:block" />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl block mt-2">
              {remainingName}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-primary font-medium tracking-wide mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm md:text-base">{personalInfo.location}</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              <span className="text-sm md:text-base">{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={18} className="text-primary" />
              <span className="text-sm md:text-base">LinkedIn</span>
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/public/George-Nekwaya-Resume.pdf"
              download
              className="px-6 py-3 border border-muted-foreground/30 text-foreground rounded-lg font-medium hover:bg-muted/20 transition-all hover:scale-105"
            >
              Download Resume
            </Link>
            <Link
              href="/resume/japanese"
              className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all hover:scale-105"
            >
              Japanese Resumes (日本語履歴書)
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
