import React from "react";

const srcs = [
  "https://images.unsplash.com/photo-1561238160-3fd50893667f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1551923922-a0d2cccc164b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1573430365123-1ba5faa6b486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1572724013549-0f11f2a52657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
];

function loadImage(url) {
  const img = new Image();
  img.src = url;
  return img;
}

export default function Canvas() {
  const canvasRef = React.useRef(null);
  const img = loadImage(srcs[0]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // implement draw on ctx here
        //ctx.lineWidth = 10;
        //ctx.strokeRect(75, 140, 150, 110);
        //ctx.fillRect(130, 190, 40, 60);
        //ctx.filter = "contrast(1.4) sepia(1) drop-shadow(9px 9px 2px #e81)";
        ctx.filter = "contrast(1.4) sepia(1)";

        ctx.drawImage(img, 0, 0);

        //ctx.filter = "blur(4px)";
        /*
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
          var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg; // red
          data[i + 1] = avg; // green
          data[i + 2] = avg; // blue
        }
        ctx.putImageData(imageData, 0, 0);
        */
      }}
    />
  );
}
