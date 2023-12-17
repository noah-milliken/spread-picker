import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ColorModeScript} from "@chakra-ui/react";
import { ChakraProvider} from "@chakra-ui/react";
import theme from './theme'
console.log(theme)
// import Players from "./components/Players";
import Profile from "./components/Profile";
import NavButtons from "./components/NavButtons";
import League from "./components/League";
import NotFound from './components/NotFound' 
import Picks from "./components/Picks";
// layouts
import RootLayout from "./layouts/RootLayout"; 
import { ProfileLayout } from "./layouts/ProfileLayout";
import Callbacks from "./components/Callbacks";
import AuthProviderLayout from "./utils/AuthProviderLayout";
import Players from "./components/Players"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProviderLayout/>}>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Players />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="callback" element={<Callbacks />} />
      <Route path="profile/:userid" element={<ProfileLayout />}>
        <Route index element={<Profile/>} />
        <Route path="league" element={<League />} />
        <Route path="picks/:week" element={<Picks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
    </Route>
  ),
);

function App() {

  return (
    
    <ChakraProvider  theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider router={router} />
    </ChakraProvider>
    
  );
}

export default App;
