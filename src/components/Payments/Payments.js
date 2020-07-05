import React, { useState } from 'react';
import style from "./Payments.module.css";
import { paypalClient } from '../../settings'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Redirect } from "react-router-dom";

const PROMO_CODES = [
    'promo150'
]

const Payments = () => {
    const useInput = ({ type }) => {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        const resetValue = () => setValue("")
        return [value, input, resetValue];
    }

    const [withPromo, setWithPromo] = useState(false)
    const [success, setSuccess] = useState(false)
    const [promoCode, input, resetValue] = useInput({ type: "text" })

    const setPromoCode = () => {
        if (PROMO_CODES.includes(promoCode)) {
            setWithPromo(true)
            resetValue()
        }
    }

    const onSuccess = (payment) => {
        console.log("Payment successful!", payment);
        setSuccess(true)
    }

    const onCancel = (data) => console.log('Payment cancelled!', data)
    const onError = (err) => console.log("Error!", err)

    const env = 'sandbox'
    const currency = 'ILS'
    const total = withPromo ? 150 : 200

    if (success) {
        return <Redirect to={'/success'} />
    }

    return (
        <div>
            <div>
                Creer un evenement
            </div>
            <div>
                Vous recevez: Carte virtuelle, gestion ddes reponses, gestion des depenses
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", border: "solid black 1px"}}>
                <div>
                    Total: {total} shekel
                </div>
                <PaypalExpressBtn
                    env={env}
                    client={paypalClient}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                />
            </div>
            <div>
                <div>Promo code: (promo150)</div>
                {input}
                <button onClick={setPromoCode}>OK</button>
            </div>
        </div>
    )
}


export default Payments
