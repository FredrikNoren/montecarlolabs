import React from 'react';
import './App.css';
import LogoSvg from './MountRoukeLogo.svg';
import DerkLogo from './DerkLogo.png';
import Linkify from 'react-linkify';

const DerkPRJuly2020 = `FOR IMMEDIATE RELEASE: JULY 28, 2020

AI BASED GAME “DERK” LAUNCHING IN EARLY ACCESS

A MOBA where you train neural networks to fight for you in a bizarre western-themed world? Why not!

Berlin - July 28, 2020 -- It’s been a little over two years since the scientists at OpenAI managed to beat top DOTA players using neural networks trained by playing against themselves. Upstart Mount Rouke Studios is now betting that they can make a simplified version of that technology into a PC game, which is launching in early access today.

The game, called “Dr. Derk’s Mutant Battlegrounds”, looks like a quirky western themed version of a MOBA with two sides facing each other and “statues” they need to defend. But instead of player controlled heroes, the two sides have “Derklings”, a boxy dinosaur looking creature, that the players have trained beforehand. The goal is to figure out how to best equip and train your Derklings to beat the opponents.

It’s a funny and bizarre game where the Derklings can be equipped by the player with anything from huge guns to bubblegum, and they can be trained against a number of enemies such as a scarecrow, a duck and a crab. However due to the fact that what you’re actually training is their neural networks, there’s a huge amount of depth to the game as there are almost limitless behaviours they could be trained to do.

The world of artificial intelligence is moving incredibly fast, and for a layman this game may be the easiest way out there to experiment with it first hand.

See the launch trailer: https://youtu.be/-Lqb8cce5tk
Get the game on Steam ($5): https://store.steampowered.com/app/1102370/Dr_Derks_Mutant_Battlegrounds/

###

Press contact
Name: Fredrik Norén
Email: noren@mountrouke.com
Press kit: http://mountrouke.com/DerkPressKitJuly2020.zip
`

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
          <pre className="PressReleaseContent"><Linkify>{DerkPRJuly2020}</Linkify></pre>
        </div>
      </div>
    </div>
  );
}

export default App;
