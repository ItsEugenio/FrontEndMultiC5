import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'


import Kits from './components/pages/Kits'
import AdminKits from './components/pages/AdminKits'
import ReportsKit from './components/pages/ReportsKit'

function App() {
  //Branch Eugenio
  return (
    <BrowserRouter>

      <Routes >
        <Route path='/' Component={Login} />
        <Route path='/kits' Component={Kits} />
        <Route path='/home-kits' Component={AdminKits} />
        <Route path='/reportes' Component={ReportsKit} />
      </Routes >
    </BrowserRouter>
  )
}

export default App
