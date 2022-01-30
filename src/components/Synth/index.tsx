import React from "react";
import * as Tone from "tone";
import "./style.css";

export const Synth = () => {

    const playSynth = () => {

        const synth = new Tone.PolySynth(Tone.Synth).toDestination(),
              now = Tone.now();
    
        synth.triggerAttack("264", now);
        synth.triggerAttack("329.628", now + 0.5);
        synth.triggerAttack("391.995", now + 1);
        synth.triggerAttack("466.164", now + 1.5);
        synth.triggerRelease(["264", "329.628", "391.995", "466.164"], now + 4);
      }
      
      return (
        <button className="button" onClick={playSynth}>click me</button>
      );
}

