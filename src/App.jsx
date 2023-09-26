import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// components
import Home from "./components/Home";
import Picks from "./components/Picks";
import League from "./components/League";
import Settings from "./components/Settings";

// layouts
import RootLayout from "./layouts/RootLayout";
import { ProfileLayout } from "./layouts/ProfileLayout";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route path="picks" element={<Picks />} />
        <Route path="League" element={<League />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
