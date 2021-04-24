import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  // if(typeof onBefore !== 'function') {
  //   return;
  // }
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0) {
      onBefore()
    }
  }

  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
}

const App = () => {  
  const begForLife = () => console.log("Please don't Leave this Page...")
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <div> Hello SangGyu's Homepage</div>
    </div>
  );
}

export default App;