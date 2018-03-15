import React from 'react';

import './Tickers.css'

class Tickers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 'bitcoin',
                    price: '1'
                },
                {
                    id: 'etherum',
                    price: '1'
                },
                {
                    id: 'litecoin',
                    price: '1'
                }
            ]
        }
    }

    render() {
        const tickers = this.state.data.map(currency =>
            <li key={currency.id}>
                <h3>{currency.id}</h3>
                <h4>{currency.price} USD</h4>
            </li>);

        return (
            <div className='tickers-container'>
                <ul className='tickers'>{tickers}</ul>
                <p>Information updates every 10 seconds courtesy coinmarketcap.com</p>
            </div>
        )
    }
}

export default Tickers;