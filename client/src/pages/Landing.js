import React from "react"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import mainSVG from "../assets/images/main.svg"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby tumeric hoodie austin hashtag, bitters ennui umami godard
            franzen cray. Chambray copper mug pug sustainable jean shorts beard.
            Thundercats taxidermy chia quinoa snackwave jianbing kombucha
            listicle DSA unicorn whatever. Humblebrag forage roof party,
            distillery quinoa hashtag pour-over hexagon. Hoodie food truck chia,
            blue bottle keytar artisan messenger bag microdosing kogi
            asymmetrical ramps.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={mainSVG} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
