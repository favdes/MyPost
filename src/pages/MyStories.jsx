import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const MyStories = () => {
  return (
    <div>
        <main>
            <section>
                <div className=' container d-flex justify-content-between'>
                    <h1>My Stories</h1>
                    <Link to="/createstory"><button className='bg-dark text-white p-1 '>Write Story</button></Link>
                </div>
            </section>
                  <section className=' container d-flex gap-5 mt-4' >
                    <h5>All</h5>
                    <h5 style={{color:'lightgrey'}}>Drafts</h5>
                    <h5 style={{color:'lightgrey'}}>Published</h5>
            </section><hr  className='text-dark'/>

            <section className='container d-flex justify-content-between mt-5'>
               <div className='list-unstyled w-50'>
                <h3>The 20 Biggest Fintech Companies In Nigeria 2022</h3>
                <li style={{color:'lightgrey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odit rem accusantium modi necessitatibus hic vitae assumenda excepturi aperiam deleniti.</li>
                <li className='mt-3' style={{color:'lightgrey'}}>Published</li></div>
                <div className='d-flex gap-3 align-items-center '>
                  <Button className='bg-primary text-white'><Link to="/editpost" className='text-white text-decoration-none'>Edit Post</Link></Button>
                  <Button className='bg-white text-primary '>Delete</Button>
                </div>
            </section>

            <section className='container d-flex justify-content-between mt-5'>
               <div className='list-unstyled w-50'>
                <h3>The 20 Biggest Fintech Companies In Nigeria 2022</h3>
                <li style={{color:'lightgrey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odit rem accusantium modi necessitatibus hic vitae assumenda excepturi aperiam deleniti.</li>
                <li className='mt-3' style={{color:'lightgrey'}}>Drafts</li></div>
                <div className='d-flex gap-3 align-items-center '>
                  <Button className='bg-primary text-white'><Link to="/editpost" className='text-white text-decoration-none'>Edit Post</Link></Button><Button className='bg-white text-primary '>Delete</Button>
                </div>
            </section>

            <section className='container d-flex justify-content-between mt-5'>
               <div className='list-unstyled w-50'>
                <h3>The 20 Biggest Fintech Companies In Nigeria 2022</h3>
                <li style={{color:'lightgrey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odit rem accusantium modi necessitatibus hic vitae assumenda excepturi aperiam deleniti.</li>
                <li className='mt-3' style={{color:'lightgrey'}}>Published</li></div>
                <div className='d-flex gap-3 align-items-center '>
                  <Button className='bg-primary text-white'><Link to="/editpost" className='text-white text-decoration-none'>Edit Post</Link></Button>
                  <Button className='bg-white text-primary '>Delete</Button>
                </div>

            </section>
            <section className='container d-flex justify-content-between '>
               <div className='list-unstyled w-50 '>
                <h3>The 20 Biggest Fintech Companies In Nigeria 2022</h3>
                <li style={{color:'lightgrey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur odit rem accusantium modi necessitatibus hic vitae assumenda excepturi aperiam deleniti.</li>
                <li className='mt-3'style={{color:'lightgrey'}}>Published</li></div>
                <div className='d-flex gap-3 align-items-center '>
                  <Button className='bg-primary text-white'><Link to="/editpost" className='text-white text-decoration-none'>Edit Post</Link></Button><Button className='bg-white text-primary '>Delete</Button>
                </div>
            </section>

        </main>
    </div>
  )
}

export default MyStories