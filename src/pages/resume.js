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
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Shreedhaar Ramnath</Heading>
    
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>maverick1994@live.com</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Education</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Bcom, Management & HR at Curtin University</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Diploma Human Resources, Challenger Institute</li></Text>

    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Higher School Certificate, Mauricia Institute</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>School Certificate, Floreal SSS</li></Text>
    <WorkCard sx={{marginTop:'50px'}} workHeading='Education Certificates' workSkill='' workLink='/certproof' />

    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Personal Qualities</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Integrity</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Respect</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Foundational Skills</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>English</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>French</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Maths</li></Text>

    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Enterprising Skills</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Analysis of Data</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Conducting Research</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Teamwork</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Excel, PPT, Word</li></Text>
  
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Technical Skills</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Human Resources - Recruitment , Payroll , Performance Management </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Management </li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Economics</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Finance</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Python , Javascript</li></Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Career Management Skills</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Lifelong learning</li></Text>

    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'50px'}}>Skills showcase</Heading>
    <WorkCard workHeading='How do you evaluate and develop an employee?' workSkill='HR / Performance Evaluation and Development' workLink='/evaluation' />
    <WorkCard workHeading='What is a PIP?' workSkill='HR / Performance Improvement Plan' workLink='/pip' />
    <WorkCard workHeading='Time Value of Money' workSkill='Python / Application Economics' workLink='/timevalueofmoney' />
    <WorkCard workHeading='Coronavirus Cases Mauritius' workSkill="Javascript NextJS React API's" workLink='/cv19' />





    </Flex>
  </Layout>
)

export default SecondPage
