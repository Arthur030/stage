import React, { useState, useRef, useEffect } from 'react';
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
  // index of the audio in playlist.json
  const [playlistIndex, setplaylistIndex] = useState(0);
  // Toggle play(true)/pause(false)
  const [isPlaying, setisPlaying] = useState(false);
  // total duration of audio
  const [duration, setDuration] = useState(0);
  //current duration of audio
  const [currentTime, setCurrentTime] = useState(0);
 
  const  {title, author, audio, image} = playlist[playlistIndex];

  const progressBar = useRef();
  const animationRef = useRef();
  const firstAudio = useRef(new Audio(audio));


  const whilePlaying = () => {
    progressBar.current.value = firstAudio.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  
  const changeRange = () => {
    firstAudio.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  }
  
  //Play/Pause
  const togglePausePlay = () => {
    setisPlaying(!isPlaying);
    if (isPlaying){
      firstAudio.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      console.log(firstAudio.current);
      firstAudio.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }
  // progress Bar -----------------------
  
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  } 
  
  const changeCurrentTime = () => {
    setCurrentTime(progressBar.current.value);
  }
  
  
  //total duration audio
  useEffect(() => {
    const seconds = Math.floor(firstAudio.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [firstAudio?.current?.loadedmetadata, firstAudio?.current?.readyState]);
  
// ----------------------------------

//Pause current audio and play another one from updated playlistIndex[]
// const changePlaylist = () => {
//     firstAudio.current.pause();
//     firstAudio.current.currentTime = 0;
//     firstAudio.current = new Audio(audio);
//     firstAudio.current.play();
//     console.log(firstAudio.audio);
      
// }
// when index changes
useEffect(() => {
  firstAudio.current.pause();
  firstAudio.current = new Audio(audio);
  //need to change that
  let a = false;
  if (isPlaying){ 
    firstAudio.current.play();
    //V
    let a = true
            //V
  } else if (a = false) {
    setisPlaying(true);

  }
}, [playlistIndex])


  //Next
  const next = () => {
    if (playlistIndex >= playlist.length - 1) {
      setplaylistIndex(0);
    } else {
      setplaylistIndex(playlistIndex + 1);
    }
  }
//Previous
  const previous = () => {
    if (playlistIndex <= 0) {
      setplaylistIndex(playlist.length - 1);
    } else {
      setplaylistIndex(playlistIndex - 1);
    }

  }

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
        playPauseClick={togglePausePlay}
        />
        <NextButton
        nextClick={next}
        />
      </header>
      <div>
        <h5>current time: {calculateTime(currentTime)}</h5>
        <input 
        type="range"
        defaultValue="0"
        ref={progressBar}
        onChange={changeRange}
        aria-label="ProgressBar"
        />
      <h5>duration: {calculateTime(duration)}</h5>
      </div>
    </div>
  );
}

export default App;
