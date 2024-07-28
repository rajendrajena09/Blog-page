import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The page isn't found</p>
            <Link to="/">Go Back to Home page</Link>
        </div>
    );
}
 
export default NotFound;