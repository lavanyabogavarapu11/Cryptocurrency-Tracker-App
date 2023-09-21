// Write your JS code here
import {Component} from 'react'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-value-container">
        <p className="list-coin-value-heading"> USD</p>
        <p className="list-coin-value-heading"> EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrenciesDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="tracker-heading">Cryptocurrency Tracker</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-image"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
