import React, { useEffect, useState, CSSProperties } from 'react'
import AOS from 'aos';
import "./App.css"
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";





const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    AOS.init({
      duration: 1000,
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <div className='app'>
      {
        loading ?
          <HashLoader
            style={{margin: "0 auto"}}
            color="#e78b00"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<Header />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
      }
    </div>
  )
}

export default App;