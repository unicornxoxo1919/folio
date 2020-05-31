/** @jsx jsx */
import {  jsx , Flex , Heading , Text} from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"




const Pip = () => (
    <Layout>
    <SEO title="Performance Improvement Plans" />
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>What is a pip ?</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'20px',marginBottom:'40px'}} >
     HR professionals use performance improvement plans as a formal notice of probation to satisfy 
     employment law and regulation, and often use them outside the window of annual performance
    reviews to address poor performance in real time. In this context, the PIP is not only more 
    helpful than a traditional written warning, but also a formal procedure to help set up an 
    employee for success and provide a chance to improve in specific areas.
    </Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Pros and Cons</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} >
    The primary benefit of a performance improvement plan is improving employee performance. 
    By succeeding, you avoid the drain on resources and the turnover costs associated with 
    replacing underperforming employees. But there are more subtle benefits to effectively 
    leveraging a PIP, as well: As a communication tool, a PIP provides clear and concise 
    documentation and establishes a standard of accountability that goes above and beyond the
     standard write-up for disciplinary action. When used correctly and consistently for all 
     underperforming members in a workplace, a PIP also improves the quality of relationships with
      leadership and demonstrates a commitment to engaging employees over the long term.
      </Text>

    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px'}} >
      Using a performance improvement plan involves a certain amount of risk for the employer and manager.
    For employees, the PIP is often considered a warning that they are headed towards demotion, 
    transfer, or dismissal. Hence use it wisely or make your communication clear.
      </Text>

        <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px' , marginBottom:'30px'}}>Sample pip</Heading>
            <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'30px', marginBottom:'30px'}} >
              <a href="https://docs.google.com/document/d/1fJdO0dzmXiaHG1gvXfEVa608z-9CuidrpFKNDSfbIAs/edit?usp=sharing">Access it here</a>  
        </Text>
        </Flex>

    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','90%','90%'], flexDirection:'column'}}  >
  
        <iframe height='700' title='Pip'
        src="https://docs.google.com/document/d/e/2PACX-1vSiecqG5qsVD32A1mqFB4vTzxtSM7nKbRfY9QGaK9OaUjkAov4PL3WeFIEPc2aymam86E0aWwdm4xG5/pub?embedded=true">
        </iframe>

    </Flex>
    </Layout>
)

export default Pip