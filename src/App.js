import React, { useEffect, useState, useRef } from 'react';


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

// const useTitle = (initalTitle) => {
//   const [title, setTitle] = useState(initalTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector('title');
//     htmlTitle.innerText = title
//   }
//   useEffect(updateTitle, [title])
//   return setTitle
// }


const App = () => {  
  const kimchi = useRef()
  // 마운트가 되기전에 실행되는 문제를 직면하여, useEffect를 사용. 마운트가 되고난 후 실행하도록 변경
  // getElementbyId 를 하는 것과 동일
  useEffect(() => {
    setTimeout(() => console.log(kimchi.current.focus()), 2000);
  })
  
  return (
    <div className="App">
      <h1>Hi</h1>
      <input ref={kimchi} placeholder='gd' />
    </div>
  );
}

export default App;