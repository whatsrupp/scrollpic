import React, { Component } from 'react';

class NextArrow extends Component {


  constructor(props) {
    super(props);

    this.state = {
      active: true
    }
  }

  render(){

    if (this.state.active){
      return (
        <img
          src={require('../images/arrows/next.png')}
          onClick={ () => this.props.onArrowClick() }
          className = 'arrow img-responsive center-block'
         />
      )
    } else {
      return (
        <img className ='inactive' src={require('../images/arrows/next.png')} />
      )
    }
  }
}

export default NextArrow
