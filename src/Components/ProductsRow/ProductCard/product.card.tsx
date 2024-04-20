import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './product.card.css'
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
    imgAlt: string,
    imgLink: string,
    name: string,
    price: number,
    discountedPrice: number,
    variations: string,
    productUrl: string,
}

function ProductCard(props: ProductCardProps) {
    const [doesItemHaveDiscount] = useState(props.discountedPrice > 0);

    return (
        <div className="product">
            <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            <Link key={props.productUrl} to={`/products/${props.productUrl}`} className="product-link">
                <img alt={props.imgAlt} src={props.imgLink}/>
                <p className="product-name">{props.name}</p>
            </Link>
            <span className="product-price">R$
                {doesItemHaveDiscount ? (
                    <>
                    <div className="product-price-discount">{props.price.toFixed(2)}</div> {props.discountedPrice.toFixed(2)}
                    </>
                ) : (
                    <>
                    {props.price.toFixed(2)}
                    </>
                )}
            </span>
            <span className="product-variations">{props.variations}</span>
        </div>
    )
}
 
export default ProductCard;