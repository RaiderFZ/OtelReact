import { Link } from 'react-scroll';

import footerLogo from '../../image/footer-logo.svg';

import './footer.scss';

const Footer = () => {
     return (
        <div className="footer">
            <div className="footer__up">
                <a className="footer__up-link" href=""><img className="footer__up-logo" src={footerLogo} alt="" /></a>
                <a className="footer__up-number" href="tel:+79504770000">+7 (950) 477-73-65</a>
            </div>
            <div className="footer__down">
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <Link className="footer__list-link" to="aboutUs" smooth={true} duration={500}>О нас</Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__list-link" to="flats" smooth={true} duration={500}>Апартаменты</Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__list-link" to="maps" smooth={true} duration={500}>Как добраться</Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__list-link" to="reviews" smooth={true} duration={500}>Отзывы</Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__list-link" to="contacts" smooth={true} duration={500}>Контакты</Link>
                    </li>    
                </ul>
                <a className="footer__down-rights" href="">Политика конфиденциальности</a>
            </div>
        </div>
     )
}

export default Footer;