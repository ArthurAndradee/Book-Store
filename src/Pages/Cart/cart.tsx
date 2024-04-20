import Footer from '../../Components/Footer/footer';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import './cart.css'
import CartItem from '../../Components/Cart/CartItem/cart.item';
import CartOverview from '../../Components/Cart/CartOverview/cart.overview';

function Cart() {
    return (
        <div className='cart-wrapper'>
            <HomeHeader />

            <div className='cart-section'>
                <div className='cart-title'>
                    <h1 id='title'>Carrinho de Compras</h1>
                </div>
                <div className='cart-container'>
                    <div className='list-container'>
                        <CartItem/>
                    </div>
                    <CartOverview />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Cart;