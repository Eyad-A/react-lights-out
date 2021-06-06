import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (    
    <div className="App">
      <div className="header"><h1>Lights Out Game</h1></div>
      <div className="para"><p>Lights Out is a logic/puzzle game, played on a gird of individual lights, 
        which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.
        You can click on a cell to toggle that light — but it also toggles the light above it, 
        to the left of it, to the right of it, and below it.</p></div>
      <Board />
    </div>
  );
}

export default App;
