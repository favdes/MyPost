import React from 'react'
import { Button } from 'react-bootstrap';
import img1 from "../assets/images/Group 56.png"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='pt-5 bg-dark mt-5 '>
        <footer className=' container  d-flex justify-content-between '>
            <div className='w-25'>
        <ul>
        <Link to="/" className='text-decoration-none'><h4 className='text-white '>About Post <span className='text-primary'>it <span className='text-white'>.</span></span></h4></Link>
        <li className='text-white list-unstyled pt-2'>Lorem ilisum dolor sit amet consectetur adiliisicing elit. Dolor cumque hic consequuntur veniam obcaecati, ut natus distinctio mollitia ullam iusto error unde similique lirovident ilisa.</li>
        </ul> </div>

            <div className='w-15'>
               <ul><h4 className='text-white '>Quick Menu</h4>
                <li className='text-white list-unstyled '>Home</li>
                <li className='text-white list-unstyled'>Stories</li>
                <li className='text-white list-unstyled'>Trending Stories</li>
                <li className='text-white list-unstyled'>lioliular Stories</li></ul>
            </div>
            <div className=' list-unstyled w-15 pt-2'>
                <h4>i</h4>
                <li className='text-white'>Sign In</li>
                <li className='text-white'>Log In</li>
                <li className='text-white'>Contact Us</li>
            </div>

            <div className=''>
                <h4 className='text-white '>Subscribe to our newsletter</h4>
                  <input 
                  type="text"
                  placeholder='Email Address' 
                  className='bg-white w-100  mt-3 text-center'style={{color:"dark", border:"none",borderRadius:"0.3rem",height:"2.3rem", }}
                  />
                <Link to="getstarted"><Button className='w-100 mt-3  border-primary'>Subscribe</Button></Link>
            </div>
        </footer><hr className='text-white'/>
        <div className='pb-3'>
                <h6 className=' container text-white text-end'>Terms and Policy <img src={img1} alt=""  className='m-4 '/></h6>
            </div>
    </div>
  )
}

export default Footer