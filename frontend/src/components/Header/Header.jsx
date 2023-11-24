import React from 'react'
import Logo from '../../assets/icon.png'
import styles from './Header.module.css';


function Header() {

  return (
		<header className={styles.header}>
		  <img src={Logo} alt="Logo" className={styles.iconStyle} />
		  <h1 className={styles.titleStyle}>YouTube Video Downloader</h1>
		</header>
  );

}

export default Header;