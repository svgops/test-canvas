import React, { useState } from "react";
import Canvas from "./Canvas";
import cx from "classnames";
import Image from "./Image";
import "./styles.css";

const srcs = [
  "https://images.unsplash.com/photo-1551923922-a0d2cccc164b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1561238160-3fd50893667f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1571286264720-76bd4ee3ea85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
];

const useSrcs = () => {
  const [selectedSrc, setSrc] = useState(srcs[0]);
  return {
    buttons: srcs.map((src, i) => (
      <button
        className={cx({ active: src === selectedSrc })}
        onClick={() => setSrc(src)}
        key={src}
      >
        image {i + 1}
      </button>
    )),
    // force to re-render
    // this is just example
    image: srcs.map(src =>
      src === selectedSrc ? <Image key={src} src={selectedSrc} /> : null
    )
  };
};

export default function App() {
  const { buttons, image } = useSrcs();

  return (
    <div className="App">
      {image}
      <br />
      {buttons}
    </div>
  );
}
