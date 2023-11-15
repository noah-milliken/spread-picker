import { MdMenu, MdClose} from 'react-icons/md'
import { useState } from 'react'
import { Flex, Box, Text, Button, useColorMode } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import { useParams } from 'react-router-dom'
import ColorModeToggle from './ColorModeToggle'

const Header = (props) => {
    const [show,setShow] = useState(false)
    const toggleMenu = () => setShow(!show)
    const {userid, week} = useParams()
  return (
   
    <Flex
    as={'nav'}
    align={'center'}
    justify={'space-between'}
    wrap={'wrap'}
    w={'100%'}
    mb={0}
    p={8}

    {...props}
    >
        <Flex>
            <Text>Pick-It</Text>
        </Flex>
        
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <MdClose /> : <MdMenu /> }
        </Box>
       
        <Box
            display={{base: show ? 'block': 'none', md: 'block'}}
            flexBasis={{base: '100%', md: 'auto'}}
        >
          <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          >
            <MenuItem to={`/profile/${userid}`}>Home</MenuItem>
            <MenuItem to={`/profile/${userid}/league`}>Leagues</MenuItem>
            <MenuItem to={`/profile/${userid}/picks/${week|| 10}`}>Picks </MenuItem>
            <ColorModeToggle />
        </Flex>
        
        </Box>
    </Flex>
  )
}

export default Header