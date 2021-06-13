import React, { Component } from 'react';
import ButtonPanelImg from '../../../media/fondo.png';
import '../home.sass';

class ButtonPanel extends Component {

  render() {
    return (
      <div className="button-item" onClick={this.props.click}>
        <img className="button-img" src={ButtonPanelImg} alt={ButtonPanelImg}></img>
      </div>
    );
  }
}

export default ButtonPanel;