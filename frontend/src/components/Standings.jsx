
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Standings = ({userid}) => {
  const [data, setData] = useState(undefined)

    useEffect(()=> {
      const fetchData = async () => {
        try {
          const response = await axios.get('')
          setData(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      fetchData()

    }, [userid])
    console.log(data)
  return (
    <Tabs isFitted variant='line'>
      <TabList>
        <Tab>Generic gamers</Tab>
        <Tab>Polite Pirates</Tab>
        <Tab>Frought Fidgiters</Tab>
        <Tab>Placid Pick-makers</Tab>
      </TabList>
      <TabPanels>

      </TabPanels>
    </Tabs>
  )
}

export default Standings