import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'

const Picks = () => {
  const { week } = useParams()
  const [games, setGames] = useState([])
  console.log(typeof week)
  useEffect(()=> {
    axios.get(`http://localhost:8080/games/${Number(week)}`)
      .then(res => {
        console.log(res.data)
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
            console.log(game),
          <Pick
            key={index}
            gameId ={game.game_id}
            homeTeam={game.home}
            awayTeam={game.away}
            spread={game.spread}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Picks;
