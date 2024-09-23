import { useState } from 'react';

import FlatsDB from './FlatsDB';

import './flats.scss';

const Flats = () => {

    const [visibleCount, setVisibleCount] = useState(4);
    const showMoreFlats = () => {
        setVisibleCount(FlatsDB.length); 
    };

    return (
        <div className="flats" id='flats'>
            <h2 className="flats-title">Номерной фонд</h2>
            <div className="flats__cards">
                {FlatsDB.slice(0, visibleCount).map((item, i) => {
                    return(
                        <div className="flats__card" key={i}>
                            <img className="flats__card-image" src={item.url} alt="flats-image" />
                            <div className="flats-wrapper">
                                <p className="flats__card-text">{item.text}</p>
                                <p className="flats__card-price"><span>от {item.price}</span> сутки</p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            {visibleCount < FlatsDB.length && (
                <button className="show-more-button" onClick={showMoreFlats}>
                    Показать больше
                </button>
            )}
        </div>
    )
}

export default Flats;