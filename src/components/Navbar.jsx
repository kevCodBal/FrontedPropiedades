import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { userContext } from '../context/UserContext'

export const Navbar = () => {
    
    const {user, setUser}= useContext(userContext)
  return (
    <>
        <ul className="flex justify-between mx-10 my-3  ">
            
            <div  className="mr-6">
                <Link to='/' className="text-blue-500 hover:text-blue-800" >Home</Link>
            </div>
            <div className="mr-6">
                <Link  to="/categories"className="text-blue-500 hover:text-blue-800">Categories</Link>
            </div>
            <div  className="mr-6">
                <Link to='/' className="text-blue-500 hover:text-blue-800" >Contacto</Link>
            </div>
            <div   className="mr-6">
                {
                    user.logged?<Link to="/"><p>{user.name}</p></Link>:
                    <Link to='/login' className="text-blue-500 hover:text-blue-800" href="#">Login</Link>
                }
                
            </div>
        </ul>
        
    </>
  )
}
