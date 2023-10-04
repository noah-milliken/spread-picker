import { Button, Text, Heading, Card, CardBody } from "@chakra-ui/react";

const PickCard = ({ awayTeam, homeTeam, spread }) => {
  return (
    <Card variant="elevated">
      <CardBody>
        <Button variant="outline" colorScheme="blue">
          {awayTeam}
        </Button>
        <Text>{spread}</Text>
        <Button variant="outline" colorScheme="blue">
          {homeTeam}
        </Button>
      </CardBody>
    </Card>
  );
};

export default PickCard;
{
  /* <Card variant={"filled"}>
  <CardBody>
    <Button colorScheme="green">{awayTeam}</Button>
    <Box>
      <Heading as="h5" size="md">
        {spread}
      </Heading>
    </Box>
    <Button colorScheme="teal">{homeTeam}</Button>
  </CardBody>
</Card>; */
}
