import React, {useState} from 'react';
import './App.css';
function App() {
  let [count, acountState] = useState(0);
  return (
    <div className="box">
      <h3>Value of counter is : {count} </h3>
      <button onClick={
        ()=>acountState(++count)
        }>Update counter</button>
    </div>
  );
}

export default App;
