"use client"
import '../CSS/App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainGallery from './MainGallery'
import MyGallery from './MyGallery'
import MainPage from './MainPage'
import Header from './Header'
import Footer from './Footer'

const App: React.FC = () => {

  return (
    <main className='AppContainer'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />   
        <Route path='/MainGallery'element={<MainGallery />} />
        <Route path='/MyGallery' element={<MyGallery />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App