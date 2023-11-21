import {Flex} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'


const Picks = ({}) => {
const { userid, week } = useParams()
  const [games, setGames] = useState([])
  
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userid}/weeks/${week}`)
        setGames(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
   }, [week])
  return (
    <Flex
    justifyContent={'center'}
    flexWrap={'wrap'}
    gap={3}
    >
       
        {games.map((game, index) => (
          <Flex key={index} 
          w={['100%','222px']}
          minW={'250px'}
          height={['150px','200px']}
          >
          <Pick
            key={index}
            gameId ={game.match_id}
            homeTeam={game.home_team}
            awayTeam={game.away_team}
            spread={game.point_spread}
            userPick={game.user_pick}
          />
          
           </Flex>
        ))}
       
    </Flex>

  ); 
};

export default Picks;




