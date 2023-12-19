
import { withAuthenticationRequired }  from '@auth0/auth0-react'
// import { PageLoader } from "./page-loader";

// eslint-disable-next-line react/prop-types
const AuthenticationGuard = ({component}) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => {
            <div>
                <h1>loading</h1>
            </div>
        }
    })
  return (
    <Component />
  )
}

export default AuthenticationGuard