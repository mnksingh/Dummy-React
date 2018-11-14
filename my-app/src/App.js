import React, { Component } from 'react';
import './App.css';

import Popup from "./Popup"

import { Button, Glyphicon } from 'react-bootstrap';

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showPopup: false,
      showCellContent: false
    };

    this.openPopup = this.openPopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
    this.toggleCellContent = this.toggleCellContent.bind(this)
  }


  openPopup() {
    this.setState({
      showPopup: true
    })
  }
  closePopup() {
    this.setState({
      showPopup: false
    })
  }
  toggleCellContent() {
    if (this.state.showCellContent) {
      this.setState({
        showCellContent: false
      })
    } else {
      this.setState({
        showCellContent: true
      })
    }
  }


  render() {

    return (
      <div className="App">
        <Popup showCellContent={this.state.showCellContent} toggleCellContent={this.toggleCellContent} showPopup={this.state.showPopup} closePopup={this.closePopup} />
        <div>
          <div className="Head">
            <Glyphicon glyph="phone" /> Phone Details
                <Button bsStyle="primary" onClick={this.openPopup}>Default button</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
