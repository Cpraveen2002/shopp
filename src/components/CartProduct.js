import React, { useContext } from 'react'
import { Carts } from './Context'
import { Card } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";
function CartProduct({prod}) {
    const CartState=()=>{
        return useContext(Carts)
    }
    const {state:{cart}, dispatch} = CartState()
  return (
    <div>
             
                        <Card className='card'>
                            <Card.Img variant='top' src={prod.image}></Card.Img>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Subtitle>
                                <span>price ₹{prod.price}</span>
                            </Card.Subtitle>
                            <button onClick={() =>(
                                dispatch({
                                      type:'REMOVE_CART',
                                      payload:prod
                                })
                            )}><FaTrash /></button>
                        </Card>
                    
    </div>
  )
}

export default CartProduct