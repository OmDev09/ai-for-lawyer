// Mock data for Veritas Copilot

export const features = [
  {
    title: "Semantic Case Finder",
    icon: "Search",
    description: "Vector-powered search that understands legal concepts, not just keywords. Find cases by facts and legal issues."
  },
  {
    title: "AI Argument Builder", 
    icon: "FileText",
    description: "Generate structured arguments with pinpoint citations from retrieved precedents. Every claim is backed by law."
  },
  {
    title: "Judge & Bench Filters",
    icon: "Filter",
    description: "Search by specific judges, benches, courts, and time periods. Get the most relevant precedents for your case."
  },
  {
    title: "Research Sessions",
    icon: "BookOpen",
    description: "Auto-save your research progress. Pick up where you left off and build comprehensive case strategies over time."
  },
  {
    title: "Export to Draft",
    icon: "Download",
    description: "Export your findings and arguments directly to Word documents or PDFs. Ready for court submission."
  },
  {
    title: "Private Workspace",
    icon: "Shield",
    description: "Client data stays secure in your private workspace. No training on your confidential information."
  }
];

export const demoResults = [
  {
    title: "State of Maharashtra v. Mohd. Hussain",
    court: "Supreme Court of India",
    year: "2019",
    snippet: "The burden of proof in cases involving <mark>criminal breach of trust</mark> lies with the prosecution to establish the accused's dishonest intention...",
    sections: ["IPC 405", "IPC 420", "Evidence Act Sec 101"],
    relevanceScore: 94
  },
  {
    title: "Ram Kumar v. State of Haryana", 
    court: "Supreme Court of India",
    year: "2021",
    snippet: "When dealing with <mark>dishonest misappropriation</mark>, the court must examine the relationship between the parties and the nature of entrustment...",
    sections: ["IPC 403", "IPC 405", "Contract Act"],
    relevanceScore: 89
  },
  {
    title: "Prakash Singh v. Union of India",
    court: "Delhi High Court", 
    year: "2020",
    snippet: "The distinction between criminal breach of trust and <mark>cheating</mark> depends on the initial intention of the accused at the time of entrustment...",
    sections: ["IPC 420", "IPC 405"],
    relevanceScore: 87
  }
];

export const testimonials = [
  {
    name: "Adv. Priya Sharma",
    role: "Senior Advocate, Bombay High Court",
    quote: "Veritas has transformed my research process. What used to take hours now takes minutes, and the citations are always on point.",
    rating: 5,
    location: "Mumbai"
  },
  {
    name: "Adv. Rajesh Kumar",
    role: "Partner, Kumar & Associates",
    quote: "The semantic search is incredible. It finds cases I never would have discovered with traditional keyword searches.",
    rating: 5,
    location: "Delhi"  
  },
  {
    name: "Adv. Meera Nair",
    role: "Criminal Law Specialist",
    quote: "Finally, an AI tool built specifically for Indian law. The argument builder saves me hours of drafting time.",
    rating: 5,
    location: "Bangalore"
  }
];

export const faqData = [
  {
    question: "Which courts and jurisdictions are covered?",
    answer: "We currently cover the Supreme Court of India and major High Courts including Bombay, Delhi, Madras, and Calcutta. We're continuously expanding coverage to include more High Courts and tribunals."
  },
  {
    question: "Does Veritas provide legal advice?",
    answer: "No, Veritas is a research and drafting tool for legal professionals. It helps you find relevant precedents and draft arguments, but all legal decisions and advice remain with the advocate."
  },
  {
    question: "How do you ensure accuracy of AI-generated content?",
    answer: "We use Retrieval-Augmented Generation (RAG) technology, which means our AI only generates responses based on the actual case law you can see and verify. Every argument includes inline citations to specific cases and sections."
  },
  {
    question: "Is my client data kept private and secure?",
    answer: "Absolutely. Your research queries and client information stay within your private workspace. We never use your data to train our models, and all data is encrypted in transit and at rest."
  },
  {
    question: "Will there be mobile apps available?",
    answer: "Yes, we're developing iOS and Android apps that will launch alongside our web platform. You'll be able to research cases and review arguments on the go."
  },
  {
    question: "Can I try Veritas before subscribing?",
    answer: "Yes, we offer a free tier with limited monthly searches so you can experience the platform. We also provide free trials for our Pro and Chambers plans."
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "month",
    description: "Perfect for trying out Veritas",
    features: [
      "10 searches per month",
      "Basic case retrieval", 
      "Standard argument templates",
      "Email support",
      "Export to PDF"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "₹2,499",
    period: "month", 
    description: "For individual advocates",
    features: [
      "Unlimited searches",
      "Advanced semantic search",
      "AI argument builder",
      "All Indian courts coverage",
      "Priority support",
      "Export to Word & PDF",
      "Research session history",
      "Judge & bench filters"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Chambers",
    price: "₹9,999",
    period: "month",
    description: "For law firms and chambers", 
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared research libraries",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
      "Training & onboarding",
      "Enterprise security"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const howItWorksSteps = [
  {
    id: "describe",
    title: "Describe Your Facts",
    description: "Enter your case facts in natural language. No need for complex legal queries.",
    example: `Query: "Client was given money to invest but used it for personal expenses. Charged under IPC 420 and 405."

Jurisdiction: Supreme Court, Bombay HC
Time Period: Last 10 years`,
    code: `{
  "query": "dishonest breach of trust investment fraud",
  "jurisdiction": ["SC", "Bombay_HC"],
  "sections": ["IPC_420", "IPC_405"],
  "timeframe": "2013-2023"
}`
  },
  {
    id: "retrieve", 
    title: "Retrieve Relevant Cases",
    description: "Our AI finds the most relevant precedents using semantic search and legal reasoning.",
    example: `Found 127 cases, showing top 5:

1. State v. Mohd. Hussain (2019) SC - 94% match
2. Ram Kumar v. State (2021) SC - 89% match  
3. Prakash Singh v. Union (2020) Del HC - 87% match`,
    code: `{
  "results": [
    {
      "title": "State v. Mohd. Hussain",
      "court": "Supreme Court", 
      "year": 2019,
      "relevance": 0.94,
      "sections": ["IPC 405", "IPC 420"]
    }
  ]
}`
  },
  {
    id: "build",
    title: "Build Your Arguments", 
    description: "Generate structured legal arguments with proper citations and precedent analysis.",
    example: `Argument Draft:

1. BURDEN OF PROOF
The prosecution must establish dishonest intention from the beginning [State v. Mohd. Hussain (2019) SC].

2. DISTINCTION FROM CHEATING  
Criminal breach of trust requires prior entrustment, unlike cheating [Ram Kumar v. State (2021) SC].`,
    code: `{
  "argument": {
    "points": [
      {
        "heading": "Burden of Proof",
        "citation": "State v. Mohd. Hussain (2019) SC", 
        "principle": "Dishonest intention must be proved"
      }
    ]
  }
}`
  }
];

export const courtLogos = [
  { name: "Supreme Court", shortName: "SC" },
  { name: "Bombay High Court", shortName: "BHC" },
  { name: "Delhi High Court", shortName: "DHC" },
  { name: "Madras High Court", shortName: "MHC" },
  { name: "Calcutta High Court", shortName: "CHC" }
];

export const trustBadges = [
  { text: "Built for Indian Law", icon: "Scale" },
  { text: "RAG-powered", icon: "Zap" },
  { text: "Citations First", icon: "CheckCircle" }
];