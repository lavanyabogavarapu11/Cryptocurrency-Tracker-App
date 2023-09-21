// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrenciesDetails} = props
  console.log(cryptocurrenciesDetails)
  const {
    euroValue,
    currencyLogo,
    currencyName,
    usdValue,
  } = cryptocurrenciesDetails

  return (
    <li className="currency-item">
      <div className="coin-type-container">
        <img src={currencyLogo} className="currency-logo" alt="currency logo" />
        <p className="currency-name"> {currencyName}</p>
      </div>
      <div className="euro-usd-container">
        <p className="usd-value"> {usdValue}</p>
        <p className="euro-value"> {euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
