
import { useState } from 'react';
import './App.css';
import DisplayBox from './DisplayBox';

function App() {
  const [color, setColor]= useState('')
  const [width, setWidth]= useState('')
  const [height, setHeight]= useState('')
  const [allColors, setAllColors]= useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllColors([...allColors,{"color":color, "width":width, "height":height}])
    setColor('')
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="">Color : </label>
      <input type="text" placeholder='Add Color' name='Color' onChange={(e)=>setColor(e.target.value)} value={color} />
      <label htmlFor="">Height : </label>
      <input type="text" placeholder='Add Height' name='Height' onChange={(e)=>setHeight(e.target.value)} value={height} />
      <label htmlFor="">Width : </label>
      <input type="text" placeholder='Add Width' name='Width' onChange={(e)=>setWidth(e.target.value)} value={width} />
      <input type="submit" value="Add" />     
      </form>
        <DisplayBox allColors={allColors}   />
        
      </div>
  );
}

export default App;
