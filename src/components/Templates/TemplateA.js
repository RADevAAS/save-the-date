import React from 'react';
import PropTypes from 'prop-types';
import style from './TemplateA.module.css';
import CountdownYB from '../Countdown/CountdownYB';
import InvitText from '../InvitText/InvitText';


const TemplateA = (props) =>  {
    const {name1, name2, title, date, bassad, bsd} = props.data
    const { renderForm } = props
    const forrmattedDate = date; // TODO sert a rien??

    return (
        <div className={style.background}>
            <div className={style.container}>

                <div className={style.bassad}>{ bassad ?  bsd  : null } </div>
                <div className={style.name}>{title}</div>
                <div className={style.names}>
                    <div className={style.name}>
                        {name1}
                    </div>
                    <div className={style.name}>
                        {'&'}
                    </div>
                    <div className={style.name}>
                        {name2}
                    </div>
                </div>
                <div>
                    <CountdownYB futurDate={forrmattedDate}> </CountdownYB>
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

TemplateA.propTypes = {
    data: PropTypes.objectOf({
        name1: PropTypes.string.isRequired,
        name2: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bsd: PropTypes.bool,
        date: PropTypes.any.isRequired,
        renderForm: PropTypes.func.isRequired,
    })
}


export default TemplateA;
