import { useAuth0 } from "@auth0/auth0-react";

const Callbacks = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  console.log(user, isAuthenticated, isLoading)
  getAccessTokenSilently().then((token) => console.log(token));
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // return (
  //   <div>
  //   <h1>hello</h1>
  //   <h2>{user}</h2>
  //   </div>
  // );
  return (
    isAuthenticated && (
      <div>
        <h1>hello</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Callbacks;