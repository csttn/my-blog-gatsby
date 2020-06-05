import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Ops... Algo deu errado, tente novamente!</p>
  </Layout>
)

export default NotFoundPage
