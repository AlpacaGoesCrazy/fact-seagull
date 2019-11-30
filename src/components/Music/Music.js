import React, { useState, useRef, memo } from 'react';
import './Music.css'
import audio from './sad_loop.mp3'
import speakerOff from './speaker-off.png'
import speakerOn from './speaker-on.png'

const Music = memo(function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()
  console.log(audioRef)
  const handleMusicOn = () => {
    setIsPlaying(true)
    audioRef.current.play()
    audioRef.current.muted = false
  }

  const handleMusicOff = () => {
    setIsPlaying(false)
    audioRef.current.muted = true
  }

  return (
    <div className="Music">
      <p>Seagull would like to play some music</p>
      {isPlaying ? 
        <img src={speakerOn} onClick={handleMusicOff} alt='musicOn'/> :
        <img src={speakerOff} onClick={handleMusicOn} alt='musicOff'/>
      }
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg"/>
      </audio>
    </div>
  );
});

export default Music;
