import React from 'react';
import { Card, Text, Heading, Badge, Flex } from "theme-ui";
import {Link} from 'gatsby'

const WorkCard = ({ workHeading, workSkill ,workLink}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        p: 2,
        bg: "blue.5",
        border: '2px solid #000000',
        boxShadow:'5px 6px 0px #000000',
        marginTop:'20px'
      }}
    >
      <Flex flexDirection="row" sx={{ justifyContent: "space-between" }}>
        <Heading sx={{color:'black'}}>{workHeading}</Heading>
        <Badge sx={{ mt: "7px", mb: "7px", bg: "highlight", color: "text" }}>
        <Link sx={{ p:[3,2,2,2], fontSize: [1, 3, 6], ":hover": { color: "red" }, color:'black ' , textDecoration:'none', fontWeight:'bold'}}
 to={workLink}>clickme!
      </Link>
        </Badge>
      </Flex>
      <Text sx={{color:'black'}}>{workSkill}</Text>
    </Card>
  );
};

export default WorkCard;