import { faBook, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <section className='newslatter-container'>
        <h4>Não perca nenhuma novidade</h4>
        <form>
          <input type='email' placeholder='Digite seu email'/>
          <button type='submit'>➜</button>
        </form>
      </section>
      <section className='about-container'>
        <div className='package-icon'>
          <FontAwesomeIcon icon={faTruckFast} />
        </div>
        <h4>Frete</h4>
        <h4>Devoluções e trocas</h4>
        <h4>Meios de pagamento</h4>
        <h4>Dúvidas Frequentes</h4>
        <h4>Cupons e Descontos</h4>
      </section>
      <section className='company-container'>
        <FontAwesomeIcon icon={faBook} style={{fontSize:"35px"}}/>
        <h4>Nossa História</h4>
        <p>Conheça mais sobre a história da marca 
          Bookstore</p>
      </section>
      <section className='socials-container'>
        <div className='icons-container'>
          <FontAwesomeIcon icon={faFacebookF} className='icon'/>
          <FontAwesomeIcon icon={faInstagram} className='icon'/>
          <br />
          <FontAwesomeIcon icon={faTiktok} className='icon'/>
          <FontAwesomeIcon icon={faYoutube} className='icon'/>
        </div>
        <h4>Redes Sociais</h4>
        <p>Nos siga nas redes sociais e fique por
          dentro de todas as novidades</p>
      </section>
    </footer>
  );
}

export default Footer;
