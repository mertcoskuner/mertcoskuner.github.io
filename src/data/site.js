export const profile = {
  name: "Mert Coşkuner",
  role: "MSc student in Computer Science & Engineering, Sabancı University",
  location: "Istanbul, Türkiye",
  email: "mertcoskuner@gmail.com",
  summary:
    "I work on trustworthy and efficient machine learning: how learning systems behave under attack and under constraints. My recent projects study Byzantine-robust and differentially private federated learning, backdoors in graph neural networks, adversarial robustness and distillation, and how 4-bit quantization treats multilingual language models.",
  now:
    "Today I am a researcher at TÜBİTAK BİLGEM and a teaching assistant for CS404 Artificial Intelligence at Sabancı University.",
};

export const links = [
  { label: "GitHub", href: "https://github.com/mertcoskuner" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mertcoskuner/" },
  { label: "Email", href: "mailto:mertcoskuner@gmail.com" },
];

export const interests = [
  "Federated learning under Byzantine attacks and differential privacy",
  "Backdoor and evasion attacks, and defenses, on vision and graph models",
  "Robustness of compressed models: distillation and low-bit quantization",
  "Multilingual and Turkish language models",
];

export const projects = [
  {
    slug: "structure-aware-fedala",
    title: "Structure-aware FedALA",
    year: "2026",
    area: "Federated graph learning",
    blurb:
      "Personalised federated graph learning with topology-weighted aggregation, a proximal term and degree-calibrated differential privacy, benchmarked on seven graph datasets with 10 and 20 clients.",
    tags: ["federated learning", "GNN", "differential privacy"],
    image: "/images/projects/structure-aware-fedala.webp",
    featured: true,
  },
  {
    slug: "tr-quantbench",
    title: "TR-QuantBench",
    year: "2026",
    area: "Efficient LLMs",
    blurb:
      "How the language of the calibration data shapes 4-bit GPTQ and AWQ quantization of multilingual LLMs, with a Turkish focus and a tokenizer-density analysis.",
    tags: ["LLMs", "quantization", "Turkish NLP"],
    image: "/images/projects/tr-quantbench.webp",
    featured: true,
  },
  {
    slug: "gnn-backdoor-attacks",
    title: "Backdoors in graph neural networks",
    year: "2026",
    area: "ML security",
    blurb:
      "A PyTorch Geometric framework for graph, node and link tasks with Graph Trojaning Attack backdoors on graph classification, plus spectral, topological and feature analyses of poisoned graphs.",
    tags: ["GNN", "backdoor attacks", "PyG"],
    image: "/images/projects/gnn-backdoor-attacks.webp",
    featured: true,
  },
  {
    slug: "robust-distillation",
    title: "Robust distillation",
    year: "2026",
    area: "Adversarial robustness",
    blurb:
      "Corruption and adversarial robustness of transfer-learned and distilled CNNs on CIFAR-10/-C: AugMix with JSD, PGD, Grad-CAM, and how a teacher's adversarial examples transfer to its students.",
    tags: ["robustness", "distillation", "CIFAR-10-C"],
    image: "/images/projects/robust-distillation.webp",
    featured: true,
  },
  {
    slug: "neural-feedback-codes",
    title: "Neural feedback codes",
    year: "2026",
    area: "Learning for communication",
    blurb:
      "End-to-end learned channel codes for the AWGN channel with noiseless feedback: a transformer transmitter and receiver trained through the channel, with ablations over rounds, noise and capacity.",
    tags: ["transformers", "channel coding"],
    image: "/images/projects/neural-feedback-codes.webp",
    featured: true,
  },
  {
    slug: "aspect-based-recommender",
    title: "Aspect-based recommender",
    year: "2026",
    area: "NLP",
    blurb:
      "Product recommendation from Amazon reviews via instruction-tuned aspect-based sentiment analysis, LDA and BERTopic topics, and hierarchical meta-aspect clustering.",
    tags: ["ABSA", "topic models", "clustering"],
    image: "/images/projects/aspect-based-recommender.webp",
    featured: true,
  },
  {
    slug: "adversarial-ml-mnist",
    title: "Adversarial ML on MNIST",
    year: "2026",
    area: "ML security",
    blurb:
      "A plug-and-play library of evasion attacks, backdoor attacks and defenses, and Byzantine-robust federated learning on MNIST, with one runnable script per topic.",
    tags: ["adversarial ML", "backdoors", "federated learning"],
  },
  {
    slug: "columnist-persona-llm",
    title: "Columnist persona LLM",
    year: "2025",
    area: "NLP",
    blurb:
      "Style-conditioned Turkish LLMs: retrieval over a columnist's articles, LoRA fine-tuning, and an evaluation of style imitation against faithfulness to the source text.",
    tags: ["RAG", "LoRA", "Turkish NLP"],
  },
  {
    slug: "mlp-ablation-suite",
    title: "MLP ablation suite",
    year: "2026",
    area: "Deep learning",
    blurb:
      "A 22-run ablation of depth, width, activation, dropout, BatchNorm and L1/L2 regularisation for an MLP on MNIST, orchestrated with SLURM.",
    tags: ["ablation", "reproducibility"],
    image: "/images/projects/mlp-ablation-suite.webp",
  },
];

export const experience = [
  {
    when: "Jan 2025 – now",
    title: "Researcher",
    org: "TÜBİTAK BİLGEM, Informatics and Information Security Research Center",
    place: "Kocaeli",
    detail: "Research in big data, cloud computing and machine learning.",
  },
  {
    when: "Jul 2024 – Jan 2025",
    title: "Research Intern",
    org: "Ericsson",
    place: "Istanbul",
    detail:
      "Signal identification with gradient-boosted models and CNNs, CNN-based DDoS detection, and anomaly detection for federated-learning security.",
  },
  {
    when: "Jan – Feb 2023",
    title: "Software Engineering Intern",
    org: "TÜBİTAK BİLGEM",
    place: "Kocaeli",
    detail: "Blockchain development for an NFT marketplace.",
  },
  {
    when: "Aug – Sep 2022",
    title: "Software Engineering Intern",
    org: "Intertech",
    place: "Istanbul",
    detail: "A blockchain-based investment platform; Scrum Master of the intern team.",
  },
];

export const teaching = [
  { when: "Oct 2025 – now", title: "Teaching Assistant", course: "CS404 Artificial Intelligence" },
  { when: "Feb – Jun 2023", title: "Learning Assistant", course: "CS201 Programming Fundamentals" },
  { when: "Feb – Jun 2022", title: "Learning Assistant", course: "Calculus II" },
];

export const education = [
  {
    when: "2025 – 2027",
    title: "MSc, Computer Science & Engineering",
    org: "Sabancı University",
    detail: "",
  },
  {
    when: "2020 – 2025",
    title: "BSc, Computer Science; minor in Business Analytics",
    org: "Sabancı University",
    detail: "Graduated with distinction; on the Dean's list in every term.",
  },
];
