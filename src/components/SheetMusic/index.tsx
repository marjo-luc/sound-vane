import { useEffect } from "react";
import { Formatter, Renderer, Stave, StaveNote, Voice, Accidental } from "vexflow"

import "./style.css";

export const SheetMusic = () => {

  const drawSheetMusic = () => {
    
    // Create an SVG renderer and attach it to the DIV element with id="output".
    const renderer = new Renderer('output', Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(300, 200);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef('treble')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    // Create the notes
    const notes = [
      // A quarter-note C.
      new StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new Accidental("#")),
    
      // A quarter-note D.
      new StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new Accidental("b")),
    
       // A quarter-note D.
      new StaveNote({ keys: ["d/4"], duration: "q" }),

      // A quarter-note E.
      new StaveNote({ keys: ["e/4"], duration: "q" }),
    
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
  }, [])
  
  return (
    <div className="SheetMusic">
      <div id="output"></div>
    </div>
  );

}