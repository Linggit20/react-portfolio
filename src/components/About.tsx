import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { PiFileArrowDown } from "react-icons/pi"
import AboutImg from "../assets/About.svg"
import resume from "../assets/resume.pdf"

const About = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <section>
      <div className="container px-4 lg:px-0">
        <div className="lg:flex mb-32">
          <div className="mb-4 lg:w-[40%] lg:mb-0">
            <img src={AboutImg} alt="About Image" className="sm:w-[80%] md:w-[60%] lg:w-[90%] mx-auto lg:mx-0" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" />
          </div>
          <div className="lg:flex-1 lg:flex lg:justify-end ">
            <div className="lg:w-[95%]" data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
              <h1 className="font-medium text-4xl mb-2 text-gray-700 dark:text-gray-100">About Me</h1>
              <p className="mb-8 text-gray-600 leading-7 dark:text-gray-300">Hello there! I started coding since December 2022. I am passionate about creating beautiful, responsive websites and I am always looking to stay up to date with the latest web development trends and technologies. When I'm not coding, I'm playing video games and reading manhua or manga.</p>
              <a href={resume} target="_blank" className="inline-flex items-center px-3 py-2 rounded-md text-white font-medium gap-3 bg-indigo-500 dark:bg-primary">
                Resume
                <span className="text-xl">
                  <PiFileArrowDown />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About