import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { useEffect, useState } from 'react'
import { Record } from '../Utility/Types'
import { useFavorites } from './Favorites'
import { fetchArtRecords } from './ApiCalls'

const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [favoriteRecords, setFavoriteRecords] = useFavorites();
    const [isLoading, setLoading] = useState(false);

    function handleFavorite(record: Record) {
        const isAlreadyFavorited = favoriteRecords.some(favoriteRecord => favoriteRecord.id === record.id)

        if (!isAlreadyFavorited) {
            setFavoriteRecords([...favoriteRecords, record])
        }
    }

    useEffect(() => {
        const loadRecords = async () => {
            try {
                setLoading(true)
                const paintings = await fetchArtRecords()
                setAllRecords(paintings)
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch records. 😞')
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
                {isLoading ? <p className='loadingText'>...loading Art 🎭🖼️</p> : artCards}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    )
}

export default MainGallery