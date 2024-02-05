import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Stories from './pages/Stories'
import SignIn from './pages/SignIn'
import Welcome from './pages/Welcome'
import CreateStory from './pages/CreateStory'
import ViewPost from './pages/ViewPost'
import Footer from './pages/Footer'
import MyStories from './pages/MyStories'
import EditPost from './pages/EditPost'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<> <NavBar/> <Footer/> </> }>
        <Route path='/' element={<Home/>}/>
        <Route path='/stories' element={<Stories/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/createstory' element={<CreateStory/>}/>
        <Route path='/viewpost' element={<ViewPost/>}/>
        <Route path='/mystories' element={<MyStories/>}/>
        <Route path='/editpost' element={<EditPost/>}/>
       </Route>
        <Route path='/getstarted' element={<GetStarted/>}/>
        <Route path='/signin' element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  )
}

export default App
