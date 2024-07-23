import React from 'react'
import '../CSS/MyGallery.css'
import ArtCard from './ArtCard'
import { useFavorites } from './Favorites'
import FavoriteArtCard from './FavoriteArtCard'
import { Link } from "react-router-dom";


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
        <div className="my-gallery">
            <h2 className="MyGallery-Title">My Gallery</h2>
            {favoriteArtCards.length > 0 ? (favoriteArtCards) : (
                <div>
                    <p>No favorites yet! 😞</p>
                    <button className='backToMain'>
                    <Link to="/MainGallery" className='mainGalleryLink'>Choose your favorites now!</Link>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MyGallery;