import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <About />
        <Skills />
        <Education />
        <SocialLinks />
      </main>
    </>
  )
}

export default App