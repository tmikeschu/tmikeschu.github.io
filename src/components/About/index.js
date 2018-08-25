import React from "react"
import "./styles.css"

const About = () => (
  <article className="About">
    <img className="About__image" src="headshot.jpg" alt="profile" />
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

    <h3 className="About__header">my mission</h3>
    <p className="About__content">
      {" "}
      After finishing college, I spent some time alone walking on the famous
      Wicklow Way in Ireland. One of my goals for the trip was to reflect on my
      mission in life and figure out an articulate way to explain it to others.
      After many miles of walking and reflection, I landed on my mission:{" "}
      <span style={{ fontWeight: "bolder" }}>
        liberate through enthusiastic education.
      </span>{" "}
      To do this for myself and for others is what makes me come alive.<br />
      <br /> Liberate captures both a sense of empowerment and the harsh reality
      that being set free is often disorienting.<br />
      <br />I chose the preposition ‘through’ because it highlights the need to
      face the adversity of liberation directly by going through it, not around,
      above, et cetera.<br />
      <br />While painted-chest sports fans might come to mind, enthusiasm comes
      from root ‘en theos’, meaning to be one with or inspired by God. Taking it
      out of a theological context, to be enthusiastic is to feel a connection
      to something greater, which is essential for creating intrinsic and
      sustainable drive. <br />
      <br />Education also has an interesting etymological root. The Latin
      ‘educere’ means to come out of some place, which really speaks to how
      transformative teaching and learning can be: it can literally bring you
      out of one place (often some form of figurative darkness) to another
      (perhaps unsurprisingly referred to as enLIGHTenment).<br />
      <br />These words, powerful in meaning on their own, come together to
      communicate more broadly that personal growth is a worthy, necessary, and
      rewarding endeavor.{" "}
    </p>
    <h3 className="About__header">about the site</h3>
    <p className="About__content">
      I built this site on top of Facebook's
      <a href="https://github.com/facebookincubator/create-react-app">
        {" "}
        Create React App
      </a>. Hand-rolled styling with flexboxes, media queries, and BEM
      conventions.
    </p>
  </article>
)

export default About
