import React, { useReducer, useEffect } from "react"
import Header from "./Header"
import Video from "./Video"
import Headshot from "./Headshot"
import About from "./About"
import Projects from "./Projects"
import Links from "./SocialLinks"
import Palette from "./Palette"
import "./index.css"

const { Github, LinkedIn, Email, Twitter, Medium, CodeSandbox } = Links

export const toColor = (i, base = 1) => base * 5 + ((i % 5) + 1)

const panels = [
  Header,
  Headshot,
  Github,
  CodeSandbox,
  Twitter,
  Medium,
  LinkedIn,
  Email,
  About,
  Projects,
  Video,
]

const initialState = {
  colorBase: 2,
  scrollY: 0,
  height: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR_BASE": {
      return {
        ...state,
        colorBase: action.payload,
      }
    }

    case "SET_SCROLL_Y": {
      return {
        ...state,
        scrollY: action.payload,
      }
    }

    case "SET_HEIGHT": {
      return {
        ...state,
        height: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { colorBase, scrollY, height } = state

  useEffect(() => {
    dispatch({
      type: "SET_HEIGHT",
      payload: document.documentElement.clientHeight,
    })

    const onScroll = () => {
      dispatch({
        type: "SET_SCROLL_Y",
        payload: document.scrollingElement.scrollTop,
      })
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const changeColors = ({ colorSwatchCount }) => () => {
    dispatch({
      type: "SET_COLOR_BASE",
      payload: (colorBase + 1) % colorSwatchCount,
    })
  }

  const palleteColor = (Math.floor(scrollY / height) || 0) + 3

  return (
    <div className="App">
      <div
        className="ColorChanger"
        role="button"
        tabIndex="0"
        onClick={changeColors({ colorSwatchCount: 5 })}
      >
        <Palette fill={`var(--color${toColor(palleteColor, colorBase)})`} />
      </div>

      {panels.map((C, i) => (
        <div
          key={C.displayName || C.name || i}
          style={{ backgroundColor: `var(--color${toColor(i, colorBase)})` }}
          className="Panel"
        >
          <C colorBase={colorBase} />
        </div>
      ))}
    </div>
  )
}

export default App
