import { useState, useEffect } from "react";
import * as Tone from "tone";
// import { PlayButton } from "../Buttons";
import "./style.css";

export const Synth = ({RelativeAQI}) => {

    const [isPlaying, setIsPlaying] = useState(false)

    const reverb = new Tone.Reverb().toDestination();
    const synth = new Tone.PolySynth(Tone.FMSynth).chain(reverb).toDestination();
    const chord = ["C", "D", "E", "F"];

    const AQIvalues = Object.values(RelativeAQI);

    const modifiers = AQIvalues.map(PitchToNotation)

    function PitchToNotation(num) {
      switch (num) {
        case "SHARP": return "#4"
        case "FLAT": return "b4"
        default: return "4"
      }
    }

    const newChord = chord.map(myCalc)

    function myCalc(num, index) {
      return num + modifiers[index] ;
    }

    let index = 0;

    synth.set({
      "harmonicity": 0,
      "modulationIndex": 1,
      "oscillator" : {
          "type": "sine"
      },
      "envelope": {
          "attack": 0.007,
          "decay": 1,
          "sustain": 0.5,
          "release": 0.007
      }
    });

    const synthPart = new Tone.Sequence(
      function(time, note) {
        index++;
        if (index > newChord.length){
          synthPart.stop();
          synth.triggerAttackRelease(newChord, "1n", time, 0.75);
        } else {
          synth.triggerAttackRelease(note, "2n", time, 1);
        }
      },
      newChord,
      "2n"
    );
    
    
    useEffect(() => {

      if (!isPlaying) {
        setIsPlaying(true)
        synthPart.start();
        Tone.Transport.start();

        setTimeout(() => {
          setIsPlaying(false)
        }, 3000);
      }

    },[RelativeAQI]);


      
  return (
    <>
    {/* <button className="button" onClick={playSynth}>click me</button> */}
    {/* <PlayButton onClick={playSynth} text="click me" /> */}
    </>
  );

}