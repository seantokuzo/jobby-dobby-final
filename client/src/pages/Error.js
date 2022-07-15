import React from "react"
import { Link } from "react-router-dom"
import errorImg from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImg} alt="not found" />
        <h3>Oops, page not found</h3>
        <p>Welp, this page doesn't seem to exist</p>
        <Link to="/">Return Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
