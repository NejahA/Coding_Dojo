
import { useState } from 'react';
import './App.css';
import DisplayBox from './DisplayBox';

function App() {
  const [color, setColor]= useState('')
  const [allColors, setAllColors]= useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllColors([...allColors,color])
    setColor('')
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="">Color : </label>
      <input type="text" placeholder='Add Color' name='Color' onChange={(e)=>setColor(e.target.value)} value={color} />
      <input type="submit" value="Add" />     
      </form>
        <DisplayBox allColors={allColors}  color = {color} />
        
      </div>
  );
}

export default App;
