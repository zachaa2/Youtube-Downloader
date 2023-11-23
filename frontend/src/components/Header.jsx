import React from 'react'
import Logo from '../assets/icon.png'

function Header() {

	const headerStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	}

	const siteIconStyle = {
		width: 'auto',
		height: '50px',
	}

	const siteTitleStyle = { 
		height: '50px', 
	}

  return (
		<header style={headerStyle}>
		  <img src={Logo} alt="Logo" style={siteIconStyle} />
		  <h1 style={siteTitleStyle}>YouTube Video Downloader</h1>
		</header>
  );

}

export default Header;