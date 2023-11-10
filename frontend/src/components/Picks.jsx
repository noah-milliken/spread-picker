import {Flex} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const Picks = () => {
const { userid, week } = useParams()
  const [games, setGames] = useState([])
  console.log(games)
  useEffect(()=> {
    axios.get(`http://localhost:8080/users/${userid}/weeks/${week}`)
      .then(res => {
        console.log(res.data)
        setGames(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[week, userid])

  return (
    <Flex
    p={'20px'}
    flexWrap={'wrap'}
    gap={3}
    >
        {games.map((game, index) => (
          <Flex key={index} 
          flex={'1 0 200px'}
          height={'200px'}
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




