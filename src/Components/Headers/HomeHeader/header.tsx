import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './header.css';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../../Context/context';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function Header() {
  const [showCartItemsQuantity, setShowCartItemsQuantity] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const {cartProducts} = useLocalStorage()

  useEffect(() => {
    if (cartProducts?.length) {
      setShowCartItemsQuantity(true);
    } else {
      setShowCartItemsQuantity(false)
    }

  }, [showCartItemsQuantity, cartProducts]);

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      setIsUserLoggedIn(true)
    }
  });

  var sliderSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <header className='app'>
      <div className="slider-container">
        <Slider {...sliderSettings} className='slider'>
            <h3 className='slider-text'>APROVEITE NOSSA PROMOÇÃO COM <h3 className='blueSliderText'>ATÉ 50% OFF!</h3></h3>
            <h3 className='slider-text'>NINGUÉM VÊ O MUNDO COMO NÓS {'>'} <h3 className='blueSliderText'> VEJA OS LANÇAMENTOS!</h3></h3>
            <h3><h3 className='blueSliderText'>FRETE GRÁTIS</h3><h3 className='smallSliderText'>nas compras acima de R$100!</h3></h3>
        </Slider>
      </div>

      <nav>
          <div className='logoBox'>
              <div className='shopTitle'><Link to={'/home'} style={{color:"#000000", textDecoration:"none"}}>BOOKSTORE</Link></div>
              <FontAwesomeIcon icon={faBook} style={{padding:"0px 5px 0 0"}}/>
          </div>

          <div className='navTitleBox'>
              <div className='navTitle'><a href={'/ficcao-cientifica'} className='navLink'>Ficcção Científica</a></div>
              <div className='navTitle'><a href={'/romance'} className='navLink'>Romance</a></div>
              <div className='navTitle'><a href={'/nao-ficcao'} className='navLink'>Não-Ficção</a></div>
              <div className='navTitle'><a href={'/promocoes'} className='navLink'>Promoções</a></div>
          </div>

          <div className='userOptions'>
            {isUserLoggedIn ? (
              <div onClick={() => login()}>Sair</div>
            ) : (
              <div onClick={() => login()}>Entrar</div>
            )}
              <div><Link to={'/wishlist'} style={{color:'#000000'}}><FontAwesomeIcon icon={faHeart} /></Link></div>
              <div style={{display:'flex'}}>
                  <Link to={'/cart'} style={{color:'#000000'}}><FontAwesomeIcon icon={faCartShopping} /></Link>
                  {showCartItemsQuantity && (
                    <div className='items-count'>{cartProducts?.length}</div>
                  )}
              </div>
          </div>
          <div className='searchBar'>
            <Link to={'/search'} style={{display:'flex', textDecoration:'none', width:'190px'}}>
              <div className='search-text'>Buscar</div>
              <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </Link>
          </div> 
      </nav> 

    </header>
  );
}

export default Header;