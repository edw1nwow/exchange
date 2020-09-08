import React from 'react';

const ExchangeCard = () => {
    

   const state = [{"ccy":"USD","base_ccy":"UAH","buy":"27.55000","sale":"27.95000"},
    {"ccy":"EUR","base_ccy":"UAH","buy":"32.40000","sale":"33.01000"},
    {"ccy":"RUR","base_ccy":"UAH","buy":"0.35100","sale":"0.37800"},
    {"ccy":"BTC","base_ccy":"USD","buy":"9606.0182","sale":"10617.1780"}]

    console.log( state)
    return <div>
        
    <div>
    <p><select size="5" onChange={''}>
    <option disabled>Выберите валюту</option>
    <option value={state[0].ccy} selected>USD</option>
    <option value={state[1].ccy}>UAH</option>
    <option value={state[2].ccy}>RUR</option>
    <option value={state[3].ccy}>BTC</option>
   </select></p>
        <input type="text" defaultValue="0"/>
    </div>

    <div>
    <p><select size="5" onChange={()=>console.log(1)}>
    <option disabled>Выберите валюту</option>
    <option value={state[0].ccy} >USD</option>
    <option value={state[1].ccy} selected>UAH</option>
    <option value={state[2].ccy}>RUR</option>
    <option value={state[3].ccy}>BTC</option>
   </select></p>
        <input type="text" defaultValue="0"/>
    </div>




    </div>
}

export default ExchangeCard;