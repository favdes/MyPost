import  { useState } from 'react'
import img1 from '../assets/images/Section 1.png'
import Card from 'react-bootstrap/Card';
import img2 from '../assets/images/Join Postit. (1).png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Contact = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
  
    async function register(e){
      e.preventDefault()
      const regData = {
        email,
        name,
        password
      }
      try{
      const res = await fetch("http://localhost:4343/api/register",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(regData)
      })
      const data = await res.json();
      if (data.msg === 'registration successful' ) {
        toast.success(data.msg)
        navigate('/SignIn')
      }

      if (data.msg === 'all fields are require to register' ) {
        toast.error(data.msg)
      }

      if (data.errors.password === 'password min length must be 8' ) {
        toast.error(data.errors.password)
      }

      if (data.errors.email === 'Please provide a valid email' ) {
        toast.error(data.errors.email)
      }
      if (data.errors.email === 'Email address already in use' ) {
        toast.error(data.errors.email)
      }


      console.log(data.msg);

      }catch (error){
        console.log(error);
      }
    }
  
  return (
    
    <div >
      <Card className="bg-light text-dark ">
      <Card.Img src={img1} alt="" />
      <Card.ImgOverlay>

        <ul className='container bg-white text-center w-50 h-100 list-unstyled'><CloseButton className='container d-flex justify-content-between align-item-end'/>
          <li><img src={img2} alt="" className='pt-3' /></li>
          <li><h5 className='pt-4 w-30 '>Enter your email address to create an account on Postit.</h5></li>
          <li><h6 className='pt-5 pb-4'>Username</h6></li>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='w-75 '/>
          
          <li><h6 className='pt-5 pb-4'>Your Email Address</h6></li>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='w-75 '/>
          <li><h6 className='pt-5 pb-4 '>Password</h6></li>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className='w-75 '/>

          <Button className='bg-primary   w-50 mt-4 mb-3 '> 
          <Link to='/' onClick={register} className='text-white text-decoration-none '>Continue</Link></Button>
          <h6 className='pt-3 '>Already have an account? </h6>
          <Link to='/signin' className='text-decoration-none'><h6>Sign In</h6></Link>
          

        </ul>
       
        </Card.ImgOverlay></Card>
      
     </div>
  )
}

export default Contact