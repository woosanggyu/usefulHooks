import React, { useState } from 'react';


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

const content = [
  {
    tab : "Section 1",
    content : "I'm the content of Section 1"
  },
  {
    tab : "Section 2",
    content : "I'm the content of Section 2"
  }
]

const useTabs = (initailTab, allTabs) => {

    const [currentIndex, setCurrentIndex] = useState(initailTab);
    if(!allTabs || !Array.isArray(allTabs)) {
      return null;
    }
    return {
      currentItem : allTabs[currentIndex],
      changeItem : setCurrentIndex
    }
}

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section,index) => (<button onClick={() => changeItem(index)}>{section.tab}</button>))}
      <div>

      {currentItem.content}
      </div>
    </div>
  );
}

export default App;