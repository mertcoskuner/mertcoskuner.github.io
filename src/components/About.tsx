import React from "react";
import '../assets/styles/About.scss';

const stats = [
  { value: "8+", label: "Projects shipped" },
  { value: "3", label: "Core domains" },
  { value: "2022", label: "Building since" },
];

const now = [
  "Researcher @ TÜBİTAK",
  "TA — CS404 Artificial Intelligence",
  "MSc CS @ Sabancı (2025–2027)",
];

function About() {
  return (
    <section className="items-container about" id="about">
      <span className="section-eyebrow">Who I am</span>
      <h2 className="section-title">About</h2>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            I'm an AI researcher and developer based in Istanbul. I'm pursuing my
            MSc in Computer Science at <strong>Sabancı University</strong>, where I
            also earned my BSc with distinction and an all-time spot on the Dean's
            List.
          </p>
          <p>
            Today I research big data, cloud computing and machine learning at
            <strong> TÜBİTAK</strong>, and I teach <strong>CS404 Artificial
            Intelligence</strong> as a teaching assistant. I care most about turning
            research ideas into reliable, production-ready ML systems.
          </p>

          <div className="about-now">
            {now.map((item) => (
              <span className="about-now-chip" key={item}>
                <span className="about-now-dot" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="about-stat spotlight" key={s.label}>
              <span className="card-glow" aria-hidden="true" />
              <span className="about-stat-value gradient-text">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
