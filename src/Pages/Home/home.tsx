import "./home.css"
import ProductsRow from "../../Components/ProductsRow/ProductsRow/product.row";
import Footer from "../../Components/Footer/footer";
import HomeHeader from "../../Components/Headers/HomeHeader/header";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="body">

            <HomeHeader />
                
            <main>

                <div className="ads-container">

                    <section className='adBox'>
                        <div className="background-img background-text" id="ad-1">
                            <h2 className="ad-title">Converse X Martine Ali</h2>
                            <p className="ad-description">Explore a fusão única de elementos clássicos e modernos nessa colaboração.</p>
                            <Link to={'/products/converse-x-martine-ali-chuck-70-xhi-preto'} className="ad-buy-link">
                                <div className="ad-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="ad-2"></div>
                        <div className="background-img" id="ad-3"></div>
                    </section>
                    
                    <section className='adBox-2'>
                        <div className="background-img background-text" id="ad-4">
                            <h2 className="ad-title">Modern Lift Chrome Queen</h2>
                            <p className="ad-description">Libere seu lado punk no estilo assinado Chuck Taylor. </p>
                            <Link to={'/products/chuck-taylor-all-star-modern-lift-chrome-queen-preto'} className="ad-buy-link">
                                <div className="ad-buyButton">
                                    COMPRE AGORA
                                </div>
                            </Link>
                        </div>
                        <div className="background-img" id="ad-5"></div>
                        <div className="background-img" id="ad-6"></div>
                    </section>

                </div>

                <ProductsRow />

                <div className='large-adBox'>

                    <section className="background-img background-text" id="ad-7">
                        <div className="large-ad-box">
                            <h2>ONE STAR</h2>
                            <p className="ad-description">O clássico renovado: a tradição do skate dos anos 90, agora com tecnologia de amortecimento CX.</p>
                            <div className="large-ad-buyButton">
                                <Link to={'/products/one-star-pro-cano-baixo-normal-preto'} className="ad-buy-link">COMPRE AGORA</Link>
                            </div>
                        </div>
                    </section>

                </div>

                <Footer />

            </main>
        </div>
    )
}

export default HomePage;