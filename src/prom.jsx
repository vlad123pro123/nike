import React, { Component } from 'react';
import lil from './img/mafia.svg';

export default class Prosmm extends Component {
  render() {
    return (
      <div> 
      <div className="punkt">
        <div className="left-container">
            <div className="number">{this.props.title}</div>
            <div className="C">
              <div className="left-name">{this.props.name}</div>
              <div className="left-opisanie">{this.props.opisanie}</div>
              <div className="left-butthon">Начать играть</div>
            </div>
           
        </div>
        <div className="right-container">
            <img src={this.props.src} alt="#" />
        </div>
    </div></div>
    )
  }
}
