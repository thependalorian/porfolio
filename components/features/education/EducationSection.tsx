/**
 * Education Section Component - Animated Version
 * 
 * Purpose: Display educational background with Framer Motion animations
 * Location: /components/features/education/EducationSection.tsx
 * 
 * Features:
 * - Framer Motion scroll-triggered animations
 * - Graduation cap icons with primary color accents
 * - Staggered animations for each education entry
 * - Award icons for special recognitions
 */

'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education, awards, hassenfeldFellowship } from "@/lib/data/professional-data";

// Transform education data to match format
const educationArray = [
  {
    institution: education.mba.school,
    degree: education.mba.degree,
    period: education.mba.date,
    location: education.mba.location,
    featured: true,
    details: [
      // GPA
      ...(education.mba.gpa ? [`GPA: ${education.mba.gpa}`] : []),
      // Concentrations
      ...(education.mba.concentrations || []),
      // All Brandeis Awards (excluding Hassenfeld Fellowship - will be split into Israel and India)
      ...awards
        .filter(award => award.org.includes('Brandeis') && !award.award.includes('Hassenfeld'))
        .map(award => `${award.award} (${award.year})`),
      // Hassenfeld Immersion Program - Israel (2023) - All experiences together
      `Hassenfeld Immersion Program Fellow - Israel (2023): ${hassenfeldFellowship.locations
        .find(loc => loc.name.includes('Israel'))
        ?.points.join('; ') || ''}`,
      // Hassenfeld Immersion Program - India (2024) - All experiences together
      `Hassenfeld Immersion Program Fellow - India (2024): ${hassenfeldFellowship.locations
        .find(loc => loc.name.includes('India'))
        ?.points.join('; ') || ''}`,
      // All Leadership roles (excluding duplicates with awards)
      ...(education.mba.leadership || []).filter(role => !role.includes('Student Group of the Year')),
    ],
  },
  {
    institution: education.beng.school,
    degree: education.beng.degree,
    period: education.beng.date,
    location: education.beng.location,
    featured: false,
    details: [
      // Capstone
      ...(education.beng.capstone ? [`Capstone: ${education.beng.capstone}`] : []),
      // Extra information
      ...(education.beng.extra || []),
    ],
  },
  {
    institution: 'Oshigambo High School',
    degree: 'High School Diploma',
    period: '2008',
    location: 'Oshigambo, Namibia',
    featured: false,
    details: [
      'Founded Chess Club',
      'Founded Science Club',
    ],
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <span className="section-title">Education</span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Academic <span className="text-gradient">Foundation</span>
          </h2>

          <div className="space-y-6">
            {educationArray.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`bento-item ${edu.featured ? "border-2 border-primary" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.details.map((detail, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                        >
                          {detail.includes("Fellow") || detail.includes("Prize") ? (
                            <Award size={12} className="text-primary" />
                          ) : null}
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
