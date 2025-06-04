import React from 'react';
import './styles/social.css';

import FBIcon from '../assets/socialIcons/FBIcon.png';
import YoutubeIcon from '../assets/socialIcons/YoutubeIcon.png';
import InstaIcon from '../assets/socialIcons/InstaIcon.png';
import MediumIcon from '../assets/socialIcons/MediumIcon.png';
import LinkdlnIcon from '../assets/socialIcons/LinkdlnIcon.png';
import QuoraIcon from '../assets/socialIcons/QuoraIcon.png';
import BloggerIcon from '../assets/socialIcons/BloggerIcon.png';

const SocialIcon = () => {
  return (
    <div className="social-container">
      {/* Facebook */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://www.facebook.com/profile.php?id=61565947096778" target="_blank" rel="noopener noreferrer">
            <img src={FBIcon} alt="Facebook" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Youtube */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://www.youtube.com/@trackpi" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="Youtube" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Instagram */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://www.instagram.com/trackpi_official?igsh=YmwyaHpzYXBueWJz" target="_blank" rel="noopener noreferrer">
            <img src={InstaIcon} alt="Instagram" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Medium */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://medium.com/@trackpi" target="_blank" rel="noopener noreferrer">
            <img src={MediumIcon} alt="Medium" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* LinkedIn */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://www.linkedin.com/company/trackpi-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <img src={LinkdlnIcon} alt="LinkedIn" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Quora */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://www.linkedin.com/company/trackpi-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <img src={QuoraIcon} alt="Quora" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Blogger */}
      <div className="icon-container">
        <div className="icon-box">
          <a href="https://trackpi.blogspot.com/" target="_blank" rel="noopener noreferrer">
            <img src={BloggerIcon} alt="Blogger" className="icon-img" />
          </a>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default SocialIcon;
