import React from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';


const CardItem = ({state, variant, onChange, disableCY}) => {
 
let inputRef = useRef();

const onHandler = useCallback(()=>{
    if (typeof onChange === 'function'  && inputRef.current){
        onChange(inputRef.current.value, variant);
    }
        });

    return <div>
       <p>
        <select ref={inputRef} defaultValue={variant} onChange={onHandler}   size="5">
            <option value='' disabled>Выберите валюту</option>
            {state.map((item)=>{
                return <option key={item.ccy} disabled={disableCY === item.ccy} selected={variant === item.ccy} value={item.ccy} >{item.ccy}</option>;
            })}
        </select>
    </p>
    </div>;
};

export default CardItem;


