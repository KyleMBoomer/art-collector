
import type { Record } from './Types';

const fetchArtRecords = async (): Promise<Record[]> => {
    
    try {
        const res = await fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=brush&ps=30')
        if (!res.ok) {
            throw new Error('Failed to fetch')
        }
        const data = await res.json()
        return data.artObjects
    } catch (error) {
        console.error('Failed to fetch records.', error)
        throw error
    }
}

export  {fetchArtRecords}