import React from 'react'

export interface Record {
    id: string;
    webImage: Image;
    longTitle: string;
    hasImage: boolean;
}

export interface Image {
    url: string;
}

export interface ArtCardProps {
    record: Record;
    handleFavorite: (id: string) => void;
}

