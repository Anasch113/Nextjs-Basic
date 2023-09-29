import React from 'react'
import Button from './button';
async function productlist (){


// Fetching data by using dummy api and displaying on page



    try {
        const response  = await fetch("https://dummyjson.com/products");
        if(!response.ok){
            throw new Error('something went wrong')
        }

const data = await response.json();
return data.products;

    } catch (error) {
        console.log("Error fetching data", error)
    }

}





const  ProductList2 = async () => {
    const helloproducts = await productlist()
    
  return (
    <>
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Product List Server Side</h1>

{
    helloproducts.map((item)=>(
        <div key={item.title}>
        <p >{item.title}</p>
        {/* Also using client component in server component */}
        <Button price={item.price}/>
        </div>
    
    ))
    
}
    </div>
    </>
  )
}

export default ProductList2


// Displaying the title and description for single page instead of single title for all pages
// in server component
//Purpose is to increase Search Engine Optimization (SEO)
export function generateMetadata(){
    return{
    
      title: 'product list page',
      description: 'description of product list page'
    }
    }