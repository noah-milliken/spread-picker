import { useEffect, useState } from "react";
import { Button, Text, Flex} from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const PickCard = ({ awayTeam, homeTeam, spread, gameId, userPick }) => {
  const {colorMode} = useColorMode()

  const [selectedTeam, setSelectedTeam] = useState(null)
  const {week, userid} = useParams()
  const userID = userid

  useEffect(()=> {
    if(userPick === awayTeam){
      setSelectedTeam(awayTeam)
    }else if(userPick === homeTeam){
      setSelectedTeam(homeTeam)
    }

  }, [userPick, awayTeam, homeTeam])
    
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
      setSelectedTeam(team)  
     } catch (err) {
      console.log(err)
     }

    }

  return (
    <Flex 
    bg={colorMode === 'light' ? 'gray.500': 'gray.900'}
        borderRadius={10}
      
        w={'100%'}
        h={'100%'}
        align={'center'}
        margin={'0 auto'}
        justify={'space-around'}
      >
        <Button 
          colorScheme="teal"
          variant={selectedTeam === awayTeam ? 'solid': 'outline'} 
          onClick={()=>handleTeamSelect (awayTeam, gameId)} 
        >
          {awayTeam}
        </Button>

        <Text>{spread}</Text>

        <Button 
          colorScheme="purple"
          variant={selectedTeam === homeTeam ? 'solid': 'outline'}
          onClick={()=>handleTeamSelect (homeTeam, gameId)} 
        >
          {homeTeam}
        </Button>
      </Flex>
  );
};

export default PickCard;



