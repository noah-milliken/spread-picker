import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="elibaird.auth0.com" clientId="mWMZW68K19Dqakk3o4kbHPfZatHd4tqu" authorizationParams={{
      redirect_uri: "http://localhost:5173/callback"
    }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
