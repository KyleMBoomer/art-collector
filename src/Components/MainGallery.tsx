import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { Record, Image } from '../Utility/Types'
import { useEffect, useState } from 'react'

interface MainGalleryProps {
    records: Record[];
    // handleFavorite: (id: number) => void;
}

const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);

    useEffect(() => {
        fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25')
            .then(response => response.json())
            .then(data => {
                console.log(data.artObjects)
                setAllRecords([...data.artObjects])
            })
            .catch(error => console.error('Failed to fetch records', error))
    }, [])

    const artCards = allRecords.map(record => {
        return (
            <div key={record.id}>
                <ArtCard
                    record={record}
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
            {artCards}
            </div>
        </div>
    )
}

export default MainGallery