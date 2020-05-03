import React from 'react';
import style from './App.module.css';
import Countdown from '../Countdown/Countdown';
import data from '../../data/data'

const App = () =>  {
    const {name1, name2} = data
    return (
        <div className={style.container}>
            <div>Mazal Tov bande de cons</div>
            <div>{`${name1} & ${name2}`}</div>
            <div>Plus que ...</div>
            <div>
                <Countdown />
            </div>
            <div>jours!!! les pauvres</div>
        </div>
    );
}

export default App;
