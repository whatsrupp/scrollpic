import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BackArrow from './components/back_arrow'
import NextArrow from './components/next_arrow'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <BackArrow />
        <NextArrow />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
