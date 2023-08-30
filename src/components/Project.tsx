import { useEffect, useState } from "react"
import { projects, ProjectInterface } from "../data/projectData"
import AOS from "aos"
import "aos/dist/aos.css"

const Project = () => {
  const [sortedProjets, setSortedProjects] = useState<ProjectInterface[]>([])

  useEffect(() => {
    const sorted = [...projects].sort((a, b) => b.id - a.id)
    setSortedProjects(sorted)

    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <section>
      <div className="container px-4 lg:px-0 mb-32">
        <div  className="flex flex-col w-40 mb-12" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-out">
          <h1 className="text-4xl font-medium text-gray-700 mb-2 dark:text-gray-200">Project</h1>
          <hr className="border-indigo-500 border dark:bg-primary"/>
          <h2 className="text-gray-600 mt-2 relative left-[50%] dark:text-gray-300">My Work</h2>
        </div>
        <div className="overflow-hidden">
          {sortedProjets.map((project) => (
            <div key={project.id} className="mb-10 pb-8 border-b border-gray-200 lg:flex lg:gap-10 dark:border-gray-700">
              <div className="mb-4 lg:w-[40%] lg:mb-0 overflow-hidden peer rounded-md shadow-sm shadow-gray-400 dark:shadow-primary" data-aos={project.right} data-aos-duration={project.duration} data-aos-easing={project.easing} data-aos-delay={project.delay}>
                <a href={project.live.link} target="_blank">
                  <img src={project.image} alt={project.title} className="hover:scale-105 transition-transform duration-200 object-cover object-center"/>
                </a>
              </div>
              <div className="text-gray-600 lg:flex-1 dark:text-gray-300" data-aos={project.left} data-aos-duration={project.duration} data-aos-easing={project.easing} data-aos-delay={project.delay}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-gray-700 font-bold text-xl dark:text-gray-200">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      className="bg-indigo-500 px-3 py-1 rounded-sm text-gray-200 text-[13px] dark:bg-primary"
                      href={project.github.link}
                      target="_blank"
                    >
                      {project.github.name}
                    </a>
                    <a
                      className="bg-indigo-500 px-3 py-1 rounded-sm text-gray-200 text-[13px] dark:bg-primary"
                      href={project.live.link}
                      target="_blank"
                    >
                      {project.live.name}
                    </a>
                  </div>
                </div>
                <p className="mb-5 ">{project.description}</p>
                <ul>
                  {project.technologies.map((item) => (
                    <li key={item.id} className="mb-1 flex items-center gap-5">
                      <span className="bg-indigo-500 h-[6px] w-[6px] rounded-full content-[''] animate-pulse dark:bg-primary"></span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project