import React from 'react';
import s from './card.module.css'
import { useCallback } from 'react';
import CurrenceInput from './currency-input'
import CardItem from './card-item'
import { useRef } from 'react';

const Card = ({state}) => {

  
   

const onChange = useCallback((value, variant)=>{
console.log(value , variant)
},[])

    return <div className={s.main}>
<div className={s.first}>
    <CardItem state={state} variant={state[0].ccy}/>
    <CurrenceInput variant='0' value='0' onChange={onChange}/>
</div>
<div className={s.second}>
<CardItem state={state} variant={state[1].ccy}/>
        <CurrenceInput variant='1' value='0' onChange={onChange}/>
    </div>
    </div>
}

export default Card;