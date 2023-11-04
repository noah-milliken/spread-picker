import {Flex} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'



export default function RootLayout(props) {

  return (
    <Flex
    direction='column'
    align='center'
    maxW={{xl: '1200px'}}
    minH={'100vh'}
    m='0 auto'
    {...props}
    >
      <Header />
        <Outlet />
      <Footer />
    </Flex>
  )

}