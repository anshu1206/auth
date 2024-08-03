import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import GetQuotes from './components/GetQuotes'
import AddProduct from './components/AddProduct'
import Shop from './components/shop'
export default function App() {
  return (
    <>
      <Router>
      <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/quote' element={<Quote/>}/>
              <Route path='/getquote' element={<GetQuotes/>}/>
              <Route path='/addProduct' element={<AddProduct/>}/>
              <Route path='/shop' element={<Shop/>}/>
          </Routes>
      </Router>
    </>
  )
}