
import { Flex } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";

export const ProfileLayout = () => {
  const {userid} = useParams()
  
  return (
 
<Outlet />


  )

};

