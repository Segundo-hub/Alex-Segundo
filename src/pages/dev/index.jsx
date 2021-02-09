import React from "react"

import Layout from "../../layout"
import SEO from "../../components/seo"
import { Container } from "../../components/container"
import { CardTecnologies } from "../../components/dev/CardTecnologies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-brands-svg-icons"
import { faDeskpro, faHtml5, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { DeveloperAbout } from "../../components/dev/StyledStyles"


const IndexPage = () => {

    return (
    <Layout>
        <SEO title="Developer" />
        <div className="container_to_large">
            <DeveloperAbout>
                <Container>
                    <h2>
                        ABOUT ME
                    </h2>
                    I'm <strong>Alex Segundo</strong>
                    <br/>
                    Prolific and well-rounded web developer with a passion for metrics and outperforming the old "best yets." Passionate about building world-class web applications. My greatest satisfaction is that the palpable end product is ridiculously beautiful and functional.
                </Container>
            </DeveloperAbout>
            <Container withPadding="10">
                <h2 className="page_description">
                    <FontAwesomeIcon icon={ faDeskpro } />
                    SKILLS
                </h2>
                <div className="mi_grid mi_grid_2 relative-container">
                        <CardTecnologies
                            title="Languajes"
                        />
                        <CardTecnologies
                            title="Tools"
                        />
                </div>
            </Container>
        </div>
    </Layout>
    )
}

export default IndexPage