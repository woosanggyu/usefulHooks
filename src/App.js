import React, { useState } from 'react';


export const useInput = (initialValue, validator ) => {
  const [ value , setValue ] = useState(initialValue);
  const onChange = (event) => {
    const {
      target : {value}
    } = event;
    
    let willUpdate = true;

    if(typeof validator === "function") {
      willUpdate = validator(value);
    }

    if(willUpdate) {
      setValue(value);
    }
    
  }
  return { value, onChange };
}

// useInput에서 return을 {value}로 주었기 때문에 App에서 사용할 때 value={name.value}로 받아야함
// value={name.value} 대신에 {...name} 도 가능하다.
// {...name}을 하게되면 name 안에 있는 모든걸 풀어주게된다.

const App = () => {
  // const maxLen = value => value.length <= 10; 길이
  const maxLen = value => !value.includes("@") && value.length <= 10; //문자열 및 길이체크
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;