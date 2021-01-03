import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "More Souls to Heaven"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`faith`, `programming`, `god`, `catholic`]}
        />
        <img style={{ margin: 0, width: "150px" }} src="./cross.svg" alt="Jesus on the cross" />
        <h1>
          Welcome!
        </h1>
        <p>This is a blog about God, faith, technology, life and becoming a saint - and how it can all intersect.</p>
        <Link to="/posts/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
