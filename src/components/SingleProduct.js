import React, { useContext } from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Carts } from './Context'
function SingleProduct({prod}) {
    const CartState =()=>{
        return useContext(Carts)
    }
    const {state:{cart}, dispatch}= CartState()
  return (
    
        <Card className='card'>
            <Card.Img variant='top' src={prod.image} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>₹ {prod.price}</span>
                    {prod.fastDelivery ? (
                        <div>Fast delivery</div>
                    ) : (
                      <div>4 days delivery</div>
                    )}
                    <Rating rating={prod.ratings}/>
                </Card.Subtitle>
                <span className='card-buttons'>
                    {
                        cart.some(p => p.id == prod.id)? (<button className='card-remove' onClick={()=>(
                            dispatch({
                                type:'REMOVE_CART',
                                 payload:prod
                            })
                        )}>Remove from cart</button>) :
                         (<button  className='card-add' disabled={!prod.inStock} onClick={()=>(dispatch({
                             type:'ADD_CART',
                             payload:prod
                         }))}>
                 { !prod.inStock ? ('out of stock') : ('add to cart')}
                    </button>)
                    }
                     
                
                </span>
               
            </Card.Body>
        </Card>


  )
}

export default SingleProduct