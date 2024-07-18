"use client"
import '../CSS/App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import MainGallery from './MainGallery'
import MyGallery from './MyGallery'
import imageFetch from './ApiCalls'
import ArtCard from './ArtCard'
// import sampleVid from '../Assets/sampleVid.mov'
import Logo from '../Assets/Logo.png'

// type Props = {
//   title: string,
// }

interface Record {
  image: string[];
  title: string;
  description: string;
  dated: string;
  creditline: string;
  century: string;
  dimensions: string;
  id: number;
}

interface Props {
  record: Record;
}


const App: React.FC = () => {
  const [allRecords, setAllRecords] = useState([])
  console.log("allRecords:", allRecords)

  useEffect(() => {
    fetch('https://api.harvardartmuseums.org/object?size=30&apikey=02dc6b3b-1185-4e3f-91fa-675c61c02e3f')
      .then(response => response.json())
      .then(data => setAllRecords(data.records))
      .catch(error => console.error('Failed to fetch records', error))
  }, [])


  // const handleFavorite = (id: number) => {
  //   setAllRecords(allRecords.map(record => record.id === id ? { ...record, isFavorite: !record.isFavorite } : record
  //   ))
  // }

  return (
    <main className='AppContainer'>
      <nav>
        <Link to='/MainGallery'>Main Gallery</Link>
        <Link to='/MyGallery'> My Gallery</Link>
      </nav>
      <Routes>
        <Route path='/MainGallery' element={allRecords.map(record => <MainGallery record={record} />)} />
        <Route path='/MyGallery' element={<MyGallery />} />
      </Routes>
      <div>
        <img src={Logo} className="main-logo" />
      </div>
    </main>

  )
}

export default App