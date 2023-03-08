import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
// Write any valid <head> elements here
export const Head = () => <title>Home Page</title>

export default IndexPage