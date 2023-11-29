import { useEffect, useState } from "react";
import { Button, Text, Flex, Skeleton} from "@chakra-ui/react";
import { sendPickToDb } from '../api'
import { useParams } from "react-router-dom";


const PickCard = ({ 
  awayTeam, 
  homeTeam, 
  spread, 
  gameId, 
  userPick,
  error, 
}) => {
 

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
        borderRadius={10}
        borderColor={"gray.500"}
        borderStyle={"solid"}
        borderWidth={2}
        w={'100%'}
        h={'100%'}
        align={'center'}
        margin={'0 auto'}
        justify={'space-around'}
      >

        <Button size={['lg','md']} 
          colorScheme="green"
          variant={selectedTeam === awayTeam ? 'solid': 'outline'} 
          onClick={()=>handleTeamSelect (awayTeam, gameId)} 
        >
          {awayTeam}
        </Button>

        <Text>{spread}</Text>
        <Skeleton>
        <Button 
        size={['lg','md']} 
          colorScheme="green"
          variant={selectedTeam === homeTeam ? 'solid': 'outline'}
          onClick={()=>handleTeamSelect (homeTeam, gameId)} 
        >
          {homeTeam}
        </Button>
        </Skeleton>
       
      </Flex>
  );
};

export default PickCard;



