import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  const [gallery, setGallery] = useState([]);
  //fetchPics gets an array of objects related to the images to display on the DOM
  //the array is stored in gallery.
  const fetchPics = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setGallery(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; //end fetchPics


  //addLike increments the likes value on the specified row on the database 
  const addLike = (id) => {
    axios
      .put(`/gallery/${id}`)
      .then((response) => {
        fetchPics();
      })
      .catch((err) => {
        console.log(err);
      });
  }; //end addLike

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Typography variant="h5">TOKYO 🍜 OSAKA 🏟 KYOTO ⛩ 2018</Typography>
        </Toolbar>
      </AppBar>
      <main className="gallery">
        <GalleryList gallery={gallery} addLike={addLike} />
      </main>
    </div>
  );
}

export default App;
