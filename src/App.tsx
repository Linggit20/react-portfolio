import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./page"


const App = () => {
  return (
      <BrowserRouter
        basename={import.meta.env.DEV ? '/' : '/react-portfolio/'}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App