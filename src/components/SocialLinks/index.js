import React from "react"
import "./styles.css"
import MediumSVG from "./Medium"
import GithubSVG from "./Github"
import TwitterSVG from "./Twitter"
import LinkedInSVG from "./LinkedIn"
import EmailSVG from "./Email"
import CodeSandboxSVG from "./CodeSandbox"

const links = [
  {
    name: "Github",
    href: "https://github.com/tmikeschu",
    component: GithubSVG,
  },
  {
    name: "CodeSandbox",
    href: "https://codesandbox.io/u/tmikeschu",
    component: CodeSandboxSVG,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tmikeschu",
    component: TwitterSVG,
  },
  {
    name: "Medium",
    href: "https://medium.com/@tmikeschu",
    component: MediumSVG,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tmikeschu",
    component: LinkedInSVG,
  },
  { name: "Email", href: "mailto:tmikeschutte@gmail.com", component: EmailSVG },
]

const makeLink = ({ href, component: C, name }) => (
  <div className={`SocialLink --${name}`} key={name}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <C />
    </a>
  </div>
)

export default links.reduce((acc, el) => {
  const C = () => makeLink(el)
  C.displayName = el.name
  return { ...acc, [el.name]: C }
}, {})
