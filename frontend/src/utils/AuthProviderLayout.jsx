import { Auth0Provider } from '@auth0/auth0-react'
import {useNavigate, Outlet } from 'react-router-dom'

const AuthProviderLayout = () => {
    const navigate = useNavigate()
    const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID
    const callback = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL


    const onRedirectCallback = (appstate) => {
      navigate(appstate?.returnTo || window.location.pathname)
    }
    // console.log("Domain:", domain);
    // console.log("Client ID:", clientId);
    // console.log("Redirect URI:", callback);
    if(!(domain && clientId && callback)){
      return null
    }
  return ( 
  <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
    redirect_uri: callback
  }}
  onRedirectCallback={onRedirectCallback}
  >
    <Outlet />
  </Auth0Provider>
  )
}

export default AuthProviderLayout

