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

const useClick = (onClick) => {

  const element = useRef();
  useEffect(() => {
    if(typeof onClick !== "function") {
      return;
    }
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return element;
}

const App = () => {  
  const Hellofunc = () => console.log("Hello")
  const title = useClick(Hellofunc)
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;