import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import ProjectCard from "../components/projects/projectcard"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to my site</h1>
      <h2>
        Hi, my name is Jake Scott; engineer by design, full time student at
        NSCC in Mechanical Engineering, and all-around general handyman.
      </h2>
      <h2>
        My latest projects can be found on my <Link to="/blog">blog</Link> and
        my services can be found <Link to="/services">here</Link>
      </h2>
      <h3>
        I have an array of different specialities within my skillset which
        include but not limited to, <Link to="/welding">welding</Link>, {" "}
        <Link to="/electrical">electrical</Link>,{" "}
        <Link to="plumbing">plumbing</Link>, and {" "}
        <Link to="/auto-repair">automotive repair and diagnosis</Link>. All of
        which can be found in more detail <Link to="/services">here</Link>
        
      </h3>
      <ProjectCard />
      <h2>Here are some of my recent blog posts</h2>
    </Layout>
  )
}
export default IndexPage
