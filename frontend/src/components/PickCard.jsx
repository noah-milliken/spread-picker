import { Button, Text, Flex} from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";




const PickCard = ({ awayTeam, homeTeam, spread, gameId }) => {
  const {week, userid} = useParams()
  const userID = userid
  ; 
  

    const handleTeamSelect = async (team, gameId) => {
     try {
      const data = {
        pick: team, 
        user_id: userID,
        week_num: week,
        match_id: gameId
      }
      const response = await sendPickToDb(data);
      console.log("Pick successfully sent:", response)      
     } catch (err) {
      console.log(err)
     }
    }


  
  return (
    <Flex 
    w={'100%'}
    h={'100%'}
    align={'center'}
    margin={'0 auto'}
    justify={'space-around'}
      >
        <Button 
        variant="outline" 
        onClick={()=>handleTeamSelect (awayTeam, gameId)} >
          {awayTeam}
        </Button>

        <Text>{spread}</Text>

        <Button 
        variant="outline" 
        onClick={()=>handleTeamSelect (homeTeam, gameId)} >
          {homeTeam}
        </Button>
      </Flex>
  );
};

export default PickCard;



