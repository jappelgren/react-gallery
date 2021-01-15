import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const fetchPics = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log(response.data);
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
    </div>
  );
}

export default App;
