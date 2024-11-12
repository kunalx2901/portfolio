import About from './Components/About'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import { Projects } from './Components/Projects'
import { Tech } from './Components/Tech'
import Lenis from 'lenis'


function App() {
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  return <>
    <Navbar/>
    <Home/>
    <About/>
    <Tech/>
    <Projects/>
    <Contact/>
    </>
}

export default App