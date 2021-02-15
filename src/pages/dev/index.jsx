import React from "react"

import Layout from "../../layout"
import SEO from "../../components/seo"
import { Container } from "../../components/container"
import { CardTecnologies } from "../../components/dev/CardTecnologies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-brands-svg-icons"
import { faDeskpro, faHtml5, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { Developer, DeveloperAbout, DeveloperDefinition } from "../../components/dev/StyledStyles"
import { faTools } from "@fortawesome/free-solid-svg-icons"


const IndexPage = () => {

    return (
    <Layout>
        <SEO title="Developer" />
        <div className="container_to_large">
            <DeveloperAbout className="cp cp--animate">
                <Container>
                   <DeveloperDefinition>
                        <Developer.Name>
                            About Us
                        </Developer.Name>
                        <Developer.Description>
                            I'm <strong>Alex Segundo</strong>
                            <br/>
                            Prolific and well-rounded web developer with a passion for metrics and outperforming the old "best yets." Passionate about building world-class web applications. My greatest satisfaction is that the palpable end product is ridiculously beautiful and functional.
                        </Developer.Description>
                   </DeveloperDefinition>
                </Container>
            </DeveloperAbout>
            <Container withPadding="10" className="cp cp--animate">
                <h2 className="page_description">
                    <FontAwesomeIcon icon={ faTools } />
                    SKILLS
                </h2>
                <div className="mi_grid mi_grid_2 relative-container rw-gap">
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