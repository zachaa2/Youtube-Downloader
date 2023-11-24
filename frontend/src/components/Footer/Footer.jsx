import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';


function Footer() {
  
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.footerContentStyle}>
        <p>© 2023 Aaron Zachariah. All rights reserved.</p>
        <div className={styles.iconContainerStyle}>
          <a href='https://www.linkedin.com/in/aaron-zachariah/' target='_blank' rel='noopener noreferrer' className={styles.iconStyle} >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/zachaa2' target='_blank' rel='noopener noreferrer' className={styles.iconStyle} >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/aaron.zachariah/' target='_blank' rel='noopener noreferrer' className={styles.iconStyle} >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
  
}

export default Footer;