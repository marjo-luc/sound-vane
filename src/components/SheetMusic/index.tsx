import { useEffect } from "react";
import { Formatter, Renderer, Stave, StaveNote, Voice, Accidental } from "vexflow"

import "./style.css";

export const SheetMusic = ({ RelativeAQI }) => {

  const drawSheetMusic = () => {

    // Clear previous
    const clear = document.getElementById('output');
    while (clear.hasChildNodes()) {
        clear.removeChild(clear.lastChild);
    }
    
    // Create an SVG renderer and attach it to the DIV element with id="output".
    const renderer = new Renderer('output', Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(350, 200);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 40, 450);

    // Add a clef and time signature.
    stave.addClef('treble')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    const accidentals = Object.values(RelativeAQI)

    // Create the notes
    const notes = [
      // A quarter-note C.
      new StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new Accidental(`${accidentals[0]}`)),
    
      // A quarter-note D.
      new StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new Accidental(`${accidentals[1]}`)),
    
       // A quarter-note D.
      new StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new Accidental(`${accidentals[2]}`)),

      // A quarter-note E.
      new StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new Accidental(`${accidentals[3]}`)),
    
    ];

    // Create a voice in 4/4 and add above notes
    const voice = new Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    new Formatter().joinVoices([voice]).format([voice], 300);

    // Render voice
    voice.draw(context, stave);

  }

  useEffect(() => {
    drawSheetMusic()
  }, [RelativeAQI])
  
  return (
    <div className="SheetMusic">
      <div id="output"></div>
    </div>
  );

}