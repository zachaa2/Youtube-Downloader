import React from 'react'
import styles from './SiteInfo.module.css';

function SiteInfo() {

  return (
    <>
      <h1>Youtube to MP3/MP4 Converter</h1>
      <p>
        If you need to download YouTube videos to your computer, simply use this tool. 
      </p>
      <p>
        All you need is the link to a youtube video, and you can download that video as an MP3 or MP4 file.
      </p>
      <p>
        MP3 files will be audio only files, and MP4 files will have audio and video. 
      </p>
      <p>
        The most consistent way to get the youtube link is to click the "Share" button and copy the link. 
      </p>
      <p>
        Sometimes a video might be part of a playlist or YouTube mix, which will change the url. 
      </p>
      <p>
        Copying the url through the "Share" button will always get the direct link to the video 
      </p>
    </>
  );

}

export default SiteInfo;