import React, { useEffect, useState } from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'
import { Record } from '../Utility/Types'
import { fetchArtRecords } from './ApiCalls'


const MainGallery: React.FC = () => {
    const [allRecords, setAllRecords] = useState<Record[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRecords = async () => {
            try {
                const paintings = await fetchArtRecords()
                setAllRecords(paintings)
            } catch (error) {
                setError('Failed to fetch records.')
            }
        }
        loadRecords()
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
            <div className='header-wrapper'>
                <h1 className="MainGallery-Title">Main Gallery</h1>
            </div>
            {error ? <p className="error-message">{error}</p> : artCards}


        </div>
    )
}

export default MainGallery