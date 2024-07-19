"use client"
import '../CSS/App.css'
import { Routes, Route, Link } from 'react-router-dom'
import MainGallery from './MainGallery'
import MyGallery from './MyGallery'
import Logo from '../Assets/Logo.png'
import MainPage from './MainPage'
import Footer from './Footer'

const App: React.FC = () => {
  return (
    <main className='AppContainer'>
      <div className="Header">
        <img src={Logo} className="main-logo" alt="Logo" />
        <nav className="Links">
          <Link to='/MainGallery' className="MainGallery-button">Main Gallery</Link>
          <p className="big-slash">/</p>
          <Link to='/MyGallery' className="MyGallery-button"> My Gallery</Link>
        </nav>
      </div>
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