import { Link } from 'react-router-dom';
import LanguageHeader from '../../Components/Headers/LanguageHeader/language.header';
import './language.css';

function LanguagePage() {

  return (
      <div className='language-container'>
        <LanguageHeader />
        <div className='selectionText'>Select Location & Language</div>
          <div className='contentBox'>
              <h1 className='continent'>AMERICAS
                <ul>
                  <li>
                    <Link className='link' to="/home">Brazil</Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">Canada</Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">United States</Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">Mexico</Link>
                  </li>
                </ul>
              </h1>
              <h1 className='continent'>EUROPE
                <ul>
                  <li>
                    <Link className='link' to="/home">
                      Belguim  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Czech  Republic
                    </Link>
                    </li>
                  <li>
                    <Link className='link' to="/home">
                      Denmark  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Germany  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      España | Spain  
                    </Link>
                    </li>
                  <li>
                    <Link className='link' to="/home">
                      Finland  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      France  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Great Britain
                    </Link>
                   </li>
                  <li>
                    <Link className='link' to="/home">
                      Hrvatska  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Ireland  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Italy  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Luxembourg  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Hungary  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Netherlands  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Austria  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Poland  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Portugal  
                    </Link>
                  </li>
                  <li>
                    <Link className='link' to="/home">
                      Serbia  
                    </Link>
                    </li>
                  <li>
                    <Link className='link' to="/home">
                      Turkey  
                    </Link>
                    </li>
                </ul>
              </h1>
              <h1 className='continent'>ASIA PACIFIC
                <ul>
                  <li><Link className='link' to="/home">
                      Australia
                    </Link>
                  </li>
                  <li><Link className='link' to="/home">
                      China
                    </Link>
                  </li>
                  <li><Link className='link' to="/home">
                      India
                    </Link>
                  </li>
                  <li><Link className='link' to="/home">
                      Indonesia
                    </Link>
                  </li>
                  <li><Link className='link' to="/home">
                      Korea
                    </Link>
                  </li>
                  <li><Link className='link' to="/home">
                      Philippines
                    </Link>
                  </li>
                </ul>
              </h1>
              <h1 className='continent'>AFRICA
                <ul>
                  <li>
                  <Link className='link' to="/home">
                    South Africa
                  </Link>
                  </li>
                </ul>
              </h1>
          </div>
      </div>
    );
}

export default LanguagePage;