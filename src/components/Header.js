import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { Carts } from './Context';
function Header() {
  const CartState=()=>{
    return useContext(Carts)
  }
  const {state:{cart}} = CartState()
  const Navgate= useNavigate()
  return (
    <div className='header'>
       <div className='navbar'>
         Shhop
         <input type='text' placeholder='Search Here'></input>
         <button onClick={()=>{Navgate('/cart')

         }}><FaShoppingCart/> {cart.length}</button>
    </div>
    </div>
   
  )
}

export default Header