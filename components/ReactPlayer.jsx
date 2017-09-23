import React, { Component } from 'react';
import ReactPlayer from 'react-player';
 
const Video = ({videoUrl}) => (
  <ReactPlayer 
  url={videoUrl} 
  playing={false}
  controls={true} />
);

export default Video;