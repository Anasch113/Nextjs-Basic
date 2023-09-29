"use client"
import React from 'react'

import { useEffect, useState } from 'react'

const ProductList = () => {
const [product, setProduct] = useState([]);


// Fetching data from api in client component using dummy api and by direct method

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setProduct(data.products)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div>
      <h1>Product List</h1>
{/* Displaying data using map loop function of javascript */}
      {
        product.map((item)=>(
         <div key={item.title}>
          <p >{item.title}</p>
          <p style={{ marginTop: '20px'}}>{item.description}</p>
          </div>
         
        ))
      }
    </div>
    </>
  )
}



export default ProductList

