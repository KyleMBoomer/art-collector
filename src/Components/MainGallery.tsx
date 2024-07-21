import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { Record } from '../Utility/Types'
import { useEffect, useState } from 'react'
// import MyGallery from './MyGallery'
import { useFavorites } from './Favorites'
import { FavoriteRecord } from '../Utility/Types'

const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
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
        fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25')
            .then(response => response.json())
            .then(data => {
                setAllRecords([...data.artObjects])
            })
            .catch(error => console.error('Failed to fetch records', error))
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
            <h2 className="MainGallery-Title">Main Gallery</h2>
            {artCards}
            {/* <MyGallery favoriteRecords={favoriteRecords} /> */}
        </div>
    )
}

export default MainGallery