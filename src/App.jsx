import './App.css'
import Cardparent from './components/Cardparent'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Shops from './components/Shops'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import Cart from './components/Cart'
import FormikPractice from './components/FormikPractice'
import Fheader from './components/Fheader'
import Flanding from './components/Flanding'
import Fshops from './components/Fshops'
import Fabout from './components/Fabout'
import MainLanding from './components/MainLanding'
import Women from './components/Women'
import Men from './components/Men'
import Electronics from './components/Electronics'
import Homea from './components/Homea'
import Kitchen from './components/Kitchen'
import Baby from './components/Baby'
import Skincare from './components/Skincare'
import Jewel from './components/Jewel'
import Cosmestics from './components/Cosmestics'
import Fcart from './components/Fcart'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import Search from './components/Search'
import Details from './components/Details'
import Profile from './components/profile'
import Orders from "./components/Orders";
import Receipt from './components/Receipt'
import Transactions from './components/Transactions'
import Checkout from './components/Checkout'
import Address from './components/Address'
import Wallet from './components/Wallet'
function App() {

  return (
    <>
      {/* <Cardparent/> */}
      {/* <Header/> */}
      {/* <Landing/>
      <Shops/> */}

      <Fheader/>
      {/* <Skincare/> */}
      {/* <Women/> */}
      {/* <MainLanding/> */}
      {/* <Fshops/> */}
      {/* <Flanding/> */}
      <Routes> 
      <Route path='/' element={<MainLanding/>}/>
      <Route path='/about' element={<Fabout/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/homea' element={<Homea/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/baby' element={<Baby/>}/>
      <Route path='/skincare' element={<Skincare/>}/>
      <Route path='/jewel' element={<Jewel/>}/>
      <Route path='/cosmestics' element={<Cosmestics/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignIn/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Fcart/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/flanding' element={<Flanding/>}/>


  <Route path="/profile" element={<Profile/>} />
<Route path="/orders" element={<Orders />} />
<Route path="/receipt" element={<Receipt/>} />
<Route path="/transactions" element={<Transactions/>} />
<Route 
 path="/checkout" 
 element={<Checkout/>} 
/>
<Route 
 path="/address"
 element={<Address/>}
 
/>
<Route 
  path="/wallet" 
  element={<Wallet />} 
/>
    </Routes>
     <Footer/>

      {/* <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/shops' element={<Shops/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
    
      </Routes> */}
        

       
    </>
  )
}

export default App
