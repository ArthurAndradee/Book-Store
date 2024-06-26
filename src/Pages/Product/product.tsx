import { useState } from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader/header';
import ProductDisplay from '../../Components/ProductPage/ProductDisplay/product.display';
import ProductMenu from '../../Components/ProductPage/ProductMenu/product.menu';
import TopNav from '../../Components/TopNavComponent/top.nav';
import './product.css';

interface ProductProps {
    id: string
    name: string
    type: string
    price: number
    discountedPrice: number
    overview: string
    imgLink: string
    imgAlt: string
    productUrl: string
    quantity: number
  }

function ProductPage(props: ProductProps) {
  const [ ,setId] = useState<string>(props.id);

  const createId = (id: string) => {
    setId(id);
  };

    return (
        <div>
            <HomeHeader />
            <TopNav name={props.name} />
            <div className='content'>
                <ProductDisplay imgLink={props.imgLink} />
                <ProductMenu 
                  id={props.id}
                  name={props.name}
                  type={props.type}
                  price={props.price}
                  discountedPrice={props.discountedPrice} 
                  overview={props.overview}
                  imgLink={props.imgLink}
                  imgAlt={props.imgAlt} 
                  productUrl={props.productUrl}
                  createId={createId} 
                  quantity={props.quantity}
                />
            </div>
            
        </div>
    )
}

export default ProductPage;