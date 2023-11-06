import { Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function League() {
  const [leagues, setLeagues] = useState([])
  const userId = 66
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


  return( <Flex
    border={'solid'}
    width={'100%'}
    height={'60px'}
    justifyContent={'space-between'}
    flexWrap={'wrap'}
  >
    {leagues.map((league, index) => (
      
      <Flex
        key={index}
        border={'solid'}
        
      >
        <h1>{league.league_name}</h1>
        <h2>{league.league_id}</h2>
        <Button onClick={()=> handleJoinLeague(league.league_name, league.league_id, userId)}>Join</Button>
        <Button onClick={()=> handleLeaveLeague(league.league_name, league.league_id, userId)}>Leave League</Button>
      </Flex>
    ))}

  </Flex>)
}
