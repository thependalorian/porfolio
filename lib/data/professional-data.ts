/**
 * Professional Data
 * 
 * Purpose: Centralized data for professional experience, education, awards, etc.
 * Location: /lib/data/professional-data.ts
 */

export const personalInfo = {
  name: "GEORGE NATANGWE PENDAPALA NEKWAYA",
  initials: "GN",
  tagline: "Fintech | AI | Data | Strategy",
  location: "Boston, MA | Windhoek, Namibia",
  email: "george@buffr.ai",
  linkedin: "https://www.linkedin.com/in/george-nekwaya",
  website: "https://buffr.ai",
}

export const companyLogos: Record<string, string> = {
  'The Alliance for Climate Transition (ACT)': '/images/logos/ACT Primary Logo Horizontal Black Text Default.svg',
  'Buffr Inc.': '/images/logos/Buffr_Logo.png',
  'Insait IO': '/images/logos/insait_logo.png',
  'Brandeis International Business School': '/images/logos/IBS_logo_stack_center_blue_DIGITAL.png',
  'Polar Power Inc.': '/images/logos/polarpower_logo.png',
  'Lithon Project Consultants': '/images/logos/lithon.png',
  'Namibia University of Science & Technology': '/images/logos/nust.png',
  'Aquasaic Corporation': '/images/logos/aquasaic_logo.png',
}

