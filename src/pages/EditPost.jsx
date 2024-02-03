import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import img2 from '../assets/images/edit.png'
import './styles/CreateStory.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const EditPost = () => {
  return (
    <div className=''>
    <Card className='bg-white'>
     <Container>
         <div className='col-12 col-md-16 mt-4'>
             <span><img src={img2} alt="" className='icon ' /><input className='para form-control p-3 p' placeholder='Title: The 20 Biggest Fintech Companies in Nigeria' type="text" />

             </span>
         </div>
     </Container>
     <Container>
         <div className='col-12 col-md-16 mt-4'>
             <span><img src={img2} alt="" className='icon ' /><input className='para form-control p-3 p' placeholder='Tags: Technology' type="text" />

             </span>
         </div>
     </Container>
     <Container>
         <div className='col-12 col-md-16 mt-4'>
             <span><img src={img2} alt="" className='icon ' /><textarea cols="30"
           rows="12" className='para form-control p-3  ' placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada neque, vitae arcu elit amet arcu. Non quam dignissim blandit lectus tempus sit molestie fermentum. Mattis morbi fames nullam enim. Vitae commodo tellus cras eu, amet id scelerisque quis. Massa donec accumsan, maecenas ullamcorper sagittis, ut felis, faucibus. Varius nibh tristique a mattis mattis amet in placerat. Donec ultricies pharetra turpis proin. Vulputate volutpat neque diam at metus scelerisque.
           Imperdiet congue ultrices proin nisi. Id sagittis aenean egestas metus, aliquet dolor vitae consectetur diam. Porta aliquet cras nisl sed sed ut consequat tempus ultricies. Tellus tortor sapien, et sagittis. Convallis nunc sem purus egestas. Semper venenatis suspendisse in et, velit ultrices facilisis enim mi. Tortor quis sapien pulvinar vitae et neque curabitur velit in.
           Dictum nulla vitae vitae gravida consectetur libero arcu, id cras. Erat sed viverra auctor eget pellentesque velit.' type="text" />
    </span></div>
    
    <Button className='publish bg-primary    mt-5 mb-4 '> 
       <Link to='/stories' className='text-white text-decoration-none'>Update Story</Link></Button></Container>
    </Card>
 </div>
  )
}

export default EditPost