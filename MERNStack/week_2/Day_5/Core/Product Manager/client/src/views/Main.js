import { useState,useEffect  } from 'react';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";   
import axios from "axios"
import Form from "../components/Form"
import ShowAll from "../components/ShowAll"
import ShowOne from '../components/ShowOne';
import EditOne from '../components/EditOne';


function Main() {
    const [product, setProduct]  = useState({});
  return (
        <>
        <Routes>
        <Route path="/" 
        element={<>
        <Form product={product} setProduct={setProduct} />
        <ShowAll product={product} setProduct={setProduct} /></>} />
        <Route path='/product/:id' element = {<ShowOne />} />
        <Route path='/product/edit/:id' element = {<EditOne />} />
      </Routes>
        
        </>
  );
}

export default Main;
