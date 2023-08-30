import { FaPenToSquare } from "react-icons/fa6"
import AOS from "aos"
import "aos/dist/aos.css"
import HeroImg from "../assets/Hero.svg"
import { useEffect } from "react"

interface HeroProps {
  scrollToContact: () => void
}

const Hero = ({scrollToContact}: HeroProps) => {
  
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  },[])

  return (
    <section>
      <div className="container h-[90vh] flex items-center px-4 lg:px-0 mb-32">
        <div className="h-[37.5rem] flex md:flex-col items-center lg:flex-row md:space-y-9">
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl text-gray-700 mb-1 md:text-4xl dark:text-gray-200" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              Hello I"m
              <span className="block text-indigo-500 text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl dark:text-primary">
                Alberto
              </span>
            </h1>
            <p className="text-gray-600 mb-10 dark:text-gray-300" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-delay="300">As a <b className="text-indigo-500 dark:text-primary">Full-Stack</b> web developer, I have the skills and knowledge to build beautiful and functional websites and applications.</p>
            <button onClick={scrollToContact} className="flex items-center gap-3 bg-indigo-500 text-white  font-medium px-3 py-2 rounded-md dark:bg-primary" data-aos="fade" data-aos-duration="400" data-aos-easing="ease-in-out" data-aos-delay="700">
              Hire Me 
              <span>
                <FaPenToSquare />
              </span>
            </button>
          </div>
          <div className="hidden md:flex md:justify-end">
            <img src={HeroImg} alt="Hero Image" className="w-[60%] lg:w-[80%]" data-aos="fade" data-aos-duration="900" data-aos-easing="ease-in" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero