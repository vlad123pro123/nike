import React from 'react';
import ump from './img/upiter.svg';
import priz from './img/priz.svg';
import priz2 from './img/priz2.svg';
import game1 from './img/game1.svg';
import game2 from './img/game2.svg';
import game3 from './img/game3.svg';
import game4 from './img/game4.svg';
import Blockss from './bloci';
import reclama from './img/Reklama.svg';

export default class Main extends React.Component {
    render() {
        return (
        <section className='section-1'> 
        <div className="blue"></div>
        <div className="purpur"></div>
        <img className='ump' src={ump} alt="" />
        <img className='priz' src={priz} alt="" />
        <div className="blocks">
            <div className="game-txt"><span>Лушие </span>игры <br /> со всего мира</div>
            <div className="txt-podh">Каждую пятницу новая порция. <br />Подписка за 399 ₽ в месяц</div>
                <form action="">
                    <img className='priz2' src={priz2} alt="" />
                    <input className='input-poisk' type="text" placeholder='Введите email чтобы войти в аккаунт или создать новый' /><button className='input-bbuthon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 26L22 16L12 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        
                    </svg>
                    </button>
                </form>
                <div className="slaider">

                <Blockss title="Свинтус NEON" lale="Весёлая и быстрая карточная игра для любой компании" src={game1}/>
                <Blockss title="Квиз Логика" lale="Настольное развлечение для детей и взрослых" src={game2}/>
                <Blockss title="Правда или действие" lale="Всё будет основано только на вашей жизни и фактах из неё" src={game3}/>
                <Blockss title="Имаджинариум" lale="Вам понадобится вся ваша фантазия и эмпатия" src={game4}/>
                </div>
                <div className="bluerr"></div>
                <img className='reclama-img' src={reclama} alt="" />
              
                
               
        </div>
        </section>
        )

        

    }
}


