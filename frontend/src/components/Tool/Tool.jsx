import React, { useState } from 'react';
import styles from './Tool.module.css';

function Tool() {
  
  const [youtubeUrl, setyoutubeUrl] = useState('');

  const [downloadStatus, setDownloadStatus] = useState('Ready to download');

  const handleInputChange = (e) => {
    setyoutubeUrl(e.target.value);
  }

  const handleInputFocus = (e) => {
    e.currentTarget.select();
    setDownloadStatus("Ready to download")
  }

  const isValidYoutubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  }

  const handleDownload =  async () => {
    if(!youtubeUrl){
      alert("Please enter a youtube url");
    } else if (!isValidYoutubeUrl(youtubeUrl)){
      alert("Please enter a valid youtube url");
    } else {
      setDownloadStatus('Downloading...');
      console.log('Downloading video: ' + youtubeUrl);

      try {
        const response = await fetch('http://localhost:5000/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({url: youtubeUrl}),
        });

        if (response.ok){
          const blob = await response.blob();
          const link = document.createElement('a');
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = 'downloaded_video.mp4';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          setDownloadStatus("Video has Been Downloaded!");
          // clear temp folder
          const clearResponse = await fetch('http://localhost:5000/clear-temp', {
            method: "POST",
          });

          if (!clearResponse.ok){
            console.error("Failed tp clear temp folder");
          }
        } else {
          alert("Failed to download video. Please try again");
        }
      } catch (error) {
        console.log('Error: ' + error);
        alert("An error occured while downloading the video")
      }

    }
  }  

  return (
    <div className={styles.parentDiv}>
      <div className={styles.toolDivStyle} >
        <input 
          type='text'
          value={youtubeUrl}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder='Enter Youtube URL here'
          className={styles.inputStyle}
        />
        <button onClick={handleDownload} className={styles.downloadButtonStyle}> 
          Download
        </button>
      </div>
      <p>
        {downloadStatus}
      </p>
    </div>

  )

}

export default Tool