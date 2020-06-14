import React from 'react';
import './App.css';
import LogoPng from './MountRoukeLogo.png';

function App() {
  return (
    <div className="App">
      <img src={LogoPng} className="Logo" alt="Mount Rouke Studios" />
      <div className="Links">
        <a href="https://derkgame.com">Dr. Derk's Mutant Battlegrounds</a>
      </div>
    </div>
  );
}

export default App;
