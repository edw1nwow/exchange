import React from 'react';
import { useRef } from 'react';
import s from './card.module.css'

const Card = (props) => {


  let typeOfCurrency = useRef();
  const getValue = useRef();
  
    return <div className={s.main}>
<div className={s.first}>
<p><select size="5" ref={typeOfCurrency} onChange={()=>{console.log(typeOfCurrency.current.value)}}>
<option disabled>Выберите валюту</option>
<option value={props.state[0].ccy} selected>USD</option>
<option value={props.state[1].ccy}>UAH</option>
<option value={props.state[2].ccy}>RUR</option>
<option value={props.state[3].ccy}>BTC</option>
</select></p>
    <input type="text" defaultValue="0"/>
</div>
<div className={s.second}>
    <p>
        <select size="5" ref={typeOfCurrency} onChange={()=>{console.log(typeOfCurrency.current.value)}}>
    <option disabled>Выберите валюту</option>
    <option value={props.state[0].ccy} >USD</option>
    <option value={props.state[1].ccy} selected>UAH</option>
    <option value={props.state[2].ccy}>RUR</option>
    <option value={props.state[3].ccy}>BTC</option>
   </select></p>
        <input type="text"  ref={getValue} defaultValue="0"/>
    </div>
    
    </div>
}

export default Card;