import './App.css';
import { useState } from 'react';
import InputBar from './InputBar';

function App() {
  const [colour,setColour] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(colour);
    document.getElementsByClassName('container')[0].style.backgroundColor = `${colour}`;
    setColour('');
  }
  return (
    <div className="App">
      <div className="container"> Empty Value </div>
      <InputBar handleSubmit={handleSubmit} colour={colour} setColour={setColour}/>
    </div>
  );
}

export default App;
