import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../Context/context'
import './wishlist.item.css'

function WishlistItem() {
    const {wishlistProducts, handleRemoveProductFromWishlist} = useLocalStorage()

    if(!wishlistProducts || wishlistProducts.length === 0) {
        return (
            <div className='p-3'>
                <div>Você não possui nenhum item adicionado à sua lista de desejos.</div>
                <div>
                    Clique
                    <Link className='m-1 home-link' to={'/home'}>
                        aqui
                    </Link>
                    para voltar.
                </div>
            </div>
        )
    } 

    return (
        <div className='item-list'>
            {wishlistProducts && wishlistProducts.map((product) => {
                return (
                    <div className="product">
                        <Link key={product.productUrl} to={`/products/${product.productUrl}`} className="product-link">
                            <img alt={product.imgAlt} src={product.imgLink}/>
                            <p className="product-name">{product.name}</p>
                        </Link>
                    <span className="product-remove" onClick={() => handleRemoveProductFromWishlist(product)}>Remover da lista de desejos</span>
                </div>
                )
            })}
        </div>
    )
}

export default WishlistItem;