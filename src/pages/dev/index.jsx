import React from "react"

import Layout from "../../layout"
import SEO from "../../components/seo"
import { Container } from "../../components/container"

const IndexPage = () => (
    <Layout>
        <SEO title="Developer" />
        <Container>
            <p>This page is ha home</p>
        </Container>
    </Layout>
)

export default IndexPage