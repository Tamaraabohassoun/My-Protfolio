// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Hero from './Hero'
// import About from './About'
// import Projects from './Projects'
// import Services from './Services'
// import Contact from './Contact'
// import Footer from './Footer'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <Hero/>
//    <About/>
//    <Projects/>
//    <Services/>
//   <Contact/>
//   {/* <Footer/> */}
//   </StrictMode>
  
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
