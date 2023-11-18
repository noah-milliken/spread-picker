import { Flex, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { color } from "framer-motion";
import { useEffect, useState } from "react";


export default function League() {
  const [leagues, setLeagues] = useState([])
  const userId = 1
  useEffect(() => {
    axios.get('http://localhost:8080/leagues')
    .then(res => {
      console.log(res.data)
      setLeagues(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const handleJoinLeague = (league_name, league_id, user) => {
    const userData = {
      league_name:league_name,
      league_id:league_id,
      user_id: user
    }
    axios.post('http://localhost:8080/leagues/addUser', userData).then((res) => {
      console.log(res.status, res.data)
    })
  }
  const handleLeaveLeague = (league_name, league_id, user) => {
    const userData = {
      league_name:league_name,
      league_id:league_id,
      user_id: user
    }
      axios.post(`http://localhost:8080/leagues/removeUser`, userData).then((res) => {
        console.log(res.status, res.data)
      })
  }


  return( 
  <Flex
  
    margin={'0 auto'}
    height={'100%'}
    maxW={'400px'}
    width={'100%'}
    flexDir={'column'}
    flexGrow={1}
    gap={5}
    p={2}
  >
    {leagues.map((league, index) => (
      
      <Flex
        direction={{base: 'column', sm: 'row'}}
        borderRadius={10}
        borderColor={"gray.500"}
        borderStyle={"solid"}
        borderWidth={2}
       
        key={index}
        margin={'0 auto'}
        width={'90%'}
        p={1}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex>
        <Text fontSize={{base: 'xs', sm: 'md'}}>{league.league_name}</Text>
        </Flex>
        <Flex
        gap={3}
        justifyContent={'space-between'}
        >
        <Button size={['sm', 'md']}  onClick={()=> handleJoinLeague(league.league_name, league.league_id, userId)} colorScheme="blue">Join</Button>
        <Button size={['sm', 'md']} variant={'outline'}  onClick={()=> handleLeaveLeague(league.league_name, league.league_id, userId)} colorScheme="red">X</Button>
        </Flex>
        
      </Flex>
    ))}
  </Flex>)
}
