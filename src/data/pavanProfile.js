export const pavanProfile = {
  personal: {
    name: "Pavan Kumar",
    tagline: "MCA Student • Cybersecurity Enthusiast & AI Agent Builder",
    headline: "Building at the Intersection of Cybersecurity & Autonomous AI",
    subheadline: "MCA student based in Bengaluru, India. Exploring offensive security, web pentesting, and tool-using AI agents. Fast learner with a builder's mindset, seeking high-impact internships and junior engineering roles.",
    bio: "I am an MCA student in Bengaluru, India with a strong background from my BCA. I have a deep curiosity for how systems operate, how they can be secured, and how autonomous AI agents can augment human workflows. Rather than just reading theory, I believe in hands-on building—from setting up Linux home labs and exploring penetration testing to prototyping LLM-powered tools. I am actively seeking early-career opportunities where I can solve real problems, contribute to security and AI projects, and learn at lightning speed.",
    status: "Open for Internships & Junior Roles",
    location: "Bengaluru, India",
    email: "kv.pavankumar14@gmail.com",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#",
    socials: {
      github: "https://github.com/pavankumar-kv/pavankumar-kv",
      linkedin: "https://www.linkedin.com/in/pavan-kumar-kv-0b321832b",
      email: "mailto:kv.pavankumar14@gmail.com"
    }
  },
  roles: [
    "Cybersecurity & Pentesting Explorer",
    "Autonomous AI Agent Builder",
    "MCA Student @ Bengaluru",
    "Hands-on Systems Tinkerer"
  ],
  stats: [
    { label: "Active Learning Hours", value: "800+", icon: "Clock" },
    { label: "Planned & Active Builds", value: "4+", icon: "FolderGit2" },
    { label: "Home Lab Experiments", value: "15+", icon: "Terminal" },
    { label: "Commitment to Growth", value: "100%", icon: "Zap" }
  ],
  journey: [
    {
      period: "2024 - Present",
      title: "Master of Computer Applications (MCA)",
      institution: "Bengaluru, Karnataka, India",
      description: "Deepening core computer science concepts, network architectures, advanced operating systems, and distributed computing while self-studying modern cybersecurity and generative AI frameworks."
    },
    {
      period: "2021 - 2024",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Bengaluru, Karnataka, India",
      description: "Built strong foundations in C, Java, Python, data structures, relational databases, web development, and object-oriented design."
    }
  ],
  pillars: [
    {
      title: "Offensive Security & Pentesting",
      description: "Understanding attack vectors, OWASP Top 10 vulnerabilities, web application flaws, and network reconnaissance to build stronger defenses.",
      icon: "ShieldAlert"
    },
    {
      title: "Autonomous AI Agents",
      description: "Exploring tool-calling LLMs, LangChain/CrewAI architectures, prompt engineering, and intelligent agents capable of performing multi-step workflows.",
      icon: "Bot"
    },
    {
      title: "Linux & Network Engineering",
      description: "Hands-on experience with Kali Linux, Ubuntu, TCP/IP socket programming, packet analysis with Wireshark, and CLI automation.",
      icon: "Terminal"
    },
    {
      title: "Full-Stack Development",
      description: "Building responsive frontends and APIs with Python, JavaScript, React, Tailwind CSS, and SQL databases for security dashboards and agent interfaces.",
      icon: "Code2"
    }
  ],
  skills: [
    // Cybersecurity
    { name: "Networking (TCP/IP, DNS, OSI)", category: "Cybersecurity", level: 85 },
    { name: "Linux CLI & System Administration", category: "Cybersecurity", level: 88 },
    { name: "OWASP Top 10 & Web Security", category: "Cybersecurity", level: 80 },
    { name: "Wireshark & Nmap Reconnaissance", category: "Cybersecurity", level: 82 },
    { name: "Burp Suite & Web Interception", category: "Cybersecurity", level: 75 },
    { name: "Bash & Security Scripting", category: "Cybersecurity", level: 78 },
    
    // AI & Machine Learning
    { name: "Python for Automation & AI", category: "AI & ML", level: 90 },
    { name: "LLM APIs (OpenAI / Gemini / Claude)", category: "AI & ML", level: 85 },
    { name: "AI Agents & LangChain Workflows", category: "AI & ML", level: 80 },
    { name: "Prompt Engineering & Reasoning Chains", category: "AI & ML", level: 88 },
    { name: "ML Foundations & Data Analysis", category: "AI & ML", level: 76 },
    { name: "Vector Embeddings & Retrieval (RAG)", category: "AI & ML", level: 78 },

    // Dev & Tools
    { name: "Git & GitHub Version Control", category: "Dev & Tools", level: 88 },
    { name: "JavaScript / React & Tailwind CSS", category: "Dev & Tools", level: 82 },
    { name: "SQL & PostgreSQL Databases", category: "Dev & Tools", level: 80 },
    { name: "Docker Container Basics", category: "Dev & Tools", level: 72 },
    { name: "REST APIs & JSON Handling", category: "Dev & Tools", level: 85 }
  ],
  roadmap: [
    {
      stage: "Phase 1: Current Focus",
      status: "In Progress",
      items: [
        "Mastering multi-threaded network socket tools in Python",
        "Deep diving into Burp Suite, PortSwigger Web Security Academy labs",
        "Building autonomous single-purpose LLM agents for security triage"
      ]
    },
    {
      stage: "Phase 2: Next Milestones",
      status: "Upcoming",
      items: [
        "Active participation in TryHackMe & Hack The Box CTF challenges",
        "Deploying multi-agent collaborative workflows for automated recon",
        "Publishing technical open-source security utilities on GitHub"
      ]
    },
    {
      stage: "Phase 3: Career Goals",
      status: "Target",
      items: [
        "Earn foundational security certifications (e.g. eJPT / CEH / CompTIA Security+)",
        "Contribute to high-impact security operations or AI engineering teams in Bengaluru",
        "Design production-grade security automation and defense platforms"
      ]
    }
  ],
  projects: [
    {
      id: "netprobe",
      title: "NetProbe - Multi-Threaded Network Recon Scanner",
      tagline: "High-speed socket scanner with banner grabbing and port intelligence",
      status: "In Active Development",
      stageBadge: "🔨 Building from Scratch",
      category: "Cybersecurity",
      featured: true,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      description: "A fast, modular network reconnaissance tool engineered in Python. Designed to perform concurrent port scanning, detect active services through banner grabbing, and format structured reconnaissance reports for security audits.",
      tech: ["Python 3", "Asyncio / Socket", "Scapy", "CLI Rich", "Threading"],
      githubUrl: "https://github.com/pavankumar-kv/pavankumar-kv",
      demoUrl: "",
      highlights: [
        "Multi-threaded asynchronous TCP connect & SYN scan engine",
        "Automatic banner parsing to identify common web/SSH/database service versions",
        "Structured export to JSON, CSV, and formatted terminal tables",
        "Custom subnet CIDR range calculation and host discovery"
      ],
      architecturePlan: "Built using Python asyncio for non-blocking I/O, allowing scans across /24 subnets in seconds while adhering to safe rate-limiting policies."
    },
    {
      id: "agentic-sec",
      title: "AgenticSec - LLM-Powered Security Log & Advisory Agent",
      tagline: "Autonomous AI agent for incident triage and CVE impact analysis",
      status: "Architecture & Prototyping",
      stageBadge: "🧪 Active Prototype",
      category: "AI & Security",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      description: "An intelligent security assistant that ingests raw server logs (Apache, Nginx, Linux auth logs), flags suspicious anomalies (brute force, SQL injection, directory traversal), cross-references CVE databases, and generates actionable remediation playbooks.",
      tech: ["Python", "LangChain", "Gemini / OpenAI API", "Regex", "Streamlit"],
      githubUrl: "https://github.com/pavankumar-kv/pavankumar-kv",
      demoUrl: "",
      highlights: [
        "Automated pattern recognition for common web application attack vectors",
        "Integration with National Vulnerability Database (NVD) via REST APIs",
        "Natural language incident summary generation for non-technical stakeholders",
        "Step-by-step remediation suggestions tailored to the specific software version"
      ],
      architecturePlan: "Employs an agentic loop: Log Parser Tool -> Anomaly Detector Tool -> CVE Lookup Tool -> Formatter Tool, ensuring deterministic parsing combined with LLM reasoning."
    },
    {
      id: "vulnforge",
      title: "VulnForge - OWASP Top 10 Practice Lab & Notes",
      tagline: "Containerized vulnerable web lab with interactive exploit walkthroughs",
      status: "In Planning",
      stageBadge: "📐 Specification Phase",
      category: "Cybersecurity",
      featured: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
      description: "A lightweight, containerized practice environment built with Docker to replicate real-world OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR, SSRF) accompanied by detailed defense notes and mitigation code snippets.",
      tech: ["Docker", "Node.js", "Express", "SQLite", "Tailwind CSS"],
      githubUrl: "https://github.com/pavankumar-kv/pavankumar-kv",
      demoUrl: "",
      highlights: [
        "Isolated Dockerized targets with toggleable vulnerability levels",
        "Step-by-step documentation explaining both exploitation and secure coding fixes",
        "Interactive HTTP request/response inspector to study payload transformations",
        "Designed as an educational tool for student security researchers"
      ],
      architecturePlan: "Multi-container setup using Docker Compose, providing one-command local spins for safe offensive security experiments."
    },
    {
      id: "agentx-recon",
      title: "AgentX Recon - Autonomous Subdomain & OSINT Enumerator",
      tagline: "AI-guided passive reconnaissance and attack surface mapper",
      status: "In Planning",
      stageBadge: "📐 Specification Phase",
      category: "AI & Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
      description: "A reconnaissance framework that automates passive OSINT gathering, certificate transparency log searching, and subdomain discovery, using an LLM agent to summarize the external security posture.",
      tech: ["Python", "DNSpython", "crt.sh API", "FastAPI", "React"],
      githubUrl: "https://github.com/pavankumar-kv/pavankumar-kv",
      demoUrl: "",
      highlights: [
        "Passive reconnaissance minimizing active scanning footprints",
        "Aggregates data across Certificate Transparency logs and public DNS records",
        "Generates interactive visual asset maps and risk scores"
      ],
      architecturePlan: "Combines fast asynchronous API aggregators with an intelligent heuristic analyzer to detect orphaned subdomains and misconfigurations."
    }
  ],
  articles: [
    {
      id: "home-lab-setup",
      title: "Setting Up My First Linux & Networking Home Lab in Bengaluru",
      date: "August 2026",
      readTime: "4 min read",
      category: "Cybersecurity & Labs",
      summary: "How I transformed my local machine into an isolated virtualization environment with Kali Linux and Ubuntu servers to study packet flows, firewall rules, and network defense hands-on.",
      tags: ["Linux", "Networking", "HomeLab", "Virtualization"],
      content: `### Why Every Aspiring Security Engineer Needs a Home Lab

When I started my MCA in Bengaluru, I quickly realized that reading networking textbooks wasn't enough. I needed to see packets flying across interfaces, observe what happens when a firewall drops a SYN packet, and inspect raw HTTP traffic byte-by-byte.

Here is how I architected my local sandbox:

#### 1. The Virtualization Layer
I configured isolated virtual networks using **Oracle VirtualBox** and **VMware Workstation**:
- **Kali Linux**: The primary offensive workstation equipped with security tools.
- **Ubuntu Server**: Configured as an internal web server, SSH host, and target environment.
- **Host-Only Network Adapter**: Ensuring zero unintended traffic leaks onto the local home Wi-Fi.

#### 2. Key Hands-On Experiments
- **Packet Sniffing with Wireshark**: Capturing 3-way handshakes (SYN, SYN-ACK, ACK) and TCP tear-downs to understand state transitions.
- **Port Scanning Mechanics**: Using Nmap to compare TCP Connect scans (\`-sT\`) versus stealth SYN scans (\`-sS\`) and observing their distinct footprints in target syslog files.
- **SSH Hardening**: Disabling password logins in favor of ED25519 key-based authentication, changing default ports, and configuring fail2ban.

#### 3. Core Takeaway
Building this lab demystified foundational networking. If you understand how protocols work under normal conditions, identifying anomalies and security exploits becomes second nature.`
    },
    {
      id: "bca-to-mca-ai-security",
      title: "From BCA to MCA: Why I am Combining Offensive Security with Autonomous AI Agents",
      date: "July 2026",
      readTime: "5 min read",
      category: "Career & Tech Philosophy",
      summary: "The story behind my journey, why understanding security vulnerabilities makes me a better AI developer, and how autonomous agents are transforming the cyber landscape.",
      tags: ["AI Agents", "Career", "Cybersecurity", "Philosophy"],
      content: `### The Intersection of Two Fast-Moving Frontiers

During my Bachelor of Computer Applications (BCA), I fell in love with programming logic, databases, and problem solving. But as I transitioned into my Master of Computer Applications (MCA) in Bengaluru—India's tech capital—two major technological shifts caught my full attention:

1. **Cybersecurity**: The critical necessity of securing digital systems against sophisticated threats.
2. **Autonomous AI Agents**: The leap from simple chatbots to agentic workflows that can reason, plan, and invoke tools.

#### Why Connect Security and AI?
Traditional security operations are overwhelmed by sheer log volume, false positives, and repetitive triage tasks. By combining a red-team offensive mindset with LLM tool-calling capabilities:
- **Triage Automation**: An agent can parse logs, correlate CVEs, and prepare incident briefs in seconds.
- **Security for AI**: As AI agents gain access to web browsers and code execution environments, understanding prompt injection, insecure output handling, and privilege escalation is paramount.
- **Defensive Resilience**: Building agents that think like an adversary allows teams to patch vulnerabilities proactively before attackers discover them.

#### My Strategy as a Student Builder
I believe the best way to stand out to engineering leaders is **tangible execution**. I am actively building open-source tools that reflect this dual interest, seeking mentorship, and preparing for an impactful career as a security and AI engineer.`
    },
    {
      id: "owasp-top-10-ai-triage",
      title: "Deconstructing the OWASP Top 10: How AI Can Accelerate Vulnerability Triage",
      date: "June 2026",
      readTime: "4 min read",
      category: "Web Security & AI",
      summary: "A practical breakdown of common web vulnerabilities like SQL Injection and Broken Access Control, exploring how LLM-assisted pipelines assist developers in patching flaws faster.",
      tags: ["OWASP", "WebSecurity", "LLMs", "DevSecOps"],
      content: `### Demystifying Modern Web Flaws

The OWASP Top 10 provides a standard awareness document for developers and security professionals. While reviewing common vulnerabilities, I explored how combining automated static rules with LLMs creates a powerful triage assistant.

#### Key Vulnerabilities Analyzed
- **Broken Access Control (A01)**: The #1 vulnerability in modern web apps, often caused by flawed IDOR (Insecure Direct Object Reference) checks.
- **Cryptographic Failures (A02)**: Using deprecated algorithms (MD5/SHA1) or storing secrets in client-side bundles.
- **Injection (A03)**: SQL, command, and LDAP injections resulting from unsanitized input concatenation.

#### Where AI Complements Traditional Scanners
Traditional SAST tools generate massive amounts of false positives. An LLM agent equipped with code context can:
1. Verify if user input actually reaches a sink without passing through a sanitizer.
2. Provide a drop-in code fix formatted specifically for the framework being used (e.g. converting raw SQL to parameterized ORM queries).
3. Draft a security unit test to prevent regression.

As I build **AgenticSec**, this synergy between deterministic code analysis and AI reasoning is the exact principle I am implementing.`
    }
  ],
  resume: {
    fullName: "Pavan Kumar",
    title: "MCA Student | Cybersecurity & AI/ML Builder",
    location: "Bengaluru, Karnataka, India",
    email: "kv.pavankumar14@gmail.com",
    github: "github.com/pavankumar-kv/pavankumar-kv",
    linkedin: "linkedin.com/in/pavan-kumar-kv-0b321832b",
    summary: "Motivated Master of Computer Applications (MCA) student based in Bengaluru with strong technical foundations in Linux, computer networking, penetration testing fundamentals, and autonomous AI agents. Passionate builder with a hands-on approach to creating security utilities and LLM-powered workflows. Actively seeking cybersecurity, security engineering, and AI/ML engineering internships or early-career roles.",
    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Bengaluru, Karnataka, India",
        period: "2024 - Present",
        details: "Focusing on Network Security, Distributed Systems, Advanced Operating Systems, and AI/ML Foundations."
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Bengaluru, Karnataka, India",
        period: "2021 - 2024",
        details: "Graduated with strong foundations in Python, Java, Data Structures, Relational Database Management (DBMS), and Web Technologies."
      }
    ],
    technicalSkills: {
      "Cybersecurity & Systems": "TCP/IP, Network Reconnaissance (Nmap, Wireshark), Linux Administration & CLI, OWASP Top 10, Burp Suite, Web Security Concepts, Bash Scripting",
      "AI / ML & Agents": "Python, LLM APIs (OpenAI / Gemini / Anthropic), LangChain, Prompt Engineering, Agentic Tool-Use, Scikit-learn, Vector Embeddings",
      "Development & Databases": "JavaScript, React, HTML5, Tailwind CSS, SQL / PostgreSQL, Git & GitHub, Docker Basics, REST APIs"
    },
    keyProjects: [
      {
        name: "NetProbe — Multi-Threaded Network Recon Scanner",
        tech: "Python, Asyncio, Sockets, CLI Rich",
        description: "Engineered a high-performance network reconnaissance CLI tool supporting concurrent port scanning, banner grabbing, and structured report exports."
      },
      {
        name: "AgenticSec — Autonomous Security Log Analyzer & Advisory Agent",
        tech: "Python, LangChain, LLM APIs, Streamlit",
        description: "Prototyped an intelligent assistant that ingests server access logs, identifies intrusion signatures, cross-references CVE databases, and generates remediation guides."
      },
      {
        name: "VulnForge — OWASP Top 10 Practice Lab",
        tech: "Docker, Node.js, Express, SQLite",
        description: "Created a containerized vulnerable application suite for testing and documenting web exploit vectors and defensive mitigations."
      }
    ],
    strengths: [
      "Rapid self-directed learner with high technical curiosity",
      "Disciplined hands-on approach with home lab experimentation",
      "Strong blend of offensive security mindset and modern AI agent development",
      "Excellent communication, documentation, and problem-solving skills"
    ]
  },
  testimonials: [
    {
      quote: "Pavan represents the best kind of early-career builder: intensely curious, self-driven, and eager to dive straight into the code. His passion for both cybersecurity and AI agents sets him apart.",
      author: "Academic Mentor",
      title: "Department of Computer Applications, Bengaluru",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "A disciplined learner who does not wait for assignments to start building. Pavan consistently experiments with Linux labs, security concepts, and modern AI tools.",
      author: "Peer Collaborator",
      title: "Bengaluru Tech Community",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
