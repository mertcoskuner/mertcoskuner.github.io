import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Main.scss';

const socials = [
  { href: "https://github.com/mertcoskuner", label: "GitHub", node: <GitHubIcon /> },
  { href: "https://linkedin.com/in/mertcoskuner", label: "LinkedIn", node: <LinkedInIcon /> },
  { href: "https://scholar.google.com/citations?user=ExampleID", label: "Google Scholar", node: <FontAwesomeIcon icon={faGoogleScholar} /> },
  { href: "https://medium.com/@mertcoskuner", label: "Medium", node: <FontAwesomeIcon icon={faMedium} /> },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Main() {
  return (
    <header className="hero" id="home">
      <div className="hero-inner">
        <span className="hero-badge">
          <span className="hero-badge-dot" /> Available for research &amp; collaboration
        </span>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Mert Coşkuner</span>
        </h1>

        <p className="hero-subtitle">
          AI Researcher &amp; Developer — building scalable machine&nbsp;learning,
          MLOps and data&nbsp;engineering systems.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View my work
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('history')}>
            My journey
          </button>
        </div>

        <div className="hero-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              {s.node}
            </a>
          ))}
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollTo('expertise')} aria-label="Scroll down">
        <span>Scroll</span>
        <ArrowDownwardIcon />
      </button>
    </header>
  );
}

export default Main;
