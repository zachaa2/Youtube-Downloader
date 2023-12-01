import React, { useState } from 'react';
import styles from './Tool.module.css';

function Tool() {
  
  const [youtubeUrl, setyoutubeUrl] = useState('');

  const handleInputChange = (e) => {
    setyoutubeUrl(e.target.value);
  }

  const isValidYoutubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  }

  const handleDownload = () => {
    if(!youtubeUrl){
      alert("Please enter a youtube url");
    } else if (!isValidYoutubeUrl(youtubeUrl)){
      alert("Please enter a valid youtube url");
    } else {
      // TODO: Make request to backend to handle download
      console.log('Downloading video: ' + youtubeUrl);
    }
  }  

  return (
    <div className={styles.toolDivStyle} >
      <input 
        type='text'
        value={youtubeUrl}
        onChange={handleInputChange}
        placeholder='Enter Youtube URL here'
        className={styles.inputStyle}
      />
      <button onClick={handleDownload} className={styles.downloadButtonStyle}> 
        Download
      </button>
    </div>
  )

}

export default Tool