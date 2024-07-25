import '../CSS/ArtCard.css'
import { ArtCardProps } from '../Utility/Types'

const ArtCard: React.FC<ArtCardProps> = ({ record, favorited, handleFavorite }) => {
    return (
        record.webImage && record.hasImage ? (
            <div className="art-card">
                <h3>{record.longTitle}</h3>
                <img src={record.webImage.url} alt={record.longTitle} />
                <button onClick={() => handleFavorite(record)} disabled={favorited} className={favorited ? "favoritedAlready-button" : "favorite-button"}>+</button>
            </div>
        ) : null
    );
};

export default ArtCard; 