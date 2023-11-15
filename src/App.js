import React, { Component } from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

// Refactored to functional componenet
const App = () => {
  return (
    <div className="App">
      <JokeList />
    </div>
  )
}
export default App;
