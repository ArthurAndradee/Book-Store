import { Link } from 'react-router-dom';
import './error.css'

function ErrorPage() {
    return (
        <div className='error-page'>            
            <h1 className='error-title'>404</h1>
            <h2 className='error-subtitle'>Not Found</h2>
            <Link className='link' to="/">Go back</Link>
        </div>
    )
}

export default ErrorPage;