import React from "react"
import "./styles.css"

const lines = [
  { type: "main", text: "t.", tag: "h2" },
  { type: "main", text: "mike", tag: "h2" },
  { type: "main", text: "schutte", tag: "h2" },
  { type: "sub", text: "software", tag: "h3" },
  { type: "sub", text: "developer", tag: "h3" },
]

const toColor = (i, base) => {
  return `var(--color${base * 5 + ((i % 4) + 2)})`
}

const Header = ({ colorBase = 0 }) => (
  <article className="Header">
    {lines.map(({ tag: T, text, type }, i) => (
      <T
        className={`Header__${type}`}
        key={text}
        style={{
          color: toColor(i, colorBase),
        }}
      >
        {text}
      </T>
    ))}
  </article>
)

export default Header
