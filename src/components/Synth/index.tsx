import React from "react";
import * as Tone from "tone";
import { PlayButton } from "../Buttons";
import "./style.css";

export const Synth = () => {

  const playSynth = () => {

    const reverb = new Tone.Reverb().toDestination();
    const synth = new Tone.PolySynth(Tone.FMSynth).chain(reverb).toDestination();
    const notes = ["264", "329.628", "391.995", "466.164"];
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
        if (index > notes.length){
          synthPart.stop();
          synth.triggerAttackRelease(notes, "1n", time, 0.75);
        } else {
          synth.triggerAttackRelease(note, "2n", time, 1);
        }
      },
      notes,
      "2n"
    );

  synthPart.start();
  Tone.Transport.start(); 

}
      
  return (
    // <button className="button" onClick={playSynth}>click me</button>
    <PlayButton onClick={playSynth} text="click me" />
  );

}