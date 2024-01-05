import React, { useState } from "react";
import { Link,Route,Routes } from "react-router-dom";
const Form = (props) => {

    const [chosen,setChosen] = useState({})
    const [category,setCategory] = useState("")
    const [id,setId] = useState(0)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setChosen({category:category,id:id })
        console.log(chosen);
    }
    return (
        <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Search for: </label>
      <select name="" id="" onChange={e =>setCategory ( e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <label htmlFor="">ID :</label>
      <input type="number" onChange={e => setId( e.target.value)}/>
      
        <Link to = {`/${category}/${id}`}>
        <input type="submit" value="Search" />
        </Link>
      
    </form>
    </>
    
  );
};

export default Form;
