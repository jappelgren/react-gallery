import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

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
      <AppBar position="static" >
        <Toolbar className="tool-bar">
          <Typography variant="h6">TOKYO - OSAKA - KYOTO 2018</Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AddAPhotoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className="gallery">
        <GalleryList gallery={gallery} addLike={addLike} />
      </main>
    </div>
  );
}

export default App;
