import React from 'react';
import style from './Countdown.module.css';
import data from '../../data/data'

const Countdown = () =>  {
    const { date } = data
    const countdown = (date - Date.now()) / (1000 * 60 * 60 * 24)
    return (
        <div className={style.container}>
            <div>{countdown}</div>
        </div>
    );
}

export default Countdown;
