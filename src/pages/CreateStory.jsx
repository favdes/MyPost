

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import img2 from '../assets/images/edit.png'
import './styles/CreateStory.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Modal from "react-bootstrap/Modal";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"





const CreateStory = () => {
    const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const post = {
    title,
    tags,
    description
  };

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch("https://postit-backend-ifjp.onrender.com/api/posts", {
        method: "POST",
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json"
        },
        body: JSON.stringify(post),
      });
      const res = await fetchData.json();
      console.log(res);
      if(res.message === 'post created successfully'){
        // alert(res.message)
        toast.success(res.message)
        navigate('/')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
       <Card className='bg-white'>
        <h1 className='container mt-5'>Create Story</h1>
        <Container>
            <div className='col-12 col-md-16 mt-4'>
                <span><img src={img2} alt="" className='icon ' /><input className='para form-control p-3 p' placeholder='Title' type="text" />

                </span>
            </div>
        </Container>
        <Container>
            <div className='col-12 col-md-16 mt-4'>
                <span><img src={img2} alt="" className='icon ' /><input className='para form-control p-3 p' placeholder='Tags' type="text" />

                </span>
            </div>
        </Container>
        <Container>
            <div className='col-12 col-md-16 mt-4'>
                <span><img src={img2} alt="" className='icon ' /><textarea cols="30"
              rows="12" className='para form-control p-3  ' placeholder='Write your story.......' type="text" />
       </span></div>
       
       <Button className='publish bg-primary    mt-5 mb-4 '> 
          <Link to='/stories' className='text-white text-decoration-none'>Publish Story</Link></Button></Container>
       </Card>
    </div>
  )
}

export default CreateStory