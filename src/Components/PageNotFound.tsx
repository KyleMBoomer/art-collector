import '../CSS/PageNotFound.css'
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404-Page Not Found!</h1>
            <p>How did you get here????</p>
            <Link to="/">Go back to the homepage!</Link>
        </div>
    )
}

export default PageNotFound