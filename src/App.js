import React, { useEffect, useState } from 'react';


const useScroll = () => {
  const [state, setState] = useState({
    x : 0,
    y : 0
  });

  const onScroll = () => {
    setState({ y:  window.scrollY, x: window.scrollX})
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  }, [])

  return state;
}

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{height: '1000vh'}}>
     <h1 style = { {position:'fixed', color: y > 100 ? 'red' : 'blue'}}>Welcome my page</h1>
    </div>
  );
}

export default App;