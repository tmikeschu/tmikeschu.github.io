import React from "react"
import "./styles.css"
import MediumSVG from "./Medium"
import GithubSVG from "./Github"
import TwitterSVG from "./Twitter"
import LinkedInSVG from "./LinkedIn"
import EmailSVG from "./Email"

const links = [
  {
    name: "Github",
    href: "https://github.com/tmikeschu",
    component: GithubSVG,
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

export const Github = () => makeLink(links[0])
export const Twitter = () => makeLink(links[1])
export const Medium = () => makeLink(links[2])
export const LinkedIn = () => makeLink(links[3])
export const Email = () => makeLink(links[4])
