import React from "react";

export default function Canvas() {
  return (
    <div>
      <canvas ref="canvas" width={640} height={425} />
      <img ref="image" src={cheese} className="hidden" />
    </div>
  );
}
