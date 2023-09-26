import { Box, Flex, Heading, Spacer, HStack } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Flex
      height="100vh"
      direction={"column"}
      className="root-layout"
      bg="#242424"
      color="#F7FAFC"
      w="100%"
      border="solid tomato 1px"
    >
      <Flex>
        <Heading>Pickit</Heading>
        <Spacer />
        <HStack>
          <NavLink to="/">Home</NavLink>
          <Spacer />
          <NavLink to="profile">Profile</NavLink>
        </HStack>
      </Flex>
      <Box>
        <Outlet />
      </Box>
    </Flex>
  );
}
