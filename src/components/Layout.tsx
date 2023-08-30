import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./Header"
import 'react-toastify/dist/ReactToastify.css'
import ScrollTopButton from "./ScrollTopButton"


const Layout = () => {
  
  return (
  <>
    <ToastContainer
      containerId="email-toast"
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
    />
    <ScrollTopButton />
    <div className="layout h-full dark:bg-100 transition-colors duration-300 ease-linear">
      <Header />
      <Outlet />
    </div>
  </>
  )
}

export default Layout