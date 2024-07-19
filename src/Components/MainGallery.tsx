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