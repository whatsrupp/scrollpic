import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BackArrow from './components/back_arrow'
import NextArrow from './components/next_arrow'
import ImageDisplay from './components/image_display'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <BackArrow />
        <ImageDisplay />
        <NextArrow />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
