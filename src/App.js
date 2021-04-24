import React, { useEffect, useState, useRef } from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    console.log(event)
    event.preventDefault();
    //Chrome 에서는 returnValue가 필요하다.
    event.returnValue = "Really this Page Leave? 🥺"
  }
  const enablePrevent = () => window.addEventListener('beforeunload', listener)
  
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);
  
  return { enablePrevent, disablePrevent };
}

const App = () => {  
  const {enablePrevent , disablePrevent } = usePreventLeave()
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default App;