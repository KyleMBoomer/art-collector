import React from 'react'
import '../CSS/MyGallery.css'
import { useFavorites } from './Favorites'
import FavoriteArtCard from './FavoriteArtCard'
import { Link } from "react-router-dom";


const MyGallery: React.FC = () => {
    const [favoriteRecords, setFavoriteRecords] = useFavorites()

    function handleDelete(id:string) {
        const deleteFavorite = favoriteRecords.filter(record => record.id !== id)
        setFavoriteRecords(deleteFavorite)
    }

    const favoriteArtCards = favoriteRecords.map(favoriteRecord => {
        return (
            <FavoriteArtCard
                key={favoriteRecord.id}
                favoriteRecord={favoriteRecord}
                handleDelete={handleDelete}
            />
        )
    })
    return (
        <div className="my-gallery">
            <h1 className="MyGallery-Title">My Gallery</h1>
            
            {favoriteArtCards.length > 0 ? (<div className='favoriteCard-wrapper'>{favoriteArtCards}</div>) : (
                <div className="navWrap">
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