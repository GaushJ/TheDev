import React, { useState, useEffect } from 'react'
import Home from './Home'

import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Signup from './Pages/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import AndroidDev from './Pages/AndroidDev'
import WebDev from './Pages/WebDev'
import Blockchain from './Pages/Blockchain'
import Ar from './Pages/Ar'
import Dsa from './Pages/Dsa'
import Categories from './Pages/Categories'
import VideoComponent from './Components/VideoComponent'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
   const [user, setUser] = useState(null)

   useEffect(() => {
     const getUser = () => {
       fetch('http://localhost:5000/auth/login/success', {
         method: 'GET',
         credentials: 'include',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Credentials': true
         }
       })
         .then((response) => {
           if (response.status === 200) return response.json()
           throw new Error('authentication has been failed!')
         })
         .then((resObject) => {
           setUser(resObject.user)
         })
         .catch((err) => {
           console.log(err)
         })
     }
     getUser()
   }, [])
  return (
    <>
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route
          path="/login"
          element={user ? <Navigate to="/categories" /> : <Signup />}
        /> 
         <Route path="/categories" element={<Categories />} /> 

        <Route path="/andDev" element={<AndroidDev />} >
        </Route>
          <Route path="andDev/:coursename" element={<VideoComponent />} />
        <Route path="/webDev" element={<WebDev />} />
          <Route path="webDev/:coursename" element={<VideoComponent />} />
        <Route path="/block" element={<Blockchain />} />
          <Route path="block/:coursename" element={<VideoComponent />} />
        <Route path="/ar" element={<Ar />} />
          <Route path="ar/:coursename" element={<VideoComponent />} />
        <Route path="/dsa" element={<Dsa />} />
          <Route path="dsa/:coursename" element={<VideoComponent />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>

      <Footer />
    </>
  )
}

export default App
