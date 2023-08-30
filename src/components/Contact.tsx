import { forwardRef, FormEvent, useEffect, useState, useRef, useCallback, ChangeEvent } from "react"
import { toast } from "react-toastify"
import { BiCurrentLocation, BiLogoGmail } from "react-icons/bi"
import { FaPhone } from "react-icons/fa6"
import { BsSendFill } from "react-icons/bs"
import emailjs from "@emailjs/browser"
import validator from "validator"
import AOS from "aos"
import "aos/dist/aos.css"




const Contact = forwardRef<HTMLElement>((_props, ref) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [error, setError]  = useState<unknown | null | string>(null)
  const [nameError, setNameError] = useState<null | string>(null)
  const [emailError, setEmailError] = useState<null | string>(null)

  const nameInput = useRef<HTMLInputElement | null>(null)
  const emailInput = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)


  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  //  Clear  Error
  const clearError = () => {
    setNameError(null)
    setEmailError(null)
  }

  //  Handle input change
  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    clearError()
  }, [])

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    clearError()
  }, [])


  //  Input focus
  const focusName = () => {
    if (nameInput.current) {
      nameInput.current.focus()
    }
  }

  const focusEmail = () => {
    if (emailInput.current) {
      emailInput.current.focus()
    }
  }

  //  Handle submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //  Validation and call Input focus
    if (!/^[A-Za-z ]+$/.test(name)) {
      setNameError("Name should contain letters only")
      focusName()
      return
    }

    if (!validator.isEmail(email)) {
      setEmailError("Invalid email")
      focusEmail()
      return
    }

    const toastId = "email-toast"

    if (!toast.isActive(toastId)) {
      toast.promise(
        new Promise<void>((resolve, reject) => {
          if (formRef.current) {
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY).then(() => {
              resolve()
              setName("")
              setEmail("")
              setMessage("")
              setNameError(null)
              setEmailError(null)

            }).catch((error) => {
              reject()
              setError(error.text)
            })
          }
        }),
        {
          pending: "Sending...",
          success: "Sent Successfully!",
          error: error || "Failed to Send"
        }
      )
    }
  }

  return (
    <section ref={ref} className="bg-gray-100 dark:bg-black dark:bg-opacity-10" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
      <div className="container px-4 py-6 lg:px-0 mb-40 text-gray-600 lg:flex lg:gap-6 dark:text-gray-300">
        <div className="mb-16 lg:w-1/2">
          <h1 className="text-4xl font-medium text-gray-700 mb-3 dark:text-gray-200">Get In Touch With Me</h1>
          <p className="mb-5">Feel free to reach out to me through the provided contact information. I'm excited to connect and discuss potential collaborations, projects, and opportunities.</p>
          <ul>
            <li className="flex items-center gap-3 mb-3">
              <span className="text-indigo-500 text-lg"><BiCurrentLocation /></span>
              <p>Ligao City, Albay</p>
            </li>
            <li className="flex items-center gap-3 mb-3">
              <span className="text-indigo-500 text-lg"><FaPhone /></span>
              <p>+639054242688</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500 text-lg"><BiLogoGmail /></span>
              <p>botonesallan7@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="lg:flex-1">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <input
                className={`w-full bg-white px-4 py-3 rounded-md placeholder-transparent peer outline-none focus:outline-indigo-500 ${nameError && "focus:outline-red-500"} dark:bg-50 dark:focus:outline-primary dark:text-gray-300`}
                ref={nameInput}
                id="name"
                name="from_name"
                type="text"
                placeholder="Name"
                required
                autoComplete="on"
                value={name}
                onChange={handleNameChange}
              />
              <label
                className="transition-all duration-300  text-indigo-500 absolute top-2 left-4 -translate-y-1/2 text-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-focus:text-indigo-500 peer-focus:absolute peer-focus:top-2 peer-focus:left-4 peer-focus:-translate-y-1/2 peer-focus:text-[12px] dark:text-primary dark:peer-focus:text-primary dark:peer-placeholder-shown:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              { nameError && (
                <p className="text-sm text-red-500">{nameError}</p>
              )}
            </div>
            <div className="relative mb-6">
              <input
                className={`w-full bg-white px-4 py-3 rounded-md placeholder-transparent peer outline-none focus:outline-indigo-500 ${emailError && "focus:outline-red-500"} dark:bg-50 dark:focus:outline-primary dark:text-gray-300`}
                ref={emailInput}
                id="email"
                name="from_email"
                type="text"
                placeholder="Email"
                required
                autoComplete="on"
                value={email}
                onChange={handleEmailChange}
              />
              <label
                className="transition-all duration-300  text-indigo-500 absolute top-2 left-4 -translate-y-1/2 text-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-600 peer-focus:text-indigo-500 peer-focus:absolute peer-focus:top-2 peer-focus:left-4 peer-focus:-translate-y-1/2 peer-focus:text-[12px] dark:text-primary dark:peer-focus:text-primary dark:peer-placeholder-shown:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div className="relative mb-6">
              <textarea
                className="w-full bg-white px-4 py-3 rounded-md placeholder-transparent outline-none peer focus:outline-indigo-500 max-h-[300px] min-h-[300px] dark:bg-50 dark:focus:outline-primary"
                id="message"
                name="message"
                placeholder="Message"
                required
                autoComplete="on"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label
                className="transition-all duration-300 text-indigo-500 absolute top-2 left-4 translate-y-[-50%] text-[12px] peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-600 peer-focus:text-indigo-500 peer-focus:absolute peer-focus:top-2 peer-focus:left-4 peer-focus:text-[12px] dark:text-primary dark:peer-focus:text-primary dark:peer-placeholder-shown:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
            </div>
            <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-indigo-500 mx-auto rounded-md text-gray-200 dark:bg-primary">
              Send
              <span><BsSendFill /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

export default Contact