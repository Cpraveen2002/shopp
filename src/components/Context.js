import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker'
import Reducers from './Reducers';
 export const Carts =createContext();
function Context({children}) {
  faker.seed(99)
  const products=[...Array(30)].map(()=>({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings:faker.helpers.arrayElement([1,2,3,4,5])
  }));
  const [state, dispatch] =useReducer(Reducers, {
    products:products,
    cart:[]
  })

  return (
    <div>
        <Carts.Provider value={{state, dispatch}}>
          {children}
        </Carts.Provider>
    </div>
  )
}

export default Context