import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../../Context/context';
import './cart.item.css'
import { ProductInfo } from '../../ProductPage/ProductMenu/product.menu';
import { v4 } from 'uuid';
import React, { useState } from 'react';

function CartItem() {
    const { cartProducts } = useLocalStorage()
    const { handleRemoveProductFromCart, handleAddProductToCart } = useLocalStorage()

    const [previousQuantity, setPreviousQuantity] = useState<number>(0);

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const handleChangeProductQuantity = (product: ProductInfo) => {
        const copiedProduct = { ...product };
        copiedProduct.id = v4();
        handleAddProductToCart(copiedProduct)
    };

    const handleRemoveProductQuantity = (product: ProductInfo) => {
        handleRemoveProductFromCart(product);
    };

    const handleQuantityChange = (product: ProductInfo, event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity > previousQuantity) {
            handleChangeProductQuantity(product);
        } else if (newQuantity < previousQuantity) {
            handleRemoveProductQuantity(product);
        }
        setPreviousQuantity(newQuantity);
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

    const productCounts: { [key: string]: number } = {};
    cartProducts.forEach(product => {
        if (product.name in productCounts) {
            productCounts[product.name]++;
        } else {
            productCounts[product.name] = 1;
        }
    });

    const uniqueProducts = Array.from(new Set(cartProducts.map(product => product.name)))
        .map(name => cartProducts.find(product => product && product.name === name));

    return (
        <div className='items-container'>
            {uniqueProducts.map((product) => {
                if (!product) return null;
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
                                    <div className='item-count'><b>Quantidade: </b> {productCounts[product.name]}</div>
                                </div>
                            </div>
                        </div>
                        <div className='items-handle'>
                            <input type="number" id="quantity" name="quantity" min="1" value={productCounts[product.name]} onChange={(event) => handleQuantityChange(product, event)} />
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
