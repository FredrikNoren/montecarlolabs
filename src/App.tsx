import React from 'react';
import './App.css';
import LogoSvg from './MountRoukeLogo.svg';
import DerkLogo from './DerkLogo.png';

function App() {
  return (
    <div className="App">
      <div className="LogoContainer">
        <img src={LogoSvg} className="Logo" alt="Mount Rouke Studios" />
      </div>
      <div className="Section">
        <div className="Header">
          Games
        </div>
        <a href="https://derkgame.com">
          <img className="GameLogo" src={DerkLogo} alt="Dr. Derk's Mutant Battlegrounds" />
        </a>
      </div>
      <div className="Section">
        <div className="Header">
          Press releases
        </div>
        <div className="PressRelease">
          <p>FOR IMMEDIATE RELEASE: JULY 28, 2020</p>

          <h1>AI BASED GAME “DERK” LAUNCHING IN EARLY ACCESS</h1>

          <h2>A MOBA where you train neural networks to fight for you in a bizarre western-themed world? Why not!</h2>

          <p>Berlin - July 28, 2020 -- It’s been a little over two years since the scientists at OpenAI managed to beat top DOTA players using neural networks trained by playing against themselves. Upstart Mount Rouke Studios is now betting that they can make a simplified version of that technology into a PC game, which is launching in early access today.</p>

          <p>The game, called “Dr. Derk’s Mutant Battlegrounds”, looks like a quirky western themed version of a MOBA with two sides facing each other and precious statues they need to defend. But instead of player controlled heroes, the two sides have Derklings, a boxy dinosaur looking creature that the players have trained beforehand. The goal is to figure out how to best equip and train your Derklings to beat the opponents.</p>

          <p>It’s a fun and quirky game where the Derklings can be equipped by the player with anything from huge guns to bubblegum, and they can be trained against a number of enemies such as a scarecrow, a duck and a crab. However due to the fact that what you’re actually training is their neural networks, there’s a huge amount of depth to the game as there are almost limitless behaviours they could be trained to do.</p>

          <p>The world of artificial intelligence is moving incredibly fast, and for a layman this game may be the easiest way out there to experiment with it first hand.</p>

          <p>
            <a href="https://youtu.be/-Lqb8cce5tk">See the launch trailer</a><br />
            <a href="https://store.steampowered.com/app/1102370/Dr_Derks_Mutant_Battlegrounds/">Get the game on Steam ($5)</a>
          </p>

          <p>###</p>
          <p>
            <b>Press contact</b><br/>
            Name: Fredrik Norén<br/>
            Email: noren@mountrouke.com<br/>
            Game website: <a href="http://derkgame.com">http://derkgame.com</a><br/>
            Studio website: <a href="http://mountrouke.com">http://mountrouke.com</a><br/>
            Press kit: <a href="http://files.mountrouke.com/DerkPressKitJuly2020.zip">http://files.mountrouke.com/DerkPressKitJuly2020.zip</a><br/>
            Launch trailer download: <a href="http://files.mountrouke.com/DerkEarlyAccessTrailer.mp4">http://files.mountrouke.com/DerkEarlyAccessTrailer.mp4</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
