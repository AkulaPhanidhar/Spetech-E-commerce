import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import View from "./Pages/View"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/shop' element={ <Shop/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/view' element={ <View/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
