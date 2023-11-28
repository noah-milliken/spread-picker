
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import StandingsTable from './StandingsTable'
// eslint-disable-next-line react/prop-types
const Standings = ({userid}) => {

  const [data, setData] = useState([])
    useEffect(()=> {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/dashboard/${userid}/getStandings/10`)
          setData(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      fetchData()
    }, [userid])

  return (
    <Tabs isFitted variant='line'>
         <TabList>
        {data.map((league, index) => (
          <Tab key={index}>{Object.keys(league)[0]}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((league, index) => (
          <TabPanel key={index}>
            <StandingsTable  league={league}/>
          </TabPanel>
        ))}
          
      </TabPanels>
    </Tabs>
  )
}

export default Standings