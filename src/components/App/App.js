import React from 'react';
import style from './App.module.css';
import CountdownYB from '../Countdown/CountdownYB';
import data from '../../data/data';

const App = () =>  {
    const {name1, name2, title, bsd, text, date} = data
    return (
        <div className={style.container}>
            
            <div className={style.bsd}>{bsd}</div>
            <div className={style.name}>{title}</div>
            <div className={style.names}>
                <div className={style.name}>
                    {name1}
                </div>
                <div className={style.name}>
                    &
                </div>
                <div className={style.name}>
                    {name2}
                </div>
            </div>
            <div className={style.name}>Plus que ...</div>
            <div>
                <CountdownYB futurDate={date}> </CountdownYB>
            </div>
            <div className={style.name}>{text}</div>
        </div>
    );
}

export default App;
