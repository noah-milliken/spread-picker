import { Auth0Provider } from '@auth0/auth0-react'
import {Outlet } from 'react-router-dom'

const AuthProviderLayout = () => {
    const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID
    const callback = import.meta.env.VITE_APP_AUTH0_CALLBACK_URL

    if(!(domain && clientId && callback)){
      return null
    }
  return ( 
  <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
    redirect_uri: callback
  }}
  >
    <Outlet />
  </Auth0Provider>
  )
}

export default AuthProviderLayout

