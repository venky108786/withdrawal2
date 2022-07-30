// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  amountChange = value => {
    this.setState(prv => ({amount: prv.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="bg1">
          <div className="top-heading-container">
            <h1 className="s-logo">S</h1>
            <h1 className="heading">Sarah Williams</h1>
          </div>

          <div className="amount-container">
            <h1 className="your-balance">Your Balance</h1>
            <div className="amount-blog">
              <h1 className="amount">{amount}</h1>
              <p className="amount-down">in Rupees</p>
            </div>
          </div>
          <h1 className="amount">Withdrawal</h1>
          <p className="amount-down">COOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DestinationItem
                denominationsDetails={each}
                key={each.id}
                onChange={this.amountChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
