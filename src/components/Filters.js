import React, { useState } from 'react'
import Rating from './Rating'
function Filters() {
    const [rating, setRating] = useState(0)
    function ClickHandler(i){
        setRating(i+1)
    }
  return (
    <div className='filters'>
        <span>Filter products</span>
        <span><input type='radio' name='group1' id={'inline-1'}></input>
        <label>Ascending</label>
        </span>
        <span><input type='radio' name='group1' id={'inline-2'}></input>
        <label>Descending</label>
        </span>
        <span>
            <input type='checkbox' name='group1' id={'inline-3'} ></input>
            <label>Include out of stock</label>
        </span>
        <span>
            <input type='checkbox' name='group1' id={'inline-4'} ></input>
            <label>Fast Delivery only</label>
        </span>
        <span>
           <label>Rating:</label>
        <Rating rating={rating} onClick={ClickHandler} style={{cursor:'pointer'}}/> 
        </span>
        
        <button>Clear Filters</button>
    </div>
  )
}

export default Filters