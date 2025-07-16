import './App.css'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Test from './components/Test'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/user/:id" element={<Test />}></Route>
      </Routes>
    
    </>
  )
}

export default App
