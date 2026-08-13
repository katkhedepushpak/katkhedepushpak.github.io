export const profile = {
  name: 'Pushpak Vijay Katkhede',
  handle: 'katkhedepushpak',
  location: 'Sunnyvale, CA · Corvallis, OR',
  roles: ['AI Engineer', 'Applied ML Engineer', 'Backend / DevOps Engineer', 'Developer'],
  tagline:
    'Building AI-driven systems, backend services, and cloud platforms that scale — from RAG pipelines and LLM agents to REST APIs.',
  email: 'katkhedepushpak@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pushpakkatkhede',
  github: 'https://github.com/katkhedepushpak',
  facebook: 'https://www.facebook.com/katkhedepushpak/',
  resumeUrl: '/resume/pushpak_katkhede_resume.pdf',
  status: 'Open to Work',
  authorization: 'Authorized to work in the US',
}

export const bio = [
  'I’m currently a Software Engineer at Oregon State University and a Master’s graduate in Computer Science from OSU. Before this role, I worked as a Research Assistant under Dr. Manish Motwani at the ANSWER Lab, where my work on real-world REST API defect analysis led to a publication at ICSE 2026 (ACM/IEEE).',
  'Prior to graduate school, I spent 3 years as a Software Engineer at IBM, building enterprise microservices, cloud-native automation platforms, and observability tooling that served 500K+ users and contributed to $3M in signed contracts.',
  'Outside work I enjoy solving DS&A problems, exploring GenAI tooling, and contributing to open-source. Open to remote or relocation anywhere in the US.',
]

export const stats = [
  { value: '6+', label: 'years writing code' },
  { value: '3+', label: 'years as a professional SWE' },
  { value: '1', label: 'ICSE 2026 publication' },
  { value: '15+', label: 'shipped projects' },
]

export const highlights = [
  'Shipping LLM-powered agentic GenAI systems in production (RAG, tool calling, LangGraph).',
  'Engineered multi-stack software backed by DevSecOps & SRE practices (CI/CD, IaC, observability).',
  '6+ machine learning projects spanning NLP, deep learning, and time-series forecasting.',
  'Published author at ICSE 2026 (ACM/IEEE) and holder of 4 industry-recognized certifications.',
]

export const publication = {
  badge: 'ACM / IEEE • ICSE 2026',
  title: 'Defects4REST: A Benchmark of Real-World REST API Defects',
  venue: 'International Conference on Software Engineering • Peer-reviewed • Published Author',
  href: 'https://mmotwani.com/publications/publication_sources/Mehta26icse.pdf',
}

export type SkillGroup = {
  key: string
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'languages',
    title: 'Languages',
    icon: 'Code2',
    items: ['Python', 'Go', 'C++', 'JavaScript', 'TypeScript', 'Bash'],
  },
  {
    key: 'llm',
    title: 'LLM Engineering',
    icon: 'Sparkles',
    items: [
      'LangChain', 'LangGraph', 'LangSmith', 'Anthropic Claude', 'OpenAI', 'Ollama',
      'MCP', 'Tool Calling', 'Structured Outputs', 'Hugging Face',
    ],
  },
  {
    key: 'agentic',
    title: 'Agentic Systems',
    icon: 'Bot',
    items: [
      'AI Agents', 'Agent Orchestration', 'RAG', 'Hybrid Search / Reranking',
      'Human-in-the-Loop', 'Guardrails', 'LLM-as-a-Judge', 'Prompt Engineering',
    ],
  },
  {
    key: 'ml',
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    items: [
      'PyTorch', 'TensorFlow', 'Transformers / BERT', 'CNN / RNN / LSTM', 'GANs',
      'scikit-learn', 'XGBoost', 'Fine-tuning', 'NLP',
    ],
  },
  {
    key: 'backend',
    title: 'Backend & Web',
    icon: 'Server',
    items: [
      'FastAPI', 'Flask', 'Node.js', 'Express.js', 'React.js', 'REST APIs',
      'Kafka', 'SOAP', 'Microservices',
    ],
  },
  {
    key: 'data',
    title: 'Databases',
    icon: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'DynamoDB', 'ChromaDB', 'Pinecone'],
  },
  {
    key: 'devops',
    title: 'DevOps / Cloud / SRE',
    icon: 'Cloud',
    items: [
      'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'AWS',
      'Azure', 'CI/CD', 'IaC', 'GitOps', 'Observability', 'Fault Injection',
    ],
  },
  {
    key: 'practices',
    title: 'Practices',
    icon: 'GitBranch',
    items: ['Agile / Scrum', 'OOP', 'SOLID', 'TDD', 'Distributed Systems', 'SRE'],
  },
]

export type Commit = {
  hash: string
  role: string
  org: string
  location: string
  date: string
  bullets: string[]
  branch?: string
}

