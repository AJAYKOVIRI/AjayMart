
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'

const Navbar = () => {
  
    const {cartItems}=useCart()

  return (
    <>
    <div className='navSection'>
        <div className="title">
            <h2 id='cric'>AJAY<span id='mart'>mart</span></h2>
        </div>
        <div className="search">
            <input type="text" placeholder='Search....' />
        </div>
        <div className="user">
            <Link to={'/cart'}>
            <span className="cart">
                Cart <span id='cartCount'>{cartItems.length}</span>
            </span>
            </Link>

            <span className="user-detail">
                SignIN/SignUP
            </span>
            
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to={'/bats'}><li>Bats</li></Link>
            <Link to={'/balls'}><li>Balls</li></Link>
            <Link to={'/helmets'}><li>Helmets</li></Link>
            <Link to={'/gloves'}><li>Gloves</li></Link>
            <Link to={'/pads'}><li>Pads</li></Link>
        </ul>
    </div>
    <hr />
    </>
  )
}

export default Navbar