import React from "react"

const ProjectDisplay = ({ description, name, url, tech, gif }) => (
  <div>
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
        {tech}
    </div>
    <div>
      <p>{description}</p>
    </div>
    <div>
        {/* <img src={require(gif)} alt={name}/> */}
    </div>
    <hr
      style={{
        borderbottom: `1px solid #eee`,
        width: `100%`,
        margin: `1rem 0`,
      }}
    />
  </div>
)
export default ProjectDisplay