export const experience: Commit[] = [
  {
    hash: 'a1c9e42',
    role: 'Software Engineer',
    org: 'Oregon State University',
    location: 'Corvallis, OR',
    date: 'May 2025 — Present',
    branch: 'main',
    bullets: [
      'Built a stateful LLM-assisted account compromise detection system processing 500K+ daily Duo MFA / Entra ID logs, combining rule-based filtering, agent-orchestrated investigation, and human-in-the-loop escalation.',
      'Built an LLM-powered identity resolution system resolving 4,500+ duplicate identities and 100+ new identities daily via phonetic blocking, fuzzy matching, and LLM-based equivalence scoring.',
      'Engineered 20+ Python/SQL integration pipelines synchronizing enterprise systems and mapping 850+ access groups across 125+ applications, de-risking an on-prem-to-cloud HR platform migration.',
      'Delivered an internal tool and reusable Python SDK for API orchestration, authentication, and logging, cutting development effort by 50%.',
    ],
  },
  {
    hash: '7f3b810',
    role: 'Research Assistant — ANSWER Lab',
    org: 'Oregon State University',
    location: 'Corvallis, OR',
    date: 'Dec 2024 — May 2025',
    branch: 'research/defects4rest',
    bullets: [
      'Formulated API defect categorization as an NLP classification problem, defining a ground-truth taxonomy across 200K+ GitHub issues for downstream BERT/LLM models.',
      'Designed a scalable research pipeline for bug extraction via GitHub API mining, integrating custom tokenization, BERT embeddings, and StarCoder2 LLMs — published at ICSE 2026 (ACM/IEEE).',
    ],
  },
  {
    hash: '3d81c05',
    role: 'Software Engineer',
    org: 'IBM India',
    location: 'Bangalore, India',
    date: 'Oct 2019 — Jul 2022',
    branch: 'main',
    bullets: [
      'Designed a self-service trial environment for observability pipelines with Terraform-provisioned infrastructure, enabling 50+ enterprise customers and $3M in signed contracts.',
      'Led a cross-functional team of 3 interns building fault-injection simulators for API interactions and microservice failures.',
      'Containerized and orchestrated 15+ microservices serving 500K+ users, achieving 99% fault-tolerant deployments via CI/CD with automated rollout and monitoring dashboards.',
      'Migrated a legacy JS app to React (Redux, Context API), improving CSAT by 23%; improved performance by 30% via event-driven refactors.',
    ],
  },
  {
    hash: '0a1e9c2',
    role: 'Data Science Intern',
    org: 'TechAmplifiers',
    location: 'Pune, India',
    date: 'Jul 2019 — Oct 2019',
    branch: 'main',
    bullets: [
      'Built early machine learning models and data pipelines across applied data science projects.',
    ],
  },
]

export type Project = {
  key: string
  name: string
  tagline: string
  description: string
  tags: string[]
  stack: string[]
  links: { label: string; href: string }[]
  status?: string
}

