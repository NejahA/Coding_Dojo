import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { useNavigate} from "react-router-dom";
  
const ShowOne = () => {

    const nav= useNavigate()

    const {id} = useParams()
    const [oneProduct, setOneProduxt] = useState({})
    console.log(typeof(id));
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/`+id)
        .then(res => {setOneProduxt(res.data);console.log(res.data);})
        .catch(err => {setOneProduxt({...oneProduct, errors: err.response.data.errors})})
        console.log(`http://localhost:8000/api/products/`+id);
    },[id])
    const DeleteOne= () => {
        axios.delete("http://localhost:8000/api/products/delete/"+id)
        .then(res=>console.log(res))
        .catch(err => console.log(err))
        nav(-1)
    }
  return (<>
    <div>
        <h2>Title : {oneProduct.title}</h2>
        <h2>Price : {oneProduct.price} $</h2>
        <h4>Description : {oneProduct.description} </h4>
    </div>
    <Link to = {"/product/edit/"+id}>
    <button>Edit</button>
    <button onClick={DeleteOne}>Delete</button>
    </Link>
  </>
  )
}

export default ShowOne