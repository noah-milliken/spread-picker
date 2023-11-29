import {Flex} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Pick from "./PickCard";
import { useEffect, useState } from "react";
import axios from 'axios'
import ErrorPlaceHolder from './ErrorPlaceHolder'


const Picks = () => {
const { userid, week } = useParams()
const [games, setGames] = useState([])
const [error, setError] = useState(false)  
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userid}/weeks/${week}`)
        setGames(response.data)
        setError(false)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }
    fetchData()
   }, [])
  return (
    <>
   { error ? <ErrorPlaceHolder/> : <Flex
      justifyContent={'center'}
      flexWrap={'wrap'}
      gap={3}
      >
         
          {games.map((game, index) => (
            <Flex key={index} 
            w={['100%','222px']}
            minW={'250px'}
            height={['150px','200px']}
            >
            <Pick
              
              key={index}
              gameId ={game.match_id}
              homeTeam={game.home_team}
              awayTeam={game.away_team}
              spread={game.point_spread}
              userPick={game.user_pick}
              error={error}
            />
            
             </Flex>
          ))}
         
      </Flex>
      }
    
      </>
  ); 
};

export default Picks;




