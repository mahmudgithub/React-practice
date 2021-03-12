import React, { useContext } from 'react'
import { Mycontext } from './UsereducerContexthook'



const Puti = () => {
    const msg = useContext(Mycontext)

    return (
        <div>
             count:{msg.countValue}
            <button onClick={()=>msg.countDispatch('one')}>++++</button>
           <button onClick={()=>msg.countDispatch('two')}>---</button>
          <button onClick={()=>msg.countDispatch('three')}> reset</button>
        </div>
    )
}

export default Puti
