import { Flex, Button } from "@chakra-ui/react";
import axios from "axios";
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
    height={'100%'}
    width={'100%'}
    flexDir={'column'}
    flexWrap={'wrap'}
    flexGrow={1}
    gap={5}
    p={2}
  >
    {leagues.map((league, index) => (
      
      <Flex
        height={'60px'}
        key={index}
        border={'solid 1px tomato' }
        maxW={'400px'}
        p={8}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex>
        <h1>{league.league_name}</h1>
        </Flex>
        <Flex
      
        w={'150px'}
        justifyContent={'space-around'}
        >
        <Button  onClick={()=> handleJoinLeague(league.league_name, league.league_id, userId)}>Join</Button>
        <Button  onClick={()=> handleLeaveLeague(league.league_name, league.league_id, userId)}>X</Button>
        </Flex>
        
      </Flex>
    ))}
  </Flex>)
}
