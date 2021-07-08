import React, { useState } from 'react';
import PlayButton from './components/playButton/PlayButton';
import NextButton from './components/nextButton/NextButton';
import PreviousButton from './components/previousButton/PreviousButton';
import Image from './components/image/Image';
import './App.css';
import configs from "../src/config.json"



function App() {
  //state the config.json on image if true or false
  const [imageShowing = configs.config.img.valueOf(), setImageShowing] = useState();
  return (
    <div className="App">
      <Image 
      // 
      isShowing={imageShowing} 
      />
      <header className="App-header">
        <PreviousButton />
        <PlayButton />
        <NextButton />
      </header>
    </div>
  );
}

export default App;
