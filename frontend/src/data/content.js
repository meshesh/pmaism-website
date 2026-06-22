// All static content for the PMAISM landing page.

export const BRAND = {
  name: "PMAISM",
  tagline: "AI-Enhanced Project Management Career Accelerator",
  logo: "https://customer-assets.emergentagent.com/job_exec-training-v2/artifacts/sp9c14im_final-logo_1.png",
  whatsapp: "+10000000000", // placeholder
  whatsappLink: "https://wa.me/10000000000",
  email: "hello@pmaism.com",
  linkedin: "https://www.linkedin.com/company/pmaism",
};

// Demo session details shown in the booking confirmation popup.
// Leave zoomLink empty to show the "we will message the link" note.
export const DEMO_SESSION = {
  date: "Every Saturday",
  time: "10:00 AM – 11:00 AM IST",
  mode: "Online",
  zoomLink: "", // placeholder — empty means link will be messaged
};

export const QUALIFICATIONS = [
  "High School",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];

export const NAV_LINKS = [
  { id: "program", label: "Program" },
  { id: "curriculum", label: "Curriculum" },
  { id: "outcomes", label: "Outcomes" },
  { id: "stories", label: "Success Stories" },
  { id: "faq", label: "FAQ" },
];

export const TRUST_INDICATORS = [
  "Live Mentor Led",
  "Online",
  "4–6 Week Program",
  "Morning Batches",
  "Placement Support",
];

export const PAIN = [
  "Certification overload",
  "Generic recordings",
  "Outdated content",
  "No mock interviews",
  "No placement support",
];

export const OUTCOME = [
  "Live mentorship",
  "Real-Time Project Examples in JIRA",
  "AI-enhanced productivity",
  "Intensive mock interviews",
  "Career transition support",
  "Pre & Post Placement Support",
];

export const AUDIENCES = [
  {
    title: "Freshers",
    tag: "Start your career",
    points: ["Learn industry workflows", "Become interview ready", "Land your first PM role"],
  },
  {
    title: "Career Switchers",
    tag: "Pivot with confidence",
    points: ["Transition from QA, Support, Operations", "Build PM credibility", "Learn stakeholder management"],
  },
  {
    title: "Working Professionals",
    tag: "Accelerate growth",
    points: ["Accelerate growth", "Lead Agile teams", "Learn modern PM execution"],
  },
];

export const CURRICULUM = [
  { icon: "Workflow", title: "Agile & Scrum Foundations", desc: "Master the frameworks teams actually run on, ceremonies, roles and artifacts.", outcome: "Speak fluent Agile from day one." },
  { icon: "GitBranch", title: "Real PM Workflows", desc: "Operate the day-to-day systems real Project Managers use to ship work.", outcome: "Run a project end-to-end." },
  { icon: "CalendarRange", title: "Sprint Planning & Execution", desc: "Plan, estimate and deliver sprints with velocity and predictability.", outcome: "Lead sprints with control." },
  { icon: "Users", title: "Stakeholder Management", desc: "Align engineering, design and leadership with clear communication.", outcome: "Navigate any stakeholder room." },
  { icon: "Building2", title: "Industry Scenarios", desc: "Work through real-world simulations modeled on live product teams.", outcome: "Handle ambiguity like a pro." },
  { icon: "Sparkles", title: "AI Productivity for PMs", desc: "Use modern AI systems to automate reporting, planning and analysis.", outcome: "10x your PM output with AI." },
  { icon: "MessagesSquare", title: "Interview Preparation", desc: "Rigorous mock interviews and PM case discussions with feedback.", outcome: "Walk in interview-ready." },
  { icon: "FileText", title: "Resume & LinkedIn Optimization", desc: "Position yourself with a PM-grade resume and standout profile.", outcome: "Get noticed by recruiters." },
  { icon: "Rocket", title: "Career Transition Strategy", desc: "A personalized roadmap to land and thrive in your first PM role.", outcome: "Execute your transition plan." },
];

export const METHOD = [
  { phase: "Phase 1", title: "Foundations", desc: "Core Agile, Scrum and PM fundamentals built from the ground up." },
  { phase: "Phase 2", title: "Execution", desc: "Run real workflows, sprints and delivery systems hands-on." },
  { phase: "Phase 3", title: "Real-World Scenarios", desc: "Simulations modeled on live product and engineering teams." },
  { phase: "Phase 4", title: "AI Productivity", desc: "Modern AI systems for planning, reporting and stakeholder work." },
  { phase: "Phase 5", title: "Interview Mastery", desc: "Mock interviews, case discussions and behavioral preparation." },
  { phase: "Phase 6", title: "Placement Readiness", desc: "Sharpen your LinkedIn and Naukri profiles, build recruiter-ready visibility, and get matched with relevant openings." },
  { phase: "Phase 7", title: "Course Completion Certification", desc: "Earn a verified completion certificate to showcase on LinkedIn and strengthen your professional credibility." },
];

