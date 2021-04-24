import React, { useEffect, useState, useRef } from 'react';



const App = () => {  
  const deleteWorld = () => console.log("Delete the World...");
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;