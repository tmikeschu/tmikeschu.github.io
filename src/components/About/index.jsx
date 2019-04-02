import React from "react"
import "./styles.css"

const About = () => (
  <article className="About">
    <h2 className="About__header">me</h2>
    <p className="About__content">
      Detroit based. Bozeman, Seattle, and Denver roots. Finding my kicks via
      software development, running, music, film, books, sociology, team
      building, and relationships.
    </p>

    <p className="About__content">
      If a life story is a chandelier — made up of an ornate collection of
      hooks, loops, chains, and light — mine is anchored to the ceiling of the
      world by a love for learning.
    </p>

    <h2 className="About__header">this site</h2>
    <p className="About__content">
      I built this site on top of Facebook's
      <a href="https://github.com/facebookincubator/create-react-app">
        {" "}
        Create React App
      </a>
      . Hand-rolled styling with flexboxes, media queries, and BEM conventions.
    </p>
  </article>
)

export default About
