import React, { useEffect, useState } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      });
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <h3>{photo.title}</h3>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
