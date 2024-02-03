import React from 'react'
import Card from 'react-bootstrap/Card';
import img1 from '../assets/images/Rectangle 3.png'
import Button from 'react-bootstrap/Button';
import img3 from '../assets/images/Group 405.png'
import img5 from '../assets/images/Group 7.png'
import img4 from '../assets/images/Group 6 (1).png'
import img6 from '../assets/images/Group 8.png'
import img7 from '../assets/images/Postit 1.png'
import img8 from '../assets/images/Group 1 (1).png'
import img9 from '../assets/images/Group 58.png'
import img11 from '../assets/images/Group 62.png'
import img10 from '../assets/images/Group 61.png'
import img12 from '../assets/images/Group 52.png'
import img13 from '../assets/images/About Postit..png'
import img2 from '../assets/images/Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut..png'
import Container from 'react-bootstrap/esm/Container';
// import { dataFooter } from '../../FooterDb';

const Home = () => {
  return (
    <div className=''>
        <Card className="bg-light text-dark h-600">
      <Card.Img src={img1} alt="" />
      <Card.ImgOverlay>
        <h1 className='container mt-5 '>Stay Curious.</h1>

        <Card.Text className='container mt-5'>
        <img src={img2} alt="" /></Card.Text>
        <div className='container mt-4'><img src={img3} alt="" /></div>
        </Card.ImgOverlay></Card>

        <Card className=" container bg-light mt-5">
      <Container className='  d-flex justify-content-between p-3'><Card.Img src={img4} alt="" className='home'/>
      <Card.Img src={img5} alt="Card image" className='home'/>
      <Card.Img src={img6} alt="Card image"  className='home'/></Container>
      <Card.ImgOverlay> </Card.ImgOverlay>
    </Card>

        <Card className=' card container mt-5'>
            <Container className='  text-center p-4'>
            <img src={img7} alt="" /><h5 className='mt-4'>Do you want to write or discover stories from writers on any topic?</h5>
             <img src={img8} alt="" className='p-5' />
           </Container></Card>

          {/* <footer className='mt-5 bg-black text-white'>
            <div className='container d-md-flex justify-content-between align-items-center p-4'>
                
            {dataFooter.map((datumFooter) =>{
          const {id,title,contact,about,careers,blog} = datumFooter
            return(
            <div key={id}>
              <h1>{title}</h1>
              <ul className="list-unstyled lh-lg">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque modi perferendis tenetur esse est quibusdam, quisquam rerum veritatis reiciendis sed repudiandae porro, rem id!</li>

                

                <li>Group </li>
                <li>{careers}</li>
                <li>{blog}</li>
              </ul>
                        
            </div>
          )
        })}
            </div>

          </footer> */}

           {/* <Card className='bg-dark'>
            <Container className=''>
            <img src={img10} alt="" className='footer' />
            <img src={img11} alt="" className='footer'/>
            <img src={img12} alt="" className='footer'/>
            </Container>
           </Card> */}
        
    
    </div>
  )
}

export default Home