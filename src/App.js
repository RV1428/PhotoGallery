import React, { useEffect } from 'react';
import PhotoGallery from './PhotoGallery';
import './PhotoGallery.css';

function App() {
  useEffect(()=>{
     document.title = 'PhotoGallery'; 
  },[]);
  return (
    <div className="App">
      <center><h1>Photo Gallery</h1></center>
      <PhotoGallery />
    </div>
  );
}

export default App;
