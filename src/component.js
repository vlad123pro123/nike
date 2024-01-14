import React from 'react'
import logo from './img/logo.svg'

export default class Header extends React.Component{
    render() 
    {return(
    
    <header className='header' onClick={this.lol}>
    <div className='container'>
        <div className='block'>
            <div className='komp'>О компании</div>
            <div className='komp vakans'>Вакансии</div>
        </div>
        
        <img src={logo}  />
        <a className='Nahal-game' href="#">Начать играть</a>
    </div>
    </header>
    )}
    lol(){alert("ffwefew")}
}