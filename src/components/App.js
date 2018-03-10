import React from 'react';

import Tickers from './Tickers';
import Cryptocurrency from './Cryptocurrency';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>cryptocurrency app</h1>
                <Tickers/>
                <Cryptocurrency/>
            </React.Fragment>
        );
    }
}

export default App;
