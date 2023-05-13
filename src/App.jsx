import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      {isLoading && <Loader />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services/login' element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/services/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
