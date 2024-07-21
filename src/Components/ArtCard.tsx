import React from 'react'
import '../CSS/ArtCard.css'
import { ArtCardProps } from '../Utility/Types'

const ArtCard: React.FC<ArtCardProps> = ({ record, handleFavorite }) => {
    return (
        record.webImage && record.hasImage ? (
            <div className="art-card">
                <h3>{record.longTitle}</h3>
                <img src={record.webImage.url} alt={record.longTitle} />
                <button onClick={() => handleFavorite(record)} className="favorite-button">+</button>
            </div>
        ) : null
    );
};

export default ArtCard; 