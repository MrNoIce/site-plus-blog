import React from "react"
import { Icon } from "react-icons-kit"
import { github } from "react-icons-kit/icomoon/github"
import { twitter } from "react-icons-kit/icomoon/twitter"
import { mail4 } from "react-icons-kit/icomoon/mail4"
import { linkedin } from "react-icons-kit/icomoon/linkedin"
import "../styles/layout.css"

const Contact = () => (
  <>
    <div
      className="contact"
    >
      <li className="contact-links">
        <a
          href="https://github.com/MrNoIce"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to github"
        >
          <Icon className="contact-icon" size={25} icon={github} />
        </a>
      </li>
      <li className="contact-links">
        <a
          href="https://github.com/MrNoIce"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to twitter"
        >
          <Icon className="contact-icon" size={25} icon={twitter} />
        </a>
      </li>
      <li className="contact-links">
        <a
          href="mailto:jake.murphy.scott@gmail.com?Subject=Hello%20Jake"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to email"
        >
          <Icon className="contact-icon" size={25} icon={mail4} />
        </a>
      </li>
      <li className="contact-links">
        <a
          href="https://www.linkedin.com/in/jakemurphyscott/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to linkedin profile"
        >
          <Icon className="contact-icon" size={25} icon={linkedin} />
        </a>
      </li>
    </div>
  </>
)

export default Contact
