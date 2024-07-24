import '../CSS/PageNotFound.css'
import { Link } from "react-router-dom";


const PageNotFound: React.FC = () => {
    return (
        <div className="page-not-found">
            <h1>404-Page Not Found!</h1>
            <p>How did you get here????</p>
            <button className='homeButton'>
                <Link to="/" className='homeLink'>Go back to the homepage!</Link>
            </button>
        </div>
    )
}

export default PageNotFound