export interface ProfessionalExperience {
  role: string
  company: string
  location: string
  period: string
  description: string | null
  logo: string | null
  points: Array<{
    title: string | null
    items: string[]
  }>
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    role: 'Founder',
    company: 'Buffr Inc.',
    location: 'Windhoek, Namibia',
    period: 'January 2023 – Present',
    description: "Building financial identity for Namibia's informal economy—a sector representing approximately 24.7% of GDP (approximately N$8 billion).",
    logo: companyLogos['Buffr Inc.'],
    points: [
      {
        title: 'Products Developed',
        items: [
          'Buffr Payment Companion — Instant payment infrastructure for emerging markets, inspired by India\'s UPI',
          'BuffrLend — Digital lending module',
          'BuffrSign — Digital signature module',
          'Buffr Host — Front desk AI for independent Hospitality properties',
        ],
      },
      {
        title: 'Key Achievements',
        items: [
          'Conducted comprehensive field studies on digital payment ecosystems across 5+ countries',
          'Selected for MassChallenge, Global Venture Labs, and Brandeis Spark accelerators',
          'Developed AI-powered credit scoring using ML-driven transaction analysis',
        ],
      },
    ],
  },
  {
    role: 'Project Manager, DEIJ & Workforce Development',
    company: 'The Alliance for Climate Transition (ACT)',
    location: 'Massachusetts, USA',
    period: 'October 2024 – June 2025',
    description: 'Led comprehensive workforce development assessment in partnership with Massachusetts Clean Energy Center (MassCEC).',
    logo: companyLogos['The Alliance for Climate Transition (ACT)'],
    points: [
      {
        title: 'Key Accomplishments',
        items: [
          'Conducted 14+ in-depth interviews with clean energy companies (startups to Fortune 500)',
          'Analyzed hiring needs across 50+ companies in the clean energy sector',
          'Developed diversity and inclusion strategies for clean energy workforce',
          'Authored comprehensive workforce development assessment report with actionable recommendations',
        ],
      },
      {
        title: 'Technical Project',
        items: [
          'ACT Climate Economy Careers Platform — Career platform with AI-powered resume analysis, skill gap identification, and real-time chat interface',
        ],
      },
    ],
  },
  {
    role: 'Business Development Consultant',
    company: 'Aquasaic Corporation',
    location: 'Remote',
    period: 'October 2024 – March 2025',
    description: 'Strategic consulting for innovative water treatment technology startup',
    logo: companyLogos['Aquasaic Corporation'],
    points: [
      {
        title: null,
        items: [
          'Designed initial architecture for Aquasaic Aqua Intel Platform',
          'Conducted commercial and technical research on cutting-edge water treatment technologies',
          'Developed pitch decks tailored for funding opportunities (municipal, industrial, residential sectors)',
        ],
      },
    ],
  },
  {
    role: 'Brand Identity & Web Development Consultant',
    company: 'AnchorBridge Support House LLC',
    location: 'Marion County, Indiana',
    period: 'January 2026',
    description: 'Complete brand identity creation, website development, and business strategy for affordable independent housing provider',
    logo: null,
    points: [
      {
        title: 'Brand Identity & Design',
        items: [
          'Created complete brand identity from scratch including logo design, color palette (navy blue, gold, teal), and typography system',
          'Developed comprehensive brand guidelines and visual identity system',
          'Designed marketing materials and brand assets',
        ],
      },
      {
        title: 'Website Development',
        items: [
          'Built production-ready website with Next.js 14, TypeScript, and Tailwind CSS',
          'Implemented full responsive design optimized for all screen sizes (mobile-first approach)',
          'Achieved WCAG 2.1 Level AA accessibility compliance',
          'Ensured Indiana legal compliance (ICDPA privacy regulations, housing service terms)',
          'Created multi-step application forms with validation and email integration',
          'Implemented contact forms, referral form PDF, and comprehensive resource pages',
        ],
      },
      {
        title: 'Business Strategy',
        items: [
          'Developed comprehensive business plan for affordable independent housing model',
          'Created marketing strategy and materials for senior housing market',
          'Established brand positioning and messaging framework',
        ],
      },
    ],
  },
  {
    role: 'Business Development Intern',
    company: 'Insait IO',
    location: 'Tel Aviv, Israel',
    period: 'June 2023 – July 2023',
    description: 'Fintech predictive analytics startup focused on AI applications in banking.',
    logo: companyLogos['Insait IO'],
    points: [
      {
        title: null,
        items: [
          'Analyzed Valley National Bank financial data, identifying real estate loans as key revenue driver (>30% of industry revenue)',
          'Researched EU AI Act and US regulatory compliance considerations for AI in finance',
          'Developed compliance framework documentation for AI applications in banking',
        ],
      },
    ],
  },
  {
    role: 'Instructional Assistant',
    company: 'Brandeis International Business School',
    location: 'Waltham, MA, USA',
    period: 'August 2023 – June 2024',
    description: 'Supported graduate-level business education courses',
    logo: companyLogos['Brandeis International Business School'],
    points: [
      {
        title: null,
        items: [
          'Served as Instructional Assistant for Social Impact Investing and MBA Career and Management Communication courses',
          'Facilitated classroom discussions, provided academic support, and assisted with course material development',
          'Supported student learning and course delivery for graduate-level business education',
        ],
      },
    ],
  },
  {
    role: 'Business Operations Manager / Site Engineer',
    company: 'Polar Power Inc.',
    location: 'Windhoek, Namibia',
    period: 'July 2018 – April 2019',
    description: 'Led operations for multinational telecommunications and renewable energy company',
    logo: companyLogos['Polar Power Inc.'],
    points: [
      {
        title: 'Key Achievements',
        items: [
          'Managed team of 10+ employees in Namibia office, building and managing relationships with major telecommunications clients (MTC, MTN) and SADC government stakeholders',
          'Successfully constructed 10 telecommunication towers for MTC (Namibia\'s largest carrier)',
          'Secured contract to design and deliver 2 portable WiFi trailer masts to BoFiNet (Botswana)',
          'Managed optical fiber installation project in Swakopmund, coordinating with municipal stakeholders',
        ],
      },
    ],
  },
  {
    role: 'Operations & General Manager',
    company: 'Etuna Guesthouse & Tours',
    location: 'Windhoek, Namibia',
    period: '2010 – 2020',
    description: 'Managed operations of family-owned hospitality facility',
    logo: null,
    points: [
      {
        title: null,
        items: [
          'Managed operations of family-owned 35-room hospitality facility',
          'Oversaw guest services, tour coordination, and daily business operations',
        ],
      },
    ],
  },
  {
    role: 'International Sales Representative',
    company: 'Kanie Distribution and Supply Chain',
    location: 'Windhoek, Namibia',
    period: '2020 – 2021',
    description: 'International business development and strategic partnerships',
    logo: null,
    points: [
      {
        title: null,
        items: [
          'Represented company at Dubai Expo 2020 for international business development, presenting technical solutions at Namibia\'s 4th Industrial Revolution Expo',
          'Developed strategic partnerships across SADC region, conducting market research and competitive analysis to identify growth opportunities',
        ],
      },
    ],
  },
  {
    role: 'Site Operations Coordinator',
    company: 'Namibia Road Products & Services (NRP)',
    location: 'Windhoek, Namibia',
    period: '2017 – 2018',
    description: 'Led road construction operations and infrastructure development',
    logo: null,
    points: [
      {
        title: null,
        items: [
          'Led road construction operations managing teams of 15 workers, completing 3.5 km road upgrade project in Katutura township',
          'Coordinated with municipal stakeholders and managed project timelines, ensuring on-time delivery of infrastructure improvements',
          'Supervised road construction activities, quality control, and safety compliance for infrastructure development projects',
        ],
      },
    ],
  },
  {
    role: 'Civil Engineering Intern',
    company: 'Lithon Project Consultants',
    location: 'Ongwediva, Namibia',
    period: 'November 2015 – January 2016',
    description: null,
    logo: companyLogos['Lithon Project Consultants'],
    points: [
      {
        title: null,
        items: [
          'Evaluated 15+ tender documents for compliance with Namibian standards',
          'Conducted site inspections for stormwater infrastructure projects',
          'Assisted with civil engineering projects focusing on infrastructure development and municipal services',
        ],
      },
    ],
  },
]

