import React from 'react';

import './App.css';

import Tickers from './Tickers';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Cryptocurrency Ticker</h2>
                </div>
                <Tickers/>
            </div>
        );
    }
}

export default App;
