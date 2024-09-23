import { useState } from 'react';

import './gallery.scss';
import gridImageFirst from '../../image/grid-1.jpg';
import gridImageSecond from '../../image/grid-2.jpg';
import gridImageThird from '../../image/grid-3.jpg';
import gridImageFour from '../../image/grid-4.jpg';

const Gallery = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="gallery">
            <h2 className="gallery-title">Отель расположен в самой живописной локации Ялты</h2>
            <div className="gallery__grid">
                <img 
                    className="gallery__grid-image gallery-image-1" 
                    onClick={() => openLightbox(gridImageFirst)}  
                    src={gridImageFirst} 
                    alt="flats" />
                <img 
                    className="gallery__grid-image gallery-image-2" 
                    src={gridImageSecond} 
                    alt="flats"
                    onClick={() => openLightbox(gridImageSecond)} />
                <img 
                    className="gallery__grid-image gallery-image-3" 
                    src={gridImageThird} 
                    alt="flats"
                    onClick={() => openLightbox(gridImageThird)} />
                <img 
                    className="gallery__grid-image gallery-image-4" 
                    src={gridImageFour} 
                    alt="flats"
                    onClick={() => openLightbox(gridImageFour)} />
            </div>
            
            {showMore && (
                <div className="gallery__grid display__grid"> {/* Новый контейнер с display: grid */}
                    <img 
                        className="gallery__grid-image gallery-image-1" 
                        onClick={() => openLightbox(gridImageFirst)}  
                        src={gridImageFirst} 
                        alt="flats" />
                    <img 
                        className="gallery__grid-image gallery-image-2" 
                        src={gridImageSecond} 
                        alt="flats"
                        onClick={() => openLightbox(gridImageSecond)} />
                    <img 
                        className="gallery__grid-image gallery-image-3" 
                        src={gridImageThird} 
                        alt="flats"
                        onClick={() => openLightbox(gridImageThird)} />
                    <img 
                        className="gallery__grid-image gallery-image-4" 
                        src={gridImageFour} 
                        alt="flats"
                        onClick={() => openLightbox(gridImageFour)} />
                </div>
            )}
            <a className="gallery-button" onClick={toggleShowMore}>
                {showMore ? 'Скрыть' : 'Смотреть больше фото'}
            </a>
            {isOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeLightbox}>✖</button>
                        <img src={currentImage} alt="lightbox" className="lightbox-image" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery;