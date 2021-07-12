import React, { useState, useRef } from 'react';
import PlayButton from './components/playButton/PlayButton';
import NextButton from './components/nextButton/NextButton';
import PreviousButton from './components/previousButton/PreviousButton';
import Image from './components/image/Image';
import './App.css';
import configs from "../src/config.json";
import playlist from './playlist';
import Title from './components/title/Title';
import Author from './components/author/Author';



const App = () => {
  //state the config.json on image if true or false
  const [imageShowing, setImageShowing] = useState(configs.config.img);

  const [playlistIndex, setplaylistIndex] = useState(0);

  const [isPlaying, setisPlaying] = useState(false);
 
  const  {title, author, audio, image} = playlist[playlistIndex];

  const sample1 = useRef(new Audio(audio));
  //Play/Pause
  if (isPlaying){
    sample1.current.play();
  } else {
    sample1.current.pause();
  }

//Pause current audio and play another one from new playlistIndex[]
const changePlaylist = () => {
  sample1.current.pause();
      sample1.current = new Audio(audio);
      console.log("check which audio is playing" + audio);
}


  //Next
  const next = () => {
    if (playlistIndex >= playlist.length - 1) {
      setplaylistIndex(0);
      changePlaylist();
    } else {
      setplaylistIndex(playlistIndex + 1);
      changePlaylist();
    }
  }
//Previous
  const previous = () => {
    if (playlistIndex <= 0) {
      setplaylistIndex(playlist.length - 1);
      changePlaylist();
    } else {
      setplaylistIndex(playlistIndex - 1);
      changePlaylist();
    }

  }

  console.log("playlist index:" + playlistIndex,"\n","playlist length:", playlist.length - 1);
  return (
    <div className="App">
      <Image 
      //
      imgSrc={image}
      isShowing={imageShowing} 
      />
      <Title 
        title={title}
      />
      <h4>by</h4>
      <Author
      author={author}
      />
      <header className="App-header">
        <PreviousButton 
        previousClick={previous}
        />
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
