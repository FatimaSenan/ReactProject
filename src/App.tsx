import Arrow from './Login/Arrow';
import './App.css';
import React from 'react';

function App() {
  
  type Point = {
    x: number;
    y: number;
  };
  const pointA = {x:300,y:0}
  const pointB = {x:400,y:200}
  
  return (
    <div>
      <Arrow
        startPoint= {pointA}
        endPoint={pointB}
       
      />
    </div>
    
  );
}

export default App;
