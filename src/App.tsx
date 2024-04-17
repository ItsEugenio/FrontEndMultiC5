import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'


import Kits from './components/pages/Kits'
import AdminKits from './components/pages/AdminKits'
import ReportsKit from './components/pages/ReportsKit'
import RegistroUsuario from './components/pages/RegistroUsuario'
import LandingPage from './components/pages/LandingPage'

import { Theme } from '@radix-ui/themes';


function App() {
  return (
<Theme appearance="dark"> 
        <BrowserRouter>
          <Routes >
            <Route path='/' Component={Login} />
            <Route path='/registro' Component={RegistroUsuario} />
            <Route path='/kits' Component={Kits} />
            <Route path='/home-kits' Component={AdminKits} />
            <Route path='/reportes' Component={ReportsKit} />
            <Route path='/home' Component={LandingPage} />
          </Routes >
        </BrowserRouter>

        </Theme>
  )
}

export default App
