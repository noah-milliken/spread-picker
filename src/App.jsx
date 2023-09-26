import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// components
import Home from './components/Home'
import Picks from './components/Picks'
import League from './components/League'
import Settings from './components/Settings'

// layouts
import RootLayout from './layouts/RootLayout'
import { ProfileLayout } from './layouts/ProfileLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<ProfileLayout />} >
        <Route path='picks' element={<Picks />}/>
        <Route path='League' element={<League />}/>
        <Route path='settings' element={<Settings />}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App