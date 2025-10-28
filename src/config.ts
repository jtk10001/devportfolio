export const siteConfig = {
  name: "Jon Kaplan",
  title: "Product & Technical Leader | Autonomous Systems, Robotics, & AI",
  description:
    "Portfolio of Jon Kaplan, a product and technical leader with experience building mission-critical AI, robotics, and data platforms at Wing (Google) and high-growth startups.",
  profileImage: "/profile.jpg", // Path to your profile image in the public directory
  accentColor: "#060607ff",
  social: {
    email: "JKaplan621@gmail.com",
    linkedin: "https://linkedin.com/in/jonathankaplan",
    // The resume lists jon-kaplan.com, which is likely this portfolio.
    // A GitHub profile can be added here if available.
    // github: "https://github.com/yourusername",
  },
aboutMe:
    "My passion is being the technical translator between complex user needs and engineering teams. I thrive in high-stakes, regulated environments—like autonomous aviation and defense—where the margin for error is zero. My product philosophy is built on: \n1. System-Level Thinking: I don't just manage features. I lead product for complex, interconnected systems of hardware, software, and human operations. \n2. Enabling AI with Humans: My expertise is in the 'human-in-the-loop' systems that make AI safe, efficient, and scalable in the real world. \n3. First-Principles Problem Solving: From my engineering roots, I dig deep into the 'why' to find the root cause, whether it's in a data pipeline, an operational bottleneck, or a user workflow.",
skills: [
  {
    category: "Product Strategy & Leadership",
    items: [
      "AI/ML Product Roadmapping",
      "Autonomous Systems Product Mgmt",
      "Cross-Functional Team Leadership",
      "PM Mentorship & Development",
    ],
  },
  {
    category: "Technical & AI Enablement",
    items: [
      "AI-Driven Decision Systems",
      "Human-in-the-Loop (HITL) Interfaces",
      "Predictive AI Modeling",
      "Python, SQL, MATLAB",
    ],
  },
  {
    category: "Platform & GTM",
    items: [
      "External & Partner-Facing APIs",
      "Developer Platform Creation",
      "Data Governance & Security",
      "Data Pipeline & Quality Management",
    ],
  },
  {
    category: "Regulatory & Compliance",
    items: [
      "Aviation Regulatory Compliance (FAA, EASA, CASA)",
      "Defense (DoD) & SBIR Contracts",
      "Safety-Critical Systems",
    ],
  },
],
  // The resume lists patents and publications but not specific software projects.
  // Leaving this array empty will hide the "Projects" section on the site.
  projects: [],
  experience: [
    {
      company: "Wing (An Alphabet Company)",
      title: "Product Manager II (L5)",
      dateRange: "November 2022 - Present",
      bullets: [
        "Own and execute the product vision for Wing's next-generation ground software platform, enabling thousands of daily autonomous flights.",
        "Engineered and executed a multi-year, globally compliant teleoperations roadmap that resulted in a 50% reduction in operator costs per delivery, a key enabler for scaling the business.",
        "Lead a cross-functional team of 10+ engineers, 3 PMs (including mentoring rotational/contract PMs), and UX designers through rapid, safety-critical launch cycles.",
        "Scaled the operations platform to 30+ sites, supporting Fortune 500 partners like Walmart and DoorDash, with a clear roadmap for 100+ sites in 2026.",
        "Owned the product strategy for regulatory compliance, successfully securing approvals from global aviation regulators (FAA, EASA, CASA) for autonomous operations.",
      ],
    },
    {
      company: "Dephy, Inc.",
      title: "Product Manager",
      dateRange: "May 2021 – November 2022",
      bullets: [
        "Drove annual revenue by building and managing a B2B developer platform with well-documented APIs that enabled 20+ research institutions to build on standardized robotics hardware.",
        "Achieved product-market fit with over 20+ active customers by creating technical documentation and developer support for researcher-led AI controller development.",
        "Secured SBIR funding for exoskeleton development spanning Army and Air Force use cases through successful DoD stakeholder engagement.",
      ],
    },
    {
      company: "Dephy, Inc.",
      title: "Software Engineer",
      dateRange: "March 2020 – April 2021",
      bullets: [
        "Developed an embedded AI model that achieved 99% accuracy in real-time human running gait detection for a bilateral exoskeleton.",
        "Awarded two U.S. patents for innovating real-time feedback control and ML-driven exoskeleton optimization.",
        "Reduced developer data processing time by 90% by creating standardized data analysis tools in Python/MATLAB.",
      ],
    },
    {
      company: "U.S. Army - Natick Soldier Systems Center",
      title: "Research Engineer",
      dateRange: "June 2015 – February 2020",
      bullets: [
        "Led development of predictive AI models for CT scan automation, successfully forecasting knee injury likelihood with high accuracy in a defense-relevant application.",
        "Secured over $400K in research grants, directing a multi-year computational biomechanics research roadmap.",
      ],
    },
  ],
  education: [
    {
      school: "University of Connecticut",
      degree: "M.S., Biomedical Engineering",
      dateRange: "", // Dates not specified on resume
      achievements: [],
    },
    {
      school: "University of Connecticut",
      degree: "B.S., Biomedical Engineering",
      dateRange: "", // Dates not specified on resume
      achievements: [],
    },
  ],
};
