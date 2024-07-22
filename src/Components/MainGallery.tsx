import React, { useEffect, useState } from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { Record } from '../Utility/Types'
import { useFavorites } from './Favorites'
import { FavoriteRecord } from '../Utility/Types'
import { fetchArtRecords } from './ApiCalls'



const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState<string | null>(null);
   const [favoriteRecords, setFavoriteRecords] = useFavorites();

    function handleFavorite(record: Record) {
        const isAlreadyFavorited = favoriteRecords.some(favoriteRecord => favoriteRecord.id === record.id)

        if (isAlreadyFavorited) {
            return setFavoriteRecords(favoriteRecords.filter(favoriteRecord => favoriteRecord.id !== record.id))
        } else {
            setFavoriteRecords([...favoriteRecords, record])    
        }
    }

    useEffect(() => {
        const loadRecords = async () => {
            try {
                const paintings = await fetchArtRecords()
                setAllRecords(paintings)
            } catch (error) {
                setError('Failed to fetch records.')
            }
        }
        loadRecords()
    }, [])

    const artCards = allRecords.map(record => {
        return (
            <div key={record.id}>
                <ArtCard
                record={record}
                handleFavorite={handleFavorite}
                />
            </div>
        )
    })

    return (
          <div className='main-gallery'>
            <div className='header-wrapper'>
                <h1 className="MainGallery-Title">Main Gallery</h1>
            </div>
            {error ? <p className="error-message">{error}</p> : artCards}
          </div>
    )
}

export default MainGallery