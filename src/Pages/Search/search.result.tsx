import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/footer';
import ProductCard from '../../Components/ProductsRow/ProductCard/product.card';
import { products } from '../../Database/products';
import './search.result.css'
import { useLocalStorage } from '../../Context/context';
import Header from '../../Components/Headers/HomeHeader/header';

function SearchResult() {
    const [showCartItemsQuantity, setShowCartItemsQuantity] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const {cartProducts} = useLocalStorage()
  
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    useEffect(() => {
      if (cartProducts?.length) {
        setShowCartItemsQuantity(true);
      } else {
        setShowCartItemsQuantity(false)
      }
  
    }, [showCartItemsQuantity, cartProducts]);
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
          <Header />
            <form className='search-input-container'>
              <input type='text' className='search-input' placeholder='Digite aqui...' onChange={handleSearchInputChange}/>
            </form> 
            <div className="category-products search-container">
                {filteredProducts.map((product) => (
                    <ProductCard
                        imgAlt={product.imgAlt}
                        imgLink={product.imgLink}
                        name={product.name}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        variations={product.variations}
                        productUrl={product.productUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult;