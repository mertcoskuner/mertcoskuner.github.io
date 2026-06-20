import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Main.scss';

const socials = [
  { href: "https://github.com/mertcoskuner", label: "GitHub", node: <GitHubIcon /> },
  { href: "https://linkedin.com/in/mertcoskuner", label: "LinkedIn", node: <LinkedInIcon /> },
  { href: "https://scholar.google.com/scholar?q=Mert+Co%C5%9Fkuner", label: "Google Scholar", node: <FontAwesomeIcon icon={faGoogleScholar} /> },
  { href: "https://medium.com/@mertcoskuner", label: "Medium", node: <FontAwesomeIcon icon={faMedium} /> },
];

const roles = ["AI Researcher", "Machine Learning Engineer", "Data Engineer", "MLOps Practitioner"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === '') {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIdx((i) => i + 1);
      } else {
        setText(current.substring(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return text;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Main() {
  const typed = useTypewriter(roles);

  return (
    <header className="hero" id="home">
      <div className="hero-inner">
        <span className="hero-badge">
          <span className="hero-badge-dot" /> Available for research &amp; collaboration
        </span>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Mert Coşkuner</span>
        </h1>

        <div className="hero-role" aria-label="Roles">
          <span className="hero-role-prefix">›</span>
          <span className="hero-typed">{typed}</span>
          <span className="hero-caret" aria-hidden="true" />
        </div>

        <p className="hero-subtitle">
          Building scalable machine&nbsp;learning, MLOps and data&nbsp;engineering systems —
          turning research ideas into production.
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

      <button className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <span>Scroll</span>
        <ArrowDownwardIcon />
      </button>
    </header>
  );
}

export default Main;
