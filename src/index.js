import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BackArrow from './components/back_arrow'
import NextArrow from './components/next_arrow'
import ImageDisplay from './components/image_display'


const pictures = [
    'http://weknowyourdreams.com/images/bear/bear-05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg',
    'http://www.defenders.org/sites/default/files/styles/large/public/grizzly-bear-harry-bosen-dpc.jpg',
    'http://mrswreesman.wikispaces.com/file/view/grizzly.jpg/113420127/grizzly.jpg',
    'http://consiliumeducation.com/itm/wp-content/uploads/sites/4/2015/08/bear1.jpg'
]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: pictures,
      activePicture: pictures[0]
    }
  }

  currentPictureIndex(){
    for (var i = 0; i < this.state.pictures.length; i++) {
      if (this.state.activePicture == this.state.pictures[i]){
        return i
      }
    }
  }

  incrementPicture(){
    const maxIndex = this.state.pictures.length - 1

    if (this.currentPictureIndex() == maxIndex) {
      this.setState({ activePicture: this.state.pictures[0] })
    } else {
      this.setState({activePicture: this.state.pictures[this.currentPictureIndex()+1]})
    }
  }
  
  decrementPicture(){
    const maxIndex = this.state.pictures.length - 1

    if (this.currentPictureIndex() == 0) {
      this.setState({activePicture: this.state.pictures[maxIndex]})

    } else {
      this.setState({activePicture: this.state.pictures[this.currentPictureIndex()-1]})
    }
  }


  render(){
    return(
      <div>

        <BackArrow
          onArrowClick={() => this.decrementPicture()}
        />

        <ImageDisplay
          activePicture={this.state.activePicture}
         />

        <NextArrow
          onArrowClick={() => this.incrementPicture()}
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
