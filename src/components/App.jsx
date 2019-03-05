import React, { useState } from "react"
import Header from "./Header"
import Video from "./Video"
import Headshot from "./Headshot"
import About from "./About"
import { Github, LinkedIn, Email, Twitter, Medium } from "./SocialLinks"
import Palette from "./Palette"
import "./index.css"

export const toColor = (i, base = 1) => base * 5 + ((i % 5) + 1)

const panels = [
  Header,
  Headshot,
  Video,
  Github,
  Twitter,
  Medium,
  LinkedIn,
  Email,
  About,
]
const App = props => {
  const [colorBase, setColorBase] = useState(0)
  const changeColors = ({ colorSwatchCount }) => {
    setColorBase((colorBase + 1) % colorSwatchCount)
  }

  return (
    <div className="App">
      <div
        className="ColorChanger"
        role="button"
        tabIndex="0"
        onClick={() => changeColors({ colorSwatchCount: 5 })}
      >
        <Palette fill={`var(--color${toColor(2, colorBase)})`} />
      </div>
      {panels.map((C, i) => {
        return (
          <div
            key={C.name}
            style={{ backgroundColor: `var(--color${toColor(i, colorBase)})` }}
            className="Panel"
          >
            <C colorBase={colorBase} />
          </div>
        )
      })}
    </div>
  )
}

export default App
