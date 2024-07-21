import React from 'react'
import '../CSS/FavoriteArtCard.css'
import { FavoriteArtCardProps } from '../Utility/Types'

const FavoriteArtCard: React.FC<FavoriteArtCardProps> = ({ favoriteRecord }) => {
    return (
        <div className="favorite-art-card">
            <h3>{favoriteRecord.longTitle}</h3>
            <img src={favoriteRecord.webImage.url} alt={favoriteRecord.longTitle} />
            <button className="favorite-button">-</button>
        </div>
        )
}
export default FavoriteArtCard