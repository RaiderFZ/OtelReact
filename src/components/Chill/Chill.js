import ChillDB from './ChillDB';

import './chill.scss';

const Chill = () => {
    return (
        <div className="chill">
            <h2 className="chill-title">Ваш отдых - наша ответсвенность</h2>
            <div className="chill__grid">
                {ChillDB.map((item, i) => {
                    return (
                        <div className="chill__grid-item" key={i}>
                            <img className="chill__grid-url" src={item.url} alt='circle'></img>
                            <h4 className="chill__grid-title">{item.title}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Chill;