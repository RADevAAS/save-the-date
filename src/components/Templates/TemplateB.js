import React from 'react';
import PropTypes from 'prop-types';
import style from './TemplateB.module.css';
import CountdownYB from '../Countdown/CountdownYB';
import InvitText from '../InvitText/InvitText';


const TemplateB = (props) =>  {
    const {brideName, groomName, title, ts, bassad, bsd} = props.data
    const { renderForm } = props

    return (
        <div className={style.background}>
            <div className={style.container}>

                <div className={style.bassad}>{ bassad ?  bsd  : null } </div>
                <div className={style.name}>{title}</div>
                <div className={style.names}>
                    <div className={style.name}>
                        {brideName}
                    </div>
                    <div className={style.name}>
                        {'&'}
                    </div>
                    <div className={style.name}>
                        {groomName}
                    </div>
                </div>
                <div>
                    <CountdownYB futurDate={ts}> </CountdownYB>
                </div>
                <div className={style.details}>
                    <InvitText data={props.data}></InvitText>
                </div>
                <div className={style.form}>
                {renderForm()}
                </div>
            </div>
        </div>
    );
}

TemplateB.propTypes = {
    data: PropTypes.objectOf({
        name1: PropTypes.string.isRequired,
        name2: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bsd: PropTypes.bool,
        date: PropTypes.any.isRequired,
        renderForm: PropTypes.func.isRequired,
    })
}


export default TemplateB;
