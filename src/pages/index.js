import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="content">
      <h1>
        Hi, I'm Matt.{" "}
        <span aria-label="waving hand" role="img" class="wave">
          👋
        </span>
      </h1>
      <p>
        I'm a software developer based in Los Angeles, CA. With experience in
        JavaScript, React, and Ruby on Rails, and a background in art and design
        – I love writing code because of the unique mix of both technical skills
        and creative expression. In my previous l̶i̶f̶e̶ career, I've worked in
        production music for film and tv, managed the inventory of a rare book
        store, and run a small letterpress print shop. I love things both low-
        and high-tech, and I especially like collaborating with people to build
        (or break, and then fix) cool stuff!
      </p>
    </div>
  </Layout>
)
