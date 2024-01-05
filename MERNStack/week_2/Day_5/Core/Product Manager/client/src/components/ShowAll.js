import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";    
import 'bootstrap/dist/css/bootstrap.min.css'
const ShowAll = ({product, setProduct}) => {
    
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>
        {axios.get("http://localhost:8000/api/products")
        .then(res=> {setAllProducts(res.data);console.log(res.data)})
        .catch(err=> console.log(err))},[product]
    )
    const DeleteOne= (e,id) => {
            e.preventDefault()
            axios.delete("http://localhost:8000/api/products/delete/"+id)
            .then(()=>axios.get("http://localhost:8000/api/products")
            .then(res=> {setAllProducts(res.data);console.log(res.data)}))
            .catch(err => console.log(err))

            }
        

    

  return (
    
    <div>
        {allProducts &&
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col" class="col-4">
                    Title
                </th>
                
                <th scope="col" class="col-4">
                    Price
                </th>
                <th scope="col" class="col-4">Delete</th>
                </tr>
            </thead>
        <tbody>

       { allProducts.map(el=>
        <tr key={el._id}>
            <td> 
                <Link to = {`/product/${el._id}`}>

                {el.title}
                </Link>
                </td>
            <td>{el.price} DT</td>
            <td ><form onSubmit={(e)=>DeleteOne(e,el._id)}>
                 <button >🚮</button>
                </form>
                  </td>
            
        </tr>)}
            </tbody>
        </table>
        }
    </div>
  )
}

export default ShowAll