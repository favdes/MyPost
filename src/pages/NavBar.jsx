import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router-dom";
import Navlogo from "../assets/images/Postit 1.png";
import img1 from "../assets/images/Group 366.png"


const NavBar = () => {
  return (
    <div className="">
      <div className=" container d-flex justify-content-around  mt-3 mb-3">
        <div className="container  ">
          <Link to="/">
            <img src={Navlogo} alt="navlogo" className="img-fluid  " />
          </Link>
        </div>
        <div className="d-flex gap-5 w-50 justify-content-end">
          <Link to="/stories" className="text-decoration-none text-dark">
            Stories
          </Link>
          <Link to="/Footer" className="text-decoration-none text-dark ml-4">
            Contact
          </Link>
          <Link to="/signin" className="text-decoration-none text-dark ml-4">
            SignIn
          </Link>

          <Link to={'/getstarted'} style={{width:"7rem"}} className="text-white text-decoration-none btn btn-primary  ">Get started</Link> 
          {/* className="d-block  text-dark bg-primary border-primary rounded-3" */}

          <img src={img1} alt="" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
