import React from "react";
import * as Tone from "tone";
import "./style.css";

export const Synth = () => {

  const playSynth = () => {

    const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
    const notes = ["264", "329.628", "391.995", "466.164"];
    let index = 0;

    synth.set({
      "harmonicity":8,
      "modulationIndex": 2,
      "oscillator" : {
          "type": "sine"
      },
      "envelope": {
          "attack": 0.002,
          "decay": 1,
          "sustain": 0.1,
          "release": 1
      },
      "modulation" : {
          "type" : "square"
      },
      "modulationEnvelope" : {
          "attack": 0.002,
          "decay": 0.2,
          "sustain": 0,
          "release": 0.5
      }
  });

  const synthPart = new Tone.Sequence(
    function(time, note) {
      index++;
      if (index > notes.length){
        synthPart.stop();
        synth.triggerAttackRelease(notes, "4n");
      } else {
        synth.triggerAttackRelease(note, "100hz", time);
      }
    },
    notes,
    "4n"
  );

  synthPart.start();
  Tone.Transport.start(); 

}
      
  return (
    <button className="button" onClick={playSynth}>click me</button>
  );

}

