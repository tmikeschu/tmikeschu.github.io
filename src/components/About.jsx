import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class About extends Component {
  render() {
    return (
      <article className="about">
        <img src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/IMG_0689-1_0.jpg?itok=MI9LeK3w" alt="profile"/>
        <p>I am a sociologist turned software developer. As someone who thrives in challenging, dynamic and collaborative environments, I bring positive energy to teams. Developing a quality product through elegant code and meaningful communication is a genuine joy of mine, and I seek to pursue this on a team that balances fun and intensity while working on the cutting edge of human-technological interaction.</p>
        <h3>My Mission</h3>
        <p> After finishing college, I spent some time alone walking on the famous Wicklow Way in Ireland. One of my goals for the trip was to reflect on my mission in life and figure out an articulate way to explain it to others. After many miles of walking and reflection, I landed on my mission: <span style={{fontWeight: "bolder"}}>liberate through enthusiastic education.</span> To do this for myself and for others is what makes me come alive.<br /><br /> Liberate captures both a sense of empowerment and the harsh reality that being set free is often disorienting.<br /><br />I chose the preposition ‘through’ because it highlights the need to face the adversity of liberation directly by going through it, not around, above, et cetera.<br /><br />While painted-chest sports fans might come to mind, enthusiasm comes from root ‘en theos’, meaning to be one with or inspired by God. Taking it out of a theological context, to be enthusiastic is to feel a connection to something greater, which is essential for creating intrinsic and sustainable drive. <br /><br />Education also has an interesting etymological root. The Latin ‘educere’ means to come out of some place, which really speaks to how transformative teaching and learning can be: it can literally bring you out of one place (often some form of figurative darkness) to another (perhaps unsurprisingly referred to as enLIGHTenment).<br /><br />These words, powerful in meaning on their own, come together to communicate more broadly that personal growth is a worthy, necessary, and rewarding endeavor. </p>
        <h3>About the Site</h3>
        <p>
          To get some extra JavaScript and React reps, I built this site using Facebook's 
          <a href="https://github.com/facebookincubator/create-react-app"> Create React App
          </a>, 
          and developed the styling with a healthy amount of CSS flexbox displays, some nifty media queries, and some good ol' SCSS magic.
        </p>
      </article>
    );
  }
}
