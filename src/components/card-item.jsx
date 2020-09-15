import React from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';


const CardItem = ({state, variant}) => {
 
let v = useRef();
const b = useCallback(()=>{
console.log(v.current.value + 'hello')
},[])


    return <div>
       <p>
        <select ref={v} onChange={b} defaultValue={variant} size="5">
            <option defaultValue='' disabled>Выберите валюту</option>
            {state.map((item)=>{
                return <option key={item.ccy}  variant={variant} defaultValue={item.ccy} >{item.ccy}</option>
            })}
        </select>
    </p>
    </div>
}

export default CardItem;


