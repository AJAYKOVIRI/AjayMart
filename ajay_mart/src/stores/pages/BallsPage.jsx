import React from 'react'
import { ballsData } from '../data/balls'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const BallsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {ballsData.map((item)=>{
            return(
             <div>
                  <Link to={`/balls/${item.id}`}>
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

export default BallsPage