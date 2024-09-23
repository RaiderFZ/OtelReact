import './contacts.scss';

import phoneIcon from '../../image/phone.svg';
import mailIcon from '../../image/mail.svg';
import whatsAppIcon from '../../image/whatsapp.svg';
import telegrammIcon from '../../image/telegramm.svg';


const Contacts = () => {
    return (
        <div className="contacts" id='contacts'>
            <h2 className="contacts-title">Связаться с нами</h2>
            <ul className="contacts__list">
                <li className="contacts__list-item">
                    <a className="contacts__list-link" href="">
                        <img className="contacts__list-image" src={phoneIcon} alt="" />
                        <span>По телефону</span> 
                    </a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__list-link" href="">
                        <img className="contacts__list-image" src={mailIcon} alt="" />
                        <span>По почте</span> 
                    </a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__list-link" href="">
                        <img className="contacts__list-image" src={whatsAppIcon} alt="" />
                        <span>В WhatsApp</span>
                    </a>
                </li>
                <li className="contacts__list-item">
                    <a className="contacts__list-link" href="">
                        <img className="contacts__list-image" src={telegrammIcon} alt="" />
                        <span>В Telegram</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;