import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Footer.scss';

const links = [
  { href: "https://github.com/mertcoskuner", label: "GitHub", node: <GitHubIcon /> },
  { href: "https://linkedin.com/in/mertcoskuner", label: "LinkedIn", node: <LinkedInIcon /> },
  { href: "https://scholar.google.com/citations?user=ExampleID", label: "Scholar", node: <FontAwesomeIcon icon={faGoogleScholar} /> },
  { href: "https://medium.com/@mertcoskuner", label: "Medium", node: <FontAwesomeIcon icon={faMedium} /> },
  { href: "mailto:mertcoskuner@gmail.com", label: "Email", node: <EmailIcon /> },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-brand">
            <span className="nav-dot" /> Mert Coşkuner
          </span>
          <p className="footer-tagline">AI Researcher &amp; Developer — let's build something meaningful.</p>
        </div>

        <div className="footer-socials">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label}>
              {l.node}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mert Coşkuner. All rights reserved.</p>
          <button className="footer-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
