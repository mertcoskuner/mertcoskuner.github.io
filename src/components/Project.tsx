import React from "react";
import '../assets/styles/Project.scss';

const getColors = (mode: string) =>
  mode === 'dark'
    ? {
      cardBg: 'rgba(255,255,255,0.02)',
      title: 'white',
      desc: '#e0e0e0',
    }
    : {
      cardBg: 'rgba(0,0,0,0.04)',
      title: '#0d1116',
      desc: '#222',
    };

const projects = [
  {
    title: "Signal Identification with ML & DL",
    tags: ["Machine Learning", "Deep Learning"],
    description: [
      "Core Tech: XGBoost, LightGBM, MobileNet, Custom CNNs. Developed intelligent signal classification pipelines as part of the ER Security Team. Combined classical ML with deep learning to enhance signal recognition performance. Achieved notable improvements in accuracy through feature engineering and model ensembling, contributing to national-scale signal intelligence workflows."
    ]
  },
  {
    title: "Federated Learning Security",
    tags: ["Machine Learning", "Security"],
    description: [
      "Core Tech: Autoencoders, Clustering, CNN. Built privacy-preserving anomaly detection models to identify malicious behavior in decentralized learning settings. Focused on ensuring data confidentiality while enabling threat detection using reconstruction error analysis and unsupervised clustering of latent representations."
    ]
  },
  {
    title: "DDoS Attack Detection with Deep Learning",
    tags: ["Deep Learning", "Security"],
    description: [
      "Core Tech: Convolutional Neural Networks (CNN), TensorFlow, Scikit-learn. Designed and implemented deep learning models to detect and classify DDoS attacks in real-time network traffic data. Focused on optimizing CNN architectures and hyperparameters to improve detection precision and reduce false positives. Validated results on benchmark datasets and integrated explainability tools to assess model decisions."
    ]
  },
  {
    title: "LLMs Emulating and Comparing Turkish Columnists",
    tags: ["Natural Language Processing", "Machine Learning"],
    description: [
      "Core Tech: Hugging Face Transformers, PyTorch, RAG, Sentence-BERT, Graph Analysis. Developed a dual-purpose system where LLMs were fine-tuned to replicate and differentiate Turkish newspaper columnists. Used over 20K curated articles to train stylistically aligned models and deployed them in a user-facing interface. Integrated Retrieval-Augmented Generation (RAG) for contextual relevance and built contrastive pipelines to distinguish columnists' tones. Custom evaluation metrics such as Tone Embedding Similarity (via BERT cosine distance) and Argumentation Graph Analysis were used. Ethical alignment layers were enforced to prevent inappropriate or politically sensitive generations. The project was conducted under faculty supervision."
    ]
  },
  {
    title: "Enhanced Intent Detection (ATIS Dataset)",
    tags: ["Natural Language Processing", "Machine Learning"],
    description: [
      "Core Tech: TensorFlow, BERT, spaCy, CRF++. Improved slot-filling accuracy using Slot-Gated Modeling enhanced with contextual embeddings and CRF layers. Resolved BIO tagging sparsity through data augmentation via backtranslation. Reduced slot error propagation by 37% by leveraging sequential dependencies."
    ]
  },
  {
    title: "Advanced Bug Triage System",
    tags: ["Machine Learning", "Data Analysis"],
    description: [
      "Core Tech: Sentence-BERT, XGBoost, Optuna, spaCy. Built a hybrid classification pipeline to predict bug severity levels. Combined semantic embeddings with domain-specific features like code snippet handling and log preprocessing. Achieved 0.92 F1-score through extensive Optuna-based hyperparameter tuning (250+ trials)."
    ]
  },
  {
    title: "Circuits Benchmarking with NLP",
    tags: ["Natural Language Processing", "Data Analysis"],
    description: [
      "Core Tech: NLP, spaCy, Scikit-learn. Extracted technical details from academic publications to compare CMOS, SiGe, and GaN circuits. Applied NLP parsing and ML analysis to automate benchmarking of emerging semiconductor technologies."
    ]
  },
  {
    title: "Bike Sharing Rental System Analysis",
    tags: ["Data Analysis", "Machine Learning"],
    description: [
      "Core Tech: XGBoost, LightGBM, SHAP, PCA. Analyzed bike rental behavior using advanced feature engineering, including cyclical time encodings and PCA-based weather metrics. Constructed an ensemble model that reduced MAE by 22%, and revealed counterintuitive insights such as increased rentals during light rain."
    ]
  }
];

function Project({ mode = 'dark' }: { mode?: string }) {
  const colors = getColors(mode);
  return (
    <div className="projects-container" id="projects">
      <h1 style={{ color: colors.title }}>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project" key={idx}>
            <h2 style={{ color: 'var(--text-primary)' }}>{project.title}</h2>
            <div className="project-tags">
              {project.tags && project.tags.map((tag: string, i: number) => (
                <span className="project-tag" key={i} style={{ background: 'var(--accent-color)', color: 'white', borderRadius: 8, padding: '0.2em 0.8em', fontWeight: 600, marginRight: 8 }}>{tag}</span>
              ))}
            </div>
            <ul>
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;