import React, { useContext, useState } from 'react'
import { Carts } from './Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'
function Home() {
    
    const CartState=()=>{
        return useContext(Carts)
    } 
    const {state:{products}, dispatch}= CartState();
    console.log(products)
  return (
<div className='home'>
    <Filters/>
    <div className='productContainer'>
       {
        products.map((prod)=>(
            <SingleProduct prod={prod} key={prod.id} />
        ))
    } 
    </div>
    
</div>
  )
}

export default Home