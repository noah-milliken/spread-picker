import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import theme from './theme'
// components
import Players from "./components/Players";
import League from "./components/League";
import NotFound from './components/NotFound' 
import Picks from "./components/Picks";
// layouts
import RootLayout from "./layouts/RootLayout"; 
import { ProfileLayout } from "./layouts/ProfileLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Players />} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route path="league" element={<League />} />
        <Route path="picks" element={<Picks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
