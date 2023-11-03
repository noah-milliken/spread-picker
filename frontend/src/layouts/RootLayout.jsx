import { Grid, GridItem, Box, Flex, Heading, Spacer, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Login from '../components/Login'
import Register from '../components/Register'
export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(true)
  console.log(isLogin)
  

  return (<Grid
    templateAreas={`
    "header"
    "main"
    "footer"`}
    gridTemplateRows={'50px 1fr 50px'}
    gridTemplateColumns={'1fr'}
    h='100vh'
    
    color='blackAlpha.700'
    fontWeight='bold'
    >
    <GridItem pl='2' bg='brand.300' area={'header'}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='profile'>Profile</NavLink>
    </GridItem>
    <GridItem pl='2' bg='brand.300' area={'main'}>
    {isLogin ? (
  <Login isLogin={isLogin} setIsLogin={setIsLogin} />
) : (
  <Register isLogin={isLogin} setIsLogin={setIsLogin} />
)}
      <Outlet/>
    </GridItem>
    <GridItem pl='2' bg='brand.300' area={'footer'}>
      Footer
    </GridItem>
    </Grid>)

}



