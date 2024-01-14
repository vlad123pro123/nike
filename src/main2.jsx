import React, { Component } from 'react'
import cometa from './img/cometa.svg'
import uno from './img/uno.svg'
import strelka from './img/strelka.svg'
import kosmonavt from './img/Kosmonavt2.svg'
import l from './img/l.svg'
import str2 from './img/str2.svg'
import str3 from './img/str3.svg'
import play from './img/play.svg'
import k from './img/k.svg'
import kosmonavt2 from './img/kosmonavt1.svg'

export default class main2 extends Component {
    render() {
        return ( <section>
            <div className="section-2">
                <div className="section2-h">Partystation — новый способ развлечений для любой компании</div>
                <img className='cometa' src={cometa} alt="" />
                <div className="section2-block">
                   <div className="block-uno">
                        <img className='img-uno' src={uno} alt="#21" />
                        <div className="block-txt-uno">Собери друзей перед экраном ТВ <br /> и можно начинать вечеринку!</div>
                    </div>
                    <div className="strela-1"><img src={strelka} alt="" /></div>
                    <div className="block-dos">
                        <img className='img-uno' src={uno} alt="#21" />
                        <div className="block-txt-uno">Собери друзей перед экраном ТВ <br /> и можно начинать вечеринку!</div>
                    </div>
                    <div className="kosmis">
                        <img className='garadint-kosm' src={l} alt="" />
                        <img className='kosmos' src={kosmonavt} alt="" />
                    </div>
                    <div className="strela-2"><img src={str2} alt="" /></div>
                    <div className="block-tres">
                        <img className='img-uno' src={uno} alt="#21" />
                        <div className="block-txt-uno">Собери друзей перед экраном ТВ <br /> и можно начинать вечеринку!</div>
                    </div>
                     <div className="strela-3"><img src={str3} alt="" /></div>
                     <div className="block-cuatro">
                        <img className='img-uno' src={play} alt="#21" />
                        
                    </div>
                    <div className="kosmis2">
                        <img className='garadint-kosms' src={k} alt="" />
                        <img className='kosmos2' src={kosmonavt2} alt="" />
                    </div>
                </div>
            </div>
            </section>
        )
    }
}