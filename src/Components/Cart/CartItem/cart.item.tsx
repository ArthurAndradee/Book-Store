import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../../Context/context';
import './cart.item.css'

function CartItem() {
    const { cartProducts } = useLocalStorage()
    const { handleRemoveProductFromCart, handleCartQuantityIncrease, handleCartQuantityDecrease } = useLocalStorage()

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    if (cartProducts == null || cartProducts.length === 0) {
        return (
            <div className='p-3'>
                <div>Você não possui nenhum item em seu carrinho de compras.</div>
                <div>
                    Clique
                    <Link className='m-1 home-link' to={'/home'}>
                        aqui
                    </Link>
                    para continuar comprando.
                </div>
            </div>
        )
    }

    return (
        <div className='items-container'>
            {cartProducts.map((product) => {
                return (
                    <div className='items-list' key={product.id}>
                        <div className='item-display'>
                            <Link to={`/products/${product.productUrl}`}>
                                <div className='item-img' style={{ backgroundImage: "url(" + product.imgLink + ")" }}></div>
                            </Link>
                            <div className='item-info'>
                                <Link to={`/products/${product.productUrl}`}>
                                    <div className='item-name'>{product.name}</div>
                                </Link>
                                <div className='item-specifications'>
                                    <div className='item-variation'><b>Sinopse: </b> {truncateText(product.overview, 100)}</div>
                                    <div className='item-count'><b>Quantidade: </b> {product.quantity}</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-handle'>
                            <div className='btn btn-light' style={{height:'40px'}} onClick={() => {handleCartQuantityIncrease(product)}}>+</div>
                            <div className='btn btn-light' style={{height:'40px'}} onClick={() => {handleCartQuantityDecrease(product)}}>-</div>
                            <div className='item-functions'>
                                <div className='item-price'>{product.price.toFixed(2)}</div>
                                <div className='item-editing'>
                                    <div className='item-remove' onClick={() => handleRemoveProductFromCart(product)}>REMOVER ITEM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItem;
