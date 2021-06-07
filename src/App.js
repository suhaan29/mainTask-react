

import Personal from "./components/personal/Personal"
import Statistics from "./components/statistics/Statistics"
import "./App.css"
import Schedule from "./components/schedule/Schedule"
function App() {
  return (
    <div className="App">
      <div className = "top">
        <Personal/>
        <Statistics/>
     
      </div>
      
      <div className = "middle">
        Activity | 12th April, 2020
        <div className = "lineBorder">
         <hr></hr>
        </div>
        <button className = "middleButton">
          + Schedule Activity
        </button>
      </div>

      <div className = "bottom">
      <Schedule />
      </div>
    </div>
  );
}

export default App;
