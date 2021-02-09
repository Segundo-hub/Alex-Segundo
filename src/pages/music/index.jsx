import React from "react"

import Layout from "./../../layout"
import SEO from "../../components/seo"
import { Container } from "../../components/container/"
import { MusicPlayer } from "../../components/music/MusicReproductor"

const IndexPage = () => (
    <Layout>
        <SEO title="Music" />
        <MusicPlayer />
    </Layout>
)

export default IndexPage