import React from 'react'
import '../CSS/MainGallery.css'
import ArtCard from './ArtCard'

interface Record {
    image: object[]; // baseimageurl
    title: string;
    description: string;
    dated: string;
    creditline: string;
    century: string;
    dimensions: string;
    id: number;
}

interface Props {
    record: Record;
}

const MainGallery: React.FC<Props> = ({ record }) => {
    return (
        <div>
            <h2>Main Gallery</h2>
            < ArtCard record={record} />
        </div>
    )
}

export default MainGallery