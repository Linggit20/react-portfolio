import { useRef } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Project from "../components/Project"
import Skills from "../components/Skills"


const Home = () => {
  const contactRef = useRef<HTMLElement>(null)

  return (
  <>
    <main>
        <Hero scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact ref={contactRef} />
    </main>
    <Footer />
  </>
  )
}

export default Home