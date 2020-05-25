/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { Styled, jsx , Text ,Flex, Box} from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Shreedhaar Ramnath" />
    <Flex as='section' mx='auto' sx={{maxWidth:['90%','90%','50%','50%'], flexDirection:'column'}}  >
    
    <Text sx={{color:'purple.9',fontSize:[1,1,3,5],fontFamily:'monospace', marginTop:'20px'}} >Nice to meet you.</Text>
    <Text sx={{color:'black',fontSize:[1,1,3,3],fontFamily:'monospace' ,marginTop:'10px'}} >My name’s Shreedhaar Ramnath. I’m an aspiring, ambitious, and hardworking student at Curtin Mauritius.</Text>
    <Text sx={{color:'black',fontSize:[1,1,3,3],fontFamily:'monospace' ,marginTop:'10px'}}>I am majoring in Management and Human Resources but i enjoy learning and have a diversified skill set.I am good at Finance , Programming. I also have an unhealthy obsession with <span sx={{color:'red.6'}}>Economics.</span> I picked all the
    extra skills at <a href='https://ocw.mit.edu/index.htm'>MIT's Opencourseware</a></Text>
    </Flex>
    
  
  </Layout>
)

export default IndexPage
