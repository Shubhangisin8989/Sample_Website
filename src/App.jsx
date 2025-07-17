import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <About></About>
      <Projects/>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App