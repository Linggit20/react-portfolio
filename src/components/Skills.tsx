import { useEffect } from "react"
import { BsCodeSlash, BsDatabase } from "react-icons/bs"
import { AiOutlineCloudServer} from "react-icons/ai"
import AOS from "aos"
import "aos/dist/aos.css"
import { frontEnd, backEnd, database } from "../data/skillsData"

const Skills = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <section>
      <div className="container px-4 lg:px-0 mb-32 text-gray-600 dark:text-gray-300">
        <h1 className="text-4xl font-medium text-gray-700 dark:text-gray-200 text-center mb-6" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">Skills</h1>
        <div className="grid gap-6 lg:grid-cols-3 max-w-[400px] mx-auto lg:max-w-full">
          <div className="shadow-sm shadow-gray-500 p-4 rounded-md h-[244px] dark:bg-50 dark:shadow-primary" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="300">
            <div className="mb-6 flex justify-center items-center gap-3">
              <span className="text-xl text-indigo-500">
                <BsCodeSlash />
              </span>
              <h2 className="text-lg font-medium">Front-End</h2>
            </div>
            <ul className="grid grid-cols-3 gap-6">
              {frontEnd.map((item) => (
                <li key={item.name} className="flex flex-col items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-10 h-10 mb-2"/>
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shadow-sm shadow-gray-500 p-4 rounded-md h-[244px] dark:bg-50 dark:shadow-primary" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="500">
            <div className="mb-6 flex justify-center items-center gap-3">
              <span className="text-xl text-indigo-500">
                <AiOutlineCloudServer />
              </span>
              <h2 className="text-lg font-medium">Back-End</h2>
            </div>
            <ul className="grid grid-cols-3 gap-6">
              {backEnd.map((item) => (
                <li key={item.name} className="flex flex-col items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-10 h-10 mb-2" />
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shadow-sm shadow-gray-500 p-4 rounded-md h-[244px] dark:bg-50 dark:shadow-primary" data-aos="fade-down" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-delay="700">
            <div className="mb-6 flex justify-center items-center gap-3">
              <span className="text-xl text-indigo-500">
                <BsDatabase />
              </span>
              <h2 className="text-lg font-medium">Database</h2>
            </div>
            <ul className="grid grid-cols-3 gap-6">
              {database.map((item) => (
                <li key={item.name} className="flex flex-col items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-10 h-10 mb-2" />
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills