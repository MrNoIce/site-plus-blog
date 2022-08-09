import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectDisplay from "./project-display"


const ProjectCard = () => {
  const dataJson = useStaticQuery(graphql`
    query GetData {
      allDataJson {
        edges {
          node {
            name
            description
            url
            tech
            
          }
        }
      }
    }
  `)
  const data = dataJson.allDataJson.edges

  console.log(data, "data")

  return (
      <div className="project-card">

          {data.map(({ node: project }) => {
            const name = project.name
            const description = project.description
            const url = project.url
            const tech = project.tech
            return (
              <ProjectDisplay
                key={name}
                name={name}
                description={description}
                url={url}
                tech={tech}
              />
            )
          })}
      </div>
  )
}
export default ProjectCard