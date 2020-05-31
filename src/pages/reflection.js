/** @jsx jsx */
import React from "react"
import { Styled, jsx , Flex , Heading , Text} from "theme-ui"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"




const Reflection = () => (
    <Layout>
    <SEO title="Coronavirus Cases Mauritius - Skills" />
    <Flex as='section' mx='auto' sx={{maxWidth:['97%','97%','70%','70%'], flexDirection:'column'}}  >
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'40px',marginBottom:'40px'}} >
     This page covers what i think are my current strengths and weaknesses and where i would ideally like to work and 
     at what position
    </Text>
    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Strengths</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Doing Research - looking for best practices</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Knowing Mauritian Laws</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Understanding technology on a deep level</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>My knowledge on Capitalism - e.g Capitalism is the art of motivating self interest through incentives</li></Text>


   

    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Weaknesses</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Doing too many tasks at once , which could be seen as being disorganized</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>Always trying to do things 'innovatively' or in a new way which is not always appreciated in a big corporate environment</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>I tend to think my opinion is best which is rarely true</li></Text>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} ><li sx={{listStyle:'square'}}>I tend to not ask for help when i do not understand something</li></Text>


    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Work</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} >
    Obviously i do not want to work in Agriculture or Manufacturing. I want to work in the services sector. Preferably in the private sector
    in the Human Resources department of a Finance/Banking or Technology company.But more importantly what i want
    is to understand how Human Resources is used here in Mauritius and then greatly simplify it through SaaS.   
    </Text>


    <Heading sx={{color:'purple.9',fontSize:[1,3,3,3],fontFamily:'monospace', marginTop:'30px'}}>Dream</Heading>
    <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} >
    Everybody has a dream , mine like probably most people was to get rich. To my great surprise though ,
    i've had moments in between my three years of study at Curtin where i had a lot money and it felt great because financial security is very important to
    me but then last year i did business capstone. My team was not the best team. We were the team that worked the least and had the most fun 
    and yet we crushed everybody and won. That's when i realised its not about the money at all. Its about leading people. Making people believe in
    their own skills. Teaching them. Seeing their progress as they become better and better at what they do.
    </Text>
        <Text sx={{color:'black',fontSize:[1,2,2,2],fontFamily:'monospace', marginTop:'10px'}} >And so my dream is to lead a company to great success</Text>

    </Flex>
    </Layout>
)

export default Reflection