import { useEffect, useState } from "react";
import { Button, Text, Flex} from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";

const PickCard = ({ awayTeam, homeTeam, spread, gameId, userPick }) => {
  const [selectedTeam, setSelectedTeam] = useState(null)
  const {week, userid} = useParams()
  const userID = userid
  console.log(userPick)
  ; 
  useEffect(()=> {
    if(userPick === awayTeam){
      setSelectedTeam(awayTeam)
    }else if(userPick === homeTeam){
      setSelectedTeam(homeTeam)
    }
  }, [userPick])
    
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
        border={selectedTeam ? 'gray solid 1px': 'tomato solid 1px' }
        w={'100%'}
        maxW={'225px'}
        h={'100%'}
        align={'center'}
        margin={'0 auto'}
        justify={'space-around'}
      >
        <Button 
          bg={selectedTeam === awayTeam ? 'tomato': 'teal'}
          variant={selectedTeam === awayTeam ? 'solid': 'outline'} 
          onClick={()=>handleTeamSelect (awayTeam, gameId)} 
        >
          {awayTeam}
        </Button>

        <Text>{spread}</Text>

        <Button 
        bg={selectedTeam === homeTeam ? 'tomato': 'teal'}
          variant={selectedTeam === homeTeam ? 'solid': 'outline'}
          onClick={()=>handleTeamSelect (homeTeam, gameId)} 
        >
          {homeTeam}
        </Button>
      </Flex>
  );
};

export default PickCard;



