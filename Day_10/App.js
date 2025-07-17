
import './App.css';
import Employe from './employ';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Employe Details</h1>
      <Employe name=" Raju" age="101"></Employe>   

      <Profile name="Pon Sinthu" />
    </div> 
    
  );
}

function Profile(props) {
  const [status, setStatus] = useState("Offline");

  return (
    <div className='box'>
      <h2>User: {props.name}</h2>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("Online")}>Go Online</button><br></br>
      <button onClick={() => setStatus("Offline")}>Go Offline</button>
    </div>
  );
}

export default App;


