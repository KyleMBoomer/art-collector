import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { useEffect, useState } from 'react'
import { Record } from '../Utility/Types'
import { useFavorites } from './Favorites'
import {fetchArtRecords}  from '../Utility/ApiCalls'
import sadMan from '../Assets/Van_Gogh_-_Trauernder_alter_Mann.jpeg'

const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState('');
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
                setError('Sorry, we are experiencing an error on our end. Try again later!')
            }
        }
        loadRecords()
    }, [])

    const artCards = allRecords.map(record => {
        const isAlreadyFavorited = favoriteRecords.some(favoriteRecord => favoriteRecord.id === record.id)

        return (
            <div key={record.id}>
                <ArtCard
                    record={record}
                    handleFavorite={handleFavorite}
                    favorited={isAlreadyFavorited}
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
            {error ? (
                <div className='errorWrapper'>
            <p className="error-message">{error}</p>
            <img src={sadMan} alt='sad man'/>
            </div>
        ) : isLoading ? (
            <p className='loadingText'>
                <span> . </span>
                <span> . </span>
                <span> . </span>
                <span> l </span>
                <span> o </span>
                <span> a </span>
                <span> d </span>
                <span> i </span>
                <span> n </span>
                <span> g </span> 
                <span> A </span>
                <span> r </span>
                <span> t </span>
                 🎭🖼️
            </p>
        ) : (
            artCards
        )}
            </div>
        </div>
    )
}

export default MainGallery