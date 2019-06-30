import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/screenshot.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>The Modern Frontend Workflow</h1>
    <h2 style={{ textAlign: "center", maxWidth: 440 }}>
      <em>for Junior Developers</em>
    </h2>
    {/* <Button>Get Early Access</Button> */}
    <div style={{ margin: "0 60px", width: `800px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        {/* <MockupContent /> */}
      </div>
      <div
        style={{
          width: "800px",
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Have you ever wondered how most of the developers work during their
      Frontend Development? Or can't you wrap your head around Git, NodeJS, NPM,
      Webpack and all the other cool tools? Then this course is for you!
    </p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
