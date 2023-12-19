import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <Button  onClick={handleLogin}>
      Log In
    </Button>
  );
};