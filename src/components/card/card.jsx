import './card.scss';
import card1 from '../../img/card-components/71qBQnpQFYL.png'
import card2 from '../../img/card-components/91Ryk2gKejL.png'
import card3 from '../../img/card-components/815O9ktyfUL.png'

const Card = () => {
    return(
        <div className="container">
            <div className="card__block">
                <h5 className="card__block_title">Our best</h5>
            </div>
            <div className="card__wrapper">
                <div className="card__wrapper_item">
                    <img src={card1} alt="" />
                    <div className="card__wrapper_item-descr">Solimo Coffee Beans 2 kg</div>
                    <span className="card__wrapper_item-price">10.73$</span>
                </div>
                <div className="card__wrapper_item">
                    <img src={card2} alt="" />
                    <div className="card__wrapper_item-descr">Presto Coffee Beans 1 kg</div>
                    <span className="card__wrapper_item-price">15.99$</span>
                </div>
                <div className="card__wrapper_item">
                    <img src={card3} alt="" />
                    <div className="card__wrapper_item-descr">AROMISTICO Coffee 1 kg</div>
                    <span className="card__wrapper_item-price">6.99$</span>
                </div>
            </div>
        </div>
    )
}

export default Card;

