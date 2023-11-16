import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tool from './components/Tool';
import './App.css';

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
      </div>
      <div className='footer-container' >
        <Footer />
      </div>
    </>
  )

}

export default App