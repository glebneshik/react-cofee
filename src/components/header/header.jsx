import {Component} from "react";

import './header.scss';
import Logo from '../../img/logo.png';

const Header = () => {
    return(
          <div className="container">
          <div className="header__block">
            <div className="header__block_image">
                <img src={Logo} alt=""/>
            </div>
                <nav>
                    <ul className="header__block_list">
                        <li className="header__block_list-item"><a className="header__block_list-item-link" href="">Coffee house</a></li>
                        <li className="header__block_list-item"><a className="header__block_list-item-link" href="">Our coffee</a></li>
                        <li className="header__block_list-item"><a className="header__block_list-item-link" href="">For your pleasure</a></li>
                    </ul>
                </nav>
           </div>
        </div>
    )
}

export default Header; 