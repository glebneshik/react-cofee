import './footer.scss';
import logos from '../../img/footer-components/Beanslogo.svg';
import Logo from '../../img/footer-components/Group.png';


const Footer = () => {
    return(
    <div className="container">
        <div className="footer__block">
            <div className="footer__block_image">
                <img src={Logo} alt=""/>
            </div>
                <nav>
                    <ul className="footer__block_list">
                        <li className="footer__block_list-item"><a className="footer__block_list-item-link" href="">Coffee house</a></li>
                        <li className="footer__block_list-item"><a className="footer__block_list-item-link" href="">Our coffee</a></li>
                        <li className="footer__block_list-item"><a className="footer__block_list-item-link" href="">For your pleasure</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__block_images">
                <img src={logos} alt=""/>
            </div>
        </div>
    )
}


export default Footer;