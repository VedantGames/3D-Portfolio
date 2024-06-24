import React, { useEffect, useRef, useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition';

function Web() {
  const canvas = useRef(null);
  const [height, setHeight] = useState(1000);
  const [width, setWidth] = useState(1000);
  const [verticess, setVertices] = useState(Array(300).fill(0).map(() => {
    return {
      x: Math.round(Math.random() * width),
      y: Math.round(Math.random() * height),
      xV: (Math.round(Math.random() * width) - width/2) / 600,
      yV: (Math.round(Math.random() * height) - width/2) / 600,
      r: Math.round(Math.random() * 5),
      radI: 0.1,
    }
  }));
  var vertices = verticess;

  const mousePosition = useMousePosition();

  useEffect(() => {
    let x = mousePosition.x;
    let y = mousePosition.y;

    var frame = 0;
    let frameId = 0;
    const maxDes = 200;
    function render() {
      const ctx = canvas.current.getContext('2d');

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ff900080";
      vertices.map(vertex => {
        const dist = Math.sqrt(Math.pow(x - vertex.x, 2) + Math.pow(y - vertex.y, 2));
        const maxD = 200;
        let dir = 0;
        if (dist < maxD) {
          dir = (Math.atan2(x - vertex.x, y - vertex.y));
          vertex.x += -(Math.sin(dir) / 40) * maxD;
          vertex.y += -(Math.cos(dir) / 40) * maxD;
        }
        vertex.r += vertex.radI;
        if (vertex.r <= 0.2 || vertex.r >= 5) vertex.radI *= -1;
        ctx.beginPath() 
        ctx.arc(vertex.x, vertex.y, vertex.r, 0, 2 * Math.PI); 
        ctx.fill()
        vertices.map(vertexOt => {
          const dist = Math.sqrt(Math.pow(vertex.x - vertexOt.x, 2) + Math.pow(vertex.y - vertexOt.y, 2));
          if (dist < maxDes) {
            ctx.strokeStyle = "rgb(255, 144, 0, " + ((100-dist) / 80) * 0.8 + ")";
            ctx.beginPath();
            ctx.moveTo(vertex.x, vertex.y);
            ctx.lineTo(vertexOt.x, vertexOt.y);
            ctx.stroke();
          }
        })
      });
      
      vertices = vertices.map(vertex => {
        
        if (vertex.x <= 0 || vertex.x >= width) vertex.xV *= -1;
        if (vertex.y <= 0 || vertex.y >= height) vertex.yV *= -1;

        if (vertex.x <= 0) vertex.x = 1;
        if (vertex.x >= width) vertex.x = width - 1;
        
        if (vertex.y <= 0) vertex.y = 1;
        if (vertex.y >= height) vertex.y = height - 1;

        let x = vertex.x + vertex.xV;
        let y = vertex.y + vertex.yV;
        
        
        return {
          x: x,
          y: y,
          xV: vertex.xV,
          yV: vertex.yV,
          r: vertex.r,
          radI: vertex.radI,
        }
      });
      setVertices(vertices);
      frame++;
      frameId = window.requestAnimationFrame(render);
    }

    render();

    return () => window.cancelAnimationFrame(frameId);
  }, [mousePosition]);

  return (
    <div className='size-full flex'>
      <canvas id='canvas' ref={canvas} width={width} height={height} >
      </canvas>
    </div>
  )
}

export default Web
