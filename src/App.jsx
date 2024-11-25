import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
const App =() =>{
  return(
    <main className="mx-auto max-w-7xl overflow-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10"></div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  )
}
export default App