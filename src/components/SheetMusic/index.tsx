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
    renderer.resize(350, 150);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 10, 450);

    // Add a clef and time signature.
    stave.addClef('treble')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    const accidentals = Object.values(RelativeAQI)

    const formatAccidentals = accidentals.map((accidental) => {

      switch(accidental) {
        case "SHARP":
          return "#"
          break;
        case "FLAT":
          return "b"
          break;
        default:
          return "n"
      }
    });

    // Create the notes
    const notes = [
      // A quarter-note C.
      new StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new Accidental(formatAccidentals[0])),
    
      // A quarter-note E.
      new StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new Accidental(formatAccidentals[1])),
    
       // A quarter-note G.
      new StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new Accidental(formatAccidentals[2])),

      // A quarter-note B.
      new StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new Accidental(formatAccidentals[3])),
    
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