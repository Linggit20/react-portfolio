import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import useTheme from "../hooks/useTheme"
import certificate from "../assets/KodeGo _Certificate.pdf"

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1)
  const { state } = useTheme()

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <section>
      <div className="container px-4 lg:px-0 text-gray-600 mb-32">
        <h1 className="text-4xl text-center text-gray-700 font-medium mb-10 dark:text-gray-200" data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">Learning Experience</h1>
        <div className="flex justify-between mb-16 max-w-[600px] mx-auto">
          <button 
            onClick={() => setActiveTab(1)}
            className={`font-bold ${activeTab === 1 && state.theme === "light" && "text-indigo-500"} ${activeTab === 1 && state.theme === "dark" && "text-primary"} ${activeTab !== 1 && state.theme === "dark" && "text-gray-300"}`}
          >
            Self-Taught & Bootcamp Journey
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`font-bold ${activeTab === 2 && state.theme === "light" && "text-indigo-500"} ${activeTab === 2 && state.theme === "dark" && "text-primary"} ${activeTab !== 2 && state.theme === "dark" && "text-gray-300"}`}
          >
            Educational Background
          </button>
        </div>
        <div className="flex justify-center">
          <ul className={`flex flex-col w-full ${activeTab === 1 ? "block" : "hidden"}`}>
            <li className="flex flex-row-reverse h-40 relative before:flex-1">
              <div className="flex items-center flex-col">
                <span className="bg-indigo-500 w-3 h-3 rounded-full flex self-baseline dark:bg-primary"></span>
                <span className="flex w-1 bg-indigo-500 h-full dark:bg-primary"></span>
              </div>
              <div className="flex-1 text-right pr-4" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-delay="200">
                <a href={certificate} target="_blank" className="mb-1 dark:text-gray-300">KodeGo Bootcamp</a>
                <p className="text-[12px] text-indigo-500  dark:text-primary">Current</p>
              </div>
            </li>
            <li className="flex flex-row-reverse h-32 relative before:flex-1">
              <div className="flex items-center flex-col">
                <span className="bg-indigo-500 w-3 h-3 rounded-full flex self-baseline"></span>
              </div>
              <div className="flex-1 text-right pr-4 relative bottom-5" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-delay="300">
                <p className="mb-1 dark:text-gray-300">Self-Taught Web Developer</p>
                <p className="text-[12px] text-indigo-500 dark:text-primary">2022</p>
              </div>
            </li>
          </ul>
          <ul className={`flex flex-col w-full ${activeTab === 2 ? "block" : "hidden"}`}>
            <li className="flex flex-row h-32 relative before:flex-1">
              <div className="flex items-center flex-col">
                <span className="bg-indigo-500 w-3 h-3 rounded-full flex self-baseline"></span>
              </div>
              <div className="flex-1 text-left pl-4 relative bottom-4">
                <p className="text-sm mb-1 dark:text-gray-300">Senior HS. Graduate at Cat College Ligao</p>
                <p className="text-[12px] text-indigo-500 dark:text-primary">2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience