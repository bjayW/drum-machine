import React, { useEffect, useState } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import Pad from './Pad';

const DrumMachine = () => {
  const [volume, setVolume] = useState(1)
  const [display, setDisplay] = useState()
  const [sounds, setSounds] = useState([])
  const [currentSound, setCurrentSound] = useState('bank1')
  const [power, setPower] = useState(true)


  useEffect(() => {
    if (currentSound === 'bank1') {
      setSounds([...bankOne])
    } else {
      setSounds([...bankTwo])
    }
  }, [currentSound])

  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];



  const handlePowerOnClick = () => {
    if (power === false) {
      setPower(true)
    } else {
      setPower(false)
      setDisplay();
    }
  }

  return (
    <div id='drum-machine'>
      <div className='dm-box text-center'>
        <p className='fcc'>FCC <FaFreeCodeCamp className='fcc-icon' /></p>
        <div className='button-container'>
          {sounds.map(clip => (
            <Pad key={clip.id} clip={clip} volume={volume} setDisplay={setDisplay} power={power} />
          ))}
        </div>
        <div className='dm-rightside'>
          <p className='power'>Power</p>
          <p className='bank'>Bank</p>
          <input className='power-toggle-button' type='checkbox' onClick={handlePowerOnClick}></input>
          <input className='bank-toggle-button' type='checkbox' onClick={() => {
            if (currentSound === 'bank1') {
              setCurrentSound('bank2')
            } else {
              setCurrentSound('bank1')
            }
          }}></input>
        </div>
        <div className='display-box'>
          <p className='display-text'>{display}</p>
        </div>
      </div>
      <input className='volume-button'
        type='range' min='0' step='0.01' max='1'
        value={volume}
        onChange={(e) => setVolume(e.target.value)}>
      </input>
    </div>
  )
}

export default DrumMachine
