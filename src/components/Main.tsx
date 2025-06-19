import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://placehold.co/150x150?text=Mert" alt="Mert Coşkuner" /> */}
        </div>
        <div className="content" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.13,
            pointerEvents: 'none',
            background: 'url(/bg-light.png) center/contain no-repeat',
          }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1>Mert Coşkuner</h1>
            <p>AI Researcher & Developer</p>
            <div className="social_icons">
              <a href="https://github.com/mertcoskuner" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://linkedin.com/in/mertcoskuner" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <div className="mobile_social_icons">
              <a href="https://github.com/mertcoskuner" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://linkedin.com/in/mertcoskuner" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;