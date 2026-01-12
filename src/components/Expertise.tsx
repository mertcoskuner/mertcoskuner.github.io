import React from "react";
import Chip from '@mui/material/Chip';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FunctionsIcon from '@mui/icons-material/Functions';
import '../assets/styles/Expertise.scss';

interface ExpertiseProps {
  mode: string;
}

const expertiseData = [
  {
    icon: (color: string) => <StorageIcon style={{ fontSize: 56, color, marginBottom: 16 }} />,
    title: "Data Engineering",
    summary: "Designed and deployed scalable data pipelines, ETL workflows, and data warehousing solutions in cloud environments. Strong experience with distributed systems, orchestration, and analytics platforms.",
    stack: [
      "Python", "SQL", "Spark", "Airflow", "BigQuery", "dbt", "Kafka", "Docker", "GCP", "AWS", "Snowflake", "Hadoop"
    ]
  },
  {
    icon: (color: string) => <CloudQueueIcon style={{ fontSize: 56, color, marginBottom: 16 }} />,
    title: "MLOps & Automation",
    summary: "Built and automated ML model lifecycles, CI/CD pipelines, and monitoring systems. Experience with model deployment, experiment tracking, and cloud-native ML workflows.",
    stack: [
      "MLflow", "TensorFlow", "PyTorch", "Scikit-learn", "GitHub Actions", "Docker", "Kubernetes", "Linux", "GCP", "AWS"
    ]
  },
  {
    icon: (color: string) => <FunctionsIcon style={{ fontSize: 56, color, marginBottom: 16 }} />,
    title: "Machine Learning & AI",
    summary: "Developed and productionized ML/DL models for NLP, tabular, and time series data. Specialized in model interpretability, feature engineering, and scalable inference.",
    stack: [
      "Pandas", "XGBoost", "LightGBM", "Hugging Face", "BERT", "spaCy", "AutoML", "Tableau", "Streamlit"
    ]
  }
];

const getColors = (mode: string) =>
  mode === 'dark'
    ? {
      cardBg: 'rgba(255,255,255,0.02)',
      title: 'white',
      summary: '#e0e0e0',
      icon: 'white',
      chipBg: 'white',
      chipColor: '#222',
    }
    : {
      cardBg: 'rgba(0,0,0,0.04)',
      title: '#0d1116',
      summary: '#222',
      icon: 'white',
      chipBg: 'white',
      chipColor: '#0d1116',
    };

const Expertise: React.FC<ExpertiseProps> = ({ mode }) => {
  const colors = getColors(mode);
  return (
    <div className="items-container" id="expertise">
      <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontWeight: 700, color: colors.title }}>Expertise</h1>
      <div className="expertise-flex" style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {expertiseData.map((exp, idx) => (
          <div key={idx} className="expertise-card" style={{
            flex: '1 1 320px',
            minWidth: 320,
            maxWidth: 420,
            padding: '2.5rem 2rem',
            margin: '0 0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxSizing: 'border-box',
          }}>
            {exp.icon('var(--accent-color)')}
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 1rem 0' }}>{exp.title}</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', minHeight: 70 }}>{exp.summary}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7em' }}>
              {exp.stack.map((label, i) => (
                <Chip key={i} className='chip' label={label} style={{
                  fontSize: '1.08em',
                  fontWeight: 500,
                  padding: '0.5em 1.1em',
                  borderRadius: '8px',
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;