import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const Picks = () => {
  const { week } = useParams()
  const [games, setGames] = useState([])

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
    <Box>
      <Heading>Pick the Spread</Heading>
      <Text>Pick the winners for this week</Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
    </Box>
  );
};

export default Picks;
