export interface Record {
    id: string;
    webImage: Image;
    longTitle: string;
    hasImage: boolean;
}

export interface FavoriteRecord {
    id: string;
    webImage: Image;
    longTitle: string;
    hasImage: boolean;
}

export interface Image {
    url: string;
}

export interface MainGalleryProps {
    records: Record[];
}

export interface ArtCardProps {
    record: Record;
    handleFavorite: (record: Record) => void; 
}

export interface FavoriteArtCardProps {
    favoriteRecord: FavoriteRecord;
    handleDelete: (id:string) => void;
}