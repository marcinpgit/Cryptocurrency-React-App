import React from 'react';

import './App.css';

import Tickers from './Tickers';
import Cryptocurrency from './Cryptocurrency';

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Cryptocurrency Ticker</h2>
                </div>
                <Tickers/>
                <Cryptocurrency/>
            </div>
        );
    }
}

export default App;
