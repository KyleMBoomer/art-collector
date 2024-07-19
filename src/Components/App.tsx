"use client"
import '../CSS/App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainGallery from './MainGallery'
import MyGallery from './MyGallery'
import ArtCard from './ArtCard'
import Logo from '../Assets/Logo.png'
import { Record, Image } from '../Utility/Types'
import MainPage from './MainPage'


// const video = require('../Assets/sampleVideo1.mp4');

const App: React.FC = () => {
  // const [allRecords, setAllRecords] = useState<Record[]>([]);

  // useEffect(() => {
  //   fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=50')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.artObjects)
  //       setAllRecords([data.artObjects])
  //     })
  //     .catch(error => console.error('Failed to fetch records', error))
  // }, []);

  // const handleFavorite = (id: number) => {
  //   setAllRecords(allRecords.map(record =>
  //     record.id === id ? { ...record, favorite: !record.favorite } : record
  //   ));
  // };

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
        <Route
          path='/MainGallery'
          element={<MainGallery />}
        />
        <Route path='/MyGallery' element={<MyGallery />} />
      </Routes>

    </main>
  )
}

export default App