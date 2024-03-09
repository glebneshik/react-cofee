import './info.scss';
import Beans from '../../img/Beanslogo.svg';

const Info = () => {
    return(
        <div className="container">
            <div className="info__block">
                <h4 className='info__block_title'>About Us</h4>
                <div className="info__block_assets">
                  <img src={Beans} alt="" />
                </div>
                <div className="info__block_text">
                    <p className='info__block_text-descr'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                        <br />
                    <p className='info__block_text-descr2'>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Info;