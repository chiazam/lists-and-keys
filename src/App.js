// import logo from './logo.svg';
// import './App.css';
// import './statik/square.css';
import React from 'react';

import { NumberList,numbers } from './components/numberlist';


class App extends React.Component {
  
  render() {
    return (
      <NumberList numbers={numbers} />
    );
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }