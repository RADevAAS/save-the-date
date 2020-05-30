import React from 'react';
import style from './TemplateA.module.css';
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

const TemplateB = (props) =>  {
    const {name1, name2, title, bsd, date} = props.data

    return (
        <div className={style.background}>
            <div className={style.container}>
              <div className={style.form}>
                <Form data={data}/>
                </div>
            </div>
        </div>
    );
}

export default TemplateB;
