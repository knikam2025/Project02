import React from 'react'
import {BrowserRouter  as Routers , Routes , Route }from"react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
const App = () => {
  return (
    <>
    <Routers>
      <Routes>
        <Route path='/' element={<Register/>}   />


        <Route path='/login' element={<Login/>}   />

      </Routes>
    </Routers>
    
    
    
    </>
  )
}

export default App