export interface ResearchProject {
  title: string
  year: string
  description: string
}

export const researchProjects: ResearchProject[] = [
  {
    title: 'Machine Learning in Peer-to-Peer Lending',
    year: '2024',
    description: 'Analyzed 1.8 million loan records using machine learning for investment optimization. Implemented predictive models: random forests, gradient boosting.',
  },
  {
    title: 'Time Series Analysis: AMD Stock Prices (1984-2024)',
    year: '2024',
    description: 'Applied econometric techniques to 40-year stock price dataset. Incorporated sentiment analysis of news articles and annual reports.',
  },
  {
    title: 'COVID-19 Economic Impact Analysis',
    year: '2024',
    description: 'Analyzed pandemic effects on rental markets using Airbnb datasets (458,177 listings). Applied statistical techniques to assess market recovery patterns.',
  },
  {
    title: 'Stripe Payment Processing Platform Analysis',
    year: '2023',
    description: 'Comprehensive analysis of mobile payment market in SADC region. Researched M-Pesa, Flutterwave, PayStack competitive landscape.',
  },
]

export interface HackathonProject {
  title: string
  event: string
  description: string
  link: string
}

export const hackathonProjects: HackathonProject[] = [
  {
    title: 'LifeCompass',
    event: 'Old Mutual Tech Innovation Hackathon',
    description: 'AI-powered insurance platform for Old Mutual Namibia with knowledge graph and hybrid search. Unified digital platform connecting customer self-service with advisor productivity, featuring AI chat assistant, product exploration, and seamless advisor escalation.',
    link: 'https://lifecompass.buffr.ai',
  },
  {
    title: 'Kit Star',
    event: 'DeisHacks 2023',
    description: 'Custom shipping containerized aquaponics and organic vertical farm solution. Creates a symbiotic relationship between fish and plants, reducing waste and producing fresh, healthy produce.',
    link: 'https://devpost.com/software/kit-star',
  },
  {
    title: 'FRONT-AI Healthcare',
    event: 'DeisHacks 2024',
    description: 'Addresses complex challenges in healthcare data management, particularly in complying with HIPAA regulations. Simplifies the management of sensitive patient data for healthcare organizations, ensuring compliance while being user-friendly.',
    link: 'https://devpost.com/software/front-ai',
  },
]

export interface Education {
  degree: string
  school: string
  location: string
  date: string
  logo: string
  gpa?: string
  concentrations?: string[]
  courses?: string[]
  leadership?: string[]
  capstone?: string
  extra?: string[]
}

