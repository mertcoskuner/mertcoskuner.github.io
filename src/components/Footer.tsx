import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mertcoskuner" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/mertcoskuner" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} Mert Coşkuner. All rights reserved.</p>
    </footer>
  );
}

export default Footer;