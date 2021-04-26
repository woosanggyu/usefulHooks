import React, { useEffect, useState, useRef } from 'react';
import picture from './image/picture.png'

const useFullscreen = (callback) => {
  const element = useRef()
  const checkRn = isFull => { 
    if(callback && typeof callback === 'function') {
      callback(isFull)
    }
  }
  const triggerFullscreen = () => {
    if(element.current) {
      if(element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }

      checkRn(true);
    }
  }
  const exitFull = () => {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozRequestFullScreen) {
        document.mozRequestFullScreen();
      } else if (document.webkitRequestFullScreen) {
        document.webkitRequestFullScreen();
      } else if (document.msRequestFullScreen) {
        document.msRequestFullScreen();
      }
      checkRn(false);
    }
  return {element , triggerFullscreen, exitFull};
}

const App = () => {
  const [ checkFull, setCheckFull ] = useState(false);
  const onFulls = (isFull) => {
    console.log(isFull ? "we are Full" : "we are small!!")
    setCheckFull(isFull);
  }
  const {element, triggerFullscreen, exitFull} = useFullscreen(onFulls);
  
  return (
    <div className="App" style={{height: '1000vh'}}>
     <h1>Look at this wonderful picture</h1>
     <div ref={element}>
        <img style={{height: '900px', width : '540px'}} src={picture} />
        <button onClick={checkFull ? exitFull : undefined}>Exit Screen</button>
     </div>
     <button onClick={triggerFullscreen}>Full Screen</button>
    </div>
  );
}

export default App;