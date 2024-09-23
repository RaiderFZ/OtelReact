import { useState } from 'react';

import './hero.scss';

import heroImage from '../../image/bg-1.jpg';
import logo from '../../image/logo.svg';

const Hero = () => {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);

    const togglePopUp = () => {
        setIsOpenPopUp(!isOpenPopUp);
    }
    return (
        <div className="hero">
            {isOpenPopUp ? <span className="popup-rectangle" onClick={()=> togglePopUp()}></span> : null}
            <div className="hero-wrapper">
                <img className="hero-bg" src={heroImage} alt="background"/>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <button 
                className="hero-button" 
                href="#"
                onClick={()=> togglePopUp()}>Забронировать</button>
            <div className={`popup ${isOpenPopUp ? 'popup-open' : ''}`}>
                <form className="popup__form">
                    <input 
                        className="popup__form-input" 
                        type="text"
                        placeholder="Ваше имя"/>
                    <input 
                        className="popup__form-input" 
                        type="tel"
                        placeholder="Телефон"/>
                    <textarea 
                        className="popup__form-input textarea" 
                        type="text"
                        placeholder="Комментарий"/>
                    <input className="popup__form-button" type="submit"/>
                </form>
                <div className="popup__description">
                    <h4 className="popup__description-title">Правила размещения</h4>
                    <ul className="popup__rules">
                        <li className="popup__rules-item">
                            <h5 className="popup__rules-title">Заезд</h5>
                            <span className="popup__rules-text">После  13:00</span>
                        </li>
                        <li className="popup__rules-item">
                            <h5 className="popup__rules-title">Выезд</h5>
                            <span className="popup__rules-text">До 11:00</span>
                        </li>
                        <li className="popup__rules-item">
                            <h5 className="popup__rules-title">Минимальный срок проживания</h5>
                            <span className="popup__rules-text">От 2 до 4 суток</span>
                        </li>
                    </ul>
                    <ul className="popup__list">
                        <li className="popup__list-item">Можно с детьми</li>
                        <li className="popup__list-item">Нельзя с питомцами</li>
                        <li className="popup__list-item">Оплата наличными</li>
                        <li className="popup__list-item">Курение запрещено</li>
                        <li className="popup__list-item">Не для вечеринок</li>
                    </ul>
                    <p className="popup-price">10000 рублей - <span>Залог</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero;