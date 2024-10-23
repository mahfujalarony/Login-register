import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './assets/SignUp.jsx'
import Login from './assets/Login.jsx'
import "bootstrap/dist/css/bootstrap.min.css"


createRoot(document.getElementById('root')).render(


  <StrictMode>
        <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}></Route>

        <Route path="/register" element={<SignUp />}></Route>

        <Route path="/login" element={<Login />}></Route>


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
