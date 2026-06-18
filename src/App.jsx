import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import OrderNow from './pages/OrderNow'
import About from './pages/About'
import Contact from './pages/Contact'


import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import { useRef } from 'react';


function App() {
  const location = useLocation()

 const hideUpperFooter = ['/ordernow', '/about', '/contact'].includes(location.pathname)



  return (
    <>

      <NavBar />
      <main className="main-content mt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ordernow" element={<OrderNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer hideUpper={hideUpperFooter} />

    </>
  )
}

export default App
