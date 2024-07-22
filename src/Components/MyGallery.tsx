import React from 'react'
import '../CSS/MyGallery.css'
import ArtCard from './ArtCard'
import { useFavorites } from './Favorites'
import FavoriteArtCard from './FavoriteArtCard'

const MyGallery: React.FC = () => {
    const [favoriteRecords] = useFavorites()

    const favoriteArtCards = favoriteRecords.map(favoriteRecord => {
        return (
            <FavoriteArtCard 
            key={favoriteRecord.id} 
            favoriteRecord={favoriteRecord}
            />
        )   
    })
    return (
        <div className='my-gallery'>
            <h2 className="MyGallery-Title">My Gallery</h2>
            {favoriteArtCards}
            {/* <MyGallery favoriteRecords={favoriteRecords} /> */}
        </div>
    )
}

export default MyGallery;