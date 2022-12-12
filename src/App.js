import './App.css';
import HeaderTop from './components/HeaderTop/Headertop';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import { Overlay } from './utils';
import Routes from "./routes"
import { useState, useEffect } from 'react';
import Cart from './components/cart/Cart';
import SignUp from './components/signup/SignUp';
import Footer from './components/footer/Footer';
import { Route } from "react-router-dom"


function App() {
  const [isCartActive, setIsCartActive] = useState(false)
  const [isCartEnter, setIsCartEnter] = useState(false)
  const [isSignUpActive, setIsSignUpActive] = useState(false)
  const [isSignUpEnter, setIsSignUpEnter] = useState(false)

  useEffect(() => {
    if (isCartActive) {
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isCartActive])

  useEffect(() => {
    if (isSignUpActive) {
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSignUpActive])
  return (
    <div>
      <HeaderTop/>
      <Header setIsCartActive={setIsCartActive} setIsCartEnter={setIsCartEnter} setIsSignUpActive={setIsSignUpActive} setIsSignUpEnter={setIsSignUpEnter}/>
      <Route path="/">
        <Cart isCartActive={isCartActive} setIsCartActive={setIsCartActive} isCartEnter={isCartEnter} setIsCartEnter={setIsCartEnter} /> 
      </Route>
      <SignUp isSignUpActive={isSignUpActive} setIsSignUpActive={setIsSignUpActive} isSignUpEnter={isSignUpEnter} setIsSignUpEnter={setIsSignUpEnter}/> 
      <HeaderBottom/>
      <Routes/>
      <Footer />
      {
        isCartActive && <Overlay type="cart" state={isCartActive} callback={setIsCartActive}/>
      }
      {
        isSignUpActive && <Overlay type="singup" state={isSignUpActive} callback={setIsSignUpActive}/>
      }
    </div>
  );
}

export default App;
