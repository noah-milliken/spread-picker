import { Button, Text, Box, CardBody, color } from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";




const PickCard = ({ awayTeam, homeTeam, spread, gameId }) => {
  const {week} = useParams()
  const userID = 10
  ; 
  

    const handleTeamSelect = async (team, gameId) => {
      const data = {
        pick: team, 
        user_id: userID,
        week_num: week,
        match_id: gameId
      }
      const response = await sendPickToDb(data);
      
      console.log("Pick successfully sent:", response)
    }


  
  return (
    <Box 
      bg='brand.50'
      borderRadius={'lg'}
      
      display={'flex'}
      justifyContent={'space-around'}
      py={'9'}
      >
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
   
      </Box>
  );
};

export default PickCard;



