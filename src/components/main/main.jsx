import './main.scss';
import Beans from '../../img/Beans.svg';

const Main = () => {
    return (
       <div className="container">
         <div className="main__block">
                <h1 className="main__block_title">Everything You Love About Coffee</h1> 
                <div className="main__block_breanse">
                     <img src={Beans} alt="" />
                </div>
                <h2 className="main__block_subtitle">We makes every day full of energy and taste</h2>
                <h2 className="main__block_text">Want to try our beans?</h2>

                <button className="main__block_button">More</button>
            </div>
       </div>
    )
}



export default Main;