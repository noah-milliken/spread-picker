import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const Picks = () => {
  
  const { week } = useParams()
  console.log(week)
  const [games, setGames] = useState([])
  useEffect(()=> {
    axios.get(`http://localhost:8080/users/2/weeks/9`)
      .then(res => {
        console.log(res)
        setGames(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[week])

  return (
    <Flex
    p={'20px'}
    flexWrap={'wrap'}
    gap={3}
    >
        {games.map((game, index) => (
          <Flex key={index} border={'solid'}
          flex={'1 0 200px'}
          height={'200px'}
          >
          <Pick
            key={index}
            gameId ={game.match_id}
            homeTeam={game.home_team}
            awayTeam={game.away_team}
            spread={game.point_spread}
          />
           </Flex>
        ))}
    </Flex>
  ); 
   
  
};

export default Picks;




