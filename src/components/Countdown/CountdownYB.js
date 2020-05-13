
import React, { Component } from 'react';
import moment, { duration } from 'moment';
import style from './CountdownYB.module.css';
import CounterUnit from './CounterUnit'

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

        this.setState({
            days,
            hours,
            mins,
            secs,
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
        const {days, hours, mins, secs} = this.state

        return (
            <div className={style.countdown}>
                <CounterUnit unit={days} unitText='day'/>
                <CounterUnit unit={hours} unitText='hour'/>
                <CounterUnit unit={mins} unitText='min'/>
                <CounterUnit unit={secs} unitText='sec'/>
            </div>
        );
    }
}

export default CountdownYB;
