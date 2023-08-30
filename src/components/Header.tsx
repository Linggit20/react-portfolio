import { useState } from "react"
import useTheme from "../hooks/useTheme"

const Header = () => {
  const { state, dispatch } = useTheme()
  const [enabled, setEnabled] = useState(state.theme === "dark")

  const toggleTheme = () => {
    setEnabled(prevEnabled => !prevEnabled)
    dispatch({type: "SET_THEME"})
    localStorage.setItem("theme", state.theme === "light" ? "dark" : "light")
  }

  return (
    <header>
      <div className="container flex justify-between py-4 px-4 lg:px-0">
        <a href="https://github.com/Linggit20" target="_blank" className="font-medium dark:text-white">@Linggit20</a>
        <>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={toggleTheme}
              className="w-12 h-6 bg-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[5px] after:bg-indigo-500    after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"
            ></div>
          </label>
        </>
      </div>
    </header>
  )
}

export default Header