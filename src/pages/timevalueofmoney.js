/** @jsx jsx */
import {  jsx , Flex , Heading , Text} from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gist from "react-gist"




const ThirdPage = () => (
    <Layout>
    <SEO title="Time Value of Money - Skills" />
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>The Time Value of Money</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px',marginBottom:'40px'}} >
     The purpose of this section is simply to assert the skills section.
     Because without some proof the skills looks useless. However,
     i thought about something useful to develop which is the value of 
     money over time which concerns everybody really. so unless you do finance
     you will learn something. If you do finance ; enjoy the python and predictions!
    </Text>
    <Gist id="9f5517c5928a91987472045bb96689fe" />

    </Flex>
    </Layout>
)

export default ThirdPage