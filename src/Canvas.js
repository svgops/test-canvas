import React from "react";

export default function Canvas() {
  const img = new Image();
  img.src = "./ergita-sela-rose.jpg";

  const canvasRef = React.useRef(null);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // implement draw on ctx here
        ctx.drawImage(img, 0, 0);
        img.style.display = "none";
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
      }}
    />
  );
}