export const education: { mba: Education; beng: Education } = {
  mba: {
    degree: 'Master of Business Administration (STEM-Designated)',
    school: 'Brandeis International Business School',
    location: 'Waltham, MA',
    date: 'May 2024',
    logo: companyLogos['Brandeis International Business School'],
    concentrations: ['Data Analytics', 'Strategy & Innovation'],
    gpa: '3.45/4.0',
    courses: [
      'Advanced Data Analytics',
      'Competition and Strategy',
      'Machine Learning for Business & Finance',
      'Marketing Management',
      'Forecasting in Finance and Economics',
      'Business Dynamics: Managing in a Complex World',
      'Python and Applications to Business Analytics',
      'Business in Global Markets',
      'Information Visualization',
      'Entrepreneurship and Rapid Prototyping',
      'Credit Risk Analysis',
      'Business & Economic Strategies in Emerging Markets',
    ],
    leadership: [
      'Vice President, International Business School Student Association (IBSSA)',
      'Graduate Student Senator, Graduate Student Association (GSA) (Aug 2023 - May 2024)',
      'Asper Center for Global Entrepreneurship - Intern (Feb 2024 - May 2024)',
      'Instructional Assistant, Social Impact Investing (Jan 2024 - June 2024)',
      'Instructional Assistant, MBA Career and Management Communication (Aug 2023 - Dec 2023)',
      'Board Member, Student Conduct Board (Aug 2023 - Nov 2023)',
      'Led IBSSA to "2023 Student Group of the Year" recognition',
    ],
  },
  beng: {
    degree: 'Bachelor of Engineering: Civil & Environmental Engineering',
    school: 'Namibia University of Science & Technology',
    location: 'Windhoek, Namibia',
    date: 'October 2017',
    logo: companyLogos['Namibia University of Science & Technology'],
    capstone: 'Comprehensive water tower system design for Kalkrand township',
    extra: [
      'International Exchange: FH-Aachen University, Germany (Project Management)',
      'Engineering Students Association Committee Member',
    ],
  },
}

export interface Award {
  award: string
  org: string
  year: string
}

export const awards: Award[] = [
  { award: 'Asper Student Startup Prize Winner (Apps, Software & Computer Science)', org: 'Brandeis University', year: '2023' },
  { award: 'Student Group of the Year (IBSSA)', org: 'Brandeis University', year: '2023' },
  { award: 'Student Choice for Community Engagement (IBSSA)', org: 'Brandeis University', year: '2023' },
  { award: 'Prime Liaison Recognition (GSA)', org: 'Brandeis University', year: '2024' },
  { award: 'Ain Family Fellowship', org: 'Brandeis International Business School', year: '2024' },
  { award: 'Hassenfeld Immersion Program Fellow', org: 'Brandeis International Business School', year: '2023-2024' },
]

export const skills: Record<string, string[]> = {
  'Programming & Data Science': [
    'Python', 
    'R', 
    'SQL', 
    'JavaScript/TypeScript', 
    'PostgreSQL', 
    'Neo4j',
    'ETL (Extraction, Transformation, Loading)',
    'Data Modeling',
  ],
  'AI/ML & Frameworks': [
    'Machine Learning', 
    'LangGraph', 
    'LlamaIndex', 
    'Pydantic AI', 
    'CrewAI', 
    'AutoGen', 
    'Scikit-learn', 
    'Time Series Analysis', 
    'Sentiment Analysis', 
    'RAG Systems',
    'Ollama (Local LLM)',
    'Vector Databases (LanceDB, pgvector)',
    'Knowledge Graphs',
    'ReAct Agents',
  ],
  'Web Development & Cloud': [
    'Next.js (14, 16)', 
    'React', 
    'TypeScript', 
    'FastAPI', 
    'SQLAlchemy', 
    'Prisma ORM',
    'Supabase', 
    'Neon PostgreSQL',
    'Tailwind CSS',
    'Server-Sent Events (SSE)',
    'WebRTC / FastRTC',
    'AWS', 
    'Google Cloud Platform',
  ],
  'Computer Vision & Real-Time Processing': [
    'OpenCV',
    'MediaPipe',
    'YOLO11x',
    'ByteTrack',
    'EasyOCR',
    'Three.js',
    'Real-time Video Analysis',
    'Object Detection & Tracking',
  ],
  'Voice AI & Speech Processing': [
    'Speech-to-Text (STT)',
    'Text-to-Speech (TTS)',
    'Moonshine (STT)',
    'Kokoro (TTS)',
    'Voice AI Integration',
    'Real-time Speech Processing',
  ],
  'Data Science & Analytics': [
    'Statistical Analysis', 
    'Time Series Analysis', 
    'Econometric Modeling', 
    'Data Visualization', 
    'ETL Pipelines',
    'Financial Modeling', 
    'Forecasting',
    'Credit Risk Analysis',
  ],
  'Business & Analytics': [
    'Market Research', 
    'Competitive Analysis', 
    'Process Optimization', 
    'Fintech Product Development', 
    'Quantitative Analysis',
    'Business Strategy',
  ],
}

