import { useState,useEffect  } from 'react';
import axios from "axios"
function Form({product,setProduct}) {
  
  const handleInput = (e) => {
     setProduct({...product, [e.target.name]:e.target.name==="price"?  Number(e.target.value) : e.target.value})    
     console.log(product);
}
  const handleSubmit=  (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products/new", product)
        .then(res => console.log(res))
        .then(()=>setProduct({title:"",
        price:"",
        description:""}))
        .catch(err =>{setProduct({...product,errors: err.response.data.errors});console.log(product.errors);})
        
    }
  return (
        product ? <form onSubmit={handleSubmit}>
        <h1>Product Manager</h1>
        
        <div><label htmlFor="">Title</label><input type="text" name='title' onChange={e =>handleInput(e)} 
        placeholder={product.errors&& product.errors.title? "Please insert a Title":""}
        value={product.title}
        />
        </div>
        <div><label htmlFor="">Price</label><input type="number" name='price' onChange={e =>handleInput(e)} 
        placeholder={product.errors && product.errors.price? "Please set a price":"" }
        value={product.price}
        />
        {product.errors && product.errors.price  && product.errors.price.message==="negative"? <p style={{color:"red"}}>The price cannot be negative</p>:""}
        </div>
        <div><label htmlFor="">Description</label><input type="text" name='description' onChange={e =>handleInput(e)}
        placeholder={product.errors && product.errors.description  ? "Please  add a description":""} value={product.description} />
        
        </div>
        <button>Create</button>
      </form> : "loading"
    
  );
}

export default Form;
