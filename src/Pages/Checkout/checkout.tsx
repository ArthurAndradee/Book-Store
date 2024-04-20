import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Headers/HomeHeader/header'
import './checkout.css'
import CardPage from '../../Components/Checkout/CardPage/card.page';
import ShippingPage from '../../Components/Checkout/ShippingPage/shipping.page';
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DestinationInfo {
    id: string
    name: string
    surName: string
    phoneNumber: string
    cpf: string
    cep: string
    address: string
    addressNumber: string
    complement: string
    neighbourhood: string
    city: string
    uf: string
}

function Checkout(props: DestinationInfo) {
    const [isShippingSelected, setIsShippingSelected] = useState(true)

    const handleShippingClick = () => {
        setIsShippingSelected(true);
    };

    const handlePaymentClick = () => {
        setIsShippingSelected(false);
    };

    const handleStateChange = () => {
        setIsShippingSelected(!isShippingSelected)
    }

    return (
        <div> 
            <Header />
            <div className='checkout-section'>
                <div className='checkout-nav'>
                    {isShippingSelected ? (
                        <FontAwesomeIcon icon={faCircleDot} style={{margin:'5px'}} />
                    ) : (
                        <FontAwesomeIcon icon={faCircle} style={{margin:"5px"}} id='foo'/>
                    )}
                    <div className='checkout-sub' onClick={handleShippingClick}>Frete</div>
                    {isShippingSelected ? (
                        <FontAwesomeIcon icon={faCircle} style={{margin:"5px"}} id='foo'/>
                    ) : (
                        <FontAwesomeIcon icon={faCircleDot} style={{margin:'5px'}} />
                    )}
                    <div className='checkout-sub' onClick={handlePaymentClick}>Revisão e pagamentos</div>
                </div>
                <div>
                    {isShippingSelected ? (
                        <ShippingPage 
                        id={props.id}
                        name={props.name}
                        surName={props.surName}
                        phoneNumber={props.phoneNumber}
                        cpf={props.cpf}
                        cep={props.cpf}
                        address={props.address}
                        addressNumber={props.addressNumber}
                        complement={props.complement}
                        neighbourhood={props.neighbourhood}
                        city={props.city}
                        uf={props.uf}
                        handleStateChange={handleStateChange}                     
                        />
                    ) : (
                        <CardPage />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;