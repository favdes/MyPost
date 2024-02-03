import React from "react";

import img2 from "../assets/images/unsplash_Z2bJeJQRbW0.png";
import { Link } from "react-router-dom";
import "./styles/stories.css";
import { Button } from "react-bootstrap";
import img3 from "../assets/images/Group 12 (1).png";
import img4 from "../assets/images/You’ve got a story, Postit..png";
import img5 from "../assets/images/Ellipse 1.png"
import img6 from "../assets/images/Vector (6).png";
import img7 from "../assets/images/Group 12 (2).png";
import img8 from "../assets/images/Group 12 (3).png";
import img9 from "../assets/images/Group 12 (4).png";
import img10 from "../assets/images/Group 12 (5).png";
import img11 from "../assets/images/Group 12 (6).png";
import img12 from '../assets/images/Group 12 (7).png';
import img13 from "../assets/images/Group 12 (8).png";
import img14 from "../assets/images/Group 12 (9).png";
import img15 from "../assets/images/Group 12 (10).png";
import img16 from "../assets/images/Group 12 (11).png";
import img17 from "../assets/images/Group 12 (12).png"
import Pagination from 'react-bootstrap/Pagination';


const Stories = () => {
  return (
    <div>
      <main>

        <section
          className=" d-flex  align-items-center"
          style={{ background: "lightgrey" }} >

          <div className="w-100">
            <div className="w-75 m-auto">
              <h1 className=" mt-5">
                You've Gotten a Story, Post
                <span className="text-primary">it</span>.
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur voluptatibus consequatur in dolor aliquid dicta,
                consequuntur officia, maiores optio cupiditate tempora iusto
                quasi corporis maxime odio recusandae repudiandae voluptates
                nobis, expedita culpa aut ab non!
              </p>
              <div className="d-flex gap-3"></div>
            </div>
          </div>

          <div className="w-100 ">
            <img src={img2} alt="" className="" />
          </div>
        </section>

        <section className="mt-5 container d-flex justify-content-between align-items-center">
          <div className="w">
            <img src={img3} alt="" className="w-100" />
            <h5 className="">
              The 20 Biggest Fintech Companies In Nigeria 2022
            </h5>
            <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              rerum harum repudiandae optio magni ullam.
            </p>
            <Link to="/viewpost" className="text-decoration-none ">
              <h5>
                <img src={img6} alt="" className="text-colour-primary" /> Read
                More....
              </h5>
            </Link>
          </div>

          <div className="w ">
            <img src={img7} alt="" className="w-100" />
            <h5 className="  mt-2">
              The 20 Biggest Agro Companies In Nigeria 2022
            </h5>
            <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>
            <p className=" containermt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              rerum harum repudiandae optio magni ullam.
            </p>
            <Link to="/" className="text-decoration-none mt-2">
              <h5>
                <img src={img6} alt="" className="text-colour-primary" /> Read
                More....
              </h5>
            </Link>
          </div>

          <div className="w ">
            <img src={img8} alt="" className="w-100" />
            <h5 className="  mt-2">
              The 20 Biggest Fashion Companies In Nigeria 2022
            </h5>
            <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>
            <p className="mt-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              rerum harum repudiandae optio magni ullam.
            </p>
            <Link to="/" className="text-decoration-none mt-2">
              <h5>
                <img src={img6} alt="" className="text-colour-primary" /> Read
                More....
              </h5>
            </Link>
          </div>
        </section>

      </main>
        <section className='mt-5 container d-flex justify-content-between align-items-center'> 

         <div className='w'><img src={img9} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fintech Companies In Nigeria 2022</h5>
        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img10} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Agro Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p className=' containermt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img11} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fashion Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>
        
        <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>
           
        </section>
        <section className='mt-5 container d-flex justify-content-between align-items-center'> 

         <div className='w'><img src={img12} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fintech Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img13} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Agro Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p className=' containermt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img14} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fashion Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>
           
        </section>
        <section className='mt-5 container d-flex justify-content-between align-items-center'> 

         <div className='w'><img src={img15} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fintech Companies In Nigeria 2022</h5>
       
        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img16} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Agro Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p className=' containermt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>

           <div className='w'><img src={img17} alt="" className="w-100"/>
        <h5 className='mt-2'>The 20 Biggest Fashion Companies In Nigeria 2022</h5>

        <img src={img5} alt="" className="mt-2 w-45"/><span className="" style={{ color: "lightgrey" }}>By</span> Maria Davies <span className="" style={{ color: "lightgrey" }}>-  May 21, 2022</span>

        <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum harum repudiandae optio magni ullam.</p>
        <Link to='/' className='text-decoration-none mt-2'><h5><img src={img6} alt="" className='text-colour-primary' /> Read More....</h5></Link></div>
           </section>

          <section className=" ml-5 mt-4 text-center">
          <Pagination >
       <Pagination.Prev className="text-dark"/>
      <Pagination.Item className="bg-primary ">{1}</Pagination.Item>
      <Pagination.Item className="text-dark">{2}</Pagination.Item>
      <Pagination.Next /></Pagination>
          </section>




    </div>
  );
};

export default Stories;
