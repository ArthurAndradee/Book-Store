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
    catchPhrase: string
    imgLink: string
    imgAlt: string
    productUrl: string
    productSize: string
    variations: string
  }

function ProductPage(props: ProductProps) {
  const [ ,setSelectedSize] = useState<string>(props.productSize);
  const [ ,setId] = useState<string>(props.productSize);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

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
                  catchPhrase={props.catchPhrase}
                  imgLink={props.imgLink}
                  imgAlt={props.imgAlt} 
                  productUrl={props.productUrl}
                  productSize={props.productSize}
                  variations={props.variations}                
                  onSizeChange={handleSizeChange}
                  createId={createId} 
                />
            </div>
            
        </div>
    )
}

export default ProductPage;