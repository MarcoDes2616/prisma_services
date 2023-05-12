import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
