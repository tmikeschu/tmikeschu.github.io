import React from 'react'
import './styles.css'

const smiley = (
  <span role="img" aria-label="smiley">😊</span>
)

const Home = () => (
  <article className="Home">
    <h2 className="Home__videoCaption">
      programming is my craft {smiley}
    </h2>
    <div className="Home__videoPlayerWrapper">
      <iframe
        className="Home__videoPlayer"
        title="Passionate Program"
        src="https://player.vimeo.com/video/202161614"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </article>
)

export default Home
