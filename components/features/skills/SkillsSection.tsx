/**
 * Skills Section Component - Animated Version
 * 
 * Purpose: Display technical skills with Framer Motion animations
 * Location: /components/features/skills/SkillsSection.tsx
 * 
 * Features:
 * - Framer Motion scroll-triggered animations
 * - Category icons with primary color accents
 * - Staggered animations for each category
 * - Grid layout for skill categories
 * - Hover effects on skill tags
 * - Uses semantic tokens and HSL color system
 */

'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Globe, BarChart3, Briefcase, Eye, Mic, Database, Cloud } from "lucide-react";
import { skills } from "@/lib/data/professional-data";

// Map category names to icons
const categoryIcons: Record<string, React.ReactNode> = {
  "Programming & Data Science": <Code className="w-5 h-5" />,
  "AI/ML & Frameworks": <Brain className="w-5 h-5" />,
  "Web Development & Cloud": <Globe className="w-5 h-5" />,
  "Data Science & Analytics": <BarChart3 className="w-5 h-5" />,
  "Business & Analytics": <Briefcase className="w-5 h-5" />,
  "Computer Vision & Real-Time Processing": <Eye className="w-5 h-5" />,
  "Voice AI & Speech Processing": <Mic className="w-5 h-5" />,
  // Fallback icons for any unmapped categories
  "Programming": <Code className="w-5 h-5" />,
  "AI/ML": <Brain className="w-5 h-5" />,
  "Web Development": <Globe className="w-5 h-5" />,
  "Data Science": <BarChart3 className="w-5 h-5" />,
  "Business Analytics": <Briefcase className="w-5 h-5" />,
};

// Transform skills data to match inspiration format
const skillsArray = Object.entries(skills).map(([category, items]) => ({
  category,
  items,
}));

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          <span className="section-title">Technical Skills</span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsArray.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="bento-item"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {categoryIcons[category.category] || <Code className="w-5 h-5" />}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
