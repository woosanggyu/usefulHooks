import React from 'react';
import './App.css';

// const App = () => {
//   //useState 는 Array를 리턴함 첫번째에 item값이 두번째에 setItem이 위치
//   const [item, setItem] = useState(1);
//   const increamentItem = () => setItem(item + 1);
//   const decreamentItem = () => setItem(item - 1);

//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={increamentItem}>Increament</button>
//       <button onClick={decreamentItem}>Decreament</button>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    item : 1
  }

  increamentItem = () => {
    this.setState(state => {
      return {
        item : state.item +1
      }
    })
  }

  decreamentItem = () => {
    this.setState(state => {
      return {
        item : state.item -1
      }
    })
  }
  render() {
    const {item} = this.state;
    return(
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.increamentItem}>Increament</button>
        <button onClick={this.decreamentItem}>Decreament</button>
      </div>
    )
  }
}

export default App;