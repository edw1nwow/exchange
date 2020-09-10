import React from 'react';
import Card from './card'
import s from './exchange-card.module.css'

const ExchangeCard = () => {
    

   const state = [{"ccy":"USD","base_ccy":"UAH","buy":"27.55000","sale":"27.95000"},
    {"ccy":"EUR","base_ccy":"UAH","buy":"32.40000","sale":"33.01000"},
    {"ccy":"RUR","base_ccy":"UAH","buy":"0.35100","sale":"0.37800"},
    {"ccy":"BTC","base_ccy":"USD","buy":"9606.0182","sale":"10617.1780"}]

    console.log( )
    return <div className={s.wrapper}>
        <div className={s.main}>
            <Card state={state}/>
            <div className={s.rt} >
                <button>exchange</button>
            </div>
        </div>
    </div>
}

export default ExchangeCard;