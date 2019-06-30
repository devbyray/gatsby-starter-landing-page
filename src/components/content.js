import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div>
    <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <SectionHeader
        title="What is included"

        // description="Don't spend time ripping out unneeded plugins and bloat."
      />
    </div>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(2, minmax(240px, 340px))",
        padding: "0 1rem 4rem",
        textAlign: "left",
      }}
    >
      <div>
        <h3>Automate your frontend workflow</h3>
        <p style={{ color: COLORS.gray }}>Very simple but very powerfull</p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Break your designs down</h3>
        <p style={{ color: COLORS.gray }}>
          A easy tactic to safe time and frustration
        </p>
      </div>
      <div>
        <h3>Use CSS with super powers</h3>
        <p style={{ color: COLORS.gray }}>
          Learn how to setup a flexible architecture with Sass
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Build a cool design, the smart way</h3>
        <p style={{ color: COLORS.gray }}>
          You will learn how to build a design smart and faster! We do this
          together.
        </p>
      </div>
      <div>
        <h3>Let's dive into JavaScript</h3>
        <p style={{ color: COLORS.gray }}>
          It sounds difficult, but I can ensure you it is not
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Optimise your frontend automaticly</h3>
        <p style={{ color: COLORS.gray }}>
          Learn to use tools to automaticly optimise your JavaScript, CSS and
          images
        </p>
      </div>
      <div>
        <h3>Put your work online for FREE</h3>
        <p style={{ color: COLORS.gray }}>
          I will show you a few ways to put your work online so the world can
          see your creation for FREE
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
