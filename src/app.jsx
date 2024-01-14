import React from 'react'
import Header from './component'
import Main from './main'
import Main2 from './main2'
import Main3 from './main3'
import Slider from './main3'



export default function App() {
    return ( <div className = 'name'>

        <Header/>
        {/* реквизит */}
        <Main/>
        <Main2 />
        
        <Slider />
    
        </div>
    )
}