import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);