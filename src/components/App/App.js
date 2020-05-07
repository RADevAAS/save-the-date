import React from 'react';
import style from './App.module.css';
import Countdown from '../Countdown/Countdown';
import data from '../../data/data';

const App = () =>  {
    const {name1, name2} = data
    return (
        <div className={style.container}>
            <div>Mazal Tov bande de cons</div>
            <div className={style.names}>
                <div className={style.name}>
                    {name1}
                </div>
                <div className={style.name}>
                    {name2}
                </div>
            </div>
            <div>Plus que ...</div>
            <div>
                <Countdown />
            </div>
            <div>jours!!! ils me font de la peine</div>
        </div>
    );
}

export default App;
