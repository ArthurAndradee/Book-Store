import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import WishlistItem from '../../Components/Wishlist/wishlist.item';
import './wishlist.css'

function Wishlist() {
    return (
        <div>
            <HomeHeader />
            <div className="category-products-container">
                <h1 className="category-products-row-title">Lista de desejos</h1>
                <div className="category-products">
                    <WishlistItem/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist;