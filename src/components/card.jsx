import React from 'react';
import s from './card.module.css';
import { useCallback } from 'react';
import CurrenceInput from './currency-input';
import CardItem from './card-item';
import { useState } from 'react';

const Card = ({state}) => {
    const [firstITem, setFirstItem] = useState(state[0].ccy);
    const selectFirstCurrency = useCallback((value)=>{
    setFirstItem(value);
   }
   ,[]);


const onChange = useCallback((value, variant)=>{
    console.log(value, variant);
},[]);

    return <div className={s.main}>
<div className={s.first}>
    <CardItem state={state} variant={state[0].ccy} onChange={selectFirstCurrency}/>
    <CurrenceInput variant='0' value='0' onChange={onChange}/>
</div>
<div className={s.second}>
    <CardItem state={state}  disableCY={firstITem} variant={state[state.findIndex(({ccy}) => ccy === firstITem) + 1 >= state.length ? 0 : state.findIndex(({ccy}) => ccy === firstITem) + 1 ].ccy}/>
    <CurrenceInput variant='1' value='0' onChange={onChange}/>
</div>
</div>;
};

export default Card;