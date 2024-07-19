import React, { useEffect, useState } from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { Record } from '../Utility/Types'


const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch records');
                }
                return response.json();
            })
            .then(data => {
                setAllRecords([...data.artObjects]);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [])


    return (
        <div className='main-gallery'>
            <h2 className="MainGallery-Title">Main Gallery</h2>
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                allRecords.map(record => (
                    <div key={record.id} className='art-card'>
                        <ArtCard record={record} />
                    </div>
                ))
            )}
        </div>
    )
}

export default MainGallery