import { Button, Text, Heading, Card, CardBody } from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";



const PickCard = ({ awayTeam, homeTeam, spread, gameId }) => {
  const {week} = useParams()
  const userID = 1
  ; 
  

    const handleTeamSelect = async (team, gameId) => {
      const data = {
        Pick: team, 
        UserID: userID,
        Week: week,
        GameKey: gameId
      }
      const response = await sendPickToDb(data);

      console.log("Pick successfully sent:", response)
    }


  
  return (
    <Card variant="elevated">
      <CardBody>
        <Button 
        variant="outline" 
        colorScheme="blue"
        onClick={()=>handleTeamSelect (awayTeam, gameId)} >
          {awayTeam}
        </Button>

        <Text>{spread}</Text>

        <Button 
        variant="outline" 
        colorScheme="blue" 
        onClick={()=>handleTeamSelect (homeTeam, gameId)} >
          {homeTeam}
        </Button>
      </CardBody>
    </Card>
  );
};

export default PickCard;

  /* <Card variant={"filled"}>
  <CardBody>
    <Button colorScheme="green">{awayTeam}</Button>
    <Box>
      <Heading as="h5" size="md">
        {spread}
      </Heading>
    </Box>
    <Button colorScheme="teal">{homeTeam}</Button>
  </CardBody>
</Card>; */

