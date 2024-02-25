import React from 'react'
import { batsData } from '../stores/data/bats'
import {useParams} from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

import { useCart } from '../stores/cart/CartContext'

const BatsSingle = () => {

   const {id} = useParams()

   const{addToCart , cartItems}= useCart()

   const product = batsData.find((item)=>item.id === id)
   console.log(id)
  return (
    <>
    <Navbar />
    <div className="indPage">
      <div className="indImg">
        <img src={ product.image } alt="" />
      </div>
      <div className="indDetails">
      <div className="indCompany">
        <h2>{product.company}</h2>
      </div>  
      <div className="indModel">
        <h3>{product.model}</h3>
      </div>
      <div className="indDesc">
        <h3>{product.description}</h3>
      </div>
      <br/>
      <div className="indPrice">
        <h2> ₹ {product.price}</h2>
      </div>
     
      <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>

    </div>
    </>
  )
}

export default BatsSingle