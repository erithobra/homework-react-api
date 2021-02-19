import React, { Component } from 'react';
import axios from 'axios';

class Stocks extends Component {
  constructor(props) {
    super(props);

    this.state= {
      stocks: [], 
      apiDataLoaded: false
    }
  }
  
  componentDidMount = async () => {
    const stockData = await axios.get(`https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=pk_f6b356e4e886431380ed7012751ddaf1`)
    this.setState({
      stocks: stockData.data,
      apiDataLoaded: true
    })
  }

  
  
  
  render() {
    return (
      <div className="tickerDisplay">
        {this.state.apiDataLoaded ?
          this.state.stocks.map(stock => (
            <div className="stockDiv" key={stock.symbol}> 
              <div className="symbolAndNameDiv">
                <div className="symbol">{stock.symbol}</div>
                <div className="companyName">{stock.companyName}</div>
              </div>
              <div className="priceAndPercentDiv">
                <div className="latestPrice">{(Math.round(
                  stock.latestPrice * 100) / 100).toFixed(2)}
                </div>
                <div className="changePercent" 
                  id={stock.changePercent >= 0 ? "positiveChange" : "negativeChange"}>
                  {`${stock.changePercent >= 0 ? "+" : ""}${(Math.round(
                    stock.changePercent * 10000) / 100
                  ).toFixed(2)}${"%"}`}
                </div>
              </div>
            </div>
          ))
        :
          console.log("apiDataLoaded = false")
        }
        <div className="searchBar">
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
    )
  }
}

export default Stocks;