// import React from "react";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import img3 from "../assets/images/unsplash_Z2bJeJQRbW0.png";
import { Button } from "react-bootstrap";
import "./styles/Welcome.css";

const Welcome = () => {
  return (
    <div className="">
      <main className="">
        <div className="">
  
            <section className=" d-flex justify-content-center align-items-center" style={{background:'lightgrey'}}>
              <div className="w-100">
                <div className="w-75 m-auto">
                <h1 className=" mt-5">Welcome Maria,</h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur voluptatibus consequatur in dolor aliquid dicta,
                  consequuntur officia, maiores optio cupiditate tempora iusto
                  quasi corporis maxime odio recusandae repudiandae voluptates
                  nobis, expedita culpa aut ab non!
                </p>
                <div className="d-flex gap-3">
                  <Button className="text-decoration-none ">
                    <Link to="/stories " className="text-white text-decoration-none">
                      My Stories
                    </Link>
                  </Button>
                  <Button className="bg-white">
                    <Link to="/ " className="text-primary text-decoration-none ">
                      Go To Feed
                    </Link>
                  </Button>
                </div>
                </div>
              </div>

              <div className="w-100 ">
                <img src={img3} alt="" className="w-100" />
              </div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
