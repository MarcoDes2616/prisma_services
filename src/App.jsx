import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setIsLoading } from './store/slices/isLoading.slice'

function App() {
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))
    const interval = setTimeout(() => {
      dispatch(setIsLoading(false))
  }, 2000)
    return () => clearInterval(interval)
  }, [])


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
