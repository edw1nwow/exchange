import React from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

const CurrenceInput = ({value, onChange, variant}) => {
    
 const inputRef = useRef()


const onHandler = useCallback(()=>{
if (typeof onChange === 'function'  && inputRef.current){
    onChange(inputRef.current.value, variant)
}
    },[])

    return <div>
      <input type="text" ref={inputRef} defaultValue={value || ''} onChange={onHandler} />
    </div>
}

export default CurrenceInput;