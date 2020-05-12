import React from "react";
import "./styles.css";
import Canvas from "./Canvas";
import Example from "./ergita-sela-rose.jpg";

export default function App() {
  return (
    <div className="App">
      <img ref="image" src={Example} alt="MyImage" />
      <Canvas />
      <div className="Test" />
    </div>
  );
}
