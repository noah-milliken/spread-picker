import { NavLink, Outlet } from "react-router-dom";
import { Flex, } from "@chakra-ui/react";
import { SettingsIcon, ArrowRightIcon } from "@chakra-ui/icons";


export const ProfileLayout = () => {
  const weeks = Array.from({length: 18}, (_, i) => i + 1)
  return (
    <Flex
    h={'100vh'}
    align={'center'}
    justifyContent={'center'}
    >

    </Flex>
  )

};

// <Grid
// templateColumns="150px 1fr"
// templateRows="1fr"
// gap={4}
// minHeight="100%"
// margin="0 auto"
// color="blackAlpha.700"
// >
// <GridItem  
// height='100%'
// bg='brand.300' overflowY='auto' margin={'0 auto'}>
//   <List spacing={2}>
//     {weeks.map((week) => (
//       <ListItem key={week}>
//         <ListIcon as={ArrowRightIcon} />
//         <NavLink to={`/profile/picks/${week}`}>Week {week}</NavLink>
//       </ListItem>
//     ))}
//     <ListItem>
//       <ListIcon as={ArrowRightIcon} />
//       <NavLink to="league">League</NavLink>
//     </ListItem>
//     <ListItem>
//       <ListIcon as={SettingsIcon} />
//       <NavLink to="settings">Settings</NavLink>
//     </ListItem>
//   </List>
// </GridItem>
// <GridItem bg="brand.300">
//   <Outlet />
// </GridItem>
// </Grid> );