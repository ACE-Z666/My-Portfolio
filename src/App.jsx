import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

const App = () => {

  return (

      <main className='app bg-black w-full' >
        <Navbar></Navbar> 
        <Hero></Hero>
        <Projects></Projects>
        <About></About>
        <Footer></Footer>
        
      </main>
  )
}

export default App
