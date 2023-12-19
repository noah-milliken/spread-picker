import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ColorModeScript} from "@chakra-ui/react";
import { ChakraProvider} from "@chakra-ui/react";
import theme from './theme'
import AuthenticationGuard from "./utils/AuthenticationGuard";
console.log(theme)
// import Players from "./components/Players";
import Profile from "./components/Profile";
import League from "./components/League";
import NotFound from './components/NotFound' 
import Picks from "./components/Picks";
// layouts
import RootLayout from "./layouts/RootLayout"; 
import { ProfileLayout } from "./layouts/ProfileLayout";
import Callbacks from "./components/Callbacks";
import AuthProviderLayout from "./utils/AuthProviderLayout";
import Landing from "./components/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProviderLayout/>}>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="profile" element={
      <AuthenticationGuard component={ProfileLayout} />}>
        <Route path='dashboard'element={<Profile/>} />
        <Route path="callback" element={<Callbacks />} />
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
