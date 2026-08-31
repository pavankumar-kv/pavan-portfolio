export const initialProfile = {
  personal: {
    name: "Alex Morgan",
    tagline: "Full-Stack Software Engineer & UI/UX Craftsman",
    bio: "Passionate engineer with 5+ years of experience crafting high-performance, scalable web applications and intuitive digital experiences. Specializing in modern JavaScript/TypeScript ecosystems, cloud-native architectures, and responsive micro-frontends.",
    status: "Available for new opportunities",
    location: "San Francisco, CA / Remote",
    email: "alex.morgan.dev@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      portfolio: "https://example.com"
    }
  },
  roles: [
    "Full-Stack Developer",
    "React & Node.js Specialist",
    "Cloud & DevOps Enthusiast",
    "Open Source Contributor"
  ],
  stats: [
    { label: "Years Experience", value: "5+", icon: "Briefcase" },
    { label: "Completed Projects", value: "35+", icon: "FolderCheck" },
    { label: "Open Source Stars", value: "1.2k+", icon: "Star" },
    { label: "Happy Clients & Orgs", value: "20+", icon: "Smile" }
  ],
  services: [
    {
      title: "Frontend Engineering",
      description: "Building blazing-fast, accessible, and reactive single-page applications with React, Next.js, and Tailwind CSS.",
      icon: "Layout"
    },
    {
      title: "Backend & API Design",
      description: "Designing resilient RESTful and GraphQL APIs, microservices, and database models using Node.js, Express, and PostgreSQL.",
      icon: "Server"
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying and managing scalable containerized infrastructure with Docker, Kubernetes, AWS, and automated CI/CD pipelines.",
      icon: "Cloud"
    },
    {
      title: "UI/UX & Prototyping",
      description: "Crafting modern user experiences with high visual polish, smooth micro-interactions, and design system governance.",
      icon: "Palette"
    }
  ],
  skills: [
    { name: "React / Next.js", category: "Frontend", level: 95 },
    { name: "TypeScript / JavaScript", category: "Frontend", level: 92 },
    { name: "Tailwind CSS & Styling", category: "Frontend", level: 96 },
    { name: "Vue.js / Nuxt", category: "Frontend", level: 80 },
    { name: "Node.js / Express", category: "Backend", level: 90 },
    { name: "Python / FastAPI", category: "Backend", level: 84 },
    { name: "GraphQL & REST APIs", category: "Backend", level: 88 },
    { name: "PostgreSQL & Prisma", category: "Databases", level: 86 },
    { name: "MongoDB / Redis", category: "Databases", level: 82 },
    { name: "Docker & Kubernetes", category: "DevOps & Tools", level: 78 },
    { name: "AWS (S3, Lambda, EC2)", category: "DevOps & Tools", level: 80 },
    { name: "Git & CI/CD Actions", category: "DevOps & Tools", level: 90 },
    { name: "Jest / Vitest / Cypress", category: "DevOps & Tools", level: 85 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "NexusFlow - AI Workflow Automation Engine",
      tagline: "Visual node-based pipeline editor for generative AI tasks",
      description: "A comprehensive canvas application allowing developers to chain multi-modal LLM tasks, trigger webhooks, and automate complex workflows with real-time streaming telemetry and team collaboration.",
      category: "Full Stack",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Redis", "OpenAI API"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/nexusflow",
      highlights: [
        "Interactive drag-and-drop node graph supporting 10,000+ nodes smoothly",
        "Real-time WebSocket collaboration engine with conflict resolution",
        "Custom serverless runtime processing 200k daily task executions"
      ]
    },
    {
      id: "proj-2",
      title: "PulseMetrics - Cloud Analytics Dashboard",
      tagline: "Real-time infrastructure and application observability platform",
      description: "An enterprise-grade monitoring dashboard that consolidates system logs, container metrics, and custom alerting with sub-second latency and custom visualization charts.",
      category: "Frontend",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      tech: ["Next.js", "Tailwind CSS", "Chart.js", "TypeScript", "REST APIs"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/pulsemetrics",
      highlights: [
        "Lightweight time-series charting engine rendering 60fps with live feeds",
        "Dark & Light mode themes with custom color palettes",
        "Zero-layout-shift responsive interface optimized for mobile and desktop"
      ]
    },
    {
      id: "proj-3",
      title: "OmniStore - Modern E-Commerce Platform",
      tagline: "Headless e-commerce platform with instant search and checkout",
      description: "A fast headless storefront with automated inventory tracking, Stripe payments, multi-currency support, and instantaneous algorithmic product search.",
      category: "Full Stack",
      featured: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/omnistore",
      highlights: [
        "99.8% Lighthouse Performance and SEO score",
        "Full checkout funnel with 1-click Apple Pay & Google Pay integration",
        "Dynamic filter and faceted search running under 15ms"
      ]
    },
    {
      id: "proj-4",
      title: "DevSprint - Agile Project Management Tool",
      tagline: "Minimalist collaborative task management for engineering teams",
      description: "Kanban and sprint planning suite featuring markdown docs, automated Git commits linkers, velocity charts, and rich keyboard navigation shortcuts.",
      category: "Frontend",
      featured: false,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Zustand", "Tailwind CSS", "Vite", "WebSockets"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/devsprint",
      highlights: [
        "Instant optimistic UI updates with offline sync capability",
        "Vim-inspired keyboard navigation and command palette (Cmd+K)",
        "Automated sprint report generation and export"
      ]
    },
    {
      id: "proj-5",
      title: "CryptoVault - Decentralized Asset Portfolio",
      tagline: "Multi-chain asset tracking and DeFi analytics hub",
      description: "Aggregates wallet balances, yield farming positions, and NFT collections across 8 EVM chains with automated tax calculation and PnL analytics.",
      category: "Full Stack",
      featured: false,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=900&q=80",
      tech: ["React", "Ethers.js", "FastAPI", "Tailwind CSS", "PostgreSQL"],
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/cryptovault",
      highlights: [
        "Real-time token pricing feeds via decentralized oracle networks",
        "Bank-grade client-side encryption and secure wallet connect"
      ]
    }
  ],
  experiences: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Apex Tech Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Lead architect for core micro-frontend platform. Mentored a squad of 7 engineers, improved build pipeline speed by 60%, and scaled services to 2M+ active users.",
      achievements: [
        "Architected real-time notification engine reducing system latency by 45%",
        "Implemented standardized component design system adopted across 5 product teams"
      ]
    },
    {
      role: "Frontend Software Engineer",
      company: "CloudScale Systems",
      period: "2021 - 2023",
      location: "Austin, TX / Remote",
      description: "Developed enterprise cloud management dashboards using React, TypeScript, and GraphQL. Collaborated with UX teams to revamp primary customer onboarding.",
      achievements: [
        "Increased customer conversion rate by 28% through revamped onboarding flows",
        "Pioneered end-to-end automated testing suite achieving 92% coverage"
      ]
    },
    {
      role: "Software Developer",
      company: "NovaByte Digital",
      period: "2019 - 2021",
      location: "Seattle, WA",
      description: "Engineered responsive client web apps, e-commerce storefronts, and integrated payment gateways with REST backends.",
      achievements: [
        "Delivered 12+ production client web applications on schedule",
        "Optimized web vital scores across key projects to 95+"
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2015 - 2019",
      description: "Focus on Distributed Systems, Algorithms, and Human-Computer Interaction. Dean's Honor List."
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "Verified"
    },
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta",
      year: "2023",
      badge: "Professional"
    },
    {
      title: "Kubernetes Certified Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      badge: "Certified"
    }
  ],
  testimonials: [
    {
      quote: "Alex is one of the most talented engineers I've worked with. Their attention to detail, proactive problem-solving, and clean UI execution elevated our entire product.",
      author: "Sarah Jenkins",
      title: "VP of Engineering at Apex Tech Labs",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Delivered our flagship project ahead of schedule with flawless code quality and silky smooth animations. A true 10x engineer and leader.",
      author: "Michael Chang",
      title: "Product Lead at CloudScale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
