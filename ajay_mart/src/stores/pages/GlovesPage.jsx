import React from 'react'
import { glovesData } from '../data/gloves'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const GlovesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {glovesData.map((item)=>{
            return(
             <div>
                      <Link to={`/gloves/${item.id}`}>
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

export default GlovesPage