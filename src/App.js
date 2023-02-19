import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Rent from './Components/Rent';
import Buy from './Components/Buy';
import Sell from './Components/Sell';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Components/Contact';
import React,{ useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {

  const [loading,setLoading]=useState(true);


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  })

  return (
    <div className="App">
      {
        loading?
        <Loader/>
        :
      <Routes>
        <Route exact path="/" element={<><Navbar/><Home/><Footer/></>}></Route>
        <Route exact path="/rent" element={<><Navbar/><Rent/><Footer/></>}></Route>
        <Route exact path="/buy" element={<><Navbar/><Buy/><Footer/></>}></Route>
        <Route exact path="/sell" element={<><Navbar/><Sell/><Footer/></>}></Route>
        <Route exact path="/contact" element={<><Navbar/><Contact/><Footer/></>}></Route>
        <Route exact path="/login" element={<><Navbar/><Login/><Footer/></>}></Route>
        <Route exact path="/signup" element={<><Navbar/><Signup/><Footer/></>}></Route>
      </Routes>

      }
    </div>
  );
}

export default App;

/* <Router>
<Routes>
  <Route exact path="/" element={<><Navbar/><Home/><Footer/></>}></Route>
  <Route exact path="/rent" element={<><Navbar/><Rent/><Footer/></>}></Route>
  <Route exact path="/buy" element={<><Navbar/><Buy/><Footer/></>}></Route>
  <Route exact path="/sell" element={<><Navbar/><Sell/><Footer/></>}></Route>
  <Route exact path="/contact" element={<><Navbar/><Contact/><Footer/></>}></Route>
  <Route exact path="/login" element={<><Navbar/><Login/><Footer/></>}></Route>
  <Route exact path="/signup" element={<><Navbar/><Signup/><Footer/></>}></Route>
</Routes>
</Router> */
