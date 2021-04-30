import React, { useEffect, useState, useRef } from 'react';
import useAxios from './useAxios/useAxios';

const App = () => {
  const {loading, data, error, refetch} = useAxios({url:"https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"});

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;