import React from 'react';
import './App.css';
import LogoSvg from './MountRoukeLogo.svg';

function App() {
  return (
    <div className="App">
      <img src={LogoSvg} className="Logo" alt="Mount Rouke Studios" />
      <div className="Links">
        <a href="https://derkgame.com">Dr. Derk's Mutant Battlegrounds</a>
      </div>
    </div>
  );
}

export default App;
