
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Login from './pages/loginpage/Login'
import Home from './pages/homepage/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Pricing from './pages/pricing/Pricing'
import MovieDetails from './pages/moviedetails/MovieDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/movie/:imdbID' element={<MovieDetails/>}> 
        </Route>
        
        <Route path="/" element={<Layout />} >
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/pricing' element={<Pricing/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
