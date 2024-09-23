
import './retreatDescription.scss';

import retreatDescriptionImage from '../../image/chill-image.jpg';

const RetreatDescription = () => {
    return (
        <div className="retreat-info">
            <div className="retreat-info-wrapper">
                <div className="retreat-info-box">
                    <h2 className="retreat-info-title">Как отдохнуть?</h2>
                    <p className="retreat-info-text">
                        Усадьба «Миневичи» создана для тех, кто устал от шума и загазованного воздуха города и желает отдохнуть в красивом уголке природы, не расставаясь с привычным комфортом. 
                    </p>
                    <p className="retreat-info-text">
                        В усадьбе хорошо и спокойно проводить время с семьей, друзьями и коллегами. Первозданная природа, отличный сервис, повышенный комфорт, гостеприимная атмосфера — всё это делает отдых в этом месте по-настоящему качественным.
                    </p>
                </div>
                <img className="retreat-info-image" src={retreatDescriptionImage} alt="" />
            </div>
        </div>
    )
}

export default RetreatDescription;