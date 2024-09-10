import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { Card } from 'react-bootstrap'
import Cardview from './components/Cardview'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import PostAd from './pages/PostAd'
import Myads from './pages/Myads'
import EditProfile from './pages/EditProfile'



function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/footer' element={<Footer/>}/>
       
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/postad' element= {<PostAd/>}/>
        <Route path='/myads' element= {<Myads/>}/>
        <Route path='/editprofile' element= {<EditProfile/>}/>


        {/*<Route path='/cardview' element={<Cardview/>}/>*/}

        <Route/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
