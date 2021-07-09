import React, { useState, useRef } from 'react';
import PlayButton from './components/playButton/PlayButton';
import NextButton from './components/nextButton/NextButton';
import PreviousButton from './components/previousButton/PreviousButton';
import Image from './components/image/Image';
import './App.css';
import configs from "../src/config.json";
import playlist from './playlist';



function App() {
  //state the config.json on image if true or false
  const [imageShowing, setImageShowing] = useState(configs.config.img);

  const [playlistIndex, setplaylistIndex] = useState(0);

  const [isPlaying, setisPlaying] = useState(false);
 
  const  {title, author, audio, image} = playlist[playlistIndex];
  // audio src
  const audioSample1 = playlist[playlistIndex].audio;

  // img src
  const imgSample1 = playlist[playlistIndex].image;

  const sample1 = useRef(new Audio(audioSample1));
  //Play/Pause
  if (isPlaying){
    sample1.current.play();
  } else {
    sample1.current.pause();
  }

  //Next
  const next = () => {
    setplaylistIndex(playlistIndex + 1);
  }

  return (
    <div className="App">
      <Image 
      //
      imgSrc={imgSample1}
      isShowing={imageShowing} 
      />
      <header className="App-header">
        <PreviousButton />
        <PlayButton 
        isPlaying={isPlaying}
        playPauseClick={setisPlaying}
        />
        <NextButton
        nextClick={next}
        />
      </header>
    </div>
  );
}

export default App;