export const WHY_FEATURES = [
  { icon: "Radio", title: "Live Mentorship", desc: "Every session is live, interactive and led by practicing PMs." },
  { icon: "Sunrise", title: "Weekday Morning Batches", desc: "Designed to fit around your working hours." },
  { icon: "MessagesSquare", title: "Mock Interviews", desc: "Intensive, realistic interview simulations with feedback." },
  { icon: "FileText", title: "Resume Preparation", desc: "PM-grade resume crafted to pass recruiter screens." },
  { icon: "Sparkles", title: "AI Productivity Training", desc: "Use AI to automate the busywork of project management." },
  { icon: "Route", title: "Career Transition Support", desc: "A clear, personalized path into your first PM role." },
  { icon: "Headphones", title: "24/7 Mentor Access", desc: "Get unblocked anytime through always-on mentor support." },
  { icon: "Briefcase", title: "Placement Assistance", desc: "Opportunity sharing and guidance through to offer." },
];

export const STORIES = [
  { name: "Aarav Mehta", from: "QA Engineer", to: "Project Manager", quote: "I stopped watching theory videos and started running real sprints. Within weeks I was speaking the language of a PM in interviews." },
  { name: "Priya Nair", from: "Support Engineer", to: "Project Manager", quote: "The mock interviews were brutal in the best way. By my real interview, nothing surprised me. I had an offer in a month." },
  { name: "Rohan Das", from: "Developer", to: "Scrum Master", quote: "Learning AI workflows alongside Agile set me apart. My team now relies on the systems I picked up at PMAISM." },
  { name: "Sneha Kulkarni", from: "Business Analyst", to: "Project Manager", quote: "The stakeholder management module alone was worth it. I lead cross-functional rooms with total confidence now." },
  { name: "Imran Sheikh", from: "Operations Lead", to: "Project Manager", quote: "Live mentorship made the difference. Real feedback on real work, not a pre-recorded course gathering dust." },
];

export const PLACEMENT = [
  { icon: "FileText", title: "Resume Building" },
  { icon: "Linkedin", title: "LinkedIn Optimization" },
  { icon: "MessagesSquare", title: "Mock Interviews" },
  { icon: "Presentation", title: "PM Case Discussions" },
  { icon: "Brain", title: "Behavioral Preparation" },
  { icon: "Share2", title: "Opportunity Sharing" },
  { icon: "MessageCircle", title: "Interview Feedback" },
  { icon: "Award", title: "Offer Guidance" },
];

export const FAQS = [
  { q: "Is this beginner friendly?", a: "Absolutely. We start with the core fundamentals of Agile and Scrum before moving into advanced workflows and AI tools. Freshers have successfully transitioned into PM roles through this program." },
  { q: "Is this suitable for working professionals?", a: "Yes. The program is specifically designed with morning batches to accommodate working hours, allowing you to upskill without leaving your current job." },
  { q: "Are sessions live?", a: "100%. We believe in live mentorship over pre-recorded videos. All sessions are live, interactive, and highly practical." },
  { q: "Is interview preparation included?", a: "Yes. We conduct rigorous mock interviews, resume reviews, and portfolio building sessions to ensure you are completely job-ready." },
  { q: "Will I receive training on industry-standard PM tools?", a: "We provide hands-on training on widely used project management tools including JIRA, Microsoft Project, and Azure DevOps, ensuring you gain practical experience with tools commonly used in real-world PM environments." },
  { q: "Is this online?", a: "Yes. The entire program is delivered online through interactive Zoom sessions, allowing you to join from anywhere." },
  { q: "Is placement support available?", a: "We provide comprehensive placement assistance including resume building, LinkedIn optimization, interview prep, and sharing relevant opportunities." },
  { q: "What makes PMAISM different?", a: "Unlike generic certification mills, we focus on real-world execution. You learn the actual workflows, AI tools, and stakeholder management skills required to survive and thrive on the job." },
];

export const BLOG = [
  { tag: "Career", title: "How to Transition Into Project Management", read: "6 min read", desc: "A practical roadmap from QA, support or development into your first PM role." },
  { tag: "AI", title: "AI Tools Every PM Should Know in 2026", read: "5 min read", desc: "The modern AI stack that automates reporting, planning and stakeholder work." },
  { tag: "Agile", title: "Agile vs Waterfall: What Actually Ships", read: "4 min read", desc: "When to use each, and why most real teams live somewhere in between." },
  { tag: "Interview", title: "Scrum Master Interview Questions, Decoded", read: "7 min read", desc: "The questions that come up again and again, and how to answer with execution." },
  { tag: "Strategy", title: "Career Transition Strategies That Work", read: "5 min read", desc: "Positioning, networking and proof-of-work tactics to land the offer." },
];

export const COMPANIES = [
  "Northwind", "Acme Labs", "Vertex", "Lumina", "Kanban Co", "Cobalt", "Helix", "Arcadia",
];
