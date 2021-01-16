import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [gallery, setGallery] = useState([]);

  const fetchPics = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setGallery(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addLike = (id) => {
    axios
      .put(`/gallery/${id}`)
      .then((response) => {
        fetchPics();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList gallery={gallery} addLike={addLike} />
    </div>
  );
}

export default App;
