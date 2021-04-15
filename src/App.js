import React, { useEffect, useState } from 'react';


// export const useInput = (initialValue, validator ) => {
//   const [ value , setValue ] = useState(initialValue);
//   const onChange = (event) => {
//     const {
//       target : {value}
//     } = event;
    
//     let willUpdate = true;

//     if(typeof validator === "function") {
//       willUpdate = validator(value);
//     }

//     if(willUpdate) {
//       setValue(value);
//     }
    
//   }
//   return { value, onChange };
// }

// const useTabs = (initailTab, allTabs) => {

//     const [currentIndex, setCurrentIndex] = useState(initailTab);
//     if(!allTabs || !Array.isArray(allTabs)) {
//       return null;
//     }
//     return {
//       currentItem : allTabs[currentIndex],
//       changeItem : setCurrentIndex
//     }
// }


const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [Anumber, setAnumber] = useState(0);
  // useEffect는 업데이트 되는걸 감시한다.
  // 첫번째 인자로는 Function(함수)를 받는다.
  // 두번째 인자로는 dependency(deps)를 받는다.
  // 두번째 배열안에 포함된 값이 변경될 때 useEffect는 실행된다.
  useEffect(sayHello, [number, Anumber]);

  return (
    <div className="App">
      <button onClick={() => setNumber(number+1)}>{number}</button>
      <button onClick={() => setAnumber(Anumber+1)}>{Anumber}</button>
    </div>
  );
}

export default App;