import React from 'react'


function Reducers(state, action) {
    switch(action.type){
        case'ADD_CART':
        return{...state, cart:[...state.cart,{...action.payload, qty:1}]};
        case 'REMOVE_CART':
            return{...state, cart:state.cart.filter(c=>c.id != action.payload.id)};  
        
        default:
            return state;
    }

}

export default Reducers