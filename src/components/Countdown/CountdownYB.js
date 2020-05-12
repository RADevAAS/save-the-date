
import React, { Component } from 'react';
import moment, { duration } from 'moment';
import style from './CountdownYB.module.css';

class CountdownYB extends Component {
    state = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    };

    setCountdown() {
        const futurDate = moment(this.props.futurDate);

        const today = moment();

        const clockDuration = duration(futurDate.diff(today));

        const days = Math.floor(clockDuration.asDays());
        const hours = clockDuration.hours();
        const mins = clockDuration.minutes();
        const secs = clockDuration.seconds();

        const dayText = `${days < 10? '0' : ''} ${days} Day${days > 1? 's' : ''}`
        const hourText = `${hours < 10? '0' : ''}${hours} Hour${hours > 1? 's' : ''}`
        const minText = `${mins < 10? '0' : ''}${mins} Minute${mins > 1? 's' : ''}`
        const secText = `${secs < 10? '0' : ''}${secs} Second${secs > 1? 's' : ''}`

        this.setState({
            days : dayText,
            hours : hourText,
            mins : minText,
            secs :  secText
        })
    }

    componentDidMount() {
        this.setCountdown();
        this.interval = setInterval(() => {
            this.setCountdown();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={style.countdown}>
                {Object.keys(this.state).map((key, i) => (
                    <div className={style.countdown}>
                        <span className={style.countdown}>
                            {this.state[key]}
                        </span>
                        <span className={style.countdown}>
                            
                        </span>
                    </div>
                ))}

            </div>
        );
    }
}

export default CountdownYB;
