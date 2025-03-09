import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ShowAllBlogsPage from './pages/ShowAllBlogsPage'
import CreateBlogPage from './pages/CreateBlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route  path="/register" element={<RegisterPage />} />
          <Route  path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<ShowAllBlogsPage />} />
          <Route exact path="/create" element={<CreateBlogPage />} />
          <Route exact path="/blog/:id" element={<SingleBlogPage />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App