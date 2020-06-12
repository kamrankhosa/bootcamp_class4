import React, {useState} from 'react';
import './App.css';
import Message from './components/Message.js'
function App() {
  let [count, countState] = useState(0);
  let [night, nightMode] = useState(true);
  let [sub_count, count_sub] = useState(0);
  return (
      <div className={`box ${night ? 'nightMode' : ''}`}>

      <h1>We are on : { night? 'Night Mode' : 'Day Mode' }</h1>
     
      <Message count={count} sub_count={sub_count} />
      <button className="btn" onClick={
        () => countState(++count)
        }>Add counter</button>
        <button className="btn" onClick={
          () => nightMode(!night)
        }>Change to {night ? 'Day Mode':'Night Mode' } </button>
        <button className="btn" onClick={
          ()=>count_sub(--sub_count)
          }>Sub Counter</button>
    </div>
  );
}

export default App;
