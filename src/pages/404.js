import React from "react"
import { Flex } from "theme-ui";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <SEO title="404: Not found" />
    <h1>That page does not exist</h1>
    <p>But i still love you</p>
    </Flex>
  </Layout>
)

export default NotFoundPage
