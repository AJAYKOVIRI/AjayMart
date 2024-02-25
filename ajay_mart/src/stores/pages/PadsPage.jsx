import React from 'react'
import { padsData } from '../data/pads'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const PadsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {padsData.map((item)=>{
            return(
             <div>
                     <Link to={`/pads/${item.id}`}>
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

export default PadsPage