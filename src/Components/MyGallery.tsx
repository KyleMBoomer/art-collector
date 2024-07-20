import React from 'react'
import '../CSS/MyGallery.css'
import ArtCard from './ArtCard'
import { useFavorites } from './Favorites'

const MyGallery: React.FC = () => {
    const [favoriteRecords] = useFavorites()

    return (
        <div className="my-gallery">
            <h2>Favorites</h2>
            {favoriteRecords.map((record) => (
                <ArtCard key={record.id} record={record} />
            ))}
        </div>
    );
};

export default MyGallery;
