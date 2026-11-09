/**
 * ===================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ===================================================================
 * This file contains all the content for your portfolio website.
 * To update any section (Experience, Projects, Skills, etc.), simply
 * modify the data in this file. The website UI will update automatically!
 * ===================================================================
 */

const portfolioData = {
  // --- Personal Information & Hero Section ---
  personal: {
    name: "Anshit Mishra",
    preferredName: "Anshit",
    role: "Senior Software Engineer",
    company: "Tide",
    companyUrl: "https://www.tide.co/",
    statusBadge: "Senior Software Engineer @ Tide",
    tagline: "Architecting resilient distributed systems, high-throughput FinTech microservices, and high-scale onboarding engines.",
    bioShort: "Passionate about building scalable backend architectures, fault-tolerant distributed pipelines, and user-centric financial products.",
    typewriterRoles: [
      "Senior Software Engineer @ Tide",
      "Distributed Systems Engineer",
      "FinTech & Backend Architect",
      "Kafka & Event-Driven Specialist",
      "Competitive Programmer"
    ],
    location: "Bengaluru, Karnataka, India",
    email: "anshitmishraa@gmail.com",
    phone: "+91 6202105655",
    resumeUrl: "https://drive.google.com/file/d/1OhHA5Y8H0TlYhysBZA4j4FxCyv03GGyN/view", // Update whenever new PDF is uploaded
    avatar: "assets/img/profile.jpg",
    aboutAvatar: "assets/img/about.jpg"
  },

  // --- Key Statistics / Metrics ---
  stats: [
    { value: "1M+", label: "Card Onboardings Scaled" },
    { value: "500+ RPS", label: "Peak Workload Handled" },
    { value: "30%", label: "API Latency Reduction" },
    { value: "500+", label: "DSA Problems Solved" }
  ],

  // --- Social Links ---
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anshitmishra/",
      icon: "bx bxl-linkedin",
      display: "in/anshitmishra"
    },
    {
      name: "GitHub",
      url: "https://github.com/anshitmishraa",
      icon: "bx bxl-github",
      display: "github.com/anshitmishraa"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/anshitmishra",
      icon: "bx bx-code-alt",
      display: "codechef/anshitmishra"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/anshitmishra",
      icon: "bx bx-terminal",
      display: "codeforces/anshitmishra"
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/anshitmishraa",
      icon: "bx bxl-twitter",
      display: "@anshitmishraa"
    }
  ],

  // --- About Me Section ---
  about: {
    paragraphs: [
      "I am a **Senior Software Engineer at Tide** based in Bengaluru, specializing in building high-performance backend systems, distributed architectures, and scalable FinTech infrastructure.",
      "Previously at **Jupiter Money** (3.5+ years), I led the engineering of the core **Credit Card Onboarding Service**, designing resilient systems that powered over **1 Million onboardings**, cut API latencies by 30% through Redis caching under 500+ RPS loads, and eliminated funnel drop-offs with decoupled AWS SQS & Kafka event streams.",
      "I graduated with a Computer Science degree from **Lovely Professional University (2019 - 2023)**. Alongside system engineering, I have a strong foundation in algorithmic problem solving, having competed in **Google Code Jam, Facebook Hacker Cup**, and actively solved 500+ problems on LeetCode, Codeforces, and CodeChef.",
      "I believe in continuous learning, clean scalable code, domain-driven architecture, and delivering high-quality, secure financial solutions."
    ],
    quickFacts: [
      { label: "Current Role", value: "Senior Software Engineer @ Tide" },
      { label: "Core Focus", value: "Distributed Systems, FinTech & Cloud Architecture" },
      { label: "Education", value: "B.Tech in Computer Science, LPU (2019 - 2023)" },
      { label: "Location", value: "Bengaluru, Karnataka, India" },
      { label: "Specialties", value: "Java, Kotlin, Kafka, Redis, Spring Boot, AWS, K8s" }
    ]
  },

  // --- Work Experience Timeline ---
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tide",
      companyUrl: "https://www.tide.co/",
      location: "Bengaluru, Karnataka, India",
      period: "October 2025 - Present",
      type: "Full-time",
      featured: true,
      description: "Driving engineering excellence, architectural design, and high-throughput financial microservices supporting Tide's international business banking platform.",
      highlights: [
        "Architecting robust, fault-tolerant backend services for modern business financial platforms.",
        "Collaborating across distributed product teams to ensure high reliability, observability, and compliance."
      ],
      techStack: ["Java", "Kotlin", "Spring Boot", "AWS", "Microservices", "Kafka", "Docker", "Kubernetes"]
    },
    {
      role: "Software Engineer",
      company: "Jupiter Money",
      companyUrl: "https://jupiter.money/",
      location: "Bengaluru, Karnataka, India",
      period: "August 2023 - October 2025",
      duration: "2 years 3 months",
      type: "Full-time",
      featured: true,
      description: "Spearheaded core backend systems for credit card onboarding, banking integrations, and resilient transaction pipelines.",
      highlights: [
        "**1M+ Onboardings**: Architected and developed a product-agnostic credit card onboarding service, designing schemas and banking integrations to seamlessly manage over 1 million customer onboardings.",
        "**Latency & Scale**: Reduced credit card onboarding API latency by 30% by engineering Redis caching layers, sustaining peak traffic loads of 500+ RPS without performance degradation.",
        "**Automated Refunds**: Spearheaded automated excess credit refund processing utilizing Razorpay PennyDrop API and Kubernetes, slashing manual operations by 80% and dropping refund turnaround time (TAT) to under 24 hours.",
        "**Queue Decoupling & 15% Conversion Boost**: Redesigned onboarding architecture by decoupling SQS queues per partner bank API, enabling independent retries, eliminating funnel blockages by 100%, and boosting Rupay card onboarding success rate by 15%.",
        "**Event Streaming**: Streamlined credit card onboarding event tracking via Apache Kafka with a flexible publication model, drastically simplifying analytics and real-time funnel observability.",
        "**Bank-Grade Security**: Implemented PGP encryption for secure credit card reconciliation reports and delivered RBI-compliant eKYC reinitiation with backward compatibility.",
        "**Disaster Recovery (DR)**: Resolved latency and metric gaps post-Hyderabad failover during DR drills, achieving a 25% latency reduction and reinforcing high-availability infrastructure.",
        "**Notification Pipeline**: Designed and implemented a dynamic Notification Handler service for report pipelines utilizing the Factory Design Pattern, dynamically routing alerts via Slack and Amazon SES."
      ],
      techStack: ["Java", "Kotlin", "Spring Boot", "Kafka", "AWS (EC2, SQS, SES)", "Redis", "PostgreSQL", "Docker", "Kubernetes", "PGP Encryption"]
    },
    {
      role: "Software Engineer Intern",
      company: "Jupiter Money",
      companyUrl: "https://jupiter.money/",
      location: "Bengaluru, Karnataka, India",
      period: "March 2022 - July 2023",
      duration: "1 year 5 months",
      type: "Internship",
      featured: false,
      description: "Contributed to backend microservices across Rewards, PRO, and operations automation.",
      highlights: [
        "**10K+ Daily Transactions**: Built an automated API to fetch daily gift card orders and designed a manual refund system with Retool dashboards, processing 10K+ transactions daily.",
        "**Latency Optimization**: Migrated Pro Spotlight Card logic to backend microservices, cutting response latency by 30% and enabling dynamic updates without frontend app releases.",
        "**Configurable CVP Platform**: Moved CVP item logic and FAQs to backend services and created Retool dashboards for real-time Product Manager configurations.",
        "**Data Processing**: Implemented backend logic for NRV and MIS data processing, reducing client-side complexity with dynamic business presentation rules."
      ],
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Retool", "Kafka", "Docker", "REST APIs"]
    }
  ],

  // --- Technical Skills ---
  skillCategories: [
    {
      category: "Programming Languages",
      icon: "bx bx-code-curly",
      description: "Primary languages for systems and enterprise development",
      skills: ["Java", "Kotlin", "Python", "C++", "Scala", "JavaScript", "SQL"]
    },
    {
      category: "Backend & Distributed Systems",
      icon: "bx bx-server",
      description: "Architectures for high-availability & throughput",
      skills: ["Spring Boot", "Microservices", "Apache Kafka", "Redis Cache", "AWS SQS", "Event-Driven Architecture", "RESTful APIs", "System Design"]
    },
    {
      category: "Cloud, Containers & DevOps",
      icon: "bx bx-cloud",
      description: "Cloud-native infrastructure and deployment tooling",
      skills: ["AWS (EC2, S3, SQS, SES)", "Kubernetes", "Docker", "Spinnaker", "CI/CD Pipelines", "Disaster Recovery (DR)", "Linux"]
    },
    {
      category: "Databases & Storage",
      icon: "bx bx-data",
      description: "Relational, document, and in-memory databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQLAlchemy", "Database Sharding & Query Optimization"]
    },
    {
      category: "Security & FinTech Standards",
      icon: "bx bx-shield-quarter",
      description: "Banking compliance and data protection",
      skills: ["PGP Encryption", "RBI Compliance & eKYC", "Cryptography", "Banking System Integration", "OAuth2 & JWT", "Secure APIs"]
    }
  ],

  // --- Featured Projects ---
  projects: [
    {
      title: "Job Executors",
      badge: "Python / Distributed",
      featured: true,
      description: "A dynamic, distributed background job scheduling and execution engine built with Python's Advanced Background Scheduler, engineered for high-reliability code-based, script-based, and event-triggered tasks.",
      highlights: [
        "Implemented database schema and persistence utilizing SQLAlchemy ORM with multi-database support.",
        "Engineered strict data validation boundaries powered by Pydantic.",
        "Comprehensive job orchestration with automated retry policies, failover isolation, and workflow tracking."
      ],
      tags: ["Python", "SQLAlchemy", "Pydantic", "Background Scheduler", "Task Queues"],
      githubUrl: "https://github.com/anshitmishraa/job-executors",
      liveDemoUrl: ""
    },
    {
      title: "Vendor Hub",
      badge: "Spring Boot / Microservices",
      featured: true,
      description: "An enterprise-grade vendor management system designed to automate procurement records, enforce stringent data validation, and scale multi-tenant supplier operations.",
      highlights: [
        "Architected clean RESTful endpoints for automated vendor data management with Spring Boot.",
        "Optimized query performance and memory footprints using database indexing and server-side pagination.",
        "Ensured data consistency and integrity through rigorous validation and transactional guarantees."
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "REST APIs", "Maven"],
      githubUrl: "https://github.com/anshitmishraa/vendor-hub",
      liveDemoUrl: ""
    },
    {
      title: "Password Generator & Crypto Utility",
      badge: "JavaScript / Security UX",
      featured: true,
      description: "A client-side cryptographic password generation utility featuring customizable entropy, charset configurations, strength estimation, and zero-storage privacy.",
      highlights: [
        "Customizable options for length, symbols, alphanumeric sets, and exclusion of ambiguous characters.",
        "Utilizes cryptographic randomness algorithms to guarantee unpredictability.",
        "Streamlined zero-dependency responsive interface with one-click copy safety."
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Web Crypto API", "Security"],
      githubUrl: "https://github.com/anshitmishraa/Password-Generator",
      liveDemoUrl: ""
    }
  ],

  // --- Achievements & Competitive Programming ---
  achievements: [
    {
      title: "Google Code Jam",
      badge: "Global Contest",
      icon: "bx bx-trophy",
      description: "Qualified and competed in Google Code Jam rounds, solving complex algorithmic and combinatorial problems under strict time and memory limits."
    },
    {
      title: "Facebook Hacker Cup",
      badge: "Global Contest",
      icon: "bx bx-code-curly",
      description: "Participated and advanced through multiple competitive rounds, demonstrating strong dynamic programming and graph theory problem-solving."
    },
    {
      title: "500+ Algorithmic Challenges Solved",
      badge: "Competitive Platforms",
      icon: "bx bx-medal",
      description: "Active problem solver across LeetCode, CodeChef, and Codeforces, with deep focus on data structures, distributed algorithmics, and complexity optimization."
    }
  ],

  // --- Certifications ---
  certifications: [
    {
      title: "Foundations for Big Data Analysis with SQL",
      issuer: "Coursera / Honors",
      badge: "Honors",
      description: "Advanced SQL querying, data modeling, analytical pipelines, and relational database design at scale."
    },
    {
      title: "Digital Marketing",
      issuer: "Professional Certification",
      badge: "Certified",
      description: "Understanding digital user acquisition, product funnels, and marketing analytics."
    }
  ],

  // --- Education ---
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "July 2019 - May 2023",
      location: "Punjab, India",
      description: "Comprehensive curriculum covering Data Structures, Algorithms, Distributed Computing, Database Management Systems, Computer Networks, and Software Engineering."
    }
  ]
};

// Export for module systems or attach to window for static vanilla browser execution
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}

