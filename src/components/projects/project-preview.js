import React from "react"
import ProjectDisplay from "./project-display"

const ProjectPreview = () => {
  return (
    <ProjectDisplay
      key={name}
      name={name}
      description={description}
      url={url}
      tech={tech}
      image={gif}
    />
  )
}
export default ProjectPreview
