import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from "react-router";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";   
  import { useNavigate} from "react-router-dom";

const EditOne = () => {
    const [oneEdit, setOneEdit] = useState({errs: {title : null,
    price : null,
    description : null},})
    const {id} = useParams()
    const nav= useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/`+id)
        .then(res => {setOneEdit(res.data);console.log(res.data);})
        .catch(err => {setOneEdit({...oneEdit, errs: err.response.data.errors})})
        console.log(`http://localhost:8000/api/products/`+id);
    },[id])
    const handleInput = (e) => {
        setOneEdit({...oneEdit, [e.target.name]:e.target.name==="price"?  Number(e.target.value) : e.target.value})    
        console.log(oneEdit);
   }
     const handleSubmit=  (e) => {
       e.preventDefault();
       axios.patch("http://localhost:8000/api/products/edit/"+id, {title:oneEdit.title, description:oneEdit.description, price:oneEdit.price})
           .then(res => {console.log(res);nav(-2)}
           )
           .catch(err =>{setOneEdit({...oneEdit,errs: err.response.data.errors})})

        }
  return (
        oneEdit ?<> <form onSubmit={handleSubmit}>
        <h1>Edit Product</h1>
        
        <div><label htmlFor="">Title</label><input type="text" name='title' onChange={e =>handleInput(e)} value={oneEdit.title} 
        placeholder={oneEdit.errs && oneEdit.errs.title ? "Please insert a Title":"" }
        />

        </div>
        <div><label htmlFor="">Price</label><input type="number" name='price' onChange={e =>handleInput(e)} value={oneEdit.price}
        placeholder={oneEdit.errs && oneEdit.errs.price ? "Please set a Price":""}
        />
        {oneEdit.errs && oneEdit.errs.price && oneEdit.errs.price.message==="negative"? <p style={{color:"red"}}>The price cannot be negative</p>:""} 
        
        </div>
        <div><label htmlFor="">Description</label><input type="text" name='description' onChange={e =>handleInput(e)} value={oneEdit.description}
        placeholder={oneEdit.errs && oneEdit.errs.description ?  "Please  add a description" : ""} />
        
        </div>
        <input value="Edit" type='submit' />

      </form> 
        <button onClick={()=>nav(-1)} >Close</button> </>:
      
      "loading"
  
  )
}

export default EditOne