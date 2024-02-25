import React from 'react'
import { helmetsData } from '../data/helmets'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const HelmetsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {helmetsData.map((item)=>{
            return(
             <div>
                     <Link to={`/helmets/${item.id}`}>
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

export default HelmetsPage