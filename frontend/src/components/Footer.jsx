import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  const iconStyle = {
    color: '#007bff',
    margin: '0 10px',
    fontSize: '24px',
    textDecoration: 'none',
  };

  return (
    <footer style={{
      position:'fixed',
      bottom:0,
      width:'100%',
      minWidth: '100%',
      alignItems: 'center',
      alignContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <p>© 2023 Aaron Zachariah. All rights reserved.</p>
        <div style={{ display:'flex', flexDirection:'row', alignContent: 'center', alignItems: 'center' }}>
          <a href='https://www.linkedin.com/in/aaron-zachariah/' target='_blank' rel='noopener noreferrer' style={iconStyle} >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/zachaa2' target='_blank' rel='noopener noreferrer' style={iconStyle} >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/aaron.zachariah/' target='_blank' rel='noopener noreferrer' style={iconStyle} >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
  
}

export default Footer;