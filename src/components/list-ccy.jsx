import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import state from '../model/state'


class ListCcy extends Component {
    state = {
        ccy:'',
        base_ccy: '',
        buy:'',
        sale:''
    }
    
    getValue = (e,) => {
        const {name, value} = e.target
        this.setState({ [name] : value})

    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        const { ccy,base_ccy,buy,sale } = this.state
       
      return <div>
       
      <div>   
          <table>
          {state.map((item)=>{
              return <tr><td>{item.ccy}</td><td>{item.base_ccy}</td><td>{item.buy}</td><td>{item.sale}</td></tr>
          })}
          </table>
      </div>
      <div>
          <form onSubmit={this.handleSubmit} action="">
              <p><input name='ccy' value={ccy} onChange={this.getValue}/> New currency</p>
              <p><input name='base_ccy' value={base_ccy} onChange={this.getValue}/> Base currency</p>
              <p><input name='buy' value={buy} onChange={this.getValue}/> Buy</p>
              <p><input name='sale' value={sale} onChange={this.getValue}/> Sale </p>
              <button >Add</button>
          </form>
      </div>
      
<Link to='/exchange'>
  <button>Back to exchange</button>
  </Link>  
  </div>
    }
  }

  export default ListCcy;
  