export interface Certificate {
  title: string
  issuer: string
  credentialUrl: string
  credentialId: string
  image?: string // Optional path to certificate image
  accredibleImageUrl?: string // Direct Accredible API image URL
}

export const certificates: Certificate[] = [
  // Featured: MBA Degree (Not on Accredible - just image)
  {
    title: 'Master of Business Administration (MBA)',
    issuer: 'Brandeis International Business School',
    credentialUrl: '', // Not on Accredible
    credentialId: 'mba-degree',
    image: '/images/certificates/mba-certificate.JPG',
  },
  // Engineering Degree (Not on Accredible - just image)
  {
    title: 'Bachelor of Engineering: Civil & Environmental Engineering',
    issuer: 'Namibia University of Science & Technology',
    credentialUrl: '', // Not on Accredible
    credentialId: 'engineering-degree',
    image: '/images/certificates/engineering-degree.JPG',
  },
  // Operations Certificate (Not on Accredible - just image)
  {
    title: 'Operations Certificate',
    issuer: 'Issuing Organization',
    credentialUrl: '', // Not on Accredible
    credentialId: 'operations-cert',
    image: '/images/certificates/operations-cert.JPG',
  },
  // AI Bootcamp Certificate (Not on Accredible - just image)
  {
    title: 'AI Bootcamp Certificate',
    issuer: 'Issuing Organization',
    credentialUrl: '', // Not on Accredible
    credentialId: 'aibootcamp-cert',
    image: '/images/certificates/aibootcamp-cert.png',
  },
  // Accredible Certificates (with direct Accredible API image URLs)
  {
    title: 'Rearchitecting the Financial System',
    issuer: 'Centre for Finance, Technology and Entrepreneurship',
    credentialUrl: 'https://www.credential.net/1b158799-77b9-4257-9ef3-43750f6af0df#acc.LNGqF3XZ',
    credentialId: '1b158799-77b9-4257-9ef3-43750f6af0df',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/106770521',
  },
  {
    title: 'Online Certificate for Fintech in Africa',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/e891e773-399f-4aaa-8a82-ad27d42c0cdc#acc.lbIY1U8X',
    credentialId: 'e891e773-399f-4aaa-8a82-ad27d42c0cdc',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76213120',
  },
  {
    title: 'Navigating Digital Transformation',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/93f935aa-dffc-48c7-8483-3ceca2981138#acc.5jpv2gIL',
    credentialId: '93f935aa-dffc-48c7-8483-3ceca2981138',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/66417423',
  },
  {
    title: 'Open Banking & Platforms Specialisation: Technology and Security',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647#acc.K1yjdlm5',
    credentialId: 'c2b0d7f9-aefe-4f77-8b0f-2d6dd42c0647',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66266530',
  },
  {
    title: 'Open Banking and Platforms in Finance Specialisation',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/7a245f36-ca0f-433b-9285-e3935bc306bc#acc.EUg8lyoL',
    credentialId: '7a245f36-ca0f-433b-9285-e3935bc306bc',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/66267705',
  },
  {
    title: 'Open Banking & Platforms Specialisation: Regulations Standards and Operational Risks',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/016064a7-a7e2-4125-afb5-a2e4574043ce#acc.R5AEspZ4',
    credentialId: '016064a7-a7e2-4125-afb5-a2e4574043ce',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65933379',
  },
  {
    title: 'Open Banking & Platforms Specialisation: Business Models and Transformation of Incumbents',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/7bb20d15-4c70-4fdc-bda4-c6480dd45ac8#acc.HC7tx1qL',
    credentialId: '7bb20d15-4c70-4fdc-bda4-c6480dd45ac8',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65508518',
  },
  {
    title: 'Card Payment Networks Explained',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/1be9c933-91fc-42c6-93fc-6a3de7015756#acc.NX6mChHT',
    credentialId: '1be9c933-91fc-42c6-93fc-6a3de7015756',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/65540085',
  },
  {
    title: 'Open Banking & Platforms Specialisation: Business Models and Implementation of New Entrants',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/b170e197-4e1d-4421-9421-ac6e186369d1#acc.eD7sjSB0',
    credentialId: 'b170e197-4e1d-4421-9421-ac6e186369d1',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65292890',
  },
  {
    title: 'Open Banking & Platforms Specialisation: An Industry overview of Open Banking',
    issuer: 'Issuing Organization',
    credentialUrl: 'https://www.credential.net/bdc8f4f7-8042-4dba-988c-8e7bbdf1c666#acc.kVfRCgI0',
    credentialId: 'bdc8f4f7-8042-4dba-988c-8e7bbdf1c666',
    accredibleImageUrl: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/65034644',
  },
]

