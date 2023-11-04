import {MdDarkMode, MdLightMode, MdMenu, MdClose} from 'react-icons/md'
// import {MdDarkMode, MdLightMode}
import { useState } from 'react'
import { Flex, Box, Text, Button, useColorMode } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
const Header = (props) => {
    const [show,setShow] = useState(true)
    const toggleMenu = () => setShow(!show)
    const {colorMode, toggleColorMode} = useColorMode()
  return (
   
    <Flex
    as={'nav'}
    align={'center'}
    justify={'space-between'}
    wrap={'wrap'}
    w={'100%'}
    mb={8}
    p={8}
    bg={['purple.800', 'purple.800','purple.800', 'purple.800']}
    color={["white", "white", "primary.700", "primary.700"]}
    {...props}
    >
        <Flex align="center">
            <Text>Pick-It</Text>
        </Flex>
        
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <MdMenu /> : <MdClose />}
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
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">Leagues</MenuItem>
          <MenuItem to="/faetures">Picks </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/signup" isLast>
            <Button
              onClick={toggleColorMode}
              size="sm"
              rounded="md"
              color={["yellow.500", "yellow.500", "white", "white"]}
              bg={["white", "white", "yellow.500", "yellow.500"]}
              _hover={{
                bg: [
                  "purple.100",
                  "purple.100",
                  "purple.600",
                  "purple.600",
                ],
              }}
            >
             {colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode/>}
            </Button>
          </MenuItem>
        </Flex>
        
        </Box>
    </Flex>
  )
}

export default Header