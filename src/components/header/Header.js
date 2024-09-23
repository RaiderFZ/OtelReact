import { Link } from 'react-scroll';
import { useState } from 'react';

import logoSidebar from '../../image/logoSidebar.svg';

import './header.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('no-scroll', !isOpen);
    }
    return (
        <div className="header">
            <div className="header-burger">
                <button className="header-burger-button" onClick={() => toggleBurgerMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="header-burger__nav">
                    <li className="header-burger__nav-item">
                        <a className="header-burger__nav-link whatsap" href=""></a>
                    </li>
                    <li className="header-burger__nav-item">
                        <a className="header-burger__nav-link telegramm" href=""></a>
                    </li>
                    <li className="header-burger__nav-item">
                        <a className="header-burger__nav-link phone" href=""></a>
                    </li>
                </ul>
            </div>
            <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <a className="sidebar-logo" href=""><img src={logoSidebar} alt="" /></a>

                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <Link className="sidebar__list-link" to="aboutUs" smooth={true} duration={500}>О нас</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link className="sidebar__list-link" to="flats" smooth={true} duration={500}>Апартаменты</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link className="sidebar__list-link" to="maps" smooth={true} duration={500}>Как добраться</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link className="sidebar__list-link" to="reviews" smooth={true} duration={500}>Отзывы</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link className="sidebar__list-link" to="contacts" smooth={true} duration={500}>Контакты</Link>
                    </li>
                </ul>

                <div className="sidebar__contacts">
                    <a className="sidebar__contacts-link whatsap" href=""></a>
                    <a className="sidebar__contacts-link telegramm" href=""></a>
                    <a className="sidebar__contacts-link phone" href=""></a>
                </div>
            </div>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <Link className="header__nav-link" to="aboutUs" smooth={true} duration={500}>О нас</Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link" to="flats" smooth={true} duration={500}>Апартаменты</Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link" to="maps" smooth={true} duration={500}>Как добраться</Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link" to="reviews" smooth={true} duration={500}>Отзывы</Link>
                </li>
                <li className="header__nav-item">
                    <Link className="header__nav-link" to="contacts" smooth={true} duration={500}>Контакты</Link>
                </li>
            </ul>
            <a className="header-number" href="tel:+79504770000">+7 (950) 477-73-65</a>
        </div>
    )
}

export default Header;