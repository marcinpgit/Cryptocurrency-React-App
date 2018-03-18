import React from 'react';
import axios from 'axios';

import './Tickers.css'

import Cryptocurrency from './Cryptocurrency';

class Tickers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                }
            ]
        }
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }

    fetchCryptocurrencyData() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
            .then(response => {
                var wanted = ['bitcoin', 'ethereum', 'litecoin', 'ripple'];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result });
            })
            .catch(err => console.log(err));
    }

    render() {

        const tickers = this.state.data.map(currency =>
            <Cryptocurrency data={currency} key={currency.id}/>);

        return (
            <div className='tickers-container'>
                <ul className='tickers'>{tickers}</ul>
                <p>Information updates every 10 seconds courtesy coinmarketcap.com</p>
            </div>
        );
    }
}

export default Tickers;