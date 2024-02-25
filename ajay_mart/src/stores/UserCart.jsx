import React from 'react'
import {useCart} from './cart/CartContext'
import Navbar from './components/Navbar'

const UserCart = () => {

   const {cartItems , addToCart ,removeFromCart} = useCart()
    console.log(cartItems);
  return (
    <>
    <Navbar />
    <h1>Your Cart </h1>
    <div>
        {cartItems.map((item)=>{
            return(
                <div className="cartSection">
                    <div className="cartImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cartDetails">
                        <h3>{item.product}</h3>
                        <h2>
                            {item.price}
                        </h2>
                        <h3>{item.model}</h3>
                    </div>
                    <button className='removeBtn' onClick={()=> removeFromCart(item)}>Remove From Cart</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default UserCart