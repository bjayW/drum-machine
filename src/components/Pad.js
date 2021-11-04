import React, { useState } from 'react'

const Pad = ({ clip, volume, setDisplay, power }) => {
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    };
  }, [])

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  }

  const playSound = () => {
    if (power) {
      const audioTag = document.getElementById(clip.keyTrigger)
      audioTag.currentTime = 0;
      audioTag.volume = volume;
      audioTag.play();
      setDisplay(() => clip.id);
    }
    if (!power) {
      const audioTag = document.getElementById(clip.keyTrigger)
      audioTag.pause();
      audioTag.currentTime = 0;
    }
  }


  return (
    <div className='btn' style={{ fontWeight: 'bold' }} onClick={playSound} >
      <audio id={clip.keyTrigger} src={clip.url} /><br />
      {clip.keyTrigger}
    </div>
  )
}

export default Pad;