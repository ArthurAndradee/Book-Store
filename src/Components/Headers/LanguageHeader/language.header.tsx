import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './language.header.css';

function LanguageHeader() {
  return (
    <header className="App">
      <div className='logo-box'>
        <div>BOOKSTORE</div>
        <FontAwesomeIcon icon={faBook} style={{padding:"5px 5px 0 0"}}/>
      </div>
    </header>
  );
}

export default LanguageHeader;
