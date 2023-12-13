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
// components
import Landing from "./components/Landing";
// import Players from "./components/Players";
import Profile from "./components/Profile";
import League from "./components/League";
import NotFound from './components/NotFound' 
import Picks from "./components/Picks";
// layouts
import RootLayout from "./layouts/RootLayout"; 
import { ProfileLayout } from "./layouts/ProfileLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route  index element={<Landing/>}/>
      {/* <Route index element={ <Players />} /> */}
      <Route path="profile/:userid" element={<ProfileLayout />}>
        <Route index element={<Profile/>} />
        <Route path="league" element={<League />} />
        <Route path="picks/:week" element={<Picks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
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
