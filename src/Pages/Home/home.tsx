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
                            <h2 className="ad-title">Amor & Gelato</h2>
                            <p className="ad-description">Descubra o doce segredo do amor em cada colher de gelato - uma experiência que derrete corações e encanta paladares</p>
                            <Link to={'/products/amor-&-gelato-Jenna-Evans-Welch'} className="ad-buy-link">
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
                            <h2 className="ad-title">Battle Royale</h2>
                            <p className="ad-description">Explore o thriller implacável e a reflexão social intensa em 'Battle Royale' - uma leitura que não pode ser ignorada.</p>
                            <Link to={'/products/battle-royale-Koushun-Takami'} className="ad-buy-link">
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
                            <h2>FAHRENHEIT 451</h2>
                            <p className="ad-description">Queime as ideias, salve o futuro: mergulhe no mundo incandescente de Fahrenheit 451 e descubra a liberdade proibida.</p>
                            <div className="large-ad-buyButton">
                                <Link to={'/products/Fahrenheit-451-Ray-Bradbury'} className="ad-buy-link">COMPRE AGORA</Link>
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