import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tool from './components/Tool/Tool';
import './App.css';
import SiteInfo from './components/SiteInfo/SiteInfo';

function App() {
  
  return (
    <>
      <div className='app' >
        <div className='header-container' >
          <Header />
        </div>
        <div className='tool-container' >
          <Tool />
        </div>
        <div className='siteinfo-container'>
          <SiteInfo />
        </div>
        <div className='footer-container' >
          <Footer />
        </div>
      </div>
    </>
  )

}

export default App