import React, { useState } from 'react'
import Header from './components/Header'

function App() {

  const [youtubeUrl, setyoutubeUrl] = useState('');

  const handleInputChange = (e) => {
    setyoutubeUrl(e.target.value);
  }

  const handleDownload = () => {
    if(!youtubeUrl){
      alert("Please enter a youtube url");
    }
    // TODO: Make request to backend to handle download
    console.log('Downloading video: ' + youtubeUrl);
  }

  return (
    <>
      <Header />
      <div className='app'>
        <input 
          type='text'
          value={youtubeUrl}
          onChange={handleInputChange}
          placeholder='Enter Youtube URL here'
        />
        <button onClick={handleDownload}> 
          Download
        </button>
      </div>
    </>
  )
}

export default App
