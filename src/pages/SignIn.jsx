import {useState,useContext} from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import PostContext from "../context/PostContext"
import toast from 'react-hot-toast';
import img1 from "../assets/images/Section 1.png"

const SignIn = () => {
    // const { setLoggedIn } = useContext(PostContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function signIn(e){
      e.preventDefault();
      const loginDetails = {
        email,
        password
      };

      try{
      const res = await fetch("http://localhost:4343/api/login",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(loginDetails)
      });
      const data = await res.json();
      console.log(data);
      
      if (data.token) {localStorage.setItem("token", data.token);
        toast.success(data.msg);
        navigate('/welcome')
        setLoggedIn(true);
      }

      if (data.msg === 'all fields are required' ) { 
        toast.error(data.msg);
      }

      if (data.errors.password === "Password is incorrect"
      ) { 
        toast.error( data.errors.password);
      }

      if (data.errors.email === "Password is incorrect" ) { 
        toast.error( data.errors.email);
      }

      }catch (error){
        console.log(error.message);
      }
    }
      return (
    <div>
        <Card className="bg-light text-dark ">
        <Card.Img src={img1} alt="" />
      <Card.ImgOverlay>
        <ul className='container bg-white text-center w-50 h-100 list-unstyled'>
          <h1 className='pt-5 w-30 '>Welcome Back</h1>
          <h5 className='pt-5 pb-5'>Your Email Address</h5>
         <input type="email"  placeholder='name@example.com' className='w-75' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <h5 className='pt-5 pb-5 '>Password</h5>
          <input type="password" placeholder='Your Password' className='w-75 border-none' value={password} onChange={(e)=>setPassword(e.target.value)} />

          <Button className='bg-primary   w-50 mt-5 mb-4 '> 
          <Link to='/welcome' className='text-white text-decoration-none' onClick={signIn}>Continue</Link></Button>
          <h5 className='pt-3 pb-3 '>No Account? </h5>
          <Link to='/getstarted' className='text-decoration-none'><h5>Sign In</h5></Link>
          

        </ul>
       
        </Card.ImgOverlay></Card>
      
    </div>
  )
}

export default SignIn