import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const UserProfile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata ] = useState(null)
    console.log(user)
    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "dev-pjhofenh6o2nxibi.us.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              authorizationParams: {
                audience: `https://${domain}/api/v2/`,
                scope: "read:current_user",
              },
            });
            console.log('Access Token:', accessToken);
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            console.log('Metadata Response:', metadataResponse);
            const response = await metadataResponse.json()
            console.log('Full metadata response', response)
            const { user_metadata } = await metadataResponse.json();
           
            console.log('User Metadata:', user_metadata);
            setUserMetadata(user_metadata.user_metadata);
          } catch (error) {
            console.log('Error fetching user metadata:', error.message);
          }
        };
     
        getUserMetadata();
      }, [getAccessTokenSilently, user?.sub]);
      console.log("user",user)
  return (
    isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.sub}</p>
          <h3>User Metadata</h3>
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            "No user metadata defined"
          )}
        </div>
      )
    );
  
}

export default UserProfile