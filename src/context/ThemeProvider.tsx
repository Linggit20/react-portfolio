import React, { createContext, useEffect, useReducer } from "react"

type StateType = {
  theme: string
}

type ActionType = {
  type: "SET_THEME"
}

const initialState = {
  theme: "light"
}


export const ThemeContext = createContext<{state: StateType, dispatch: React.Dispatch<ActionType>}>({
    state: initialState,
    dispatch: () => {}
  }
)


const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light"
      }
  
    default:
      return state
  }
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const savedTheme = localStorage.getItem("theme") || initialState.theme
  const [state, dispatch] = useReducer(reducer, { theme: savedTheme })

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(state.theme)

  }, [state.theme])

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      { children }
    </ThemeContext.Provider>
  )
}


