import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { useEffect, useState } from 'react'
import { Record } from '../Utility/Types'
import { useFavorites } from './Favorites'
import { fetchArtRecords } from './ApiCalls'

// interface MainGalleryProps {
//     records: Record[];
// }

const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [favoriteRecords, setFavoriteRecords] = useFavorites();

    function handleFavorite(record: Record) {
        const isAlreadyFavorited = favoriteRecords.some(favoriteRecord => favoriteRecord.id === record.id)

        if (!isAlreadyFavorited) {
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
            <div className='headerWrapper'>
                <h2 className="MainGallery-Title">Main Gallery</h2>
            </div>
            <div className='card-wrapper'>
                {error ? <p className="error-message">{error}</p> : artCards}
            </div>
        </div>
    )
}

export default MainGallery