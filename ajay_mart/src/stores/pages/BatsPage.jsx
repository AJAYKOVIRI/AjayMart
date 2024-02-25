import React, { useState } from 'react'
import { batsData } from '../data/bats'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BatsPage = () => { 















  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {batsData.map((item)=>{
            return(
             <div>
    
                 <Link to={`/bats/${item.id}`}>
                 <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                <div className="proModel">
                    {item.company},{item.model}{item.description}
                    <div className='price'>₹{item.price}</div>
                </div>
                 </Link>
                             
             </div>
            )
        })}
    </div>
    </>
  )
}

export default BatsPage