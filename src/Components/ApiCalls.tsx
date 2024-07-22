export const fetchArtRecords = async (): Promise<any> => {
    try {
        const res = await fetch('https://www.rijksmuseum.nl/api/en/collection?key=Ac7mP6Ke&technique=painting&ps=25')
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