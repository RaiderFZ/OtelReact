
import './map.scss';

const Map = () => {
    return (
        <div className="map" id='maps'>
            <div className='map-container' style={{border: 'none' }}>
                <iframe
                    className='map-iframe'
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2845.675429363505!2d34.18434007750887!3d44.501316971074644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDMwJzA0LjciTiAzNMKwMTEnMTIuOSJF!5e0!3m2!1sru!2sru!4v1726424778031!5m2!1sru!2sru"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
            <div className="map__info">
                <h3 className="map__info-title">Наш адрес</h3>
                <p className="map__info-text">Апарт-отель «SkyPlazaYalta» расположен по адресу г. Ялта, ул. Дражинского 48В</p>
            </div>
        </div>
    )
} 

export default Map;