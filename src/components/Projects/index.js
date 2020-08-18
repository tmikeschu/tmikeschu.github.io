import React, { Component } from "react"
import "./styles.css"

const getJson = x => x.json()
const filter = pred => xs => xs.filter(pred)
const map = mapper => xs => xs.map(mapper)
const pageInfo = ({ name }) => ({ name })
const pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x)
const hasPages = x => x.has_pages

const jv = [
  "mogo-reporter",
  "the-shelf",
  "tmikeschu.github.io",
  "the-spoken-tour",
]

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    this.fetchProjects({ page: 1 })
  }

  fetchProjects({ page }) {
    fetch(`https://api.github.com/users/tmikeschu/repos?page=${page}`)
      .then(getJson)
      .then(this.addProjectsWithPages(page))
  }

  addProjectsWithPages(page) {
    return projects => {
      if (projects.length === 0 || !Array.isArray(projects)) {
        return
      }

      pipe(
        filter(hasPages),
        map(pageInfo),
        filter(({ name }) => !jv.includes(name)),
        this.addRepos.bind(this)
      )(projects)

      this.fetchProjects({ page: page + 1 })
    }
  }

  addRepos(repos) {
    this.setState({ repos: this.state.repos.concat(repos) })
  }

  render() {
    const { repos } = this.state
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <div className="Projects__links">
          {repos.length > 0 ? (
            repos.map(({ name }) => (
              <a
                href={`https://tmikeschu.com/${name}`}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                className="Projects__links__link"
              >
                {name}
              </a>
            ))
          ) : (
            <p>
              Looks like we hit the github API limit{" "}
              <span role="img" aria-label="grimace">
                😬
              </span>
              <br />
              Scroll up to the octocat for more info
            </p>
          )}
        </div>
      </div>
    )
  }
}
