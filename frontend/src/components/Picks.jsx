import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Pick from "./PickCard";
import { games } from "../data/games";

const Picks = () => {
  console.log(games);
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
            homeTeam={game.homeTeam}
            awayTeam={game.awayTeam}
            spread={game.spread}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Picks;
