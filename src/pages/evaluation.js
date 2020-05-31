/** @jsx jsx */
import {  jsx , Flex , Heading , Text} from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"




const Pip = () => (
    <Layout>
    <SEO title="Performance Evaluation and Development" />
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','90%','90%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Professional Development Planning</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px',marginBottom:'40px'}} >
     You should always have development plans for all your staff and make it an ongoing thing. Planning should not begin only when a problem arises. 
     It should start when you recruit someone to be able to correctly assess any training that will be needed.
    </Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Yearly Evaluations / Self Assesment</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} >
    There are two ways you could go to evaluate the development a staff needs. The best way is to request every staff to 
    do a self assesment or if your organisation doesn't do it. You will need to evaluate them in their yearly performance
    evaluations. There are samples to both of them below.
    </Text>

     <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} ><li sx={{listStyle:'square'}}>
    The second step is to determine the skill level of the employee based on work records and your observation
    </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} ><li sx={{listStyle:'square'}}>
    The third step is to assess the organisational/departmental goals/objectives and how the employee skills will align with that 
    and focus on developping those skills 
    </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} ><li sx={{listStyle:'square'}}>
    Talk to the employee about the new skills they should develop and propose how they could develop it be it by workshops and seminars,
    or educational opportunities , or new projects / new responsibilities they could take to develop those skills 
    </li></Text>




    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} >
    <a href='https://docs.google.com/document/d/1UrfoUJsb4AEI4lMA3dy5hv3k5EnZYaGbpv_dy1DZ-0o/edit?usp=sharing'>Self Assesment Sample</a>
    </Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} >
    <a href='https://docs.google.com/document/d/1tqXMtO6AFWgRXzktajtIzvecUN_JvTjQmPVYYKHZdds/edit?usp=sharing'>Performance Evaluation Sample</a>
    </Text>

    <iframe height='700' sx={{ marginTop:'30px' ,marginBottom:'30px'}} src="https://docs.google.com/document/d/e/2PACX-1vRoQQyBvz-KLMQ7429wGtx3a5Q5mGEhiP2hpFksqaLKL93ic_ADhntYFNa5Df2SFYvK9DIMUskAFQ4d/pub?embedded=true"></iframe>
    <iframe height='700' sx={{ marginTop:'30px' ,marginBottom:'30px'}} src="https://docs.google.com/document/d/e/2PACX-1vRA58VfvSMM4QWJH30soJcORszsC6jUa7GRcesHC8JT2FOpSr2Cte0gQvRbSec8zj3PnhQH2plFWqks/pub?embedded=true"></iframe>
   
    </Flex>
    </Layout>
)

export default Pip