export const projects: Project[] = [
  {
    key: 'argus',
    name: 'ARGUS',
    tagline: 'Autonomous Reasoning Gateway for Unified Systems',
    description:
      'An end-to-end LLM-powered AIOps agent using the Anthropic Claude API with structured tool calling, orchestrating diagnostic workflows across Prometheus, Splunk, and kubectl to detect, diagnose, and remediate incidents — with a human-in-the-loop approval guardrail before executing any remediation action. Tracks tool-call traces, LLM-as-a-Judge scores, and root-cause accuracy via LangSmith.',
    tags: ['AIOps', 'Agents', 'LLMOps'],
    stack: ['Python', 'Claude API', 'Kubernetes', 'LangSmith', 'Prometheus'],
    links: [],
    status: 'Personal Project',
  },
  {
    key: 'askchamp',
    name: 'Ask chAMP!',
    tagline: 'Production RAG Chatbot',
    description:
      'A production RAG chatbot with multi-source ingestion and multi-query hybrid retrieval (vector search + BM25), applying Reciprocal Rank Fusion reranking and exposing FastAPI REST APIs for sub-10-second response generation. A Kafka-based event-driven ingestion pipeline processes 4.5GB+ across 3k+ PDFs, GitHub repos, and SharePoint docs with near-real-time ChromaDB updates (87% LLM-judged groundedness).',
    tags: ['GenAI', 'RAG', 'LLMs'],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Kafka', 'BM25'],
    links: [],
    status: 'Enterprise — Not Public',
  },
  {
    key: 'defects4rest',
    name: 'Defects4REST',
    tagline: 'ICSE 2026 — REST API Defect Benchmark',
    description:
      'The first public benchmark of REST API defects systematically mined from open-source repositories. A semi-automated pipeline combining NLP techniques and manual validation classifies defects into a novel taxonomy — published at the ACM/IEEE International Conference on Software Engineering (ICSE) 2026.',
    tags: ['NLP', 'LLMs', 'Research'],
    stack: ['Python', 'BERT', 'StarCoder2', 'GitHub API'],
    links: [{ label: 'Read Paper', href: 'https://mmotwani.com/publications/publication_sources/Mehta26icse.pdf' }],
    status: 'Published — ICSE 2026',
  },
  {
    key: 'silicon',
    name: 'Si Level Forecaster',
    tagline: 'LSTM Time-Series Forecasting',
    description:
      'A 2-layer LSTM (1024 hidden units, 29 features, 10-step sliding window) forecasting dissolved silicon concentrations across 9 river sites — achieving a 22% RMSE reduction vs. an XGBoost baseline, with per-stream MinMaxScaling and CUDA-accelerated training.',
    tags: ['Deep Learning', 'Time-Series'],
    stack: ['PyTorch', 'NumPy', 'scikit-learn', 'MLflow'],
    links: [{ label: 'Source Code', href: 'https://github.com/katkhedepushpak/silicon-analysis-lstm' }],
  },
  {
    key: 'medicalgan',
    name: 'Medical Dataset Augmentation',
    tagline: 'GANs for Class-Imbalanced Medical Imaging',
    description:
      'Conditional and deep convolutional GANs engineered on a skin lesion dataset, synthetically augmenting training samples by 180% to resolve class imbalance — improving classification accuracy by 8% on rare lesion variants.',
    tags: ['Deep Learning', 'GANs'],
    stack: ['PyTorch', 'CNNs'],
    links: [],
    status: 'Research Project',
  },
  {
    key: 'jotitdown',
    name: 'Jot-It-Down',
    tagline: 'MERN Notes & Reminders App',
    description:
      'A cloud-based interactive app built with the MERN stack, enabling users to securely manage notes, reminders, and themes with JWT authentication.',
    tags: ['MERN', 'Full-Stack'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    links: [{ label: 'Source Code', href: 'https://github.com/katkhedepushpak/Jot-it-Down' }],
  },
  {
    key: 'lats',
    name: 'LATS',
    tagline: 'Location-Aware Tracking System',
    description:
      'A multi-tier GPS-based emergency response system optimizing police force deployment via ML classification, reducing response time to under 45 seconds — published in IJCSE, 2019.',
    tags: ['IoT', 'Machine Learning'],
    stack: ['Python', 'GPS', 'Classification'],
    links: [
      { label: 'Source Code', href: 'https://github.com/katkhedepushpak/LATS' },
      { label: 'Journal Paper', href: 'https://www.ijcseonline.org/pdf_paper_view.php?paper_id=3578&125-IJCSE-05702.pdf' },
    ],
  },
  {
    key: 'banditjoins',
    name: 'Bandit Joins',
    tagline: 'PostgreSQL Join Optimization',
    description:
      'Modified PostgreSQL C source code for join operations using hashing and indexing informed by bandit-algorithm strategies, reducing join execution time by over 30% on large-scale datasets.',
    tags: ['Databases', 'Systems'],
    stack: ['C', 'PostgreSQL', 'ETL'],
    links: [],
    status: 'Research Project',
  },
  {
    key: 'labtracker',
    name: 'Lab Progress Tracker',
    tagline: 'Research Lab Management Platform',
    description:
      'A full-stack Research Lab Management application organizing experiment timelines, outcomes, and supervisor feedback, with role-based access control across students, researchers, and administrators.',
    tags: ['Full-Stack', 'RBAC'],
    stack: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
    links: [],
    status: 'Private Project',
  },
  {
    key: 'neighborhood',
    name: 'Neighborhood Recommender',
    tagline: 'Clustering-Based Recommendation',
    description:
      'A data-driven neighborhood recommendation system using K-Means and DBSCAN to profile Toronto neighborhoods by amenities, demographics, and venue density via the Foursquare API.',
    tags: ['Machine Learning', 'Clustering'],
    stack: ['Python', 'K-Means', 'DBSCAN', 'Folium'],
    links: [{ label: 'Source Code', href: 'https://github.com/katkhedepushpak/Toronto-clustering-segmentation' }],
  },
  {
    key: 'bankanalyzer',
    name: 'Bank Telemarket Analyzer',
    tagline: 'Cost-Sensitive Lead-Conversion Prediction',
    description:
      'A predictive system forecasting term-deposit lead conversions, achieving 96.73% recall using cost-sensitive learning with penalized SVM and Random Forest classifiers.',
    tags: ['Machine Learning'],
    stack: ['scikit-learn', 'SVM', 'Random Forest'],
    links: [{ label: 'Source Code', href: 'https://github.com/katkhedepushpak/Bank-Telemarketing-Campaign' }],
  },
  {
    key: 'crackstation',
    name: 'CrackStation MVP',
    tagline: 'SHA-256 Lookup Service',
    description:
      'A password-decryption library exposing a public REST API for SHA-256 hash lookups via a precomputed lookup table, documented with Swagger for third-party integration.',
    tags: ['Cybersecurity', 'REST API'],
    stack: ['Python', 'Swagger'],
    links: [{ label: 'Source Code', href: 'https://github.com/katkhedepushpak/CrackStationAsService' }],
  },
]

export const education = [
  {
    degree: 'Master of Science, Computer Science (AI Focus)',
    school: 'Oregon State University, Corvallis, OR',
    date: '2022 — 2024',
    detail: 'GPA: 3.75 / 4.0',
  },
  {
    degree: 'Bachelor of Engineering, Computer Engineering',
    school: 'Savitribai Phule Pune University, Pune, India',
    date: '2015 — 2019',
    detail: 'GPA: 8.10 / 10.0',
  },
]
