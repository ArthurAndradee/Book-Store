import { faCircleCheck, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../../Context/context';
import { Link } from 'react-router-dom';
import './product.menu.css'
import { v4 } from 'uuid';

export interface ProductInfo {
    imgAlt: string;
    discountedPrice: number;
    id: string,
    name: string,
    type: string,
    price: number,
    catchPhrase: string,
    imgLink: string,
    productUrl: string,
}

interface ProductMenuProps extends ProductInfo {
    createId: (id: string) => void; 
}

function ProductMenu(props: ProductMenuProps,) {
    const {handleAddProductToCart, handleAddProductToWishlist, wishlistProducts} = useLocalStorage()
    const [isProduictInCart, setIsProduictInCart] = useState(false)
    const [isProductInWishlist, setIsProductInWishlist] = useState(false)
    const [wishlistButtonBackgroundDisplay,setWishlistButtonBackgroundDisplay] = useState('')
    const [identificator, setIdentificator] = useState('')

    const [product, setProduct] = useState<ProductInfo>({
        id: props.id,
        name: props.name,
        type: props.type,
        price: props.price,
        catchPhrase: props.catchPhrase,
        discountedPrice: props.discountedPrice,
        imgAlt: props.imgAlt,
        imgLink: props.imgLink,
        productUrl: props.productUrl,
    })

    useEffect(() => {
        setProduct(prevState => ({
          ...prevState,
          id: identificator
        }));
    }, [identificator]);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    
        const newIdentificator = v4();
        setIdentificator(newIdentificator);
    
        props.createId(newIdentificator);
        console.log(newIdentificator);
        
        handleAddProductToCart(product);
        setIsProduictInCart(true)
    };

    const handleWishlist = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(wishlistProducts) {
            const productExistsInCart = wishlistProducts.some(item => item.name === product.name);
                if (!productExistsInCart) {
                    handleAddProductToWishlist(product);
                    setWishlistButtonBackgroundDisplay('none')
                } else {
                    setIsProductInWishlist(true);
                }
        }
    };
    
    return (
        <div className='menu-container'>
            <h3 className='product-title'>{props.name}</h3>
            <div className='product-type'>{props.type}</div>
            <div className='price'>R$ {props.price.toFixed(2)}</div>
            <div className='product-catch-phrase'>{props.catchPhrase}</div>            
            {isProduictInCart ? (
                <>
                <div style={{display:'flex'}}>
                    <FontAwesomeIcon style={{margin:'6px 6px 0 0'}} icon={faCircleCheck} />
                    <div>Produto adicionado ao carrinho</div>
                </div>
                <Link to={'/cart'}>
                    <button className='btn btn-primary' id='see-cart'>Ver carrinho</button>
                </Link>
                </>
            ) : (
                <>
                <div className='product-options'>
                    <button type='submit' className='btn btn-primary' id='cart-button' onClick={handleSubmit}>Adicionar ao carrinho</button>
                    <button className='btn btn-primary' id='wish-button' style={{display: wishlistButtonBackgroundDisplay}}  onClick={handleWishlist}><FontAwesomeIcon icon={faHeart}/></button>
                    {isProductInWishlist ? (
                        <>
                            <div className='text-danger' id='size-warning'>Item já adicionado à lista de desejos</div>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </div>
                </>
            )}
        </div>
    )
}

export default ProductMenu;