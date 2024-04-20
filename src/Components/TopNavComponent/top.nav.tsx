import { Link } from "react-router-dom";
import './top.nav.css'

interface ProductName{
    name: string
}

function TopNav(props: ProductName) {
    return (
        <div className='home-nav'>
            <Link style={{textDecoration:'none'}} to='/home'>
                <div className='home-link'>Home</div>
            </Link>
            <div className='home-link' style={{fontSize:'11px', color:'#dadada'}}>/</div>
            <h4 id='product-name'>{props.name}</h4>
        </div>
    )
}

export default TopNav;