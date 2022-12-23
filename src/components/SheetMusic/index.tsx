import React from "react";

import { Score } from 'react-vexflow'

import "./style.css";

export const SheetMusic = () => {
  
  return (
   <div className="SheetMusic">
    <Score
      width={300}
      staves={[
        ['c4', 'd4', 'e4', 'f4'],
      ]}
    />
    </div>
  );

}