import React from 'react'
import '../CSS/ArtCard.css'
import { Record, Image, ArtCardProps } from '../Utility/Types'


const ArtCard: React.FC<ArtCardProps> = ({ record }) => {
    return (
        record.webImage && record.hasImage ? (
            <div className="art-card">
                <h3>{record.longTitle}</h3>
                <img src={record.webImage.url} alt={record.longTitle} />
                <button className="favorite-button">+</button>
            </div>
        ) : null
    );
};

export default ArtCard; 