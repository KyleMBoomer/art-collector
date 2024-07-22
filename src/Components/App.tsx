
"use client"
import '../CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import MainGallery from './MainGallery'
import MyGallery from './MyGallery'
import MainPage from './MainPage'
import Header from './Header'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import { FavoriteProvider } from './Favorites'

const App: React.FC = () => {

  return (
    <main className='AppContainer'>
      <Header />
      <FavoriteProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />   
        <Route path='/MainGallery'element={<MainGallery />} />
        <Route path='/MyGallery' element={<MyGallery />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </FavoriteProvider>
      <Footer />
    </main>
  )
}

export default App