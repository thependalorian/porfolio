/**
 * Bento Grid Components
 * 
 * Purpose: Japanese-inspired bento box-style grid layouts
 * Location: /components/ui/BentoGrid.tsx
 * 
 * Based on examples from BENTO_GRID_IMPLEMENTATION.md and yukio-frontend
 * Uses high-contrast colors from BuffrPay branding guide (WCAG AA compliant)
 */

'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BentoGridProps {
  children: ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function BentoGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
}: BentoGridProps) {
  const gapClasses = {
    sm: 'gap-4 sm:gap-4 md:gap-6',
    md: 'gap-4 sm:gap-4 md:gap-6',
    lg: 'gap-4 sm:gap-4 md:gap-6 lg:gap-8',
  }

  // Map column numbers to Tailwind classes
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  }

  const smCols = colClasses[columns.sm as keyof typeof colClasses] || 'grid-cols-1'
  const mdCols = colClasses[columns.md as keyof typeof colClasses] || 'grid-cols-2'
  const lgCols = colClasses[columns.lg as keyof typeof colClasses] || 'grid-cols-3'
  const xlCols = columns.xl ? colClasses[columns.xl as keyof typeof colClasses] || '' : ''

  return (
    <div
      className={cn(
        'grid',
        smCols,
        `md:${mdCols}`,
        `lg:${lgCols}`,
        xlCols && `xl:${xlCols}`,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: ReactNode
  span?: {
    col?: number
    row?: number
  }
  className?: string
  glassmorphism?: boolean
  hover?: boolean
  variant?: 'default' | 'elevated' | 'outline'
}

export function BentoCard({
  children,
  span,
  className = '',
  glassmorphism = false,
  hover = true,
  variant = 'default',
}: BentoCardProps) {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-act-moss-green/20 border border-act-sand-gray/30 shadow-sm backdrop-blur-sm',
    elevated: 'bg-act-moss-green/25 border border-act-sand-gray/40 shadow-lg backdrop-blur-sm',
    outline: 'bg-transparent border-2 border-act-spring-green', // ACT Spring Green for frames
  }

  const glassmorphismClasses = glassmorphism
    ? 'backdrop-blur-sm bg-act-moss-green/30 border border-act-sand-gray/40'
    : ''

  // Map span numbers to Tailwind classes
  const spanColMap: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    12: 'col-span-12',
  }

  const spanRowMap: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
  }

  // Make span classes responsive - only apply on md+ screens
  // On mobile (sm), always use col-span-1 to prevent overlapping
  const spanColClass = span?.col 
    ? `col-span-1 md:${spanColMap[span.col] || 'col-span-1'}` 
    : ''
  const spanRowClass = span?.row 
    ? `md:${spanRowMap[span.row] || 'row-span-1'}` 
    : ''
  const spanClasses = `${spanColClass} ${spanRowClass}`.trim()

  const cardClasses = cn(
    baseClasses,
    variantClasses[variant],
    glassmorphismClasses,
    spanClasses,
    hover && 'hover:shadow-xl hover:-translate-y-1',
    className
  )

  if (hover) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={cardClasses}>{children}</div>
}
