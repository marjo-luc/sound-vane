import { useState, useEffect } from "react";
// import * as Tone from "tone";
// import { PlayButton } from "../Buttons";
import "./style.css";

export const Synth = ({RelativeAQI}) => {

    const [isPlaying, setIsPlaying] = useState(false)

    const baseNotes = ["c", "e", "g", "b"];
    const accidentals = Object.values(RelativeAQI)

    const notes = baseNotes.map((note, index) => (
      note + "-" + accidentals[index]
    ))
    
    const playNote = (note) => {
      
        let player = document.createElement('audio');
        player.controls = false;
        player.src = `audio/${note}.mp3`;
        player.play()
        player.addEventListener('ended',function(){
          player.remove()
        })
    }

    const playSequence = () => {

      let i = 0;                

      function loop() {         
        setTimeout(function() {   
          playNote(notes[i])
          i++;                    
          if (i < notes.length) {           
            loop();             
          } else {
            setIsPlaying(false)
          }                       
        }, 1000)
      }

      loop();   
    }

    useEffect(() => {

      if (!isPlaying) {
        setIsPlaying(true)
        playSequence()
      }

    },[RelativeAQI]);

  return (
    <>
      <div id="audio"></div>
    </>
  );

}