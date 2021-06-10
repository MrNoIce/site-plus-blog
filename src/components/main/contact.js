import React from "react"
import { Icon } from "react-icons-kit"
import { github } from "react-icons-kit/icomoon/github"
import { twitter } from "react-icons-kit/icomoon/twitter"
import { mail4 } from "react-icons-kit/icomoon/mail4"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import "../styles/layout.css"

const Contact = () => (
  <>
    <ul
      className="contact"
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `.7rem 0`,
      }}
    >
      <li className="contact-links">
        <a href="https://github.com/MrNoIce" target="_blank" rel="noreferrer">
          <Icon className="contact-icon" size={25} icon={github} />
        </a>
      </li>
      <li className="contact-links">
        <a href="https://github.com/MrNoIce" target="_blank" rel="noreferrer">
          <Icon className="contact-icon" size={25} icon={twitter} />
        </a>
      </li>
      <li className="contact-links">
        <a
          href="mailto:jake.murphy.scott@gmail.com?Subject=Hello%20Jake"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="contact-icon" size={25} icon={mail4} />
        </a>
      </li>
      <li className="contact-links">
        <a
          href="https://www.linkedin.com/in/jakemurphyscott/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="contact-icon" size={25} icon={linkedin} />
        </a>
      </li>
    </ul>
  </>
)

export default Contact
