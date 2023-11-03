import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const Picks = () => {
  const { week } = useParams()
  const [games, setGames] = useState([])
  const correct = 1
  useEffect(()=> {
    axios.get(`http://localhost:8080/matches/${Number(week)}`)
      .then(res => {
        setGames(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[week])

  return (
    <Box  mx={3}>
      <SimpleGrid
        margin={2}
        spacing={2}
       columns={[1,3,4]}
      >
        {games.map((game, index) => (
          <Pick
            key={index}
            gameId ={game.match_id}
            homeTeam={game.home_team}
            awayTeam={game.away_team}
            spread={game.point_spread}
          
          />
        ))}
      </SimpleGrid>
      <Box width={'30%'} h={'100px'} margin={'0 auto' }>
          <Text>You chose {correct} this week.</Text>

      </Box>
    </Box>
  );
};

export default Picks;