// Legacy certificate images (kept for backward compatibility if needed)
export const certificateImages = [
  { src: '/images/certificates/aibootcamp-cert.png', alt: 'AI Bootcamp Certificate' },
  { src: '/images/certificates/fintech-cert.png', alt: 'Fintech Certificate' },
  { src: '/images/certificates/openbanking-cert.png', alt: 'Open Banking Certificate' },
  { src: '/images/certificates/mba-certificate.JPG', alt: 'MBA Certificate' },
  { src: '/images/certificates/certificate5.png', alt: 'Professional Certificate' },
]

export interface HassenfeldLocation {
  name: string
  points: string[]
}

export const hassenfeldFellowship = {
  title: 'Hassenfeld Immersion Program — Global Business Immersion (2023-2024)',
  description: 'Prestigious in-country student experience offering intensive introduction to the business, economy, and culture of dynamic overseas markets. Selected as a Hassenfeld Fellow to participate in immersive business study programs across international markets.',
  locations: [
    {
      name: 'Israel (2023)',
      points: [
        'Visited innovative companies: Mobileye (autonomous driving), Lemonade (insurtech), Lightricks (creative technology), Trullion (AI-powered accounting), MassChallenge Israel (startup accelerator), Ma\'agan Michael (kibbutz visit)',
        'Deep dive into AI-driven innovations and startup culture',
        'Explored Jerusalem and Tel Aviv tech ecosystems',
        'Awarded internship at Insait IO as Business Development Intern',
      ],
    },
    {
      name: 'India (2024)',
      points: [
        'Engaged with industry leaders: Varun Beverages (Pepsi bottler), Mahindra Group (automotive/conglomerate), ICICI Prudential (financial services), Welspun (textiles/infrastructure), Dabur (FMCG/consumer goods), Bharti Airtel (telecommunications)',
        'Visited National Stock Exchange of India',
        'Met with innovative companies: Mobikwik (payment platform), Tata Group',
        'Studied UPI payment system and India Stack — primary inspiration for Buffr',
      ],
    },
  ] as HassenfeldLocation[],
}

export interface Volunteer {
  org: string
  desc: string
}

export const volunteer: Volunteer[] = [
  {
    org: 'New Elementary Namibia',
    desc: 'Collected and distributed educational materials, food, and clothing for impoverished schools; contributed to school refurbishment projects to improve early education standards',
  },
  {
    org: 'Global Entrepreneurship Network Namibia',
    desc: 'Developed \'Zizza Makazi\' green hydrogen concept for HDF Energy',
  },
]

export interface Conference {
  title: string
  location: string
  year: string
  description: string
}

export const conferences: Conference[] = [
  {
    title: 'FinTech Junction',
    location: 'Tel Aviv, Israel',
    year: '2023',
    description: 'Attended fintech innovation and digital payments conference. Explored cutting-edge payment technologies and networked with fintech leaders.',
  },
  {
    title: 'MIT FinTech Conference',
    location: 'Cambridge, MA',
    year: '2024 & 2025',
    description: 'Attended MIT FinTech Conference focusing on financial technology and AI applications. Gained insights into latest fintech trends and innovations.',
  },
]
