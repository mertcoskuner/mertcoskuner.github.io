import React from "react";
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FunctionsIcon from '@mui/icons-material/Functions';
import '../assets/styles/Expertise.scss';

interface ExpertiseProps {
  mode: string;
}

const expertiseData = [
  {
    icon: <StorageIcon />,
    title: "Data Engineering",
    summary: "Designed and deployed scalable data pipelines, ETL workflows, and data warehousing solutions in cloud environments. Strong experience with distributed systems, orchestration, and analytics platforms.",
    stack: ["Python", "SQL", "Spark", "Airflow", "BigQuery", "dbt", "Kafka", "Docker", "GCP", "AWS", "Snowflake", "Hadoop"],
  },
  {
    icon: <CloudQueueIcon />,
    title: "MLOps & Automation",
    summary: "Built and automated ML model lifecycles, CI/CD pipelines, and monitoring systems. Experience with model deployment, experiment tracking, and cloud-native ML workflows.",
    stack: ["MLflow", "TensorFlow", "PyTorch", "Scikit-learn", "GitHub Actions", "Docker", "Kubernetes", "Linux", "GCP", "AWS"],
  },
  {
    icon: <FunctionsIcon />,
    title: "Machine Learning & AI",
    summary: "Developed and productionized ML/DL models for NLP, tabular, and time series data. Specialized in model interpretability, feature engineering, and scalable inference.",
    stack: ["Pandas", "XGBoost", "LightGBM", "Hugging Face", "BERT", "spaCy", "AutoML", "Tableau", "Streamlit"],
  },
];

const Expertise: React.FC<ExpertiseProps> = () => {
  return (
    <section className="items-container" id="expertise">
      <span className="section-eyebrow">What I do</span>
      <h2 className="section-title">Expertise</h2>
      <p className="section-lead">Areas where I bring deep, hands-on experience — from raw data to production AI.</p>

      <div className="expertise-grid">
        {expertiseData.map((exp, idx) => (
          <article key={idx} className="expertise-card reveal spotlight">
            <span className="card-glow" aria-hidden="true" />
            <div className="expertise-icon">{exp.icon}</div>
            <h3>{exp.title}</h3>
            <p>{exp.summary}</p>
            <div className="expertise-stack">
              {exp.stack.map((label, i) => (
                <span className="chip" key={i}>{label}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
