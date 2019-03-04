import React from "react"
import "./styles.css"

const Video = () => (
  <article className="Video">
    <iframe
      src="https://player.vimeo.com/video/202161614?color=ffffff"
      frameBorder="0"
      title="Passionate Program"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    <script src="https://player.vimeo.com/api/player.js" />
  </article>
)
export default Video
