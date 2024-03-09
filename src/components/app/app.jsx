import {Component} from "react";

import MainPage from "./pages/main-page";


import '../../components/header/header.scss';
import '../../components/main/main.scss';
import '../../components/info/info.scss';
import '../../components/card/card.scss';
import '../../components/footer/footer.scss';

import './app.scss'

const App = () => {
    return(
       <div className="app">
           <MainPage></MainPage>
       </div> 
    )
}

export default App;