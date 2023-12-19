import { MdMenu, MdClose} from 'react-icons/md'
import { useState } from 'react'
import { Flex, Box } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import { useParams } from 'react-router-dom'
import { PiFootball } from "react-icons/pi";
import ColorModeToggle from './ColorModeToggle'
import NavButtons from './NavButtons'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './buttons/Login-button'
import { LogoutButton } from './buttons/Logout-button'
import { SignupButton } from './buttons/Signup-button'
const Header = (props) => {
    const [show,setShow] = useState(false)
    const toggleMenu = () => setShow(!show)
    const {userid, week} = useParams()
    const {isAuthenticated} = useAuth0()


  
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
        <PiFootball size={50} />
        </Flex>
        
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <MdClose /> : <MdMenu /> }
        </Box>
       
        <Box
            display={{base: show ? 'block': 'none', md: 'block'}}
            flexBasis={{base: '100%', md: 'auto'}}
        >
          <Flex
          align={'center'}
          justify={["center", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          >
            {!isAuthenticated && (
              <>
              <MenuItem><SignupButton/></MenuItem>
              <MenuItem><LoginButton/></MenuItem>
              
              </>
            )}
           {isAuthenticated && (
              <>
              <MenuItem><LogoutButton /></MenuItem>
                
              </>
      )}
            <MenuItem to={`/profile/dashboard`}>Home</MenuItem>
            <MenuItem to={`/profile/${userid}/league`}>Leagues</MenuItem>
            <MenuItem to={`/profile/${userid}/picks/${week|| 16}`}>Picks </MenuItem>
            <ColorModeToggle />
        </Flex>
        
        </Box>
    </Flex>
  )
}

export default Header