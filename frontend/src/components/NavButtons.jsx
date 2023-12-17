import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./buttons/Login-button";
import { LogoutButton } from "./buttons/Logout-button";
import { SignupButton } from "./buttons/Signup-button";



const NavButtons = () => {
  const {isAuthenticated} = useAuth0()

  return (
    <div>
      {!isAuthenticated && (
        <>
        <SignupButton/>
        <LoginButton/>
        </>
      )}
      {isAuthenticated && (
        <>
        <LogoutButton />
        </>
      )}
    </div>
  )
}

export default NavButtons

