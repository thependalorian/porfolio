/**
 * Professional Experience Section - Animated Version
 * 
 * Purpose: Display professional work experience with Framer Motion animations
 * Location: /components/features/experience/ExperienceSection.tsx
 * 
 * Features:
 * - Framer Motion scroll-triggered animations
 * - Featured experience badge
 * - Staggered animations for each experience
 * - Modern card layout with icons
 * - Uses semantic tokens and HSL color system
 */

'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Star } from "lucide-react";
import { professionalExperience } from "@/lib/data/professional-data";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Transform professionalExperience to match the expected format
  const experiences = professionalExperience.map((exp, index) => ({
    title: exp.role,
    company: exp.company,
    location: exp.location,
    period: exp.period,
    description: exp.description || "",
    achievements: exp.points.flatMap((pointSection) => 
      pointSection.items.map((item) => 
        pointSection.title ? `${pointSection.title}: ${item}` : item
      )
    ),
    featured: index === 0, // First experience (Buffr) is featured
  }));

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <span className="section-title">Experience</span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Building the <span className="text-gradient">Future of Finance</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bento-item relative ${exp.featured ? "border-primary/30" : ""}`}
              >
                {exp.featured && (
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <Star size={12} /> Featured
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                )}

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
