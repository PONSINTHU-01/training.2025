import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const element=<h1>Welcome to JSX</h1>
const my=<h2>React is {5+5} times better</h2>
const myelement=(
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Mango</li>
  </ul>
)
let x=5
let text="Bye"
if(x<10){
  text="Hello"
}
const a=<h3>{text}</h3>

function Name(){
  return(
    <h2> hii , Times up</h2>
  )
}
function Flower(props){
  return(
    <p>It's a{props.name}</p>
  )
}
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
    <div>
    {element}
    {my}
    {myelement}
    <App />
    {a}
    <Name />
    <Flower name="rose" />
    </div>

);

