import '../CSS/ArtCard.css'
import { useState } from 'react'


interface Props {
    record: {
        image: string;
        title: string;
        description: string;
    }
}

const ArtCard: React.FC<Props> = ({ record }, handleFavorite) => {
    const { image, title, description } = record

    return (
        <div onChange={handleFavorite}>
            <img src={image} />
        </div>
    )
}

export default ArtCard