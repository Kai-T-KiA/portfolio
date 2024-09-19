import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#career">Career</a>
          <a href="#skill">Skill</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/Kai-T-KiA" target="_blank" rel="noopener noreferrer">
            <img src="https://camo.qiitausercontent.com/063ab405c37f6c84f7e0c448b20c065fa6e7312c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f313032323030312f35353434316132302d396232622d666362362d646263302d6563313539306235663630332e706e67" alt="GitHub" />
          </a>
          <a href="https://qiita.com/Kai-T-KiA" target="_blank" rel="noopener noreferrer">
            <img src="img/qiita-icon.png" alt="Qiita" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Kai Takeuchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
