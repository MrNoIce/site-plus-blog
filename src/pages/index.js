import React from "react"
import Layout from "../components/layout/layout"
import ProjectCard from "../components/projects/projectcard"


const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to my site</h1>
      <h2>Latest Projects</h2>
      <h3>Here you can explore all of my projects and interests i've been working on</h3>
      <ProjectCard/>
      <h2>Here are some of my recent blog posts</h2>
    </Layout>
  )
}
export default IndexPage