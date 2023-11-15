import React from 'react'
import Logo from '../assets/icon.png'

function Header() {



  return (
		<header style={{
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
		}}>
		  <img src={Logo} alt="Logo" style={{
				width: 'auto',
				height: '50px',
			}} />
		  <h1 style={{ height: '50px', }}>YouTube Video Downloader</h1>
		</header>
  );


}

export default Header;