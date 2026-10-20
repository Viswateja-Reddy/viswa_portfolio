export const profile = {
  name: "Beeram Viswateja Reddy",
  first: "BEERAM",
  middle: "VISWATEJA",
  last: "REDDY",
  role: "Software Developer",
  location: "Hyderabad, Telangana, India",
  email: "viswateja5747@gmail.com",
  tagline: "Building intelligent, scalable and engaging digital experiences.",
  linkedin: "https://linkedin.com/in/beeram-viswateja-reddy",
  github: "https://github.com/Viswateja-Reddy",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const experience = [
  {
    role: "Project Intern",
    company: "Vyphera Groups",
    period: "December 2025 – January 2026",
    location: "Remote, India",
    points: [
      "Built React.js frontend interfaces across the platform",
      "Delivered 7+ core modules and 15+ reusable UI components",
      "Developed Student and Faculty portals with distinct interfaces",
      "Created responsive laboratory interfaces for varied screen sizes",
    ],
    metrics: [
      { value: "7+", label: "Core modules" },
      { value: "15+", label: "UI components" },
    ],
  },
];

export const skillGroups = [
  {
    category: "Programming",
    items: [
      { name: "Java", note: "Core language used for DSA and technical interview preparation." },
      { name: "SQL", note: "Querying, joins and schema design for relational data." },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "React.js", note: "Component architecture, state and responsive interfaces." },
      { name: "JavaScript", note: "Primary language for interactive web development." },
      { name: "HTML", note: "Semantic structure and accessible markup." },
      { name: "CSS", note: "Layout systems, responsive design and motion." },
      { name: "Node.js", note: "Server-side JavaScript for APIs and services." },
      { name: "Express.js", note: "REST API routing and middleware." },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", note: "Relational modelling and query work." },
      { name: "MongoDB", note: "Document models for application data." },
      { name: "Supabase", note: "Postgres backend, auth and APIs." },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "ServiceNow", note: "Platform administration and application development." },
      { name: "GitHub", note: "Version control and collaboration." },
      { name: "VS Code", note: "Primary development environment." },
      { name: "Postman", note: "API testing and debugging." },
    ],
  },
  {
    category: "Core",
    items: [
      { name: "Data Structures & Algorithms", note: "Problem solving foundation across platforms." },
      { name: "Object-Oriented Programming", note: "Design principles applied in Java projects." },
      { name: "DBMS", note: "Normalization, transactions and indexing concepts." },
      { name: "Operating Systems", note: "Processes, memory and concurrency fundamentals." },
      { name: "SDLC", note: "Structured approach to building and shipping software." },
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  tech: string[];
  features: string[];
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Community-Driven Problem-Solving System",
    summary: "A civic issue reporting platform with role-based access and a tracked resolution lifecycle.",
    problem:
      "Community issues get reported through scattered channels with no ownership, no routing and no visibility into progress.",
    solution:
      "A single system where issues are raised, routed to the right department and moved through a clear four-stage lifecycle with full audit history.",
    architecture:
      "React.js client consuming REST APIs served by Node.js and Express.js, with Supabase for data, auth and role storage.",
    tech: ["React.js", "Node.js", "Express.js", "Supabase", "REST APIs"],
    features: [
      "Role-based access control across 3 user roles",
      "4-stage issue lifecycle",
      "Automatic department routing",
      "5+ issue categories",
      "Status dashboard",
      "Audit trails",
      "Analytics",
    ],
    metrics: [
      { value: "3", label: "User roles" },
      { value: "4", label: "Lifecycle stages" },
      { value: "5+", label: "Categories" },
    ],
  },
  {
    index: "02",
    title: "Integrated Student & Campus Services Platform",
    summary: "A campus operations platform covering examination services end to end.",
    problem:
      "Campus services live in disconnected tools, making examination workflows manual and error prone for students and staff.",
    solution:
      "One platform with role-aware modules for examination services, hall-ticket generation and seating allocation.",
    architecture:
      "React.js frontend with a Node.js and Express.js API layer, MongoDB across 8 data models, and JWT-based authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "4 user roles",
      "6+ core modules",
      "Examination services",
      "Hall-ticket generation",
      "PDF and QR support",
      "Seating allocation",
      "8 data models",
    ],
    metrics: [
      { value: "4", label: "User roles" },
      { value: "6+", label: "Modules" },
      { value: "8", label: "Data models" },
    ],
  },
];

export const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Trees",
  "Stacks",
  "Queues",
  "Hashing",
];

export const certifications = [
  {
    short: "CSA",
    title: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    detail: "Platform administration, configuration and core ServiceNow architecture.",
  },
  {
    short: "CAD",
    title: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
    detail: "Designing, building and deploying applications on the ServiceNow platform.",
  },
  {
    short: "NPTEL",
    title: "NPTEL Elite — Data Structures & Algorithms using Java",
    issuer: "NPTEL",
    detail: "Elite certification. Score: 71/100.",
  },
];

export const achievements = [
  { value: "250+", label: "DSA problems solved", note: "LeetCode · GeeksforGeeks · CodeChef" },
  { value: "Elite", label: "NPTEL Certification", note: "DSA using Java · 71/100" },
  { value: "Winner", label: "Innovation Challenge", note: "First place" },
];

export const education = [
  {
    school: "MLR Institute of Technology",
    period: "2023 – 2027",
    degree: "Bachelor of Technology in Information Technology",
    score: "CGPA 8.41/10",
  },
  {
    school: "Vinjee Junior College",
    period: "2021 – 2023",
    degree: "Intermediate — Mathematics, Physics, Chemistry",
    score: "CGPA 9.36/10",
  },
  {
    school: "Sanghamitra School",
    period: "2010 – 2021",
    degree: "Secondary School",
    score: "CGPA 10/10",
  },
];
