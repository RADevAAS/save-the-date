import React from 'react';
import PropTypes from 'prop-types';
import style from './TemplateB.module.css';
import CountdownYB from '../Countdown/CountdownYB';
import InvitText from '../InvitText/InvitText';

const TemplateB = (props) =>  {
    const {name1, name2, title, bsd, date, renderForm} = props.data

    return (
        <div className={style.background}>
            <div className={style.container}>
                
                <div className={style.bsd}>{bsd}</div>
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
                    <CountdownYB futurDate={date}> </CountdownYB>
                </div>
                <div className={style.details}>
                    <InvitText></InvitText>
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