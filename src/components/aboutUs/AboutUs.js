import './aboutUs.scss';

import gridImageFirst from '../../image/about-image-1.jpg';
import gridImageSecond from '../../image/about-image-2.jpg';
import gridImageFour from '../../image/about-image-3.jpg';

const AboutUs = () => {
    return (
        <div className="about-us" id='aboutUs'>
            <div className="about-us__grid">
                <div className="about-us__grid-item grid-text">
                    <h2 className="about-us__grid-title">О нас</h2>
                    <p className="about-us__grid-text">
                        Апарт-отель «SkyPlazaYalta» расположен на закрытой территории в шаговой доступности от моря и центра Ялты. В нашем отеле есть всё для вашего комфортабельного отдыха.
                    </p>
                    <p className="about-us__grid-text">
                        К вашим услугам: уникальные по своему дизайну и комфорту, просторные номера с видом на море и город. Детские площадки, охраняемая территория и подземный паркинг.
                    </p>
                    <p className="about-us__grid-text">
                        Самые разнообразные услуги от фотосессии до круиза по морю на комфортабельной яхте, разнообразят и украсят ваш отпуск.
                    </p>
                </div>
                <img className="about-us__grid-item grid-image-1" src={gridImageFirst} alt=""></img>
                <img className="about-us__grid-item grid-image-2" src={gridImageSecond} alt=""></img>
                <img className="about-us__grid-item grid-image-3" src={gridImageFour} alt=""></img>
            </div>
            <div className="about-us__description">
                <h2 className="about-us__grid-title">О нас</h2>
                <p className="about-us__grid-text">
                    Апарт-отель «SkyPlazaYalta» расположен на закрытой территории в шаговой доступности от моря и центра Ялты. В нашем отеле есть всё для вашего комфортабельного отдыха.
                </p>
                <p className="about-us__grid-text">
                    К вашим услугам: уникальные по своему дизайну и комфорту, просторные номера с видом на море и город. Детские площадки, охраняемая территория и подземный паркинг.
                </p>
                <p className="about-us__grid-text">
                    Самые разнообразные услуги от фотосессии до круиза по морю на комфортабельной яхте, разнообразят и украсят ваш отпуск.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;