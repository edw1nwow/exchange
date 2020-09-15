import React from 'react';
import Card from './card'
import s from './exchange-card.module.css'
import {Link} from 'react-router-dom'
import State from '../model/state'
const ExchangeCard = () => {
    

    return <div className={s.wrapper}>
        <div className={s.main}>
            <Card state={State}/>
            <div className={s.rt} >
                <button>exchange</button>
            </div>
            <div>
            <Link to='/list-ccy'>
            <button>
                Curency list
            </button>
            </Link>
        </div>
        </div>
        
    </div>
}

export default ExchangeCard;