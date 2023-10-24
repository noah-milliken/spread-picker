import { NavLink, Outlet } from "react-router-dom";
import { Grid, GridItem, List, ListItem, ListIcon } from "@chakra-ui/react";
import { SettingsIcon, ArrowRightIcon } from "@chakra-ui/icons";
export const ProfileLayout = () => {
  const weeks = Array.from({length: 18}, (_, i) => i + 1)
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} className="profile-layout">
      <GridItem className="profile-nav" colSpan={2}>
        <List spacing={2}>
        <ListIcon as={ArrowRightIcon} />
        {weeks.map((week) => (
          <ListItem key={week} >
            <NavLink to={`/profile/picks/${week}`}>Week {week}</NavLink>
          </ListItem>
        ))}
          <ListItem>
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowRightIcon} />
            <NavLink to="league">League</NavLink>
          </ListItem>
          <ListItem>
            <ListIcon as={SettingsIcon} />
            <NavLink to="settings">Settings</NavLink>
          </ListItem>
        </List>
      </GridItem>
      <GridItem colSpan={10}>
        <Outlet />
      </GridItem>
    </Grid>  );
};
