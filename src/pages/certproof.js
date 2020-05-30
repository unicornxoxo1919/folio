/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Styled, jsx , Text ,Flex, Box} from "theme-ui"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const imgGridStyle = {
    display:'grid',
    gridTemplateColumns: `repeat(auto-fill, 400px)`,
    gridGap:'10px'
    
}



const Certificates = ({data }) => (
  <Layout>
    <SEO title="Certificates" />
    <Flex as='section' mx='auto' sx={{maxWidth:['98%','98%','70%','70%'], flexDirection:'column'}}  >
    <div style={imgGridStyle}>
        {data.allImageSharp.edges.map(edge => 
            <Img fluid={edge.node.fluid} />
        )}
    </div>
    </Flex>
    
  
  </Layout>
)

export const query = graphql`
    query {
        allImageSharp(skip:3){
            edges{
                node{
                    id
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }

`

export default Certificates
