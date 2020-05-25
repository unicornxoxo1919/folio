/** @jsx jsx */
import React from "react"
import { Styled, jsx , Flex , Heading , Text} from "theme-ui"
import { Link } from "gatsby"
import WorkCard from "../components/Card" 
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Shreedhaar Ramnath - Resume" />
    <Flex as='section' mx='auto' sx={{maxWidth:['90%','90%','50%','50%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Shreedhaar Ramnath</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} >I do my best work in things that involve human contact. That is why i chose Human Resources. I have the skill to put myself in everybody's shoes and see things from all angles and the charisma 
    to push everyone towards the best choice.</Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>maverick1994@live.com</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Education</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Bcom, Management and HR at Curtin Australia</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Self Learning on MIT OpenCourseware</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Languages</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>English </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>French </li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Skills</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Everything Undergraduate related to HR and Management</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Python - Matplotlib - Pandas</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Front End Development [Web] - Javascript - ReactJS </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Economics - Gregory Mankiw's book Level </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Finance - Work in Progress</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>WIP</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px'}} ><li sx={{listStyle:'square'}}>Linear Algebra - To understand graduate level Economics</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Skills showcase</Heading>
    <WorkCard workHeading='Time Value of Money' workSkill='Python / Application Economics' workLink='/timevalueofmoney' />
    <WorkCard workHeading='Coronavirus Cases Mauritius' workSkill="Javascript NextJS React API's" workLink='/cv19' />





    </Flex>
  </Layout>
)

export default SecondPage
