/** @jsx jsx */
import React from "react"
import { Styled, jsx , Flex , Heading , Text} from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"




const FourthPage = () => (
    <Layout>
    <SEO title="Coronavirus Cases Mauritius - Skills" />
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Coronavirus Cases in Mauritius</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px',marginBottom:'40px'}} >
     When the coronavirus started spreading in Mauritius. I wanted a simple and effective way to view the
     new cases everyday by leveraging nextjs's built in PWA. So i created this website using this <a href='https://corona.lmao.ninja/'>API</a>.
     The website itself can be accessed <a href='https://cv19mru.now.sh/'>here.</a>
     You can add it to your home screen on mobile
    </Text>
    <Image/>
    </Flex>
    </Layout>
)

export default FourthPage