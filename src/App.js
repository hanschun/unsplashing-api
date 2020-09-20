import React from 'react';
import './App.css';
import PhotoSearch from './photoSearch'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Unsplashing API Search Demo</h1>
        <PhotoSearch />
      </div>
    </div>
  );
}

export default App;
