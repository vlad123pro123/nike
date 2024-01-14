import React from 'react';
import game1 from './img/game1.svg';

export default class Blockss extends React.Component {

        render() {

            return ( <section >
                <div className = "container-bloks" >
                <img className = 'container-bloks-img'src = { this.props.src }alt = "" />
                <div className = "h-txt" > { this.props.title } </div>  <div className = "p-txt" > { this.props.lale } </div>  
                </div>  
                </section>)



            }
        }