# Projects Components

## Overview

Components for displaying featured projects on the website, with special emphasis on Buffr as the flagship project.

## Components

### 1. `ProjectCard.tsx`
Generic project card component for displaying project information.

**Props:**
- `title`: Project name
- `description`: Project description
- `techStack`: Array of technologies used
- `features`: Array of key features
- `innovation`: Optional innovation highlight
- `links`: Optional links (website, github, demo)
- `status`: Project status (completed, in-progress, learning)
- `image`: Optional project image
- `className`: Additional CSS classes

**Usage:**
```tsx
<ProjectCard
  title="Yukio"
  description="AI-Powered Japanese Language Learning Platform"
  techStack={['FastAPI', 'Next.js 14', 'TypeScript']}
  features={['AI tutor chat', 'Structured lessons']}
  innovation="RAG-powered AI tutor"
  status="completed"
/>
```

### 2. `BuffrProjectCard.tsx`
Specialized card component for Buffr payment app with enhanced features.

**Features:**
- Highlighted AI agents section with icons
- Bank integration badges
- Platform indicators (iOS, Android, Web)
- Special gradient styling
- Flagship project badge

**Usage:**
```tsx
<BuffrProjectCard />
```

### 3. `ProjectsSection.tsx`
Main section component that displays all projects in a grid layout.

**Features:**
- Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- Filter by status (all, completed, in-progress, learning)
- Buffr displayed as full-width featured card
- Empty state handling

**Usage:**
```tsx
<ProjectsSection />
```

## Project Data

Projects are defined in `ProjectsSection.tsx` as a constant array. To add new projects:

1. Add project object to `PROJECTS` array
2. Include all required fields (id, title, description, techStack, features, status)
3. Optional fields: innovation, links, image

## Styling

Components use:
- **DaisyUI** for base components (cards, badges, buttons)
- **Tailwind CSS** for layout and spacing
- **Framer Motion** for animations
- **Lucide React** for icons
- **Japan-inspired colors** from tailwind.config.js

## Design Principles

1. **Minimalism (簡素)**: Clean, uncluttered layouts
2. **Whitespace (余白)**: Generous spacing between elements
3. **Harmony (調和)**: Consistent styling across cards
4. **Subtlety (控えめ)**: Gentle hover effects and transitions

## Future Enhancements

- [ ] Project detail modal/page
- [ ] Search functionality
- [ ] Sort by date/technology
- [ ] Project screenshots gallery
- [ ] Case study links
- [ ] Technology filter
- [ ] Bento grid layout option
