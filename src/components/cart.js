import React, { useContext, useEffect, useState } from 'react'
import { Carts } from './Context'
import { Card, ListGroup } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";
import CartProduct from './CartProduct';
function Cart() {
    const CartState=()=>{
        return useContext(Carts)
    }
    const [total, setTotal] = useState();
    const {state:{cart}, dispatch} =CartState()
    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))
    },[cart])
  return (
   <div className='home'>
     <div className='filters side'>
        <span>
         Total Products: {cart.length}
        </span>
        <span>Total: ₹{total} </span>
        <button disabled={cart.length == 0}>Proceed to checkOut</button>
    </div>
    <div className='productContainer items'>
       
        
            {
                cart.map((prod)=>(
                    <CartProduct prod={prod} key={prod.id}/>
                    
                ))
            }
    </div>
    
   </div>
  )
}

export default Cart