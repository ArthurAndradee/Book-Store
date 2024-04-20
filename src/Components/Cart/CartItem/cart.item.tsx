import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../../Context/context';
import './cart.item.css'

function CartItem() {
    const {cartProducts} = useLocalStorage()
    const {handleRemoveProductFromCart} = useLocalStorage()

    if(!cartProducts || cartProducts.length === 0) {
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
            {cartProducts && cartProducts.map((product) => {
                return (
                    <div className='items-list'>
                        <div className='item-display'>
                            <Link to={`/products/${product.productUrl}`}>
                                <div className='item-img' style={{backgroundImage:"url(" + product.imgLink + ")" }}></div>
                            </Link>
                            <div className='item-info'>
                                <Link to={`/products/${product.productUrl}`}>
                                    <div className='item-name'>{product.name}</div>
                                </Link>
                                <div className='item-specifications'>
                                    <div className='item-variation'><b>Cor: </b> BLACK</div>
                                    <div className='item-variation'><b>Tamanho: </b> {product.productSize}</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-handle'>
                            <input type="number" id="quantity" name="quantity" min="1" />
                            <div className='item-functions'>
                                <div className='item-price'>{product.price.toFixed(2)}</div>
                                <div className='item-editing'>
                                    <div className='item-wish'>MOVER PARA LISTA DE DESEJOS</div>
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