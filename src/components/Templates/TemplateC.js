import React from 'react';
import style from './TemplateC.module.css';
import CountdownYB from '../Countdown/CountdownYB';
import InvitText from '../InvitText/InvitText';

import FormA from '../Forms/FormA';
import FormB from '../Forms/FormB';
import FormC from '../Forms/FormC';
import data from '../../data/data';

const _Form = {
    a: FormA,
    b: FormB,
    c: FormC,
}

const { form } = data;
const Form = _Form[form];



const TemplateC = (props) =>  {
    const {name1, name2, title, bassad, bsd, date} = props.data

    return (
        <div className={style.background}>
        <div className={style.container}>
            
        {bassad ? <div className={style.bassad}>{bsd}</div> : ''}
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
            <Form data={data}/>
            </div>
        </div>
    </div>
);
}

export default TemplateC;